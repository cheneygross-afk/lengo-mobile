// Synced from cheneygross-afk/lengo:src/lib/lessons/es-redesign/unit-tasks-more-b1.ts by scripts/sync-content.mjs -- edit it there, not here.
// B1 "Read and write" lessons for the six newer topics (history, science,
// tech, health, festivals, animals). Same rules as unit-tasks-b1.ts: each
// version matches its unit's length, grammar and question count, and any
// word the course hasn't taught is glossed.
import { version as v, type MoreVersions } from "./unit-tasks";

const P1 = " Say what it was, whether you gave it to them and what they did with it.";
const P2 = " Say when you get up, how you get ready, when you leave and when you go to bed.";
const P3 = " Compare two things, say which is the best or the most, and compare two people.";
const P4 = " Say what you'll do, who or what it's for, why, and one thing you don't know yet.";
const P5 = " Say how long you've done it and give four tips as commands.";
const P6 = " Say what you usually do, how yours compares with a friend's and what you'll do again.";
const P7 = " Join your ideas with que, donde, quien and lo que.";
const G1 = "les encantó (they loved it), mandó (sent)";
const G2 = "me pongo (I put on), casi siempre (almost always), enseguida (right away)";
const E2A = "Me levanto...: the pronoun goes before the verb.";
const E2B = "Se duerme: dormir is to sleep, dormirse is to fall asleep.";
const AGE = ": for age, Spanish uses mayor (older) and menor (younger).";
const PEOR = "El peor: bueno and malo have their own forms, mejor and peor.";
const MARZO = "Para marzo: para gives a deadline.";
const HACE = ": hace + time + que says how long it's been going on.";
const ACABO = "Acabo de + a plain verb: I've just done it.";
const VOLVER = ": volver a + a plain verb is to do it again.";
const QUIEN = "Con quien: after con, a, de or para, a person takes quien.";
const LOQUE = "Lo que: the thing that.";
const sleepQ = (who: string, where: string): [string, string[], number, string] => [`¿Qué le pasa a ${who} ${where}?`, ["Se levanta.", "Se duerme.", "Se va."], 1, E2B];
const marzoQ = (q = "¿Para cuándo tienen que terminar todo?"): [string, string[], number, string] => [q, ["para el sábado", "para marzo", "para el año próximo"], 1, MARZO];

