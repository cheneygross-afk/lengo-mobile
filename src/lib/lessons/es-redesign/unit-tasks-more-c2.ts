// Synced from cheneygross-afk/lengo:src/lib/lessons/es-redesign/unit-tasks-more-c2.ts by scripts/sync-content.mjs -- edit it there, not here.
// C2 "Read and write" lessons for the six newer topics (history, science,
// tech, health, festivals, animals). Same rules as unit-tasks-c2.ts: each
// version matches its unit's length, grammar and question count, and any
// word the course hasn't taught is glossed.
import { version as v, type MoreVersions } from "./unit-tasks";

const P1 = " Describe a person with cuyo, say who taught you something, what you value most and what the hard part is.";
const P2 = " Say what's on your mind, how hard or good something is, your favorite part of the day and how you learned something.";
const P3 = " Say how long you've been doing something, what you didn't count on, what you realized and what you still dream of.";
const P4 = " Write it as a polite formal message: say what the problem is, give a fact, and end with a polite ask.";
const P5 = " Start with a lesson you learned, then put the object first (Eso lo aprendí...). Use uno or se, pedir and preguntar, and darse cuenta.";
const P6 = " Tell a short story in the past: set the scene, say what suddenly happened, use había + participle once, one -azo, -ón or -ote word, and say whether you used usted or tú.";
const P7 = " Write it as a letter to friends in Spain, using vosotros: estáis, os, recordáis, venid, no os olvidéis, and one si hubieseis.";
const SPLIT = ": the split sentence puts the stress on who.";
const LO = ": lo + a describing word names an idea.";
const LODE = ": lo de points at a matter both people know.";
const GERUND = ": the gerund says how.";
const PLAIN = ": after a preposition, the plain verb.";
const LLEVO = ": llevar + time + gerund.";
const CUENTA = ": darse cuenta de is to realize.";
const SONAR = ": soñar takes con.";
const QUISIERA = ": quisiera is a soft way to say quiero.";
const SOFT = " softens a suggestion.";
const ASK = ": a polite ask, with the imperfect subjunctive.";
const FRONT = ": the object comes first, so lo repeats it.";
const PEDIR = ": pedir is to ask for something; preguntar is to ask a question.";
const REALIZE = ": darse cuenta is to realize; realizar is to carry out.";
const USTED = ": usted first, tú once you are invited.";
const PRET = ": the preterite tells what happened. Exitazo is a big éxito.";
const OS = ": os is 'you all' for vosotros, used in Spain.";
const SE = ": the -se ending is the other form of the imperfect subjunctive, the same as -ra.";
const NEGVOS = ": the negative vosotros command.";
const HELLO = "Queridos amigos: ¿cómo estáis?";
const TUTEO = "Desde entonces somos amigos y nos tuteamos.";
const USTED_LINE = "Yo, en cambio, le hablé de usted hasta que me dijo: «Tutéame, por favor».";
const USTED_EN = "I, on the other hand, called him usted until he said to me: \"Call me tú, please.\"";
const FECHA = "Le agradecería que nos diera una fecha concreta.";