export const B1_MORE: MoreVersions = {
  "b1/1": {
    history: v(
      "The map Bruno asked for",
      G1 + ", jefa (boss), monedas (coins), caja (box), copia (copy)",
      ["Bruno me pidió el mapa antiguo del museo.", "Se lo di ayer por la mañana.", "Lo enseñó a unos turistas y les encantó.", "Su jefa quiere conocerme.", "Me mandó unas monedas viejas y las puse en una caja.", "Bruno también me trajo una carta de 1850.", "La leí y le dije la verdad: es una copia.", "Mañana voy a enseñarle la carta original."],
      "Bruno asked me for the museum's ancient map. I gave it to him yesterday morning. He showed it to some tourists and they loved it. His boss wants to meet me. She sent me some old coins and I put them in a box. Bruno also brought me a letter from 1850. I read it and told him the truth: it's a copy. Tomorrow I'm going to show him the original letter.",
      [
        ["¿Qué le pidió Bruno a Inés?", ["el mapa antiguo", "unas monedas", "una carta"], 0, "Me pidió el mapa. After that, lo stands for el mapa: se lo di."],
        ["¿Dónde puso Inés las monedas?", ["en el museo", "en una caja", "en la mesa"], 1, "Las puse en una caja: las stands for las monedas."],
        ["¿Cómo es la carta de 1850?", ["Es original.", "Es una copia.", "Es muy cara."], 1, "La leí: la stands for la carta. It's a copy."],
      ],
      "Write about something old a friend asked you for: a photo, a book, a letter." + P1,
      "Mi amigo Bruno me pidió una foto vieja de mi abuelo. Se la di el lunes. La usó en su clase de historia y les gustó mucho. Después me trajo un libro y lo leí en dos días. Mi hermana también lo quiere. Quiero darle otra foto. Voy a mandársela mañana.",
    ),
    science: v(
      "The telescope Hugo asked for",
      G1 + ", semillas (seeds), piedra (rock), extraña (strange), meteorito (meteorite), colección (collection)",
      ["Hugo me pidió el telescopio pequeño.", "Se lo di ayer por la mañana.", "Lo usó con sus estudiantes y les encantó.", "Su directora quiere conocerme.", "Me mandó unas semillas y las puse en el jardín.", "Hugo también me trajo una piedra extraña.", "La miré y le dije la verdad: no es un meteorito.", "Mañana voy a enseñarle mi colección."],
      "Hugo asked me for the small telescope. I gave it to him yesterday morning. He used it with his students and they loved it. His director wants to meet me. She sent me some seeds and I put them in the garden. Hugo also brought me a strange rock. I looked at it and told him the truth: it isn't a meteorite. Tomorrow I'm going to show him my collection.",
      [
        ["¿Qué le pidió Hugo a Vera?", ["el telescopio pequeño", "unas semillas", "una piedra"], 0, "Me pidió el telescopio. After that, lo stands for el telescopio: se lo di."],
        ["¿Dónde puso Vera las semillas?", ["en el laboratorio", "en el jardín", "en una caja"], 1, "Las puse en el jardín: las stands for las semillas."],
        ["¿Qué dijo Vera de la piedra?", ["Es un meteorito.", "No es un meteorito.", "Es muy vieja."], 1, "La miré: la stands for la piedra. It isn't a meteorite."],
      ],
      "Write about something a friend asked you for, to do with science or nature." + P1,
      "Mi amiga Vera me pidió mi cámara. Se la di el lunes. La usó para sacar fotos de la luna y le gustaron mucho. Después me trajo unas semillas y las puse en mi jardín. Mi vecino también las quiere. Quiero darle una planta. Voy a llevársela mañana.",
    ),
    tech: v(
      "The code Mía asked for",
      G1 + ", diseños (designs), tableta (tablet), lenta (slow)",
      ["Mía me pidió el código del juego.", "Se lo di ayer por la mañana.", "Lo probó con sus amigos y les encantó.", "Su jefe quiere conocerme.", "Me mandó unos diseños y los puse en la pantalla grande.", "Mía también me trajo una tableta.", "La probé y le dije la verdad: es muy lenta.", "Mañana voy a enseñarle otro programa."],
      "Mía asked me for the game's code. I gave it to her yesterday morning. She tried it with her friends and they loved it. Her boss wants to meet me. He sent me some designs and I put them on the big screen. Mía also brought me a tablet. I tried it and told her the truth: it's very slow. Tomorrow I'm going to show her another program.",
      [
        ["¿Qué le pidió Mía a Nico?", ["el código del juego", "unos diseños", "una tableta"], 0, "Me pidió el código. After that, lo stands for el código: se lo di."],
        ["¿Dónde puso Nico los diseños?", ["en la mesa", "en la pantalla grande", "en el teléfono"], 1, "Los puse en la pantalla grande: los stands for los diseños."],
        ["¿Cómo es la tableta?", ["muy rápida", "muy lenta", "muy cara"], 1, "La probé: la stands for la tableta. It's very slow."],
      ],
      "Write about something a friend asked you for, to do with games or technology." + P1,
      "Mi amiga Mía me pidió mi computadora vieja. Se la di el lunes. La usó para un juego y le gustó mucho. Después me mandó unas fotos y las puse en mi teléfono. Mi hermano también las quiere. Quiero darle mi tableta. Voy a llevársela mañana.",
    ),
    health: v(
      "The plan Iván asked for",
      G1 + ", jefa (boss)",
      ["Iván me pidió mi plan de ejercicios.", "Se lo di ayer por la mañana.", "Lo usó con sus pacientes y les encantó.", "Su jefa quiere conocerme.", "Me mandó unas frutas y las puse en la cocina.", "Iván también me trajo un té.", "Lo probé y le dije la verdad: tiene mucho azúcar.", "Mañana voy a enseñarle otro ejercicio."],
      "Iván asked me for my exercise plan. I gave it to him yesterday morning. He used it with his patients and they loved it. His boss wants to meet me. She sent me some fruit and I put it in the kitchen. Iván also brought me a tea. I tried it and told him the truth: it has a lot of sugar. Tomorrow I'm going to show him another exercise.",
      [
        ["¿Qué le pidió Iván a Clara?", ["su plan de ejercicios", "unas frutas", "un té"], 0, "Me pidió mi plan. After that, lo stands for el plan: se lo di."],
        ["¿Dónde puso Clara las frutas?", ["en la clínica", "en la cocina", "en su bolsa"], 1, "Las puse en la cocina: las stands for las frutas."],
        ["¿Qué tiene el té?", ["poco azúcar", "mucho azúcar", "mucha agua"], 1, "Lo probé: lo stands for el té. It has a lot of sugar."],
      ],
      "Write about something a friend asked you for, to do with health or exercise." + P1,
      "Mi amigo Iván me pidió mi bicicleta. Se la di el lunes. La usó para ir al gimnasio y le gustó mucho. Después me trajo unas frutas y las comimos juntos. Mi hermana también quiere la bicicleta. Quiero darle mis zapatos de correr. Voy a llevárselos mañana.",
    ),
    festivals: v(
      "The mask Raúl asked for",
      G1 + ", máscara (mask), altar (altar), pan de muerto (a sweet bread for the Day of the Dead)",
      ["Raúl me pidió la máscara de mi abuelo.", "Se la di ayer por la mañana.", "La usó en el desfile y a los niños les encantó.", "Su mamá quiere conocerme.", "Me mandó unas flores y las puse en el altar.", "Raúl también me trajo un pan de muerto.", "Lo probé y le dije la verdad: necesita más azúcar.", "Mañana voy a enseñarle la receta de mi abuela."],
      "Raúl asked me for my grandfather's mask. I gave it to him yesterday morning. He wore it in the parade and the kids loved it. His mom wants to meet me. She sent me some flowers and I put them on the altar. Raúl also brought me a pan de muerto. I tried it and told him the truth: it needs more sugar. Tomorrow I'm going to show him my grandmother's recipe.",
      [
        ["¿Qué le pidió Raúl a Paula?", ["la máscara de su abuelo", "unas flores", "un pan"], 0, "Me pidió la máscara. After that, la stands for la máscara: se la di."],
        ["¿Dónde puso Paula las flores?", ["en la mesa", "en el altar", "en la plaza"], 1, "Las puse en el altar: las stands for las flores."],
        ["¿Qué necesita el pan?", ["menos azúcar", "más azúcar", "más tiempo"], 1, "Lo probé: lo stands for el pan. It needs more sugar."],
      ],
      "Write about something a friend asked you for, for a party or a holiday." + P1,
      "Mi amiga Paula me pidió mi guitarra. Se la di el lunes. La tocó en la fiesta y les gustó mucho a todos. Después me trajo unas flores y las puse en la mesa. Mi vecino también las quiere. Quiero darle unas velas. Voy a llevárselas mañana.",
    ),
    animals: v(
      "The bed Simón asked for",
      G1 + ", establo (stable), huevos (eggs), gatita (kitten), leche (milk)",
      ["Simón me pidió la cama vieja de Coco.", "Se la di ayer por la mañana.", "La puso en el establo y a los gatos les encantó.", "Su vecina quiere conocerme.", "Me mandó unos huevos y los puse en la cocina.", "Simón también me trajo una gatita.", "La examiné y le dije la verdad: necesita más leche.", "Mañana voy a enseñarle cómo cuidarla."],
      "Simón asked me for Coco's old bed. I gave it to him yesterday morning. He put it in the stable and the cats loved it. His neighbor wants to meet me. She sent me some eggs and I put them in the kitchen. Simón also brought me a kitten. I examined her and told him the truth: she needs more milk. Tomorrow I'm going to show him how to look after her.",
      [
        ["¿Qué le pidió Simón a Julia?", ["la cama vieja de Coco", "unos huevos", "una gatita"], 0, "Me pidió la cama. After that, la stands for la cama: se la di."],
        ["¿Dónde puso Julia los huevos?", ["en el establo", "en la cocina", "en la cama"], 1, "Los puse en la cocina: los stands for los huevos."],
        ["¿Qué necesita la gatita?", ["menos leche", "más leche", "más sol"], 1, "La examiné: la stands for la gatita. She needs more milk."],
      ],
      "Write about something a friend or neighbor asked you for, for a pet or another animal." + P1,
      "Mi vecina me pidió la cama de mi perro. Se la di el lunes. La usó para su gato y le gustó mucho. Después me trajo unas galletas y las puse en la cocina. Mi perro también las quiere. Quiero darle un juguete al gato. Voy a llevárselo mañana.",
    ),
  },
  "b1/2": {
    history: v(
      "Inés's long Fridays",
      G2,
      ["Me levanto a las seis, porque el museo abre temprano.", "Me ducho rápido y me pongo el uniforme.", "Bruno se levanta más tarde y casi siempre se duerme en el tren.", "A la una me siento a comer con los guías.", "Los viernes no puedo irme antes de las nueve.", "Bruno se va a casa, pero yo prefiero quedarme a leer cartas antiguas.", "Después voy a acostarme enseguida.", "Los domingos duermo hasta las diez."],
      "I get up at six, because the museum opens early. I shower fast and put on my uniform. Bruno gets up later and almost always falls asleep on the train. At one I sit down to eat with the guides. On Fridays I can't leave before nine. Bruno goes home, but I prefer to stay and read old letters. After that I'm going to go straight to bed. On Sundays I sleep until ten.",
      [
        ["¿Por qué se levanta Inés a las seis?", ["Porque el museo abre temprano.", "Porque no puede dormir.", "Porque Bruno la llama."], 0, E2A],
        sleepQ("Bruno", "en el tren"),
        ["¿Qué hace Inés los viernes por la noche?", ["Se va temprano.", "Se queda a leer cartas antiguas.", "Se duerme en el museo."], 1, "Prefiero quedarme a leer: quedarse is to stay."],
      ],
      "Write about your routine on a day with a museum, a class or a book about the past in it." + P2,
      "Me levanto a las siete y me ducho. Me pongo ropa cómoda y desayuno. Mi amigo Bruno se levanta más tarde y siempre se duerme en el tren. A las nueve me voy al museo. Por la noche prefiero quedarme en casa y leer sobre historia. Voy a acostarme a las once.",
    ),
    science: v(
      "Vera's long nights",
      G2 + ", abrigada (warm)",
      ["Me levanto a las cuatro de la tarde, porque trabajo de noche.", "Me ducho rápido y me pongo ropa abrigada.", "Hugo se levanta más temprano y casi siempre se duerme en el laboratorio.", "A las ocho me siento a cenar con el equipo.", "Los viernes no puedo irme antes de las seis de la mañana.", "Hugo se va a casa, pero yo prefiero quedarme a mirar el cielo.", "Después voy a acostarme enseguida.", "Los domingos duermo hasta las cinco."],
      "I get up at four in the afternoon, because I work at night. I shower fast and put on warm clothes. Hugo gets up earlier and almost always falls asleep in the lab. At eight I sit down to have dinner with the team. On Fridays I can't leave before six in the morning. Hugo goes home, but I prefer to stay and look at the sky. After that I'm going to go straight to bed. On Sundays I sleep until five.",
      [
        ["¿Por qué se levanta Vera a las cuatro de la tarde?", ["Porque trabaja de noche.", "Porque no puede dormir.", "Porque Hugo la llama."], 0, E2A],
        sleepQ("Hugo", "en el laboratorio"),
        ["¿Qué hace Vera los viernes?", ["Se va temprano.", "Se queda a mirar el cielo.", "Se duerme en el carro."], 1, "Prefiero quedarme a mirar el cielo: quedarse is to stay."],
      ],
      "Write about your routine on a day with time outdoors or with science in it." + P2,
      "Me levanto a las seis y me ducho. Me pongo ropa abrigada y preparo café. Mi amigo Hugo se levanta más tarde y siempre se duerme en el autobús. A las siete me voy al parque a mirar pájaros. Por la noche prefiero quedarme en el jardín. Voy a acostarme a las once.",
    ),
    tech: v(
      "Nico's long Fridays",
      G2 + ", camiseta (T-shirt), reuniones (meetings)",
      ["Me levanto a las ocho, porque la oficina abre a las diez.", "Me ducho rápido y me pongo una camiseta.", "Mía se levanta más tarde y casi siempre se duerme en las reuniones.", "A las dos me siento a comer con el equipo.", "Los viernes no puedo irme antes de las diez.", "Mía se va a casa, pero yo prefiero quedarme a probar el juego.", "Después voy a acostarme enseguida.", "Los domingos duermo hasta las doce."],
      "I get up at eight, because the office opens at ten. I shower fast and put on a T-shirt. Mía gets up later and almost always falls asleep in meetings. At two I sit down to eat with the team. On Fridays I can't leave before ten. Mía goes home, but I prefer to stay and test the game. After that I'm going to go straight to bed. On Sundays I sleep until twelve.",
      [
        ["¿Por qué se levanta Nico a las ocho?", ["Porque la oficina abre a las diez.", "Porque no puede dormir.", "Porque Mía lo llama."], 0, E2A],
        sleepQ("Mía", "en las reuniones"),
        ["¿Qué hace Nico los viernes por la noche?", ["Se va temprano.", "Se queda a probar el juego.", "Se duerme en la oficina."], 1, "Prefiero quedarme a probar el juego: quedarse is to stay."],
      ],
      "Write about your routine on a day with screens, games or coding in it." + P2,
      "Me levanto a las ocho y me ducho. Me pongo una camiseta y miro mis mensajes. Mi amiga Mía se levanta más tarde y siempre se duerme con el teléfono. A las nueve me voy a la oficina. Por la noche prefiero quedarme en casa y jugar. Voy a acostarme a las doce.",
    ),
    health: v(
      "Clara's long Fridays",
      G2,
      ["Me levanto a las cinco, porque corro antes del trabajo.", "Me ducho rápido y me pongo el uniforme.", "Iván se levanta más tarde y casi siempre se duerme en el autobús.", "A la una me siento a comer con las enfermeras.", "Los viernes no puedo irme antes de las ocho.", "Iván se va al gimnasio, pero yo prefiero quedarme a hablar con los pacientes.", "Después voy a acostarme enseguida.", "Los domingos duermo hasta las nueve."],
      "I get up at five, because I run before work. I shower fast and put on my uniform. Iván gets up later and almost always falls asleep on the bus. At one I sit down to eat with the nurses. On Fridays I can't leave before eight. Iván goes to the gym, but I prefer to stay and talk with the patients. After that I'm going to go straight to bed. On Sundays I sleep until nine.",
      [
        ["¿Por qué se levanta Clara a las cinco?", ["Porque corre antes del trabajo.", "Porque no puede dormir.", "Porque Iván la llama."], 0, E2A],
        sleepQ("Iván", "en el autobús"),
        ["¿Qué hace Clara los viernes por la noche?", ["Se va al gimnasio.", "Se queda a hablar con los pacientes.", "Se duerme en la clínica."], 1, "Prefiero quedarme a hablar: quedarse is to stay."],
      ],
      "Write about your routine on a healthy day." + P2,
      "Me levanto a las seis y me ducho. Me pongo ropa cómoda y corro media hora. Mi amigo Iván se levanta más tarde y siempre se duerme en el sofá. A las ocho me voy al trabajo. Por la noche prefiero quedarme en casa y cocinar. Voy a acostarme a las diez.",
    ),
    festivals: v(
      "Paula's festival days",
      G2 + ", camión (truck)",
      ["Me levanto a las cinco, porque el desfile empieza temprano.", "Me ducho rápido y me pongo el vestido.", "Raúl se levanta más tarde y casi siempre se duerme en el camión de la banda.", "A las tres me siento a comer con los bailarines.", "Los días de fiesta no puedo irme antes de las doce.", "Raúl se va a casa, pero yo prefiero quedarme a bailar.", "Después voy a acostarme enseguida.", "Los domingos duermo hasta las once."],
      "I get up at five, because the parade starts early. I shower fast and put on my dress. Raúl gets up later and almost always falls asleep in the band's truck. At three I sit down to eat with the dancers. On festival days I can't leave before twelve. Raúl goes home, but I prefer to stay and dance. After that I'm going to go straight to bed. On Sundays I sleep until eleven.",
      [
        ["¿Por qué se levanta Paula a las cinco?", ["Porque el desfile empieza temprano.", "Porque no puede dormir.", "Porque Raúl la llama."], 0, E2A],
        sleepQ("Raúl", "en el camión de la banda"),
        ["¿Qué hace Paula los días de fiesta por la noche?", ["Se va temprano.", "Se queda a bailar.", "Se duerme en la plaza."], 1, "Prefiero quedarme a bailar: quedarse is to stay."],
      ],
      "Write about your routine on the day of a party, a festival or a holiday." + P2,
      "Me levanto a las siete y me ducho. Me pongo un vestido rojo y preparo la comida. Mi amigo Raúl se levanta más tarde y siempre se duerme en el autobús. A las cinco me voy a la plaza. Por la noche prefiero quedarme a bailar. Voy a acostarme a las dos.",
    ),
    animals: v(
      "Julia's long Fridays",
      G2 + ", se despiertan (wake up), botas (boots)",
      ["Me levanto a las cinco, porque los caballos se despiertan temprano.", "Me ducho rápido y me pongo las botas.", "Simón se levanta más tarde y casi siempre se duerme en el establo.", "A las doce me siento a comer con los granjeros.", "Los viernes no puedo irme antes de las ocho.", "Simón se va al pueblo, pero yo prefiero quedarme con los animales.", "Después voy a acostarme enseguida.", "Los domingos duermo hasta las ocho."],
      "I get up at five, because the horses wake up early. I shower fast and put on my boots. Simón gets up later and almost always falls asleep in the stable. At twelve I sit down to eat with the farmers. On Fridays I can't leave before eight. Simón goes into town, but I prefer to stay with the animals. After that I'm going to go straight to bed. On Sundays I sleep until eight.",
      [
        ["¿Por qué se levanta Julia a las cinco?", ["Porque los caballos se despiertan temprano.", "Porque no puede dormir.", "Porque Simón la llama."], 0, E2A],
        sleepQ("Simón", "en el establo"),
        ["¿Qué hace Julia los viernes por la noche?", ["Se va al pueblo.", "Se queda con los animales.", "Se duerme en el establo."], 1, "Prefiero quedarme con los animales: quedarse is to stay."],
      ],
      "Write about your routine on a day with a pet or other animals in it." + P2,
      "Me levanto a las seis y me ducho. Me pongo las botas y camino con mi perro. Mi hermana se levanta más tarde y siempre se duerme con el gato. A las ocho me voy al trabajo. Por la noche prefiero quedarme en casa con mis animales. Voy a acostarme a las once.",
    ),
  },
  "b1/3": {
    history: v(
      "Two cities in Peru",
      "me encantan (I love), país (country), leyendas (legends), llueve (it rains), nunca (ever)",
      ["En Perú hay dos ciudades que me encantan.", "Lima es más grande que Cusco, pero no es tan antigua como Cusco.", "Un hotel en Cusco cuesta menos que un hotel en Lima.", "Bruno dice que el mercado de Cusco es el mejor del país.", "Es mayor que yo y sabe más leyendas.", "Machu Picchu es el lugar más famoso de Perú.", "El peor mes para visitar es febrero, porque llueve más que en julio.", "No tengo tanto tiempo como antes, pero estoy más curiosa que nunca."],
      "In Peru there are two cities that I love. Lima is bigger than Cusco, but it isn't as old as Cusco. A hotel in Cusco costs less than a hotel in Lima. Bruno says that the Cusco market is the best in the country. He's older than me and knows more legends. Machu Picchu is the most famous place in Peru. The worst month to visit is February, because it rains more than in July. I don't have as much time as before, but I'm more curious than ever.",
      [
        ["¿Cómo es Lima?", ["más grande que Cusco", "más antigua que Cusco", "más pequeña que Cusco"], 0, "Lima es más grande que Cusco, pero no es tan antigua como Cusco."],
        ["¿Quién es mayor?", ["Inés", "Bruno", "Tienen la misma edad."], 1, "Es mayor que yo" + AGE],
        ["¿Cuál es el peor mes para visitar?", ["julio", "febrero", "marzo"], 1, PEOR],
      ],
      "Compare two old places, two cities or two times in history." + P3,
      "En mi país hay dos ciudades antiguas. La primera es más grande que la segunda, pero no es tan bonita como la segunda. Tiene el mejor museo del país. Mi amigo Bruno es mayor que yo y conoce más historias que yo. La plaza es el lugar más famoso de la ciudad.",
    ),
    science: v(
      "Two planets",
      "sistema solar (solar system), luna llena (full moon), oscura (dark), nunca (ever)",
      ["En el cielo hay dos planetas que miro siempre.", "Júpiter es más grande que Marte, pero no es tan rojo como Marte.", "Marte está menos lejos que Júpiter.", "Hugo dice que mi foto de Marte es la mejor del laboratorio.", "Es mayor que yo y tiene más paciencia.", "Júpiter es el planeta más grande del sistema solar.", "La peor noche es la noche de luna llena, porque veo menos estrellas que en una noche oscura.", "No tengo tanto tiempo como antes, pero estoy más contenta que nunca."],
      "In the sky there are two planets that I always look at. Jupiter is bigger than Mars, but it isn't as red as Mars. Mars is less far away than Jupiter. Hugo says that my photo of Mars is the best in the lab. He's older than me and has more patience. Jupiter is the biggest planet in the solar system. The worst night is the night of a full moon, because I see fewer stars than on a dark night. I don't have as much time as before, but I'm happier than ever.",
      [
        ["¿Cómo es Júpiter?", ["más grande que Marte", "más rojo que Marte", "más pequeño que Marte"], 0, "Júpiter es más grande que Marte, pero no es tan rojo como Marte."],
        ["¿Quién es mayor?", ["Vera", "Hugo", "Tienen la misma edad."], 1, "Es mayor que yo" + AGE],
        ["¿Cuál es la peor noche para mirar estrellas?", ["una noche oscura", "la noche de luna llena", "el domingo"], 1, PEOR],
      ],
      "Compare two things in nature or in science: two planets, two animals, two places." + P3,
      "En mi jardín hay dos árboles. El primero es más alto que el segundo, pero no es tan bonito como el segundo. Da las mejores manzanas del barrio. Mi amigo Hugo es menor que yo y sabe más que yo de plantas. La noche es el momento más tranquilo del día.",
    ),
    tech: v(
      "Two computers",
      "rápida (fast), teclado (keyboard), divertido (fun), nunca (ever)",
      ["En mi casa hay dos computadoras.", "La nueva es más rápida que la vieja, pero no es tan cómoda como la vieja.", "La vieja cuesta menos que la nueva.", "Mía dice que mi teclado es el mejor de la oficina.", "Es menor que yo y juega mejor que yo.", "El viernes es el día más divertido de la semana.", "El peor día es el lunes, porque hay menos tiempo para jugar que el viernes.", "No tengo tanto tiempo como antes, pero estoy más contento que nunca."],
      "In my house there are two computers. The new one is faster than the old one, but it isn't as comfortable as the old one. The old one costs less than the new one. Mía says that my keyboard is the best in the office. She's younger than me and plays better than me. Friday is the most fun day of the week. The worst day is Monday, because there's less time to play than on Friday. I don't have as much time as before, but I'm happier than ever.",
      [
        ["¿Cómo es la computadora nueva?", ["más rápida que la vieja", "tan cómoda como la vieja", "menos rápida que la vieja"], 0, "La nueva es más rápida que la vieja, pero no es tan cómoda."],
        ["¿Quién es menor?", ["Nico", "Mía", "Tienen la misma edad."], 1, "Es menor que yo" + AGE],
        ["¿Cuál es el peor día?", ["el viernes", "el lunes", "el domingo"], 1, PEOR],
      ],
      "Compare two devices, two games or two apps." + P3,
      "En mi casa hay dos teléfonos. Mi teléfono es más viejo que el teléfono de mi hermano, pero es tan rápido como su teléfono. Tiene la mejor cámara de la familia. Mi hermano es menor que yo y juega más horas que yo. El sábado es el día más divertido de la semana.",
    ),
    health: v(
      "Two doctors",
      "joven (young), energía (energy), sana (healthy), nunca (ever)",
      ["En mi clínica hay dos doctores.", "Iván es más joven que la doctora Ruiz, pero es tan paciente como ella.", "Correr cuesta menos que ir al gimnasio.", "Iván dice que mi sopa de verduras es la mejor de la clínica.", "Es menor que yo y tiene más energía.", "El domingo es el día más tranquilo de la semana.", "El peor día es el lunes, porque duermo menos horas que el domingo.", "No tengo tanto tiempo como antes, pero estoy más sana que nunca."],
      "At my clinic there are two doctors. Iván is younger than Doctor Ruiz, but he's as patient as she is. Running costs less than going to the gym. Iván says that my vegetable soup is the best in the clinic. He's younger than me and has more energy. Sunday is the quietest day of the week. The worst day is Monday, because I sleep fewer hours than on Sunday. I don't have as much time as before, but I'm healthier than ever.",
      [
        ["¿Cómo es Iván?", ["más joven que la doctora Ruiz", "mayor que la doctora Ruiz", "menos paciente que la doctora Ruiz"], 0, "Iván es más joven que la doctora Ruiz, pero es tan paciente como ella."],
        ["¿Quién es menor, Clara o Iván?", ["Clara", "Iván", "Tienen la misma edad."], 1, "Es menor que yo" + AGE],
        ["¿Cuál es el peor día?", ["el domingo", "el lunes", "el viernes"], 1, PEOR],
      ],
      "Compare two healthy habits, two sports or two people who keep fit." + P3,
      "En mi familia todos hacen ejercicio. Mi hermano corre más que yo, pero no es tan rápido como yo. Mi mamá hace la mejor ensalada de la familia. Mi hermana es menor que yo y duerme más horas que yo. El domingo es el día más tranquilo de la semana.",
    ),
    festivals: v(
      "Two festivals",
      "último (last), al principio (at the start), nunca (ever)",
      ["En mi pueblo hay dos fiestas grandes.", "La fiesta de agosto es más larga que la fiesta de diciembre, pero no es tan bonita como la fiesta de diciembre.", "La comida de agosto cuesta menos que la comida de diciembre.", "Raúl dice que mi vestido es el mejor del desfile.", "Es mayor que yo y conoce más canciones.", "El último día es el día más alegre del año.", "El peor momento es el final, porque hay menos música que al principio.", "No tengo tanto tiempo como antes, pero estoy más feliz que nunca."],
      "In my town there are two big festivals. The August festival is longer than the December festival, but it isn't as pretty as the December festival. The food in August costs less than the food in December. Raúl says that my dress is the best in the parade. He's older than me and knows more songs. The last day is the most cheerful day of the year. The worst moment is the end, because there's less music than at the start. I don't have as much time as before, but I'm happier than ever.",
      [
        ["¿Cómo es la fiesta de agosto?", ["más larga que la fiesta de diciembre", "más corta que la fiesta de diciembre", "tan bonita como la fiesta de diciembre"], 0, "La fiesta de agosto es más larga, pero no es tan bonita como la fiesta de diciembre."],
        ["¿Quién es mayor?", ["Paula", "Raúl", "Tienen la misma edad."], 1, "Es mayor que yo" + AGE],
        ["¿Cuál es el peor momento?", ["el principio", "el final", "el desfile"], 1, PEOR],
      ],
      "Compare two festivals, two holidays or two parties." + P3,
      "En mi ciudad hay dos fiestas. La fiesta de verano es más grande que la fiesta de invierno, pero no es tan bonita como la fiesta de invierno. Tiene la mejor música del año. Mi amigo Raúl es mayor que yo y baila mejor que yo. El sábado es el día más alegre de la fiesta.",
    ),
    animals: v(
      "Two dogs",
      "baño (bath), nunca (ever)",
      ["En la granja hay dos perros.", "Coco es más pequeño que Luna, pero es tan rápido como ella.", "La comida de Coco cuesta menos que la comida de Luna.", "Simón dice que Coco es el mejor perro de la granja.", "Luna es mayor que Coco y tiene más paciencia.", "El gato es el animal más tranquilo de la casa.", "El peor día es el día del baño, porque hay menos juegos que los otros días.", "No tengo tanto tiempo como antes, pero estoy más contenta que nunca."],
      "On the farm there are two dogs. Coco is smaller than Luna, but he's as fast as she is. Coco's food costs less than Luna's food. Simón says that Coco is the best dog on the farm. Luna is older than Coco and has more patience. The cat is the calmest animal in the house. The worst day is bath day, because there are fewer games than on other days. I don't have as much time as before, but I'm happier than ever.",
      [
        ["¿Cómo es Coco?", ["más pequeño que Luna", "más grande que Luna", "menos rápido que Luna"], 0, "Coco es más pequeño que Luna, pero es tan rápido como ella."],
        ["¿Quién es mayor?", ["Coco", "Luna", "Tienen la misma edad."], 1, "Luna es mayor que Coco" + AGE],
        ["¿Cuál es el peor día?", ["el domingo", "el día del baño", "el lunes"], 1, PEOR],
      ],
      "Compare two pets or two animals you know." + P3,
      "En mi casa hay dos gatos. Milo es más grande que Nube, pero no es tan rápido como Nube. Nube tiene los ojos más bonitos de la casa. Milo es mayor que Nube y duerme más horas que ella. Mi perro es peor que los gatos: come mis zapatos.",
    ),
  },
  "b1/4": {
    history: v(
      "A new room at the museum",
      "conmigo (with me), así que (so), almacén (storeroom), dinero (money)",
      ["El año próximo abriré una sala nueva en el museo.", "Será para los niños, con juegos especiales para las escuelas.", "Trabajaré allí por seis meses y después escribiré un libro.", "Bruno vendrá conmigo, pero todavía no conoce a nadie en el equipo.", "Tendremos que terminar todo para marzo.", "No sabemos nada de los objetos nuevos, así que pasaremos por el almacén el sábado.", "Alguien me dijo que nunca hay dinero para los museos.", "Lo hago por mi abuelo: algún día todos conocerán su historia."],
      "Next year I'll open a new room at the museum. It will be for children, with special games for schools. I'll work there for six months and then I'll write a book. Bruno will come with me, but he doesn't know anybody on the team yet. We'll have to finish everything by March. We don't know anything about the new objects, so we'll stop by the storeroom on Saturday. Somebody told me there's never money for museums. I'm doing it for my grandfather: one day everyone will know his story.",
      [
        ["¿Para quién será la sala nueva?", ["para los niños", "para los guías", "para Bruno"], 0, "Será para los niños: para says who it's for."],
        marzoQ(),
        ["¿Por quién lo hace Inés?", ["por Bruno", "por su abuelo", "por los turistas"], 1, "Lo hago por mi abuelo: por gives the reason behind it."],
      ],
      "Write about a plan to learn about the past next year: a trip, a project, a book." + P4,
      "El año próximo visitaré tres ciudades antiguas. Será para aprender más de la historia de mi país. Viajaré por un mes y después escribiré un blog. Mi amigo Bruno vendrá conmigo, pero no conoce a nadie allí. No sabemos nada de los hoteles. Lo hago por mi abuela: algún día leerá mis historias.",
    ),
    science: v(
      "Vera's new observatory",
      "construiré (I'll build), observatorio (observatory), cometa (comet), conmigo (with me), clima (weather), así que (so), nubes (clouds)",
      ["El año próximo construiré un observatorio pequeño.", "Será para toda la escuela, con un telescopio especial para los niños.", "Trabajaré allí por seis meses y después buscaré un cometa.", "Hugo vendrá conmigo, pero todavía no conoce a nadie en el pueblo.", "Tendremos que terminar todo para marzo.", "No sabemos nada del clima, así que pasaremos por allí el sábado.", "Alguien me dijo que nunca hay nubes en ese lugar.", "Lo hago por mi papá: algún día mirará las estrellas conmigo."],
      "Next year I'll build a small observatory. It will be for the whole school, with a special telescope for the children. I'll work there for six months and then I'll look for a comet. Hugo will come with me, but he doesn't know anybody in the town yet. We'll have to finish everything by March. We don't know anything about the weather, so we'll stop by on Saturday. Somebody told me there are never clouds in that place. I'm doing it for my dad: one day he'll look at the stars with me.",
      [
        ["¿Para quién será el observatorio?", ["para toda la escuela", "para Hugo", "para los turistas"], 0, "Será para toda la escuela: para says who it's for."],
        marzoQ(),
        ["¿Por quién lo hace Vera?", ["por Hugo", "por su papá", "por los niños"], 1, "Lo hago por mi papá: por gives the reason behind it."],
      ],
      "Write about a plan for next year to do with science or nature." + P4,
      "El año próximo plantaré un jardín. Será para las mariposas y los pájaros. Trabajaré allí por dos meses y después compraré un telescopio. Mi amigo Hugo vendrá conmigo, pero no sabe nada de plantas. No conocemos a nadie en el barrio. Lo hago por mis hijos: algún día tendrán un lugar verde.",
    ),
    tech: v(
      "Nico's new game",
      "lanzaré (I'll launch), jugadores (players), conmigo (with me), feria (fair), precio (price), así que (so)",
      ["El año próximo lanzaré un juego nuevo.", "Será para toda la familia, con un nivel especial para los niños.", "Trabajaré en él por seis meses y después buscaré más jugadores.", "Mía vendrá conmigo a la feria, pero todavía no conoce a nadie allí.", "Tendremos que terminar todo para marzo.", "No sabemos nada del precio, así que pasaremos por la tienda el sábado.", "Alguien me dijo que nunca hay juegos buenos en español.", "Lo hago por mi hermano: algún día jugará con sus hijos."],
      "Next year I'll launch a new game. It will be for the whole family, with a special level for the children. I'll work on it for six months and then I'll look for more players. Mía will come with me to the fair, but she doesn't know anybody there yet. We'll have to finish everything by March. We don't know anything about the price, so we'll stop by the store on Saturday. Somebody told me there are never good games in Spanish. I'm doing it for my brother: one day he'll play with his children.",
      [
        ["¿Para quién será el juego?", ["para toda la familia", "para Mía", "para los programadores"], 0, "Será para toda la familia: para says who it's for."],
        marzoQ(),
        ["¿Por quién lo hace Nico?", ["por Mía", "por su hermano", "por los jugadores"], 1, "Lo hago por mi hermano: por gives the reason behind it."],
      ],
      "Write about a plan for next year to do with games or technology." + P4,
      "El año próximo aprenderé a programar. Será para hacer mi primer juego. Estudiaré por seis meses y después buscaré un equipo. Mi amiga Mía vendrá conmigo a las clases, pero no conoce a nadie allí. No sabemos nada del precio. Lo hago por mi hermano: algún día jugaremos juntos.",
    ),
    health: v(
      "Clara's first marathon",
      "maratón (marathon), carrera (race), entrenaré (I'll train), conmigo (with me), ruta (route), así que (so), sombra (shade), camino (road)",
      ["El año próximo correré mi primer maratón.", "Será para un hospital de niños, con una carrera especial para las familias.", "Entrenaré por seis meses y después buscaré un equipo.", "Iván vendrá conmigo, pero todavía no conoce a nadie en el club.", "Tendremos que estar listos para marzo.", "No sabemos nada de la ruta, así que pasaremos por allí el sábado.", "Alguien me dijo que nunca hay sombra en ese camino.", "Lo hago por mis pacientes: algún día correrán conmigo."],
      "Next year I'll run my first marathon. It will be for a children's hospital, with a special race for families. I'll train for six months and then I'll look for a team. Iván will come with me, but he doesn't know anybody in the club yet. We'll have to be ready by March. We don't know anything about the route, so we'll stop by on Saturday. Somebody told me there's never any shade on that road. I'm doing it for my patients: one day they'll run with me.",
      [
        ["¿Para quién será el maratón?", ["para un hospital de niños", "para Iván", "para el club"], 0, "Será para un hospital de niños: para says who it's for."],
        marzoQ("¿Para cuándo tienen que estar listos?"),
        ["¿Por quién lo hace Clara?", ["por Iván", "por sus pacientes", "por su familia"], 1, "Lo hago por mis pacientes: por gives the reason behind it."],
      ],
      "Write about a plan for your health next year." + P4,
      "El año próximo correré una carrera de diez kilómetros. Será para un hospital de niños. Entrenaré por tres meses y después buscaré otra carrera. Mi amigo Iván vendrá conmigo, pero no conoce a nadie en el club. No sabemos nada de la ruta. Lo hago por mi mamá: algún día caminará conmigo.",
    ),
    festivals: v(
      "Next year's festival",
      "conmigo (with me), comité (committee), así que (so), dinero (money), fuegos artificiales (fireworks)",
      ["El año próximo organizaré la fiesta del pueblo.", "Será para todos los vecinos, con un desfile especial para los niños.", "Trabajaré en ella por seis meses y después descansaré.", "Raúl vendrá conmigo, pero todavía no conoce a nadie en el comité.", "Tendremos que terminar todo para marzo.", "No sabemos nada de la música, así que pasaremos por la escuela de baile el sábado.", "Alguien me dijo que nunca hay dinero para los fuegos artificiales.", "Lo hago por mi abuela: algún día bailará otra vez en la plaza."],
      "Next year I'll organize the town festival. It will be for all the neighbors, with a special parade for the children. I'll work on it for six months and then I'll rest. Raúl will come with me, but he doesn't know anybody on the committee yet. We'll have to finish everything by March. We don't know anything about the music, so we'll stop by the dance school on Saturday. Somebody told me there's never money for the fireworks. I'm doing it for my grandmother: one day she'll dance in the square again.",
      [
        ["¿Para quién será la fiesta?", ["para todos los vecinos", "para Raúl", "para los turistas"], 0, "Será para todos los vecinos: para says who it's for."],
        marzoQ(),
        ["¿Por quién lo hace Paula?", ["por Raúl", "por su abuela", "por los niños"], 1, "Lo hago por mi abuela: por gives the reason behind it."],
      ],
      "Write about a plan for a festival, a holiday or a party next year." + P4,
      "El año próximo iré al carnaval de Oruro. Será para conocer la fiesta más famosa de Bolivia. Estaré allí por una semana y después visitaré La Paz. Mi amigo Raúl vendrá conmigo, pero no conoce a nadie en la ciudad. No sabemos nada de los hoteles. Lo hago por mi abuelo: algún día verá mis fotos.",
    ),
    animals: v(
      "Julia's animal shelter",
      "refugio (shelter), sin (without), voluntarios (volunteers), conmigo (with me), terreno (land), así que (so), zona (area)",
      ["El año próximo abriré un refugio para animales.", "Será para perros y gatos sin casa, con un lugar especial para los caballos viejos.", "Viviré allí por seis meses y después buscaré voluntarios.", "Simón vendrá conmigo, pero todavía no conoce a nadie en el pueblo.", "Tendremos que terminar todo para marzo.", "No sabemos nada del terreno, así que pasaremos por allí el sábado.", "Alguien me dijo que nunca hay veterinarios en esa zona.", "Lo hago por Coco: algún día tendrá muchos amigos."],
      "Next year I'll open an animal shelter. It will be for dogs and cats without a home, with a special place for old horses. I'll live there for six months and then I'll look for volunteers. Simón will come with me, but he doesn't know anybody in the town yet. We'll have to finish everything by March. We don't know anything about the land, so we'll stop by on Saturday. Somebody told me there are never any vets in that area. I'm doing it for Coco: one day he'll have lots of friends.",
      [
        ["¿Para quién será el refugio?", ["para perros y gatos sin casa", "para Simón", "para los vecinos"], 0, "Será para perros y gatos sin casa: para says who it's for."],
        marzoQ(),
        ["¿Por quién lo hace Julia?", ["por Simón", "por Coco", "por los caballos"], 1, "Lo hago por Coco: por gives the reason behind it."],
      ],
      "Write about a plan for next year to do with a pet or other animals." + P4,
      "El año próximo adoptaré un perro. Será para toda la familia. Caminaré con el perro por una hora todos los días. Mi hermana vendrá conmigo al refugio, pero no conoce a nadie allí. No sabemos nada de los perros. Lo hago por mis hijos: algún día tendrán un gran amigo.",
    ),
  },
  "b1/5": {
    history: v(
      "How to study your family's history",
      "fechas (dates), cuaderno (notebook), archivos (archives), bisabuelos (great-grandparents)",
      ["Hace diez años que estudio la historia de mi familia.", "¿Quieres aprender? Ven a mi casa y mira.", "Primero, habla con tus abuelos y escribe sus historias.", "Busca fotos viejas y mira cada foto lentamente.", "Pon los nombres y las fechas en un cuaderno.", "Visita los archivos frecuentemente.", "Ten paciencia y haz preguntas a todos.", "Hace un mes que Bruno practica, y ya conoce perfectamente a sus bisabuelos."],
      "I've been studying my family's history for ten years. Do you want to learn? Come to my house and watch. First, talk with your grandparents and write down their stories. Look for old photos and look at each photo slowly. Put the names and the dates in a notebook. Visit the archives often. Be patient and ask everyone questions. Bruno has been practicing for a month, and he already knows his great-grandparents perfectly.",
      [
        ["¿Cuánto tiempo hace que Inés estudia la historia de su familia?", ["diez años", "un mes", "dos años"], 0, "Hace diez años que..." + HACE],
        ["¿Cómo hay que mirar las fotos viejas?", ["rápidamente", "lentamente", "perfectamente"], 1, "Mira cada foto lentamente: lenta + mente."],
        ["¿Cuánto tiempo hace que Bruno practica?", ["diez años", "un mes", "una semana"], 1, "Hace un mes que Bruno practica."],
      ],
      "Give a friend advice on how to learn about the past: family history, a museum visit, an old city." + P5,
      "Hace dos años que estudio la historia de mi familia. ¿Quieres aprender? Ven a mi casa el sábado. Primero, habla con tus abuelos. Escribe sus historias lentamente y ten paciencia. Busca fotos viejas y pon los nombres en un cuaderno. Haz preguntas a todos. Fácilmente vas a encontrar sorpresas.",
    ),
    science: v(
      "Vera's stargazing tips",
      "oscuro (dark), apaga (turn off), mueve (move), con cuidado (carefully), manta (blanket), suelo (ground), Saturno (Saturn)",
      ["Hace quince años que miro las estrellas diariamente.", "¿Quieres aprender? Ven al campo y mira.", "Primero, busca un lugar oscuro y apaga el teléfono.", "Mueve el telescopio lentamente, con cuidado.", "Pon una manta en el suelo; fácilmente puedes tener frío.", "Mira la luna frecuentemente.", "Ten paciencia y haz un dibujo cada noche.", "Hace un mes que Hugo practica, y ya encuentra Saturno perfectamente."],
      "I've been looking at the stars daily for fifteen years. Do you want to learn? Come to the countryside and watch. First, look for a dark place and turn off your phone. Move the telescope slowly, carefully. Put a blanket on the ground; you can easily get cold. Look at the moon often. Be patient and make a drawing every night. Hugo has been practicing for a month, and he already finds Saturn perfectly.",
      [
        ["¿Cuánto tiempo hace que Vera mira las estrellas?", ["quince años", "un mes", "cinco años"], 0, "Hace quince años que..." + HACE],
        ["¿Cómo hay que mover el telescopio?", ["rápidamente", "lentamente", "frecuentemente"], 1, "Mueve el telescopio lentamente: lenta + mente."],
        ["¿Cuánto tiempo hace que Hugo practica?", ["quince años", "un mes", "una semana"], 1, "Hace un mes que Hugo practica."],
      ],
      "Give a friend advice about something you do in nature or with science." + P5,
      "Hace un año que miro las estrellas. ¿Quieres aprender? Ven al parque el viernes. Primero, busca un lugar oscuro. Mueve el telescopio lentamente y ten paciencia. Apaga el teléfono y pon una manta en el suelo. Haz un dibujo de la luna. Fácilmente vas a encontrar un planeta.",
    ),
    tech: v(
      "Nico's coding tips",
      "elige (choose), lenguaje (language), curso gratis (free course), con cuidado (carefully), guarda (save), funciona (works)",
      ["Hace ocho años que programo videojuegos diariamente.", "¿Quieres aprender? Ven a mi oficina y mira.", "Primero, elige un lenguaje fácil y busca un curso gratis.", "Escribe el código lentamente, con cuidado.", "Pon notas en cada parte; fácilmente puedes olvidar algo.", "Guarda tu trabajo frecuentemente.", "Ten paciencia y haz un juego pequeño primero.", "Hace un mes que Mía practica, y su primer juego ya funciona perfectamente."],
      "I've been coding video games daily for eight years. Do you want to learn? Come to my office and watch. First, choose an easy language and look for a free course. Write the code slowly, carefully. Put notes in each part; you can easily forget something. Save your work often. Be patient and make a small game first. Mía has been practicing for a month, and her first game already works perfectly.",
      [
        ["¿Cuánto tiempo hace que Nico programa videojuegos?", ["ocho años", "un mes", "dos años"], 0, "Hace ocho años que..." + HACE],
        ["¿Cómo hay que escribir el código?", ["rápidamente", "lentamente", "fácilmente"], 1, "Escribe el código lentamente: lenta + mente."],
        ["¿Cuánto tiempo hace que Mía practica?", ["ocho años", "un mes", "una semana"], 1, "Hace un mes que Mía practica."],
      ],
      "Give a friend advice about something you do with computers, games or your phone." + P5,
      "Hace tres años que programo. ¿Quieres aprender? Ven a mi casa el sábado. Primero, busca un curso gratis. Escribe el código lentamente y ten paciencia. Guarda tu trabajo y pon notas en cada parte. Haz un juego pequeño. Fácilmente vas a aprender más.",
    ),
    health: v(
      "Clara's running tips",
      "camino (path), con cuidado (carefully), lo mismo (the same), veces (times)",
      ["Hace doce años que corro diariamente.", "¿Quieres empezar? Ven al parque y mira.", "Primero, compra zapatos cómodos y busca un camino tranquilo.", "Corre lentamente, con cuidado.", "Pon una botella de agua en tu bolsa; fácilmente puedes tener sed.", "Descansa frecuentemente.", "Ten paciencia y haz lo mismo tres veces por semana.", "Hace un mes que Iván practica, y ya corre cinco kilómetros perfectamente."],
      "I've been running daily for twelve years. Do you want to start? Come to the park and watch. First, buy comfortable shoes and look for a quiet path. Run slowly, carefully. Put a bottle of water in your bag; you can easily get thirsty. Rest often. Be patient and do the same thing three times a week. Iván has been practicing for a month, and he already runs five kilometers perfectly.",
      [
        ["¿Cuánto tiempo hace que Clara corre?", ["doce años", "un mes", "dos años"], 0, "Hace doce años que..." + HACE],
        ["¿Cómo hay que correr?", ["rápidamente", "lentamente", "frecuentemente"], 1, "Corre lentamente: lenta + mente."],
        ["¿Cuánto tiempo hace que Iván practica?", ["doce años", "un mes", "una semana"], 1, "Hace un mes que Iván practica."],
      ],
      "Give a friend advice about a healthy habit of yours." + P5,
      "Hace un año que corro. ¿Quieres empezar? Ven al parque el domingo. Primero, compra zapatos cómodos. Corre lentamente y ten paciencia. Bebe agua y pon fruta en tu bolsa. Haz lo mismo tres veces por semana. Fácilmente vas a correr más.",
    ),
    festivals: v(
      "Paula's dancing tips",
      "cuenta los pasos (count the steps), pies (feet), con cuidado (carefully), manos arriba (hands up), seguir el ritmo (follow the rhythm), lo mismo (the same)",
      ["Hace veinte años que bailo en el desfile.", "¿Quieres aprender? Ven a la plaza y mira.", "Primero, escucha la música y cuenta los pasos.", "Mueve los pies lentamente, con cuidado.", "Pon las manos arriba; fácilmente puedes seguir el ritmo.", "Practica frecuentemente.", "Ten paciencia y haz lo mismo todas las semanas.", "Hace un mes que Raúl practica, y ya baila perfectamente la primera parte."],
      "I've been dancing in the parade for twenty years. Do you want to learn? Come to the square and watch. First, listen to the music and count the steps. Move your feet slowly, carefully. Put your hands up; you can easily follow the rhythm. Practice often. Be patient and do the same thing every week. Raúl has been practicing for a month, and he already dances the first part perfectly.",
      [
        ["¿Cuánto tiempo hace que Paula baila en el desfile?", ["veinte años", "un mes", "dos años"], 0, "Hace veinte años que..." + HACE],
        ["¿Cómo hay que mover los pies?", ["rápidamente", "lentamente", "perfectamente"], 1, "Mueve los pies lentamente: lenta + mente."],
        ["¿Cuánto tiempo hace que Raúl practica?", ["veinte años", "un mes", "una semana"], 1, "Hace un mes que Raúl practica."],
      ],
      "Give a friend advice about something you do at a festival or a party: a dance, a dish, a song." + P5,
      "Hace cinco años que bailo. ¿Quieres aprender? Ven a la plaza el sábado. Primero, escucha la música. Mueve los pies lentamente y ten paciencia. Cuenta los pasos y pon las manos arriba. Haz lo mismo todas las semanas. Fácilmente vas a seguir el ritmo.",
    ),
    animals: v(
      "Julia's dog training tips",
      "entreno (I train), galletas (treats), voz (voice), ganar su atención (get its attention), lo mismo (the same), se sienta (sits)",
      ["Hace quince años que entreno perros diariamente.", "¿Quieres aprender? Ven a la granja y mira.", "Primero, compra galletas pequeñas y busca un lugar tranquilo.", "Habla lentamente, con una voz amable.", "Pon una galleta en tu mano; fácilmente puedes ganar su atención.", "Practica frecuentemente, pero poco tiempo.", "Ten paciencia y haz lo mismo todos los días.", "Hace un mes que Simón practica con Luna, y ya se sienta perfectamente."],
      "I've been training dogs daily for fifteen years. Do you want to learn? Come to the farm and watch. First, buy small treats and look for a quiet place. Speak slowly, in a kind voice. Put a treat in your hand; you can easily get its attention. Practice often, but for a short time. Be patient and do the same thing every day. Simón has been practicing with Luna for a month, and she already sits perfectly.",
      [
        ["¿Cuánto tiempo hace que Julia entrena perros?", ["quince años", "un mes", "cinco años"], 0, "Hace quince años que..." + HACE],
        ["¿Cómo hay que hablar?", ["rápidamente", "lentamente", "frecuentemente"], 1, "Habla lentamente: lenta + mente."],
        ["¿Cuánto tiempo hace que Simón practica con Luna?", ["quince años", "un mes", "una semana"], 1, "Hace un mes que Simón practica con Luna."],
      ],
      "Give a friend advice about looking after or training an animal." + P5,
      "Hace dos años que tengo un perro. ¿Quieres entrenar a tu perro? Ven al parque el domingo. Primero, compra galletas pequeñas. Habla lentamente y ten paciencia. Busca un lugar tranquilo y pon una galleta en tu mano. Haz lo mismo todos los días. Fácilmente vas a ver resultados.",
    ),
  },
  "b1/6": {
    history: v(
      "Inés's little book",
      "cosas (things), colección (collection), monedas (coins), oro (gold)",
      ["Acabo de encontrar un librito de 1900 en el mercado.", "Suelo ir los domingos para buscar cosas antiguas.", "Bruno tiene una colección de monedas; la suya es más grande que la mía.", "Sus monedas son de oro, pero las mías son más antiguas.", "Ayer un turista volvió a preguntar por mi mapita de Cusco.", "Dijo: «El tuyo es el mejor del museo».", "Solemos cerrar a las seis, pero hoy acabamos de recibir un grupo.", "Mañana volveré a contar la misma historia."],
      "I've just found a little book from 1900 at the market. I usually go on Sundays to look for old things. Bruno has a coin collection; his is bigger than mine. His coins are gold, but mine are older. Yesterday a tourist asked again about my little map of Cusco. He said: \"Yours is the best in the museum.\" We usually close at six, but today we've just received a group. Tomorrow I'll tell the same story again.",
      [
        ["¿Qué acaba de encontrar Inés?", ["un librito de 1900", "una moneda", "un mapa"], 0, ACABO],
        ["¿De quién es la colección más grande?", ["de Inés", "de Bruno", "del turista"], 1, "La suya: his, copying la colección it stands for."],
        ["¿Qué volvió a hacer el turista?", ["comprar monedas", "preguntar por el mapita", "contar una historia"], 1, "Volvió a preguntar" + VOLVER],
      ],
      "Write about something old you've just found, seen or read." + P6,
      "Acabo de visitar un museo nuevo. Suelo ir los domingos con mi amigo Bruno. Él tiene muchos libros de historia; los suyos son más viejos que los míos. Su mapa es más grande que el mío. Ayer volví a leer mi librito favorito. Mañana volveré a visitar el museo.",
    ),
    science: v(
      "Vera's little telescope",
      "sobrina (niece), cara (expensive), claras (clear), cometa (comet)",
      ["Acabo de comprar un telescopito para mi sobrina.", "Suelo mirar el cielo a las diez, cuando no hay luna.", "Hugo tiene una cámara nueva; la suya es más cara que la mía.", "Sus fotos son bonitas, pero las mías son más claras.", "Ayer mi sobrina volvió a pedir el librito de los planetas.", "Dijo: «El tuyo es el mejor de la biblioteca».", "Solemos terminar a las doce, pero hoy acabamos de ver un cometa.", "Mañana volveremos a buscar el mismo lugar del cielo."],
      "I've just bought a little telescope for my niece. I usually look at the sky at ten, when there's no moon. Hugo has a new camera; his is more expensive than mine. His photos are pretty, but mine are clearer. Yesterday my niece asked again for the little book about the planets. She said: \"Yours is the best in the library.\" We usually finish at twelve, but today we've just seen a comet. Tomorrow we'll look for the same place in the sky again.",
      [
        ["¿Qué acaba de comprar Vera?", ["un telescopito", "una cámara", "un libro"], 0, ACABO],
        ["¿De quién es la cámara más cara?", ["de Vera", "de Hugo", "de la sobrina"], 1, "La suya: his, copying la cámara it stands for."],
        ["¿Qué volvió a pedir la sobrina?", ["el telescopito", "el librito de los planetas", "una foto"], 1, "Volvió a pedir" + VOLVER],
      ],
      "Write about something new to do with science or nature." + P6,
      "Acabo de comprar un librito de plantas. Suelo caminar por el parque los sábados. Mi amigo Hugo tiene una cámara; la suya es más nueva que la mía. Sus fotos son más claras que las mías. Ayer volví a ver un pajarito rojo. Mañana volveré a buscarlo.",
    ),
    tech: v(
      "Nico's little phone",
      "perder (to lose), conexión (connection)",
      ["Acabo de comprar un telefonito para mi mamá.", "Suelo jugar una hora antes de dormir.", "Mía tiene una computadora nueva; la suya es más rápida que la mía.", "Sus juegos son modernos, pero los míos son más divertidos.", "Ayer mi hermanito volvió a pedir mi consola.", "Dijo: «La tuya es la mejor de la casa».", "Solemos jugar en línea a las ocho, pero hoy acabamos de perder la conexión.", "Mañana volveré a probar el mismo nivel."],
      "I've just bought a little phone for my mom. I usually play for an hour before sleeping. Mía has a new computer; hers is faster than mine. Her games are modern, but mine are more fun. Yesterday my little brother asked for my console again. He said: \"Yours is the best in the house.\" We usually play online at eight, but today we've just lost the connection. Tomorrow I'll try the same level again.",
      [
        ["¿Qué acaba de comprar Nico?", ["un telefonito", "una consola", "una computadora"], 0, ACABO],
        ["¿De quién es la computadora más rápida?", ["de Nico", "de Mía", "de la mamá"], 1, "La suya: hers, copying la computadora it stands for."],
        ["¿Qué volvió a pedir el hermanito?", ["el teléfono", "la consola", "un juego"], 1, "Volvió a pedir" + VOLVER],
      ],
      "Write about a new device, game or app." + P6,
      "Acabo de comprar un juego nuevo. Suelo jugar los viernes con mi amiga Mía. Ella tiene una consola; la suya es más nueva que la mía. Sus juegos son más difíciles que los míos. Ayer mi hermanito volvió a ganar. Mañana volveré a jugar el mismo nivel.",
    ),
    health: v(
      "Clara's new class",
      "un ratito (a little while), ligera (light), caros (expensive), hierbas (herbs), emergencia (emergency)",
      ["Acabo de empezar una clase de yoga cerca del parque.", "Suelo levantarme a las seis para correr un ratito.", "Iván tiene una bicicleta; la suya es más ligera que la mía.", "Sus zapatos son caros, pero los míos son más cómodos.", "Ayer mi paciente volvió a pedir mi tecito de hierbas.", "Dijo: «El tuyo es el mejor de la clínica».", "Solemos almorzar a la una, pero hoy acabamos de recibir una emergencia.", "Mañana volveré a hacer los mismos ejercicios."],
      "I've just started a yoga class near the park. I usually get up at six to run for a little while. Iván has a bicycle; his is lighter than mine. His shoes are expensive, but mine are more comfortable. Yesterday my patient asked for my herbal tea again. He said: \"Yours is the best in the clinic.\" We usually have lunch at one, but today we've just received an emergency. Tomorrow I'll do the same exercises again.",
      [
        ["¿Qué acaba de empezar Clara?", ["una clase de yoga", "un trabajo nuevo", "una carrera"], 0, ACABO],
        ["¿De quién es la bicicleta más ligera?", ["de Clara", "de Iván", "del paciente"], 1, "La suya: his, copying la bicicleta it stands for."],
        ["¿Qué volvió a pedir el paciente?", ["los zapatos", "el tecito de hierbas", "la bicicleta"], 1, "Volvió a pedir" + VOLVER],
      ],
      "Write about a new healthy habit." + P6,
      "Acabo de empezar una clase de yoga. Suelo ir los martes con mi amigo Iván. Él tiene una bicicleta; la suya es más rápida que la mía. Sus zapatos son más cómodos que los míos. Ayer volví a correr un ratito. Mañana volveré a hacer los mismos ejercicios.",
    ),
    festivals: v(
      "Paula's little dress",
      "sobrina (niece), coser (to sew)",
      ["Acabo de terminar un vestidito para mi sobrina.", "Suelo coser por la noche, cuando la casa está tranquila.", "Raúl tiene una guitarra vieja; la suya es más bonita que la mía.", "Sus canciones son alegres, pero las mías son más fáciles de bailar.", "Ayer mi abuelito volvió a pedir su canción favorita.", "Dijo: «La nuestra es la mejor fiesta del país».", "Solemos empezar a las cinco, pero hoy acabamos de recibir más músicos.", "Mañana volveremos a bailar en la misma plaza."],
      "I've just finished a little dress for my niece. I usually sew at night, when the house is quiet. Raúl has an old guitar; his is prettier than mine. His songs are cheerful, but mine are easier to dance to. Yesterday my grandpa asked for his favorite song again. He said: \"Ours is the best festival in the country.\" We usually start at five, but today we've just received more musicians. Tomorrow we'll dance in the same square again.",
      [
        ["¿Qué acaba de terminar Paula?", ["un vestidito", "una canción", "una guitarra"], 0, "Acabo de + a plain verb: I've just done it."],
        ["¿De quién es la guitarra más bonita?", ["de Paula", "de Raúl", "del abuelito"], 1, "La suya: his, copying la guitarra it stands for."],
        ["¿Qué volvió a pedir el abuelito?", ["un vestido", "su canción favorita", "una guitarra"], 1, "Volvió a pedir" + VOLVER],
      ],
      "Write about something new for a festival, a holiday or a party." + P6,
      "Acabo de volver de una fiestecita en mi barrio. Suelo bailar toda la noche. Mi amigo Raúl tiene una guitarra; la suya es más vieja que la mía. Sus canciones son más alegres que las mías. Ayer volvimos a cantar juntos. Mañana volveré a bailar.",
    ),
    animals: v(
      "Julia's new kitten",
      "adoptar (to adopt), refugio (shelter), dar de comer (to feed), robar (to steal), listo (clever), esconder (to hide)",
      ["Acabo de adoptar una gatita en el refugio.", "Suelo levantarme a las seis para dar de comer a los animales.", "Simón tiene un perro; el suyo es más grande que el mío.", "Sus caballos son rápidos, pero los míos son más tranquilos.", "Ayer Coco volvió a robar mi panecito del desayuno.", "Simón dijo: «El tuyo es el perro más listo de la granja».", "Solemos caminar a las siete, pero hoy acabamos de recibir un caballito nuevo.", "Mañana volveré a esconder mi desayuno."],
      "I've just adopted a kitten at the shelter. I usually get up at six to feed the animals. Simón has a dog; his is bigger than mine. His horses are fast, but mine are calmer. Yesterday Coco stole my breakfast roll again. Simón said: \"Yours is the cleverest dog on the farm.\" We usually walk at seven, but today we've just received a new little horse. Tomorrow I'll hide my breakfast again.",
      [
        ["¿Qué acaba de adoptar Julia?", ["una gatita", "un caballito", "un perro"], 0, ACABO],
        ["¿De quién es el perro más grande?", ["de Julia", "de Simón", "de la vecina"], 1, "El suyo: his, copying el perro it stands for."],
        ["¿Qué volvió a hacer Coco?", ["adoptar una gatita", "robar el panecito", "caminar"], 1, "Volvió a robar" + VOLVER],
      ],
      "Write about something new with a pet or another animal." + P6,
      "Acabo de adoptar un perrito. Suelo caminar con él por la mañana. Mi vecina tiene un gato; el suyo es más tranquilo que el mío. Sus juguetes son más nuevos que los míos. Ayer mi perrito volvió a comer mi zapato. Mañana volveré a esconder mis zapatos.",
    ),
  },
  "b1/7": {
    history: v(
      "The museum where Inés works",
      "quipu (knotted cords the Incas used to keep records), curiosidad (curiosity), recuerdan (remember)",
      ["Este es el museo donde trabajo.", "La sala que más visito es la sala de los incas.", "Bruno es el guía con quien preparo las visitas.", "Él es la persona que conoce todas las leyendas.", "Lo que más me gusta es el quipu, que tiene más de quinientos años.", "Si vienes un lunes, sí vas a encontrar silencio.", "Tú solo trae tu curiosidad.", "La historia que cuenta Bruno es lo que todos recuerdan."],
      "This is the museum where I work. The room I visit most is the room of the Incas. Bruno is the guide I prepare the tours with. He's the person who knows all the legends. What I like most is the quipu, which is more than five hundred years old. If you come on a Monday, you really will find quiet. You just bring your curiosity. The story Bruno tells is what everybody remembers.",
      [
        ["¿Cuál es la sala que más visita Inés?", ["la sala de los incas", "la biblioteca", "la entrada"], 0, "La sala que más visito: que adds a detail to la sala."],
        ["¿Con quién prepara Inés las visitas?", ["con un turista", "con Bruno", "con su abuelo"], 1, QUIEN],
        ["¿Qué es lo que todos recuerdan?", ["el quipu", "la historia que cuenta Bruno", "el silencio"], 1, LOQUE],
      ],
      "Describe a museum, a monument or an old place and the people in it." + P7,
      "Este es el museo donde aprendo historia. La sala que prefiero es muy pequeña. Bruno es el amigo con quien visito el museo. Él es la persona que conoce todas las leyendas. Lo que más me gusta es un mapa, que es muy antiguo. Si vienes conmigo, te enseño todo.",
    ),
    science: v(
      "The observatory where Vera works",
      "observatorio (observatory), invierno (winter), abrigo (coat)",
      ["Este es el observatorio donde trabajo.", "El telescopio que más uso es el pequeño.", "Hugo es el amigo con quien comparto el laboratorio.", "Él es la persona que conoce todas las plantas del jardín.", "Lo que más me gusta es el cielo de invierno, que siempre está lleno de estrellas.", "Si vienes un sábado, sí vas a ver Saturno.", "Tú solo trae tu abrigo.", "El café que prepara Hugo es lo que todos piden a las tres de la mañana."],
      "This is the observatory where I work. The telescope I use most is the small one. Hugo is the friend I share the lab with. He's the person who knows all the plants in the garden. What I like most is the winter sky, which is always full of stars. If you come on a Saturday, you really will see Saturn. You just bring your coat. The coffee Hugo makes is what everybody asks for at three in the morning.",
      [
        ["¿Cuál es el telescopio que más usa Vera?", ["el pequeño", "el grande", "el nuevo"], 0, "El telescopio que más uso: que adds a detail to el telescopio."],
        ["¿Con quién comparte Vera el laboratorio?", ["con un estudiante", "con Hugo", "con su papá"], 1, QUIEN],
        ["¿Qué es lo que todos piden a las tres de la mañana?", ["un abrigo", "el café de Hugo", "el telescopio"], 1, LOQUE],
      ],
      "Describe a place for science or nature and the people in it." + P7,
      "Este es el parque donde miro pájaros. El lugar que prefiero está cerca del río. Hugo es el amigo con quien camino siempre. Él es la persona que conoce todas las plantas. Lo que más me gusta es el silencio, que es perfecto por la mañana. Si vienes conmigo, te enseño todo.",
    ),
    tech: v(
      "The office where Nico works",
      "sorpresas (surprises), hicimos (we made)",
      ["Esta es la oficina donde trabajo.", "El programa que más uso es muy viejo.", "Mía es la diseñadora con quien hago los juegos.", "Ella es la persona que dibuja todos los personajes.", "Lo que más me gusta es el primer nivel, que siempre está lleno de sorpresas.", "Si vienes un viernes, sí vas a probar algo nuevo.", "Tú solo trae tu teléfono.", "El juego que hicimos el año pasado es lo que todos piden."],
      "This is the office where I work. The program I use most is very old. Mía is the designer I make the games with. She's the person who draws all the characters. What I like most is the first level, which is always full of surprises. If you come on a Friday, you really will try something new. You just bring your phone. The game we made last year is what everybody asks for.",
      [
        ["¿Cómo es el programa que más usa Nico?", ["muy viejo", "muy nuevo", "muy caro"], 0, "El programa que más uso: que adds a detail to el programa."],
        ["¿Con quién hace Nico los juegos?", ["con su hermano", "con Mía", "con un cliente"], 1, QUIEN],
        ["¿Qué es lo que todos piden?", ["el primer nivel", "el juego del año pasado", "un teléfono"], 1, LOQUE],
      ],
      "Describe a place where you play or work with technology, and the people in it." + P7,
      "Esta es la tienda donde compro mis juegos. El juego que prefiero es muy viejo. Mía es la amiga con quien juego en línea. Ella es la persona que gana siempre. Lo que más me gusta es el primer nivel, que es muy divertido. Si vienes a mi casa, te enseño todo.",
    ),
    health: v(
      "The park where Clara runs",
      "camino (path), entreno (I train), corredores (runners), aire fresco (fresh air)",
      ["Este es el parque donde corro.", "El camino que más uso pasa por el río.", "Iván es el amigo con quien entreno los sábados.", "Él es la persona que conoce a todos los corredores.", "Lo que más me gusta es la mañana, que siempre está llena de aire fresco.", "Si vienes un domingo, sí vas a encontrar una clase de yoga.", "Tú solo trae tu botella de agua.", "La ensalada que prepara Iván es lo que todos piden después."],
      "This is the park where I run. The path I use most goes by the river. Iván is the friend I train with on Saturdays. He's the person who knows all the runners. What I like most is the morning, which is always full of fresh air. If you come on a Sunday, you really will find a yoga class. You just bring your water bottle. The salad Iván makes is what everybody asks for afterwards.",
      [
        ["¿Por dónde pasa el camino que más usa Clara?", ["por el río", "por la clínica", "por el centro"], 0, "El camino que más uso: que adds a detail to el camino."],
        ["¿Con quién entrena Clara los sábados?", ["con una paciente", "con Iván", "con su mamá"], 1, QUIEN],
        ["¿Qué es lo que todos piden después?", ["agua", "la ensalada de Iván", "una clase de yoga"], 1, LOQUE],
      ],
      "Describe a place where you exercise or relax, and the people in it." + P7,
      "Este es el gimnasio donde hago ejercicio. La clase que prefiero es yoga. Iván es el amigo con quien corro los sábados. Él es la persona que conoce a todos. Lo que más me gusta es el jardín, que es muy grande. Si vienes conmigo, te enseño todo.",
    ),
    festivals: v(
      "The square where Paula dances",
      "pan de muerto (a sweet bread for the Day of the Dead)",
      ["Esta es la plaza donde bailamos.", "La fiesta que más me gusta es el Día de Muertos.", "Raúl es el músico con quien preparo el desfile.", "Él es la persona que conoce todas las canciones.", "Lo que más me gusta es el altar, que siempre está lleno de flores.", "Si vienes en noviembre, sí vas a encontrar pan de muerto.", "Tú solo trae una foto de tus abuelos.", "El chocolate que prepara mi abuela es lo que todos piden."],
      "This is the square where we dance. The festival I like most is the Day of the Dead. Raúl is the musician I prepare the parade with. He's the person who knows all the songs. What I like most is the altar, which is always full of flowers. If you come in November, you really will find pan de muerto. You just bring a photo of your grandparents. The chocolate my grandmother makes is what everybody asks for.",
      [
        ["¿Cuál es la fiesta que más le gusta a Paula?", ["el Día de Muertos", "la Navidad", "el carnaval"], 0, "La fiesta que más me gusta: que adds a detail to la fiesta."],
        ["¿Con quién prepara Paula el desfile?", ["con su abuela", "con Raúl", "con los vecinos"], 1, QUIEN],
        ["¿Qué es lo que todos piden?", ["flores", "el chocolate de la abuela", "una foto"], 1, LOQUE],
      ],
      "Describe the place where a festival or a holiday happens, and the people in it." + P7,
      "Esta es la plaza donde celebramos la fiesta. La canción que prefiero es muy vieja. Raúl es el amigo con quien bailo siempre. Él es la persona que conoce a todos los músicos. Lo que más me gusta es la comida, que es muy buena. Si vienes conmigo, te enseño todo.",
    ),
    animals: v(
      "The farm where Julia works",
      "queso (cheese)",
      ["Esta es la granja donde trabajo.", "El animal que más cuido es un caballo viejo.", "Simón es el granjero con quien comparto el trabajo.", "Él es la persona que conoce a todas las vacas por su nombre.", "Lo que más me gusta es el establo, que siempre está lleno de gatitos.", "Si vienes un domingo, sí vas a ver a Coco.", "Tú solo trae unas galletas.", "El queso que hace Simón es lo que todos piden."],
      "This is the farm where I work. The animal I look after most is an old horse. Simón is the farmer I share the work with. He's the person who knows all the cows by name. What I like most is the stable, which is always full of kittens. If you come on a Sunday, you really will see Coco. You just bring some treats. The cheese Simón makes is what everybody asks for.",
      [
        ["¿Cuál es el animal que más cuida Julia?", ["un caballo viejo", "una vaca", "un gatito"], 0, "El animal que más cuido: que adds a detail to el animal."],
        ["¿Con quién comparte Julia el trabajo?", ["con Coco", "con Simón", "con la vecina"], 1, QUIEN],
        ["¿Qué es lo que todos piden?", ["galletas", "el queso de Simón", "gatitos"], 1, LOQUE],
      ],
      "Describe a place with animals and the people (and animals) in it." + P7,
      "Este es el parque donde camino con mi perro. El lugar que prefiero está cerca del río. Ana es la vecina con quien camino siempre. Ella es la persona que conoce a todos los perros. Lo que más me gusta es la mañana, que es muy tranquila. Si vienes conmigo, te enseño todo.",
    ),
  },
};