export const C2_MORE: MoreVersions = {
  "c2/1": {
    history: v(
      "What Inés values",
      "mayas (Maya), archivo (archive), ruinas (ruins), investigando (researching)",
      ["Bruno, cuyos abuelos eran mayas, trabaja conmigo desde hace diez años.", "El archivo, en el cual pasamos todas las tardes, es el corazón del museo.", "Fue mi abuelo quien me enseñó a leer mapas antiguos.", "Lo que más valoro es el silencio de las ruinas.", "Lo difícil no es encontrar un documento, sino entender su historia.", "Lo mejor de este trabajo es descubrir algo nuevo cada día.", "Es por eso por lo que sigo investigando."],
      "Bruno, whose grandparents were Maya, has worked with me for ten years. The archive, in which we spend every afternoon, is the heart of the museum. It was my grandfather who taught me to read old maps. What I value most is the silence of the ruins. The hard part isn't finding a document, but understanding its story. The best thing about this job is discovering something new every day. That's why I keep researching.",
      [
        ["¿Quién le enseñó a Inés a leer mapas antiguos?", ["su abuelo", "Bruno", "un profesor"], 0, "Fue mi abuelo quien me enseñó a leer mapas antiguos" + SPLIT],
        ["¿Qué es lo que más valora Inés?", ["el dinero", "el silencio de las ruinas", "el museo"], 1, "Lo que más valoro es el silencio de las ruinas."],
        ["¿Qué es lo difícil, según Inés?", ["encontrar un documento", "entender su historia", "leer mapas"], 1, "Lo difícil no es encontrar un documento, sino entender su historia" + LO],
      ],
      "Write about a person who made you care about history or the past." + P1,
      "Mi amigo Bruno, cuya familia es de un pueblo muy antiguo, me acompaña a todos los museos. Fue Bruno quien me enseñó a amar la historia. Lo que más valoro es su paciencia. Lo difícil no es aprender fechas, sino entender a la gente de antes. Lo mejor de un museo es el silencio. Es por eso por lo que sigo visitándolos.",
    ),
    science: v(
      "What Vera values",
      "biólogos (biologists), observatorio (observatory), desierto (desert), investigando (researching)",
      ["Hugo, cuyos padres son biólogos, trabaja conmigo desde hace diez años.", "El observatorio, en el cual pasamos todas las noches, es el corazón del proyecto.", "Fue mi abuela quien me enseñó a mirar las estrellas.", "Lo que más valoro es el silencio del desierto.", "Lo difícil no es hacer una pregunta, sino encontrar la respuesta.", "Lo mejor de este trabajo es descubrir algo nuevo cada noche.", "Es por eso por lo que sigo investigando."],
      "Hugo, whose parents are biologists, has worked with me for ten years. The observatory, in which we spend every night, is the heart of the project. It was my grandmother who taught me to look at the stars. What I value most is the silence of the desert. The hard part isn't asking a question, but finding the answer. The best thing about this job is discovering something new every night. That's why I keep researching.",
      [
        ["¿Quién le enseñó a Vera a mirar las estrellas?", ["su abuela", "Hugo", "una profesora"], 0, "Fue mi abuela quien me enseñó a mirar las estrellas" + SPLIT],
        ["¿Qué es lo que más valora Vera?", ["el dinero", "el silencio del desierto", "el telescopio"], 1, "Lo que más valoro es el silencio del desierto."],
        ["¿Qué es lo difícil, según Vera?", ["hacer una pregunta", "encontrar la respuesta", "mirar las estrellas"], 1, "Lo difícil no es hacer una pregunta, sino encontrar la respuesta" + LO],
      ],
      "Write about a person who made you care about science or nature." + P1,
      "Mi amigo Hugo, cuyo jardín es el más bonito del barrio, me enseña algo nuevo cada semana. Fue Hugo quien me enseñó los nombres de los árboles. Lo que más valoro es su curiosidad. Lo difícil no es plantar una semilla, sino cuidarla. Lo mejor de la naturaleza es la calma. Es por eso por lo que sigo saliendo al campo.",
    ),
    tech: v(
      "What Nico values",
      "empresa (company), libertad (freedom), jugadores (players)",
      ["Mía, cuyos dibujos son ya famosos, trabaja conmigo desde hace diez años.", "La oficina, en la cual pasamos todas las tardes, es el corazón de la empresa.", "Fue mi hermano quien me enseñó a programar.", "Lo que más valoro es la libertad de crear.", "Lo difícil no es tener una idea, sino convertirla en un juego.", "Lo mejor de este trabajo es conocer a todos los jugadores.", "Es por eso por lo que sigo programando."],
      "Mía, whose drawings are already famous, has worked with me for ten years. The office, in which we spend every afternoon, is the heart of the company. It was my brother who taught me to program. What I value most is the freedom to create. The hard part isn't having an idea, but turning it into a game. The best thing about this job is getting to know all the players. That's why I keep programming.",
      [
        ["¿Quién le enseñó a Nico a programar?", ["su hermano", "Mía", "un profesor"], 0, "Fue mi hermano quien me enseñó a programar" + SPLIT],
        ["¿Qué es lo que más valora Nico?", ["el dinero", "la libertad de crear", "la oficina"], 1, "Lo que más valoro es la libertad de crear."],
        ["¿Qué es lo difícil, según Nico?", ["tener una idea", "convertirla en un juego", "conocer a los jugadores"], 1, "Lo difícil no es tener una idea, sino convertirla en un juego" + LO],
      ],
      "Write about a person who got you into technology or games." + P1,
      "Mi amiga Mía, cuya computadora es más vieja que la mía, juega conmigo cada sábado. Fue Mía quien me enseñó a usar mi primera consola. Lo que más valoro es su paciencia. Lo difícil no es empezar un juego, sino terminarlo. Lo mejor de jugar en línea es conocer a gente nueva. Es por eso por lo que sigo jugando.",
    ),
    health: v(
      "What Clara values",
      "pacientes (patients), clínica (clinic), enfermos (sick people), herida (wound)",
      ["Iván, cuyos pacientes son ya mayores, trabaja conmigo desde hace diez años.", "La clínica, en la cual pasamos todas las mañanas, es el corazón del barrio.", "Fue mi abuela quien me enseñó a cuidar a los enfermos.", "Lo que más valoro es la calma de los domingos.", "Lo difícil no es curar una herida, sino escuchar al paciente.", "Lo mejor de este trabajo es conocer a todos los vecinos.", "Es por eso por lo que sigo trabajando aquí."],
      "Iván, whose patients are already elderly, has worked with me for ten years. The clinic, in which we spend every morning, is the heart of the neighborhood. It was my grandmother who taught me to look after sick people. What I value most is the calm of Sundays. The hard part isn't treating a wound, but listening to the patient. The best thing about this job is knowing all the neighbors. That's why I keep working here.",
      [
        ["¿Quién le enseñó a Clara a cuidar a los enfermos?", ["su abuela", "Iván", "una doctora"], 0, "Fue mi abuela quien me enseñó a cuidar a los enfermos" + SPLIT],
        ["¿Qué es lo que más valora Clara?", ["el dinero", "la calma de los domingos", "la clínica"], 1, "Lo que más valoro es la calma de los domingos."],
        ["¿Qué es lo difícil, según Clara?", ["curar una herida", "escuchar al paciente", "conocer a los vecinos"], 1, "Lo difícil no es curar una herida, sino escuchar al paciente" + LO],
      ],
      "Write about a person who helps you look after your health." + P1,
      "Mi amigo Iván, cuya energía no se acaba nunca, corre conmigo cada domingo. Fue Iván quien me enseñó a respirar bien. Lo que más valoro es su constancia. Lo difícil no es empezar a hacer ejercicio, sino seguir cada semana. Lo mejor de correr es la calma que llega después. Es por eso por lo que sigo entrenando.",
    ),
    festivals: v(
      "What Paula values",
      "ensayamos (we rehearse), alegría (joy), tradición (tradition), reunir (to bring together)",
      ["Raúl, cuyas canciones son ya famosas, toca conmigo desde hace diez años.", "La plaza, en la cual ensayamos todas las tardes, es el corazón del pueblo.", "Fue mi abuela quien me enseñó a bailar.", "Lo que más valoro es la alegría de la gente.", "Lo difícil no es aprender un baile, sino mantener viva una tradición.", "Lo mejor de esta fiesta es reunir a todas las familias.", "Es por eso por lo que sigo bailando."],
      "Raúl, whose songs are already famous, has played with me for ten years. The square, in which we rehearse every afternoon, is the heart of the village. It was my grandmother who taught me to dance. What I value most is people's joy. The hard part isn't learning a dance, but keeping a tradition alive. The best thing about this festival is bringing all the families together. That's why I keep dancing.",
      [
        ["¿Quién le enseñó a Paula a bailar?", ["su abuela", "Raúl", "una maestra"], 0, "Fue mi abuela quien me enseñó a bailar" + SPLIT],
        ["¿Qué es lo que más valora Paula?", ["el dinero", "la alegría de la gente", "la plaza"], 1, "Lo que más valoro es la alegría de la gente."],
        ["¿Qué es lo difícil, según Paula?", ["aprender un baile", "mantener viva una tradición", "reunir a las familias"], 1, "Lo difícil no es aprender un baile, sino mantener viva una tradición" + LO],
      ],
      "Write about a person who keeps a party or tradition alive in your life." + P1,
      "Mi amigo Raúl, cuya guitarra suena en todas las fiestas, celebra conmigo cada cumpleaños. Fue Raúl quien me enseñó a cantar. Lo que más valoro es su alegría. Lo difícil no es organizar una fiesta, sino reunir a toda la familia. Lo mejor de las tradiciones es compartirlas. Es por eso por lo que sigo celebrando.",
    ),
    animals: v(
      "What Julia values",
      "granja (farm), confianza (trust), adoptar (to adopt)",
      ["Simón, cuyos caballos son ya viejos, trabaja conmigo desde hace diez años.", "La granja, en la cual pasamos todas las tardes, es el corazón del pueblo.", "Fue mi abuelo quien me enseñó a cuidar a un animal enfermo.", "Lo que más valoro es la confianza de un perro.", "Lo difícil no es adoptar un animal, sino cuidarlo toda la vida.", "Lo mejor de este trabajo es conocer a todos los animales.", "Es por eso por lo que sigo viviendo aquí."],
      "Simón, whose horses are already old, has worked with me for ten years. The farm, in which we spend every afternoon, is the heart of the village. It was my grandfather who taught me to look after a sick animal. What I value most is a dog's trust. The hard part isn't adopting an animal, but looking after it all its life. The best thing about this job is knowing all the animals. That's why I keep living here.",
      [
        ["¿Quién le enseñó a Julia a cuidar a un animal enfermo?", ["su abuelo", "Simón", "una vecina"], 0, "Fue mi abuelo quien me enseñó a cuidar a un animal enfermo" + SPLIT],
        ["¿Qué es lo que más valora Julia?", ["el dinero", "la confianza de un perro", "la granja"], 1, "Lo que más valoro es la confianza de un perro."],
        ["¿Qué es lo difícil, según Julia?", ["adoptar un animal", "cuidarlo toda la vida", "conocer a los animales"], 1, "Lo difícil no es adoptar un animal, sino cuidarlo toda la vida" + LO],
      ],
      "Write about a person who taught you to care for animals." + P1,
      "Mi amigo Simón, cuyo perro es mi mejor amigo, pasea conmigo cada tarde. Fue Simón quien me enseñó a cuidar a un animal. Lo que más valoro es su paciencia. Lo difícil no es adoptar un perro, sino educarlo. Lo mejor de tener una mascota es la compañía. Es por eso por lo que sigo adoptando animales.",
    ),
  },
  "c2/2": {
    history: v(
      "What's on Inés's mind",
      "exposición (exhibition), ruinas (ruins), archivo (archive), investigando (researching)",
      ["Lo de la exposición me tiene preocupada.", "No te imaginas lo difícil que es leer una carta de 1700.", "Caminar entre las ruinas es mi parte favorita del día.", "El ordenar todos los documentos cada viernes me cansa.", "Aprendí a leer mapas mirando a mi abuelo.", "Después de cerrar el museo, ceno con Bruno.", "Sigo investigando y, sin visitar el archivo, no sabría vivir."],
      "The business with the exhibition has me worried. You can't imagine how hard it is to read a letter from 1700. Walking among the ruins is my favorite part of the day. Sorting all the documents every Friday tires me out. I learned to read maps by watching my grandfather. After closing the museum, I have dinner with Bruno. I keep researching and, without visiting the archive, I wouldn't know how to live.",
      [
        ["¿Qué le preocupa a Inés?", ["lo de la exposición", "lo de las ruinas", "lo de Bruno"], 0, "Lo de la exposición" + LODE],
        ["¿Cómo aprendió Inés a leer mapas?", ["leyendo libros", "mirando a su abuelo", "yendo a clases"], 1, "Aprendí a leer mapas mirando a mi abuelo" + GERUND],
        ["¿Qué hace Inés después de cerrar el museo?", ["Se acuesta.", "Cena con Bruno.", "Ordena los documentos."], 1, "Después de cerrar el museo, ceno con Bruno" + PLAIN],
      ],
      "Write about something to do with history or the past that's on your mind." + P2,
      "Lo del examen de historia me tiene pensando. No te imaginas lo difícil que es recordar tantas fechas. Leer sobre los incas es mi parte favorita del día. Aprendí a amar la historia escuchando a mi abuelo. Después de estudiar, veo un documental. Mi amigo Bruno dice que sigo comprando demasiados libros, y tiene razón.",
    ),
    science: v(
      "What's on Vera's mind",
      "madrugada (early hours), anotar (to write down), datos (data), observatorio (observatory)",
      ["Lo del eclipse me tiene preocupada.", "No te imaginas lo caro que es reparar un telescopio.", "Mirar el cielo de madrugada es mi parte favorita del día.", "El anotar todos los datos cada noche me cansa.", "Aprendí a observar las estrellas mirando a mi abuela.", "Después de cerrar el observatorio, desayuno con Hugo.", "Sigo buscando planetas y, sin mirar el cielo, no sabría vivir."],
      "The business with the eclipse has me worried. You can't imagine how expensive it is to repair a telescope. Looking at the sky in the early hours is my favorite part of the day. Writing down all the data every night tires me out. I learned to observe the stars by watching my grandmother. After closing the observatory, I have breakfast with Hugo. I keep looking for planets and, without looking at the sky, I wouldn't know how to live.",
      [
        ["¿Qué le preocupa a Vera?", ["lo del eclipse", "lo del telescopio nuevo", "lo de Hugo"], 0, "Lo del eclipse" + LODE],
        ["¿Cómo aprendió Vera a observar las estrellas?", ["leyendo libros", "mirando a su abuela", "yendo a clases"], 1, "Aprendí a observar las estrellas mirando a mi abuela" + GERUND],
        ["¿Qué hace Vera después de cerrar el observatorio?", ["Se acuesta.", "Desayuna con Hugo.", "Anota los datos."], 1, "Después de cerrar el observatorio, desayuno con Hugo" + PLAIN],
      ],
      "Write about something to do with science or nature that's on your mind." + P2,
      "Lo del cambio de clima me tiene pensando. No te imaginas lo bonito que es ver salir el sol en la montaña. Regar las plantas es mi parte favorita del día. Aprendí a cuidar un jardín ayudando a mi abuela. Después de trabajar, salgo a caminar. Mi amigo Hugo dice que sigo comprando demasiadas plantas, y tiene razón.",
    ),
    tech: v(
      "What's on Nico's mind",
      "actualización (update), código (code), partida (game)",
      ["Lo de la actualización me tiene preocupado.", "No te imaginas lo difícil que es encontrar un error en el código.", "Jugar una partida después del almuerzo es mi parte favorita del día.", "El responder todos los mensajes cada mañana me cansa.", "Aprendí a programar mirando videos.", "Después de apagar la computadora, ceno con Mía.", "Sigo creando juegos y, sin programar, no sabría vivir."],
      "The business with the update has me worried. You can't imagine how hard it is to find a mistake in the code. Playing a game after lunch is my favorite part of the day. Answering all the messages every morning tires me out. I learned to program by watching videos. After turning off the computer, I have dinner with Mía. I keep creating games and, without programming, I wouldn't know how to live.",
      [
        ["¿Qué le preocupa a Nico?", ["lo de la actualización", "lo de los mensajes", "lo de Mía"], 0, "Lo de la actualización" + LODE],
        ["¿Cómo aprendió Nico a programar?", ["leyendo libros", "mirando videos", "yendo a clases"], 1, "Aprendí a programar mirando videos" + GERUND],
        ["¿Qué hace Nico después de apagar la computadora?", ["Se acuesta.", "Cena con Mía.", "Responde mensajes."], 1, "Después de apagar la computadora, ceno con Mía" + PLAIN],
      ],
      "Write about something to do with technology or games that's on your mind." + P2,
      "Lo de mi celular roto me tiene pensando. No te imaginas lo caro que es arreglar una pantalla. Jugar en línea es mi parte favorita del día. Aprendí a usar la computadora mirando a mi hermano. Después de cenar, veo videos. Mi amiga Mía dice que sigo descargando demasiadas aplicaciones, y tiene razón.",
    ),
    health: v(
      "What's on Clara's mind",
      "maratón (marathon), turno (shift), formularios (forms), pacientes (patients), entrenando (training)",
      ["Lo del maratón me tiene preocupada.", "No te imaginas lo difícil que es dormir después de un turno de noche.", "Caminar por el parque es mi parte favorita del día.", "El llenar todos los formularios cada tarde me cansa.", "Aprendí a cuidar a los pacientes mirando a mi abuela.", "Después de terminar el turno, ceno con Iván.", "Sigo entrenando y, sin correr, no sabría vivir."],
      "The business with the marathon has me worried. You can't imagine how hard it is to sleep after a night shift. Walking in the park is my favorite part of the day. Filling in all the forms every afternoon tires me out. I learned to look after patients by watching my grandmother. After finishing my shift, I have dinner with Iván. I keep training and, without running, I wouldn't know how to live.",
      [
        ["¿Qué le preocupa a Clara?", ["lo del maratón", "lo del parque", "lo de Iván"], 0, "Lo del maratón" + LODE],
        ["¿Cómo aprendió Clara a cuidar a los pacientes?", ["leyendo libros", "mirando a su abuela", "yendo a clases"], 1, "Aprendí a cuidar a los pacientes mirando a mi abuela" + GERUND],
        ["¿Qué hace Clara después de terminar el turno?", ["Se acuesta.", "Cena con Iván.", "Llena formularios."], 1, "Después de terminar el turno, ceno con Iván" + PLAIN],
      ],
      "Write about something to do with your health that's on your mind." + P2,
      "Lo de la carrera del domingo me tiene pensando. No te imaginas lo difícil que es levantarse a las seis. Estirar en el parque es mi parte favorita del día. Aprendí a cocinar sano ayudando a mi madre. Después de entrenar, tomo mucha agua. Mi amigo Iván dice que sigo durmiendo muy poco, y tiene razón.",
    ),
    festivals: v(
      "What's on Paula's mind",
      "desfile (parade), traje (costume), ensayar (to rehearse), coser (to sew)",
      ["Lo del desfile me tiene preocupada.", "No te imaginas lo caro que es hacer un traje nuevo.", "Ensayar en la plaza es mi parte favorita del día.", "El coser todos los trajes cada año me cansa.", "Aprendí a bailar mirando a mi abuela.", "Después de terminar el ensayo, ceno con Raúl.", "Sigo bailando y, sin oír la música de mi pueblo, no sabría vivir."],
      "The business with the parade has me worried. You can't imagine how expensive it is to make a new costume. Rehearsing in the square is my favorite part of the day. Sewing all the costumes every year tires me out. I learned to dance by watching my grandmother. After finishing the rehearsal, I have dinner with Raúl. I keep dancing and, without hearing my village's music, I wouldn't know how to live.",
      [
        ["¿Qué le preocupa a Paula?", ["lo del desfile", "lo de la plaza", "lo de Raúl"], 0, "Lo del desfile" + LODE],
        ["¿Cómo aprendió Paula a bailar?", ["leyendo libros", "mirando a su abuela", "yendo a clases"], 1, "Aprendí a bailar mirando a mi abuela" + GERUND],
        ["¿Qué hace Paula después de terminar el ensayo?", ["Se acuesta.", "Cena con Raúl.", "Cose los trajes."], 1, "Después de terminar el ensayo, ceno con Raúl" + PLAIN],
      ],
      "Write about a party or celebration that's on your mind." + P2,
      "Lo de la fiesta de mi abuela me tiene pensando. No te imaginas lo difícil que es cocinar para cuarenta personas. Elegir la música es mi parte favorita del día. Aprendí a organizar fiestas ayudando a mi madre. Después de cenar, bailamos todos. Mi amigo Raúl dice que sigo invitando a demasiada gente, y tiene razón.",
    ),
    animals: v(
      "What's on Julia's mind",
      "operación (operation), jaulas (cages), montar a caballo (to ride a horse), clínica (clinic)",
      ["Lo de la operación de Coco me tiene preocupada.", "No te imaginas lo difícil que es bañar a un gato.", "Pasear a los perros es mi parte favorita del día.", "El limpiar todas las jaulas cada sábado me cansa.", "Aprendí a montar a caballo mirando a Simón.", "Después de cerrar la clínica, paseo a Luna.", "Sigo adoptando animales y, sin ellos, no sabría vivir."],
      "The business with Coco's operation has me worried. You can't imagine how hard it is to bathe a cat. Walking the dogs is my favorite part of the day. Cleaning all the cages every Saturday tires me out. I learned to ride a horse by watching Simón. After closing the clinic, I walk Luna. I keep adopting animals and, without them, I wouldn't know how to live.",
      [
        ["¿Qué le preocupa a Julia?", ["lo de la operación de Coco", "lo de las jaulas", "lo de Simón"], 0, "Lo de la operación de Coco" + LODE],
        ["¿Cómo aprendió Julia a montar a caballo?", ["leyendo libros", "mirando a Simón", "yendo a clases"], 1, "Aprendí a montar a caballo mirando a Simón" + GERUND],
        ["¿Qué hace Julia después de cerrar la clínica?", ["Se acuesta.", "Pasea a Luna.", "Limpia las jaulas."], 1, "Después de cerrar la clínica, paseo a Luna" + PLAIN],
      ],
      "Write about an animal or a pet that's on your mind." + P2,
      "Lo de mi gato enfermo me tiene pensando. No te imaginas lo difícil que es darle una pastilla. Pasear al perro es mi parte favorita del día. Aprendí a cuidar animales ayudando a mi abuelo. Después de cenar, juego con ellos. Mi amigo Simón dice que sigo comprando demasiados juguetes, y tiene razón.",
    ),
  },
  "c2/3": {
    history: v(
      "Twenty years in the archive",
      "archivo (archive), rotos (torn), presupuesto (budget), copias (copies), imprimir (to print)",
      ["Llevo veinte años trabajando en este archivo.", "Al principio no contaba con tantos documentos rotos.", "Todo depende del presupuesto.", "Ayer me di cuenta de que guardaba demasiadas copias.", "A Bruno le dije que estaba a punto de dejar el proyecto.", "A mí me parece que con menos papeles se trabaja mejor, pero a él no le convence.", "Así que dejé de imprimir y me puse a ordenar lo que no usaba.", "Sigo soñando con un museo lleno de niños."],
      "I've been working in this archive for twenty years. At first I didn't count on so many torn documents. Everything depends on the budget. Yesterday I realized I was keeping too many copies. I told Bruno I was about to leave the project. It seems to me that you work better with less paper, but he isn't convinced. So I stopped printing and started sorting what I didn't use. I still dream of a museum full of children.",
      [
        ["¿Cuánto tiempo lleva Inés trabajando en este archivo?", ["veinte años", "dos años", "diez años"], 0, "Llevo veinte años trabajando en este archivo" + LLEVO],
        ["¿De qué se dio cuenta Inés?", ["de que el archivo era pequeño", "de que guardaba demasiadas copias", "de que Bruno se iba"], 1, "Me di cuenta de que guardaba demasiadas copias" + CUENTA],
        ["¿Con qué sigue soñando Inés?", ["con otro trabajo", "con un museo lleno de niños", "con un viaje"], 1, "Sigo soñando con un museo lleno de niños" + SONAR],
      ],
      "Write about your interest in history over the years." + P3,
      "Llevo cinco años leyendo sobre la historia de mi país. Al principio no contaba con tantos libros. Todo depende del tiempo libre. Ayer me di cuenta de que casi no visitaba museos. A mi amigo Bruno le dije que estaba a punto de empezar un curso. A mí me parece que la historia se aprende caminando. Sigo soñando con ver Machu Picchu.",
    ),
    science: v(
      "Fifteen years under the desert sky",
      "desierto (desert), nubladas (cloudy), clima (weather), borrar (to delete), datos (data)",
      ["Llevo quince años estudiando el cielo del desierto.", "Al principio no contaba con tantas noches nubladas.", "Todo depende del clima.", "Ayer me di cuenta de que guardaba demasiadas fotos.", "A Hugo le dije que estaba a punto de borrar la mitad.", "A mí me parece que con menos datos se piensa mejor, pero a él no le convence.", "Así que dejé de sacar fotos y me puse a ordenar las que tenía.", "Sigo soñando con un planeta lleno de agua."],
      "I've been studying the desert sky for fifteen years. At first I didn't count on so many cloudy nights. Everything depends on the weather. Yesterday I realized I was keeping too many photos. I told Hugo I was about to delete half of them. It seems to me that you think better with less data, but he isn't convinced. So I stopped taking photos and started sorting the ones I had. I still dream of a planet full of water.",
      [
        ["¿Cuánto tiempo lleva Vera estudiando el cielo del desierto?", ["quince años", "cinco años", "diez años"], 0, "Llevo quince años estudiando el cielo del desierto" + LLEVO],
        ["¿De qué se dio cuenta Vera?", ["de que el cielo estaba nublado", "de que guardaba demasiadas fotos", "de que Hugo se iba"], 1, "Me di cuenta de que guardaba demasiadas fotos" + CUENTA],
        ["¿Con qué sigue soñando Vera?", ["con otro trabajo", "con un planeta lleno de agua", "con un telescopio nuevo"], 1, "Sigo soñando con un planeta lleno de agua" + SONAR],
      ],
      "Write about your interest in science or nature over the years." + P3,
      "Llevo tres años cuidando un pequeño jardín. Al principio no contaba con tantos insectos. Todo depende del clima. Ayer me di cuenta de que regaba demasiado las plantas. A mi amigo Hugo le dije que estaba a punto de plantar tomates. A mí me parece que la naturaleza enseña paciencia. Sigo soñando con tener un huerto grande.",
    ),
    tech: v(
      "Twelve years with computers",
      "reuniones (meetings), archivos (files), borrar (to delete), aplicaciones (apps), descargar (to download)",
      ["Llevo doce años trabajando con computadoras.", "Al principio no contaba con tantas reuniones.", "Todo depende del equipo.", "Ayer me di cuenta de que guardaba demasiados archivos.", "A Mía le dije que estaba a punto de borrar todo.", "A mí me parece que con menos aplicaciones se trabaja mejor, pero a ella no le convence.", "Así que dejé de descargar programas y me puse a borrar los que no usaba.", "Sigo soñando con un juego lleno de mundos nuevos."],
      "I've been working with computers for twelve years. At first I didn't count on so many meetings. Everything depends on the team. Yesterday I realized I was keeping too many files. I told Mía I was about to delete everything. It seems to me that you work better with fewer apps, but she isn't convinced. So I stopped downloading programs and started deleting the ones I didn't use. I still dream of a game full of new worlds.",
      [
        ["¿Cuánto tiempo lleva Nico trabajando con computadoras?", ["doce años", "dos años", "veinte años"], 0, "Llevo doce años trabajando con computadoras" + LLEVO],
        ["¿De qué se dio cuenta Nico?", ["de que su computadora era vieja", "de que guardaba demasiados archivos", "de que Mía se iba"], 1, "Me di cuenta de que guardaba demasiados archivos" + CUENTA],
        ["¿Con qué sigue soñando Nico?", ["con otro trabajo", "con un juego lleno de mundos nuevos", "con una computadora nueva"], 1, "Sigo soñando con un juego lleno de mundos nuevos" + SONAR],
      ],
      "Write about technology or games in your life over the years." + P3,
      "Llevo diez años jugando a los videojuegos. Al principio no contaba con tantas horas frente a la pantalla. Todo depende del trabajo. Ayer me di cuenta de que casi no leía. A mi amiga Mía le dije que estaba a punto de vender la consola. A mí me parece que hay tiempo para todo. Sigo soñando con crear mi propio juego.",
    ),
    health: v(
      "Twenty years at the hospital",
      "turnos (shifts), descanso (rest), siestas (naps)",
      ["Llevo veinte años trabajando en este hospital.", "Al principio no contaba con tantos turnos de noche.", "Todo depende del descanso.", "Ayer me di cuenta de que tomaba demasiado café.", "A Iván le dije que estaba a punto de pedir vacaciones.", "A mí me parece que con más sueño se trabaja mejor, pero a él no le convence.", "Así que dejé de tomar café y me puse a caminar por las tardes.", "Sigo soñando con una semana llena de siestas."],
      "I've been working at this hospital for twenty years. At first I didn't count on so many night shifts. Everything depends on rest. Yesterday I realized I was drinking too much coffee. I told Iván I was about to ask for a vacation. It seems to me that you work better with more sleep, but he isn't convinced. So I stopped drinking coffee and started walking in the afternoons. I still dream of a week full of naps.",
      [
        ["¿Cuánto tiempo lleva Clara trabajando en este hospital?", ["veinte años", "dos años", "diez años"], 0, "Llevo veinte años trabajando en este hospital" + LLEVO],
        ["¿De qué se dio cuenta Clara?", ["de que dormía demasiado", "de que tomaba demasiado café", "de que Iván se iba"], 1, "Me di cuenta de que tomaba demasiado café" + CUENTA],
        ["¿Con qué sigue soñando Clara?", ["con otro trabajo", "con una semana llena de siestas", "con un maratón"], 1, "Sigo soñando con una semana llena de siestas" + SONAR],
      ],
      "Write about your health and habits over the years." + P3,
      "Llevo dos años corriendo por las mañanas. Al principio no contaba con tanto cansancio. Todo depende del descanso. Ayer me di cuenta de que dormía muy poco. A mi amigo Iván le dije que estaba a punto de dejarlo. A mí me parece que la salud se construye poco a poco. Sigo soñando con correr un maratón.",
    ),
    festivals: v(
      "Twenty years at the festival",
      "ensayos (rehearsals), trajes (costumes), adornos (decorations), telas (fabrics), bailarines (dancers)",
      ["Llevo veinte años bailando en esta fiesta.", "Al principio no contaba con tantos ensayos.", "Todo depende del público.", "Ayer me di cuenta de que guardaba demasiados trajes.", "A Raúl le dije que estaba a punto de regalar la mitad.", "A mí me parece que con menos adornos se baila mejor, pero a él no le convence.", "Así que dejé de comprar telas y me puse a arreglar lo que tenía.", "Sigo soñando con una plaza llena de bailarines."],
      "I've been dancing at this festival for twenty years. At first I didn't count on so many rehearsals. Everything depends on the audience. Yesterday I realized I was keeping too many costumes. I told Raúl I was about to give half of them away. It seems to me that you dance better with fewer decorations, but he isn't convinced. So I stopped buying fabrics and started mending what I had. I still dream of a square full of dancers.",
      [
        ["¿Cuánto tiempo lleva Paula bailando en esta fiesta?", ["veinte años", "dos años", "diez años"], 0, "Llevo veinte años bailando en esta fiesta" + LLEVO],
        ["¿De qué se dio cuenta Paula?", ["de que la plaza era pequeña", "de que guardaba demasiados trajes", "de que Raúl se iba"], 1, "Me di cuenta de que guardaba demasiados trajes" + CUENTA],
        ["¿Con qué sigue soñando Paula?", ["con otro pueblo", "con una plaza llena de bailarines", "con un traje nuevo"], 1, "Sigo soñando con una plaza llena de bailarines" + SONAR],
      ],
      "Write about a party or tradition in your life over the years." + P3,
      "Llevo diez años celebrando el Año Nuevo con mis vecinos. Al principio no contaba con tanta gente. Todo depende de la música. Ayer me di cuenta de que siempre cocinaba lo mismo. A mi amigo Raúl le dije que estaba a punto de cambiar el menú. A mí me parece que una fiesta se hace entre todos. Sigo soñando con una fiesta en la playa.",
    ),
    animals: v(
      "Fifteen years with animals",
      "emergencias (emergencies), dueño (owner), refugio (shelter)",
      ["Llevo quince años cuidando animales en este pueblo.", "Al principio no contaba con tantas emergencias.", "Todo depende del dueño.", "Ayer me di cuenta de que tenía demasiados gatos en casa.", "A Simón le dije que estaba a punto de abrir un refugio.", "A mí me parece que con más espacio se vive mejor, pero a él no le convence.", "Así que dejé de buscar casa y me puse a construir el refugio.", "Sigo soñando con un campo lleno de caballos."],
      "I've been looking after animals in this village for fifteen years. At first I didn't count on so many emergencies. Everything depends on the owner. Yesterday I realized I had too many cats at home. I told Simón I was about to open a shelter. It seems to me that you live better with more space, but he isn't convinced. So I stopped looking for a house and started building the shelter. I still dream of a field full of horses.",
      [
        ["¿Cuánto tiempo lleva Julia cuidando animales en este pueblo?", ["quince años", "cinco años", "diez años"], 0, "Llevo quince años cuidando animales en este pueblo" + LLEVO],
        ["¿De qué se dio cuenta Julia?", ["de que la clínica era pequeña", "de que tenía demasiados gatos en casa", "de que Simón se iba"], 1, "Me di cuenta de que tenía demasiados gatos en casa" + CUENTA],
        ["¿Con qué sigue soñando Julia?", ["con otro pueblo", "con un campo lleno de caballos", "con un perro nuevo"], 1, "Sigo soñando con un campo lleno de caballos" + SONAR],
      ],
      "Write about an animal or a pet in your life over the years." + P3,
      "Llevo seis años viviendo con mi perro. Al principio no contaba con tantos paseos. Todo depende del clima. Ayer me di cuenta de que casi no jugaba con él. A mi amigo Simón le dije que estaba a punto de adoptar un gato. A mí me parece que un animal cambia una casa. Sigo soñando con tener un caballo.",
    ),
  },
  "c2/4": {
    history: v(
      "A formal message from Inés",
      "sala (room), inaceptable (unacceptable), restaurador (restorer), reparaciones (repairs)",
      ["Quisiera comentarle un problema con el museo.", "El hecho de que la sala maya lleve un mes cerrada me parece inaceptable.", "De hecho, las escuelas no pueden visitarla.", "Es decir, los niños se quedan sin su clase de historia.", "Tal vez debiéramos contratar a otro restaurador.", "No obstante, sé que las reparaciones son caras.", "En definitiva, es una cuestión de educación.", FECHA],
      "I'd like to raise a problem with the museum. The fact that the Maya room has been closed for a month seems unacceptable to me. In fact, schools can't visit it. That is, the children miss their history class. Perhaps we should hire another restorer. Nevertheless, I know repairs are expensive. All in all, it's a matter of education. I'd be grateful if you gave us a specific date.",
      [
        ["¿Sobre qué escribe Inés?", ["sobre un problema con el museo", "sobre una fiesta", "sobre su sueldo"], 0, "Quisiera comentarle un problema con el museo" + QUISIERA],
        ["¿Qué propone Inés?", ["cerrar el museo", "contratar a otro restaurador", "subir los precios"], 1, "Tal vez debiéramos contratar a otro restaurador: debiéramos" + SOFT],
        ["¿Qué pide Inés al final?", ["que le suban el sueldo", "que les den una fecha concreta", "que cierren la sala"], 1, FECHA.slice(0, -1) + ASK],
      ],
      "Write to a museum or a city office about a problem with an old building or a monument." + P4,
      "Quisiera comentarle un problema con la iglesia antigua de mi barrio. El hecho de que el techo lleve un año roto me parece inaceptable. De hecho, entra agua cuando llueve. Es decir, las pinturas están en peligro. No obstante, sé que la reparación es cara. En definitiva, es parte de nuestra historia. Le agradecería que enviara a un experto este mes.",
    ),
    science: v(
      "A formal message from Vera",
      "laboratorio (lab), microscopio (microscope), inaceptable (unacceptable), detenido (stopped), instrumentos (instruments)",
      ["Quisiera comentarle un problema con el laboratorio.", "El hecho de que el microscopio lleve un mes sin funcionar me parece inaceptable.", "De hecho, los estudiantes no pueden terminar sus experimentos.", "Es decir, el proyecto está detenido.", "Tal vez debiéramos comprar un equipo nuevo.", "No obstante, sé que los instrumentos son caros.", "En definitiva, es una cuestión de tiempo.", FECHA],
      "I'd like to raise a problem with the lab. The fact that the microscope hasn't worked for a month seems unacceptable to me. In fact, the students can't finish their experiments. That is, the project is stopped. Perhaps we should buy new equipment. Nevertheless, I know instruments are expensive. All in all, it's a matter of time. I'd be grateful if you gave us a specific date.",
      [
        ["¿Sobre qué escribe Vera?", ["sobre un problema con el laboratorio", "sobre una fiesta", "sobre su sueldo"], 0, "Quisiera comentarle un problema con el laboratorio" + QUISIERA],
        ["¿Qué propone Vera?", ["cerrar el laboratorio", "comprar un equipo nuevo", "cambiar de proyecto"], 1, "Tal vez debiéramos comprar un equipo nuevo: debiéramos" + SOFT],
        ["¿Qué pide Vera al final?", ["que le suban el sueldo", "que les den una fecha concreta", "que cierren el proyecto"], 1, FECHA.slice(0, -1) + ASK],
      ],
      "Write to a city office or a park about a problem to do with nature or the environment." + P4,
      "Quisiera comentarle un problema con el parque de mi barrio. El hecho de que nadie riegue los árboles desde junio me parece inaceptable. De hecho, tres ya están secos. Es decir, estamos perdiendo la poca sombra que tenemos. No obstante, sé que hay poca agua. En definitiva, necesitamos una solución. Le agradecería que enviara a un jardinero esta semana.",
    ),
    tech: v(
      "A formal message from Nico",
      "conexión (connection), fallando (failing), inaceptable (unacceptable), confianza (trust)",
      ["Quisiera comentarle un problema con el servicio de internet.", "El hecho de que la conexión lleve un mes fallando me parece inaceptable.", "De hecho, no puedo trabajar desde casa por las tardes.", "Es decir, estoy perdiendo clientes.", "Tal vez debieran cambiar el equipo.", "No obstante, sé que las reparaciones llevan tiempo.", "En definitiva, es una cuestión de confianza.", "Le agradecería que me diera una fecha concreta."],
      "I'd like to raise a problem with the internet service. The fact that the connection has been failing for a month seems unacceptable to me. In fact, I can't work from home in the afternoons. That is, I'm losing clients. Perhaps you should change the equipment. Nevertheless, I know repairs take time. All in all, it's a matter of trust. I'd be grateful if you gave me a specific date.",
      [
        ["¿Sobre qué escribe Nico?", ["sobre un problema con el servicio de internet", "sobre un juego nuevo", "sobre su sueldo"], 0, "Quisiera comentarle un problema con el servicio de internet" + QUISIERA],
        ["¿Qué propone Nico?", ["cancelar el servicio", "cambiar el equipo", "bajar el precio"], 1, "Tal vez debieran cambiar el equipo: debieran" + SOFT],
        ["¿Qué pide Nico al final?", ["que le bajen el precio", "que le den una fecha concreta", "que le regalen un mes"], 1, "Le agradecería que me diera una fecha concreta" + ASK],
      ],
      "Write to a phone or internet company, or to an app's support team, about a problem." + P4,
      "Quisiera comentarle un problema con mi celular nuevo. El hecho de que la batería dure solo dos horas me parece inaceptable. De hecho, lo compré hace una semana. Es decir, no puedo usarlo fuera de casa. No obstante, sé que estos errores ocurren. En definitiva, necesito una solución rápida. Le agradecería que me enviara otro esta semana.",
    ),
    health: v(
      "A formal message from Clara",
      "centro de salud (health center), inaceptable (unacceptable), desprotegidos (unprotected), presupuesto (budget)",
      ["Quisiera comentarle un problema con el centro de salud.", "El hecho de que no haya médico los fines de semana me parece inaceptable.", "De hecho, mi madre tuvo que esperar dos días.", "Es decir, los vecinos mayores están desprotegidos.", "Tal vez debiéramos contratar a otro doctor.", "No obstante, sé que el presupuesto es limitado.", "En definitiva, es una cuestión de salud.", FECHA],
      "I'd like to raise a problem with the health center. The fact that there's no doctor at weekends seems unacceptable to me. In fact, my mother had to wait two days. That is, the older neighbors are unprotected. Perhaps we should hire another doctor. Nevertheless, I know the budget is limited. All in all, it's a matter of health. I'd be grateful if you gave us a specific date.",
      [
        ["¿Sobre qué escribe Clara?", ["sobre un problema con el centro de salud", "sobre una fiesta", "sobre su sueldo"], 0, "Quisiera comentarle un problema con el centro de salud" + QUISIERA],
        ["¿Qué propone Clara?", ["cerrar el centro", "contratar a otro doctor", "subir los precios"], 1, "Tal vez debiéramos contratar a otro doctor: debiéramos" + SOFT],
        ["¿Qué pide Clara al final?", ["que le suban el sueldo", "que les den una fecha concreta", "que cierren los domingos"], 1, FECHA.slice(0, -1) + ASK],
      ],
      "Write to a gym, a clinic or a city office about a problem that affects people's health." + P4,
      "Quisiera comentarle un problema con el gimnasio. El hecho de que las duchas lleven un mes sin agua caliente me parece inaceptable. De hecho, muchos socios ya no vienen. Es decir, estamos pagando por un servicio incompleto. No obstante, siempre he pagado a tiempo. En definitiva, necesitamos una reparación urgente. Le agradecería que enviara a un técnico esta semana.",
    ),
    festivals: v(
      "A formal message from Paula",
      "obras (building work), inaceptable (unacceptable), bailarines (dancers), ensayar (to rehearse), desfile (parade)",
      ["Quisiera comentarle un problema con la fiesta del pueblo.", "El hecho de que la plaza lleve un mes en obras me parece inaceptable.", "De hecho, los bailarines no pueden ensayar.", "Es decir, el desfile está en peligro.", "Tal vez debiéramos usar el patio de la escuela.", "No obstante, sé que las obras son necesarias.", "En definitiva, es una cuestión de tradición.", FECHA],
      "I'd like to raise a problem with the village festival. The fact that the square has been under construction for a month seems unacceptable to me. In fact, the dancers can't rehearse. That is, the parade is in danger. Perhaps we should use the school courtyard. Nevertheless, I know the building work is necessary. All in all, it's a matter of tradition. I'd be grateful if you gave us a specific date.",
      [
        ["¿Sobre qué escribe Paula?", ["sobre un problema con la fiesta del pueblo", "sobre un viaje", "sobre su sueldo"], 0, "Quisiera comentarle un problema con la fiesta del pueblo" + QUISIERA],
        ["¿Qué propone Paula?", ["cancelar la fiesta", "usar el patio de la escuela", "cambiar de pueblo"], 1, "Tal vez debiéramos usar el patio de la escuela: debiéramos" + SOFT],
        ["¿Qué pide Paula al final?", ["que le paguen los trajes", "que les den una fecha concreta", "que cierren la plaza"], 1, FECHA.slice(0, -1) + ASK],
      ],
      "Write to a city office about a problem with a local party, parade or festival." + P4,
      "Quisiera comentarle un problema con la fiesta de mi barrio. El hecho de que no haya luz en la plaza me parece inaceptable. De hecho, el año pasado terminamos a oscuras. Es decir, las familias se fueron temprano. No obstante, sé que el presupuesto es pequeño. En definitiva, queremos una fiesta segura. Le agradecería que arreglara las luces antes de julio.",
    ),
    animals: v(
      "A formal message from Julia",
      "fuente (fountain), inaceptable (unacceptable), sufren (suffer), reparaciones (repairs)",
      ["Quisiera comentarle un problema con el parque.", "El hecho de que la fuente lleve un mes sin agua me parece inaceptable.", "De hecho, los perros no tienen dónde beber.", "Es decir, los animales sufren con el calor.", "Tal vez debiéramos poner otra fuente.", "No obstante, sé que las reparaciones son caras.", "En definitiva, es una cuestión de salud.", FECHA],
      "I'd like to raise a problem with the park. The fact that the fountain has had no water for a month seems unacceptable to me. In fact, the dogs have nowhere to drink. That is, the animals suffer in the heat. Perhaps we should put in another fountain. Nevertheless, I know repairs are expensive. All in all, it's a matter of health. I'd be grateful if you gave us a specific date.",
      [
        ["¿Sobre qué escribe Julia?", ["sobre un problema con el parque", "sobre una fiesta", "sobre su clínica"], 0, "Quisiera comentarle un problema con el parque" + QUISIERA],
        ["¿Qué propone Julia?", ["cerrar el parque", "poner otra fuente", "prohibir los perros"], 1, "Tal vez debiéramos poner otra fuente: debiéramos" + SOFT],
        ["¿Qué pide Julia al final?", ["que le paguen la clínica", "que les den una fecha concreta", "que cierren el parque"], 1, FECHA.slice(0, -1) + ASK],
      ],
      "Write to a city office, a landlord or a shelter about a problem that affects animals." + P4,
      "Quisiera comentarle un problema con el parque para perros. El hecho de que la puerta lleve un mes rota me parece inaceptable. De hecho, ayer se escapó un perro. Es decir, los animales no están seguros. No obstante, sé que hay otras prioridades. En definitiva, es una reparación sencilla. Le agradecería que la arreglara esta semana.",
    ),
  },
  "c2/5": {
    history: v(
      "What the archive taught Inés",
      "archivo (archive), caja (box), ruinas (ruins), publiqué (I published)",
      ["A los documentos viejos hay que tratarlos con cuidado.", "Eso lo aprendí en el archivo de mi abuelo.", "Uno nunca sabe qué va a encontrar en una caja.", "En este museo se trabaja en silencio y se aprende algo cada día.", "Un turista me preguntó si yo tenía un momento, y luego me pidió un mapa.", "Entonces me di cuenta de que amaba la historia.", "Mi sueño lo realicé el año pasado, cuando publiqué mi primer libro.", "Bruno y yo quedamos en almorzar juntos; yo me quedé toda la tarde."],
      "Old documents have to be handled with care. I learned that in my grandfather's archive. You never know what you're going to find in a box. In this museum people work in silence and learn something every day. A tourist asked me if I had a moment, and then asked me for a map. Then I realized he loved history. I made my dream come true last year, when I published my first book. Bruno and I agreed to have lunch together; I stayed all afternoon.",
      [
        ["¿Dónde aprendió Inés eso?", ["en el archivo de su abuelo", "en la escuela", "en un viaje"], 0, "Eso lo aprendí en el archivo de mi abuelo" + FRONT],
        ["¿Qué le pidió el turista a Inés?", ["dinero", "un mapa", "un libro"], 1, "Me pidió un mapa" + PEDIR],
        ["¿De qué se dio cuenta Inés?", ["de que no tenía mapas", "de que el turista amaba la historia", "de que quería irse"], 1, "Me di cuenta de que amaba la historia" + REALIZE],
      ],
      "Write about something you learned from history, a museum or an older person's stories." + P5,
      "Las historias de los abuelos hay que escucharlas. Eso lo aprendí en casa de mi abuela. Uno nunca sabe cuánto tiempo le queda para preguntar. Un día mi amigo Bruno me preguntó si yo conocía la historia de mi apellido, y luego me pidió una foto vieja. Entonces me di cuenta de que no sabía casi nada. Bruno y yo quedamos en visitar el archivo del pueblo. Ese plan lo realizamos el mes pasado.",
    ),
    science: v(
      "What the desert taught Vera",
      "desierto (desert), astrónoma (astronomer), cometa (comet)",
      ["A las plantas hay que mirarlas todos los días.", "Eso lo aprendí en el jardín de mi abuela.", "Uno nunca sabe cuándo va a ver algo nuevo.", "En el desierto se duerme poco y se ve todo el cielo.", "Una niña me preguntó si yo tenía un momento, y luego me pidió una foto.", "Entonces me di cuenta de que ya era una pequeña astrónoma.", "Mi sueño lo realicé el año pasado, cuando descubrí un cometa.", "Hugo y yo quedamos en observar el eclipse juntos; yo me quedé toda la noche."],
      "Plants have to be looked at every day. I learned that in my grandmother's garden. You never know when you're going to see something new. In the desert people sleep little and see the whole sky. A girl asked me if I had a moment, and then asked me for a photo. Then I realized she was already a little astronomer. I made my dream come true last year, when I discovered a comet. Hugo and I agreed to watch the eclipse together; I stayed all night.",
      [
        ["¿Dónde aprendió Vera eso?", ["en el jardín de su abuela", "en la escuela", "en el observatorio"], 0, "Eso lo aprendí en el jardín de mi abuela" + FRONT],
        ["¿Qué le pidió la niña a Vera?", ["dinero", "una foto", "un telescopio"], 1, "Me pidió una foto" + PEDIR],
        ["¿De qué se dio cuenta Vera?", ["de que no tenía fotos", "de que la niña ya era una pequeña astrónoma", "de que quería irse"], 1, "Me di cuenta de que ya era una pequeña astrónoma" + REALIZE],
      ],
      "Write about something you learned from nature or science." + P5,
      "A los árboles hay que darles tiempo. Eso lo aprendí en el jardín de mi abuelo. Uno nunca sabe cuándo va a llover. Un día un vecino me preguntó si yo sabía de plantas, y luego me pidió unas semillas. Entonces me di cuenta de que había aprendido mucho. Mi amigo Hugo y yo quedamos en plantar un árbol cada año. Ese plan lo realizamos sin faltar una vez.",
    ),
    tech: v(
      "What the office taught Nico",
      "contraseñas (passwords), a menudo (often), copia (copy), lancé (I launched)",
      ["A las contraseñas hay que cambiarlas a menudo.", "Eso lo aprendí en mi primer trabajo.", "Uno nunca sabe cuándo va a perder el celular.", "En esta oficina se trabaja en equipo y se comparte todo.", "Un cliente me preguntó si yo tenía un momento, y luego me pidió una copia del programa.", "Entonces me di cuenta de que no había guardado nada.", "Mi sueño lo realicé el año pasado, cuando lancé mi propio videojuego.", "Mía y yo quedamos en probar el juego juntos; yo me quedé toda la noche."],
      "Passwords have to be changed often. I learned that in my first job. You never know when you're going to lose your cell phone. In this office people work as a team and share everything. A client asked me if I had a moment, and then asked me for a copy of the program. Then I realized I hadn't saved anything. I made my dream come true last year, when I launched my own video game. Mía and I agreed to test the game together; I stayed all night.",
      [
        ["¿Dónde aprendió Nico eso?", ["en su primer trabajo", "en la escuela", "en casa"], 0, "Eso lo aprendí en mi primer trabajo" + FRONT],
        ["¿Qué le pidió el cliente a Nico?", ["dinero", "una copia del programa", "un celular"], 1, "Me pidió una copia del programa" + PEDIR],
        ["¿De qué se dio cuenta Nico?", ["de que no tenía clientes", "de que no había guardado nada", "de que quería irse"], 1, "Me di cuenta de que no había guardado nada" + REALIZE],
      ],
      "Write about something you learned from technology or games." + P5,
      "Los archivos importantes hay que guardarlos dos veces. Eso lo aprendí cuando se rompió mi computadora. Uno nunca sabe cuándo va a fallar una máquina. Un día un amigo me preguntó si yo sabía arreglar celulares, y luego me pidió un cargador. Entonces me di cuenta de que todos dependemos de la tecnología. Mi amiga Mía y yo quedamos en hacer una copia cada mes. Ese plan lo realizamos siempre.",
    ),
    health: v(
      "What the clinic taught Clara",
      "pacientes (patients), clínica (clinic), maratón (marathon), entrenar (to train)",
      ["A los pacientes hay que escucharlos.", "Eso lo aprendí en el hospital de mi barrio.", "Uno nunca sabe cuándo va a necesitar un médico.", "En esta clínica se trabaja mucho y se conoce a todo el mundo.", "Una paciente me preguntó si yo tenía un momento, y luego me pidió un vaso de agua.", "Entonces me di cuenta de que solo quería hablar.", "Mi sueño lo realicé el año pasado, cuando corrí mi primer maratón.", "Iván y yo quedamos en entrenar juntos; yo me quedé toda la mañana."],
      "Patients have to be listened to. I learned that at my neighborhood hospital. You never know when you're going to need a doctor. In this clinic people work a lot and know everyone. A patient asked me if I had a moment, and then asked me for a glass of water. Then I realized she only wanted to talk. I made my dream come true last year, when I ran my first marathon. Iván and I agreed to train together; I stayed all morning.",
      [
        ["¿Dónde aprendió Clara eso?", ["en el hospital de su barrio", "en la escuela", "en casa"], 0, "Eso lo aprendí en el hospital de mi barrio" + FRONT],
        ["¿Qué le pidió la paciente a Clara?", ["una pastilla", "un vaso de agua", "una cita"], 1, "Me pidió un vaso de agua" + PEDIR],
        ["¿De qué se dio cuenta Clara?", ["de que no había agua", "de que la paciente solo quería hablar", "de que quería irse"], 1, "Me di cuenta de que solo quería hablar" + REALIZE],
      ],
      "Write about something you learned about looking after your health." + P5,
      "Al cuerpo hay que escucharlo. Eso lo aprendí después de una lesión. Uno nunca sabe cuándo va a necesitar descansar. Un día un compañero me preguntó si yo dormía bien, y luego me pidió un consejo. Entonces me di cuenta de que yo tampoco descansaba. Mi amigo Iván y yo quedamos en caminar cada tarde. Ese plan lo realizamos sin faltar una semana.",
    ),
    festivals: v(
      "What the festival taught Paula",
      "invitados (guests), recibirlos (welcome them), tradiciones (traditions), ensayar (to rehearse)",
      ["A los invitados hay que recibirlos con música.", "Eso lo aprendí en las fiestas de mi abuela.", "Uno nunca sabe cuántas personas van a venir.", "En este pueblo se baila en la calle y se invita a todo el mundo.", "Un turista me preguntó si yo tenía un momento, y luego me pidió una foto.", "Entonces me di cuenta de que nuestras tradiciones le encantaban.", "Mi sueño lo realicé el año pasado, cuando bailé en la Guelaguetza.", "Raúl y yo quedamos en ensayar juntos; yo me quedé toda la tarde."],
      "Guests have to be welcomed with music. I learned that at my grandmother's parties. You never know how many people are going to come. In this village people dance in the street and invite everyone. A tourist asked me if I had a moment, and then asked me for a photo. Then I realized he loved our traditions. I made my dream come true last year, when I danced at the Guelaguetza. Raúl and I agreed to rehearse together; I stayed all afternoon.",
      [
        ["¿Dónde aprendió Paula eso?", ["en las fiestas de su abuela", "en la escuela", "en un viaje"], 0, "Eso lo aprendí en las fiestas de mi abuela" + FRONT],
        ["¿Qué le pidió el turista a Paula?", ["dinero", "una foto", "un traje"], 1, "Me pidió una foto" + PEDIR],
        ["¿De qué se dio cuenta Paula?", ["de que no tenía fotos", "de que al turista le encantaban sus tradiciones", "de que quería irse"], 1, "Me di cuenta de que nuestras tradiciones le encantaban" + REALIZE],
      ],
      "Write about something you learned from a party, a festival or a family tradition." + P5,
      "Los cumpleaños hay que celebrarlos siempre. Eso lo aprendí en casa de mis abuelos. Uno nunca sabe cuántas fiestas le quedan. Un día una vecina me preguntó si yo sabía cocinar, y luego me pidió una receta. Entonces me di cuenta de que las tradiciones se comparten. Mi amigo Raúl y yo quedamos en organizar una cena cada diciembre. Ese plan lo realizamos todos los años.",
    ),
    animals: v(
      "What the farm taught Julia",
      "granja (farm), perdido (lost), clínica (clinic)",
      ["A los perros hay que pasearlos cada día.", "Eso lo aprendí en la granja de mi abuelo.", "Uno nunca sabe cuándo va a encontrar un animal perdido.", "En este pueblo se vive tranquilo y se conoce a todos los perros.", "Un niño me preguntó si yo tenía un momento, y luego me pidió ayuda con su gato.", "Entonces me di cuenta de que el gato solo tenía hambre.", "Mi sueño lo realicé el año pasado, cuando abrí mi propia clínica.", "Simón y yo quedamos en pasear juntos; yo me quedé toda la mañana."],
      "Dogs have to be walked every day. I learned that on my grandfather's farm. You never know when you're going to find a lost animal. In this village people live quietly and know all the dogs. A boy asked me if I had a moment, and then asked me for help with his cat. Then I realized the cat was just hungry. I made my dream come true last year, when I opened my own clinic. Simón and I agreed to go for a walk together; I stayed all morning.",
      [
        ["¿Dónde aprendió Julia eso?", ["en la granja de su abuelo", "en la escuela", "en la ciudad"], 0, "Eso lo aprendí en la granja de mi abuelo" + FRONT],
        ["¿Qué le pidió el niño a Julia?", ["dinero", "ayuda con su gato", "un perro"], 1, "Me pidió ayuda con su gato" + PEDIR],
        ["¿De qué se dio cuenta Julia?", ["de que el gato estaba perdido", "de que el gato solo tenía hambre", "de que quería irse"], 1, "Me di cuenta de que el gato solo tenía hambre" + REALIZE],
      ],
      "Write about something you learned from an animal or a pet." + P5,
      "A los animales hay que tratarlos con paciencia. Eso lo aprendí con mi primer perro. Uno nunca sabe lo que siente un animal. Un día una vecina me preguntó si yo tenía mascotas, y luego me pidió ayuda con su gato. Entonces me di cuenta de que me encantaba cuidarlos. Mi amigo Simón y yo quedamos en visitar el refugio cada mes. Ese plan lo realizamos siempre.",
    ),
  },
  "c2/6": {
    history: v(
      "A rainy afternoon at the museum",
      "librote (huge book)",
      ["Era una tarde de lluvia y ordenábamos mapas en la sala del museo.", "De repente entró un señor mayor con un librote negro.", "Nunca había visto un libro tan viejo.", "«¿Tiene usted un momento?», me preguntó.", "Mi compañera Flor, que es de Argentina, le dijo: «Vos sentate, que ya te traigo un café».", USTED_LINE, "Aquella tarde abrimos el libro juntos, y fue un exitazo.", TUTEO],
      "It was a rainy afternoon and we were sorting maps in the museum room. Suddenly an elderly man came in with a huge black book. I had never seen such an old book. \"Do you have a moment?\" he asked me. My colleague Flor, who is from Argentina, said to him: \"You sit down, I'll bring you a coffee.\" " + USTED_EN + " That afternoon we opened the book together, and it was a huge success. Since then we've been friends and we call each other tú.",
      [
        ["¿Con qué entró el señor mayor?", ["con un librote negro", "con una maletota", "con un perrazo"], 0, "Entró con un librote negro: librote is a very big libro."],
        ["¿Cómo le habló Inés al principio?", ["de tú", "de usted", "de vos"], 1, "Le hablé de usted hasta que me dijo «Tutéame»" + USTED],
        ["¿Qué pasó aquella tarde?", ["Cerraron el museo.", "Abrieron el libro juntos.", "Se perdió el libro."], 1, "Aquella tarde abrimos el libro juntos" + PRET],
      ],
      "Tell a story about a visit to a museum or an old place." + P6,
      "Era una mañana de sol y visitábamos un castillo. De repente apareció un guía con un librote enorme. Nunca había oído tantas historias en una hora. Le hablé de usted, pero me dijo: «Tutéame». Aquella mañana subimos juntos a la torre, y fue un exitazo. Desde entonces nos tuteamos.",
    ),
    science: v(
      "A winter night at the observatory",
      "observatorio (observatory), maletota (huge suitcase), lluvia de estrellas (meteor shower)",
      ["Era una noche de invierno y mirábamos el cielo desde el observatorio.", "De repente entró un visitante con una maletota negra.", "Nunca había visto una maleta tan pesada.", "«¿Tiene usted un poco de café?», me preguntó.", "Mi colega Flor, que es de Argentina, le dijo: «Vos sentate, que ya te sirvo una taza».", USTED_LINE, "Aquella noche vimos una lluvia de estrellas, y fue un exitazo.", TUTEO],
      "It was a winter night and we were looking at the sky from the observatory. Suddenly a visitor came in with a huge black suitcase. I had never seen such a heavy suitcase. \"Do you have a little coffee?\" he asked me. My colleague Flor, who is from Argentina, said to him: \"You sit down, I'll pour you a cup.\" " + USTED_EN + " That night we saw a meteor shower, and it was a huge success. Since then we've been friends and we call each other tú.",
      [
        ["¿Con qué entró el visitante?", ["con una maletota negra", "con un librote", "con un perrazo"], 0, "Entró con una maletota negra: maletota is a very big maleta."],
        ["¿Cómo le habló Vera al principio?", ["de tú", "de usted", "de vos"], 1, "Le hablé de usted hasta que me dijo «Tutéame»" + USTED],
        ["¿Qué pasó aquella noche?", ["Se fueron a dormir.", "Vieron una lluvia de estrellas.", "Se rompió el telescopio."], 1, "Aquella noche vimos una lluvia de estrellas" + PRET],
      ],
      "Tell a story about a night under the stars or a day out in nature." + P6,
      "Era una noche de verano y mirábamos las estrellas en el campo. De repente llegó un señor con un telescopio y una maletota. Nunca había visto la Luna tan cerca. Le hablé de usted, pero me dijo: «Tutéame». Aquella noche vimos tres planetas, y fue un exitazo. Desde entonces nos tuteamos.",
    ),
    tech: v(
      "A Friday night at the office",
      "en línea (online), bolsón (huge bag), cables (cables), consola (console)",
      ["Era un viernes por la noche y jugábamos en línea desde la oficina.", "De repente entró un cliente nuevo con un bolsón lleno de cables.", "Nunca había visto tantos cables juntos.", "«¿Tiene usted un momento?», me preguntó.", "Mi compañera Flor, que es de Argentina, le dijo: «Vos sentate, que ya te ayudamos».", USTED_LINE, "Aquella noche arreglamos su vieja consola, y fue un exitazo.", TUTEO],
      "It was a Friday night and we were playing online from the office. Suddenly a new client came in with a huge bag full of cables. I had never seen so many cables together. \"Do you have a moment?\" he asked me. My colleague Flor, who is from Argentina, said to him: \"You sit down, we'll help you right away.\" " + USTED_EN + " That night we fixed his old console, and it was a huge success. Since then we've been friends and we call each other tú.",
      [
        ["¿Con qué entró el cliente nuevo?", ["con un bolsón lleno de cables", "con una maletota", "con un librote"], 0, "Entró con un bolsón lleno de cables: bolsón is a very big bolso."],
        ["¿Cómo le habló Nico al principio?", ["de tú", "de usted", "de vos"], 1, "Le hablé de usted hasta que me dijo «Tutéame»" + USTED],
        ["¿Qué pasó aquella noche?", ["Se fueron a dormir.", "Arreglaron su vieja consola.", "Se rompió la computadora."], 1, "Aquella noche arreglamos su vieja consola" + PRET],
      ],
      "Tell a story about a problem with a phone, a computer or a game." + P6,
      "Era un domingo de lluvia y jugábamos en casa. De repente se apagó la pantalla y sonó un golpazo. Nunca había visto la consola tan caliente. Llamé a un técnico y le hablé de usted, pero me dijo: «Tutéame». Aquella tarde la arregló en diez minutos, y fue un exitazo. Desde entonces nos tuteamos.",
    ),
    health: v(
      "A winter morning at the clinic",
      "clínica (clinic), bolsón (huge bag), pastillas (pills), atendemos (we'll see you)",
      ["Era una mañana de invierno y trabajábamos en la clínica del barrio.", "De repente entró un señor mayor con un bolsón lleno de medicinas.", "Nunca había visto tantas pastillas juntas.", "«¿Tiene usted un momento?», me preguntó.", "Mi compañera Flor, que es de Argentina, le dijo: «Vos sentate, que ya te atendemos».", USTED_LINE, "Aquella mañana ordenamos todas sus medicinas, y fue un exitazo.", TUTEO],
      "It was a winter morning and we were working at the neighborhood clinic. Suddenly an elderly man came in with a huge bag full of medicines. I had never seen so many pills together. \"Do you have a moment?\" he asked me. My colleague Flor, who is from Argentina, said to him: \"You sit down, we'll see you right away.\" " + USTED_EN + " That morning we sorted all his medicines, and it was a huge success. Since then we've been friends and we call each other tú.",
      [
        ["¿Con qué entró el señor mayor?", ["con un bolsón lleno de medicinas", "con una maletota", "con un perrazo"], 0, "Entró con un bolsón lleno de medicinas: bolsón is a very big bolso."],
        ["¿Cómo le habló Clara al principio?", ["de tú", "de usted", "de vos"], 1, "Le hablé de usted hasta que me dijo «Tutéame»" + USTED],
        ["¿Qué pasó aquella mañana?", ["Cerraron la clínica.", "Ordenaron todas sus medicinas.", "Se perdieron las pastillas."], 1, "Aquella mañana ordenamos todas sus medicinas" + PRET],
      ],
      "Tell a story about a day at the gym, the doctor's or out exercising." + P6,
      "Era una mañana de sol y corríamos por el parque. De repente apareció un entrenador con un bolsón de pelotas. Nunca había hecho tanto ejercicio en una hora. Le hablé de usted, pero me dijo: «Tutéame». Aquella mañana corrimos diez kilómetros, y fue un exitazo. Desde entonces nos tuteamos.",
    ),
    festivals: v(
      "A July night in the square",
      "tamborazo (huge drum)",
      ["Era una noche de julio y bailábamos en la plaza del pueblo.", "De repente llegó un músico nuevo con un tamborazo rojo.", "Nunca había visto un tambor tan grande.", "«¿Tiene usted un lugar para mí?», me preguntó.", "Mi amiga Flor, que es de Argentina, le dijo: «Vos sentate, que ya te traigo un plato».", USTED_LINE, "Aquella noche tocó con nosotros, y fue un exitazo.", TUTEO],
      "It was a July night and we were dancing in the village square. Suddenly a new musician arrived with a huge red drum. I had never seen such a big drum. \"Do you have a place for me?\" he asked me. My friend Flor, who is from Argentina, said to him: \"You sit down, I'll bring you a plate.\" " + USTED_EN + " That night he played with us, and it was a huge success. Since then we've been friends and we call each other tú.",
      [
        ["¿Con qué llegó el músico nuevo?", ["con un tamborazo rojo", "con una maletota", "con un librote"], 0, "Llegó con un tamborazo rojo: tamborazo is a very big tambor."],
        ["¿Cómo le habló Paula al principio?", ["de tú", "de usted", "de vos"], 1, "Le hablé de usted hasta que me dijo «Tutéame»" + USTED],
        ["¿Qué pasó aquella noche?", ["Se fueron a dormir.", "El músico tocó con ellos.", "Se rompió el tambor."], 1, "Aquella noche tocó con nosotros" + PRET],
      ],
      "Tell a story about a party or a festival." + P6,
      "Era una noche de diciembre y cenábamos en la plaza. De repente llegó un señor con un guitarrón enorme. Nunca había oído una canción tan alegre. Le hablé de usted, pero me dijo: «Tutéame». Aquella noche bailamos hasta las tres, y fue un exitazo. Desde entonces nos tuteamos.",
    ),
    animals: v(
      "A summer afternoon at the clinic",
      "clínica (clinic), perrazo (huge dog), curamos (we treated)",
      ["Era una tarde de verano y trabajábamos en la clínica del pueblo.", "De repente entró una señora mayor con un perrazo negro.", "Nunca había visto un perro tan grande.", "«¿Tiene usted un poco de agua?», me preguntó.", "Yo, que soy de Argentina, le dije: «Vos sentate, que ya te traigo un vaso».", "Simón, en cambio, le habló de usted hasta que ella dijo: «Tutéame, por favor».", "Aquella tarde curamos al perro, y fue un exitazo.", TUTEO],
      "It was a summer afternoon and we were working at the village clinic. Suddenly an elderly lady came in with a huge black dog. I had never seen such a big dog. \"Do you have a little water?\" she asked me. I, being from Argentina, said to her: \"You sit down, I'll bring you a glass.\" Simón, on the other hand, called her usted until she said: \"Call me tú, please.\" That afternoon we treated the dog, and it was a huge success. Since then we've been friends and we call each other tú.",
      [
        ["¿Con qué entró la señora mayor?", ["con un perrazo negro", "con una maletota", "con un gatazo"], 0, "Entró con un perrazo negro: perrazo is a very big perro."],
        ["¿Cómo le habló Simón al principio?", ["de tú", "de usted", "de vos"], 1, "Le habló de usted hasta que ella dijo «Tutéame»" + USTED],
        ["¿Qué pasó aquella tarde?", ["Cerraron la clínica.", "Curaron al perro.", "Se perdió el perro."], 1, "Aquella tarde curamos al perro" + PRET],
      ],
      "Tell a story about an animal or a pet." + P6,
      "Era una tarde de otoño y paseábamos por el parque. De repente apareció una señora con un perrazo blanco. Nunca había visto un perro tan tranquilo. Le hablé de usted, pero me dijo: «Tutéame». Aquella tarde nuestros perros jugaron juntos, y fue un exitazo. Desde entonces nos tuteamos.",
    ),
  },
  "c2/7": {
    history: v(
      "A letter from Seville",
      "archivo (archive), ruinas (ruins)",
      [HELLO, "Os escribo desde Sevilla, donde estudio en un archivo muy antiguo.", "¿Recordáis nuestras visitas a las ruinas?", "Si hubieseis venido, habríais visto cartas de 1500.", "Me pidieron que ordenase los mapas de América.", "Venid en octubre; la ciudad está preciosa.", "No os olvidéis de traer buenos zapatos.", "Un abrazo a todos. Vuestra amiga, Inés."],
      "Dear friends: how are you all? I'm writing to you from Seville, where I'm studying in a very old archive. Do you remember our visits to the ruins? If you had come, you would have seen letters from 1500. They asked me to sort the maps of the Americas. Come in October; the city is beautiful. Don't forget to bring good shoes. A hug to you all. Your friend, Inés.",
      [
        ["¿Desde dónde escribe Inés?", ["desde Sevilla", "desde Salamanca", "desde Cusco"], 0, "Os escribo desde Sevilla" + OS],
        ["¿Qué le pidieron a Inés?", ["que escribiese un libro", "que ordenase los mapas de América", "que se mudase"], 1, "Me pidieron que ordenase los mapas de América" + SE],
        ["¿Qué no deben olvidar los amigos?", ["traer comida", "traer buenos zapatos", "traer los mapas"], 1, "No os olvidéis de traer buenos zapatos" + NEGVOS],
      ],
      "Write to friends about a place full of history that you're visiting." + P7,
      "Queridos amigos: ¿cómo estáis? Os escribo desde Toledo, donde visito un museo cada día. ¿Recordáis nuestra clase de historia? Si hubieseis venido, habríais visto una espada de mil años. Venid en primavera; la ciudad está preciosa. No os olvidéis de traer la cámara. Un abrazo a todos.",
    ),
    science: v(
      "A letter from the Canary Islands",
      "observatorio (observatory), desierto (desert), lluvia de estrellas (meteor shower), ropa de abrigo (warm clothes)",
      [HELLO, "Os escribo desde Canarias, donde trabajo en un observatorio enorme.", "¿Recordáis nuestras noches en el desierto?", "Si hubieseis venido, habríais visto un cielo increíble.", "Me pidieron que explicase mi trabajo a los estudiantes.", "Venid en agosto; hay una lluvia de estrellas.", "No os olvidéis de traer ropa de abrigo.", "Un abrazo a todos. Vuestra amiga, Vera."],
      "Dear friends: how are you all? I'm writing to you from the Canary Islands, where I'm working at a huge observatory. Do you remember our nights in the desert? If you had come, you would have seen an incredible sky. They asked me to explain my work to the students. Come in August; there's a meteor shower. Don't forget to bring warm clothes. A hug to you all. Your friend, Vera.",
      [
        ["¿Desde dónde escribe Vera?", ["desde Canarias", "desde Salamanca", "desde Chile"], 0, "Os escribo desde Canarias" + OS],
        ["¿Qué le pidieron a Vera?", ["que comprase un telescopio", "que explicase su trabajo a los estudiantes", "que se mudase"], 1, "Me pidieron que explicase mi trabajo a los estudiantes" + SE],
        ["¿Qué no deben olvidar los amigos?", ["traer comida", "traer ropa de abrigo", "traer un telescopio"], 1, "No os olvidéis de traer ropa de abrigo" + NEGVOS],
      ],
      "Write to friends about a place in nature that you're visiting." + P7,
      "Queridos amigos: ¿cómo estáis? Os escribo desde los Pirineos, donde camino por la montaña cada día. ¿Recordáis nuestras excursiones? Si hubieseis venido, habríais visto un águila enorme. Venid en junio; hay flores por todas partes. No os olvidéis de traer buenas botas. Un abrazo a todos.",
    ),
    tech: v(
      "A letter from Barcelona",
      "empresa (company), partidas (games), nivel (level), feria (fair), consola (console)",
      [HELLO, "Os escribo desde Barcelona, donde trabajo en una empresa de videojuegos.", "¿Recordáis nuestras partidas de los viernes?", "Si hubieseis venido, habríais probado el juego nuevo.", "Me pidieron que diseñase un nivel entero.", "Venid en marzo; hay una feria de tecnología.", "No os olvidéis de traer la consola.", "Un abrazo a todos. Vuestro amigo, Nico."],
      "Dear friends: how are you all? I'm writing to you from Barcelona, where I'm working at a video game company. Do you remember our Friday games? If you had come, you would have tried the new game. They asked me to design a whole level. Come in March; there's a technology fair. Don't forget to bring the console. A hug to you all. Your friend, Nico.",
      [
        ["¿Desde dónde escribe Nico?", ["desde Barcelona", "desde Salamanca", "desde Montevideo"], 0, "Os escribo desde Barcelona" + OS],
        ["¿Qué le pidieron a Nico?", ["que vendiese el juego", "que diseñase un nivel entero", "que se mudase"], 1, "Me pidieron que diseñase un nivel entero" + SE],
        ["¿Qué no deben olvidar los amigos?", ["traer comida", "traer la consola", "traer los cables"], 1, "No os olvidéis de traer la consola" + NEGVOS],
      ],
      "Write to friends about a game, an app or a tech event you've discovered." + P7,
      "Queridos amigos: ¿cómo estáis? Os escribo desde Madrid, donde visito una feria de videojuegos. ¿Recordáis nuestras partidas de los sábados? Si hubieseis venido, habríais probado diez juegos nuevos. Venid el año que viene; es increíble. No os olvidéis de traer los mandos. Un abrazo a todos.",
    ),
    health: v(
      "A letter from Valencia",
      "carreras (runs), clima (weather)",
      [HELLO, "Os escribo desde Valencia, donde trabajo en un hospital junto al mar.", "¿Recordáis nuestras carreras de los domingos?", "Si hubieseis venido, habríais corrido por la playa.", "Me pidieron que organizase una clase de yoga.", "Venid en mayo; el clima es perfecto.", "No os olvidéis de traer zapatos para correr.", "Un abrazo a todos. Vuestra amiga, Clara."],
      "Dear friends: how are you all? I'm writing to you from Valencia, where I'm working at a hospital by the sea. Do you remember our Sunday runs? If you had come, you would have run along the beach. They asked me to organize a yoga class. Come in May; the weather is perfect. Don't forget to bring running shoes. A hug to you all. Your friend, Clara.",
      [
        ["¿Desde dónde escribe Clara?", ["desde Valencia", "desde Salamanca", "desde La Habana"], 0, "Os escribo desde Valencia" + OS],
        ["¿Qué le pidieron a Clara?", ["que corriese un maratón", "que organizase una clase de yoga", "que se mudase"], 1, "Me pidieron que organizase una clase de yoga" + SE],
        ["¿Qué no deben olvidar los amigos?", ["traer comida", "traer zapatos para correr", "traer medicinas"], 1, "No os olvidéis de traer zapatos para correr" + NEGVOS],
      ],
      "Write to friends about a healthy trip or a new routine." + P7,
      "Queridos amigos: ¿cómo estáis? Os escribo desde un pueblo de montaña, donde camino dos horas cada mañana. ¿Recordáis nuestras clases de yoga? Si hubieseis venido, habríais dormido mejor que nunca. Venid en verano; el aire es limpio. No os olvidéis de traer zapatos cómodos. Un abrazo a todos.",
    ),
    festivals: v(
      "A letter from Valencia",
      "Fallas (Valencia's March festival), fuegos artificiales (fireworks), trajes (costumes)",
      [HELLO, "Os escribo desde Valencia, donde he visto las Fallas por primera vez.", "¿Recordáis nuestras fiestas en Oaxaca?", "Si hubieseis venido, habríais visto los fuegos artificiales.", "Me pidieron que bailase en la plaza.", "Venid en marzo; la ciudad está preciosa.", "No os olvidéis de traer vuestros trajes.", "Un abrazo a todos. Vuestra amiga, Paula."],
      "Dear friends: how are you all? I'm writing to you from Valencia, where I've seen the Fallas for the first time. Do you remember our parties in Oaxaca? If you had come, you would have seen the fireworks. They asked me to dance in the square. Come in March; the city is beautiful. Don't forget to bring your costumes. A hug to you all. Your friend, Paula.",
      [
        ["¿Desde dónde escribe Paula?", ["desde Valencia", "desde Salamanca", "desde Oaxaca"], 0, "Os escribo desde Valencia" + OS],
        ["¿Qué le pidieron a Paula?", ["que cantase una canción", "que bailase en la plaza", "que se mudase"], 1, "Me pidieron que bailase en la plaza" + SE],
        ["¿Qué no deben olvidar los amigos?", ["traer comida", "traer sus trajes", "traer fotos"], 1, "No os olvidéis de traer vuestros trajes" + NEGVOS],
      ],
      "Write to friends about a festival or a party you're at." + P7,
      "Queridos amigos: ¿cómo estáis? Os escribo desde Sevilla, donde estoy en la Feria de Abril. ¿Recordáis nuestras fiestas de verano? Si hubieseis venido, habríais bailado toda la noche. Venid el año que viene; hay música en cada calle. No os olvidéis de traer ropa elegante. Un abrazo a todos.",
    ),
    animals: v(
      "A letter from Asturias",
      "granja (farm), vacas (cows), ternero (calf), botas (boots)",
      [HELLO, "Os escribo desde Asturias, donde trabajo en una granja con vacas.", "¿Recordáis nuestros paseos con Coco y Luna?", "Si hubieseis venido, habríais visto nacer un ternero.", "Me pidieron que cuidase a los caballos.", "Venid en junio; el campo está precioso.", "No os olvidéis de traer botas.", "Un abrazo a todos. Vuestra amiga, Julia."],
      "Dear friends: how are you all? I'm writing to you from Asturias, where I'm working on a farm with cows. Do you remember our walks with Coco and Luna? If you had come, you would have seen a calf being born. They asked me to look after the horses. Come in June; the countryside is beautiful. Don't forget to bring boots. A hug to you all. Your friend, Julia.",
      [
        ["¿Desde dónde escribe Julia?", ["desde Asturias", "desde Salamanca", "desde Argentina"], 0, "Os escribo desde Asturias" + OS],
        ["¿Qué le pidieron a Julia?", ["que vendiese las vacas", "que cuidase a los caballos", "que se mudase"], 1, "Me pidieron que cuidase a los caballos" + SE],
        ["¿Qué no deben olvidar los amigos?", ["traer comida", "traer botas", "traer a sus perros"], 1, "No os olvidéis de traer botas" + NEGVOS],
      ],
      "Write to friends about a place with animals that you're visiting, or about your pet." + P7,
      "Queridos amigos: ¿cómo estáis? Os escribo desde una granja, donde cuido caballos desde hace un mes. ¿Recordáis a mi perro Coco? Si hubieseis venido, habríais visto nacer tres gatitos. Venid en mayo; el campo está precioso. No os olvidéis de traer botas viejas. Un abrazo a todos.",
    ),
  },
};
