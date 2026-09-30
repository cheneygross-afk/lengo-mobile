// Synced from cheneygross-afk/lengo:src/lib/lessons/skills-a2.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exercise } from "./types";
import { dict, lc, spk, wr } from "./skills-authoring";

// A2 listening, speaking and writing practice, appended to the named
// lessons' final reviews by withSkills() (skills.ts). Instructions in
// English. The "Say It Yourself" lessons get record-and-compare
// shadowing of the kind of sentence they practise.
export const A2_SKILLS: Record<string, Exercise[]> = {
  "a2d-say-it-yourself-last-year": [
    spk("El año pasado trabajaba mucho y dormía poco.", "Stress the -a- of the imperfect endings: tra-ba-JA-ba, dor-MÍ-a.", "\"Last year I worked a lot and slept little.\" The imperfect for habits."),
    spk("En junio me mudé a un piso nuevo.", "Mu-DÉ, stress on the end: that's the preterite \"I moved\", not mudo (\"I move\").", "\"In June I moved to a new flat.\" The preterite for one completed event."),
  ],
  "a2d-say-it-yourself-last-trip": [
    spk("El verano pasado fui a México con mi familia.", "México: the x is the j sound, MÉ-xi-co.", "\"Last summer I went to Mexico with my family.\" Fui is the preterite of ir."),
    spk("Nos quedamos dos semanas y fue genial.", "Genial: the g before e sounds like j, ge-NIAL.", "\"We stayed two weeks and it was great.\""),
  ],
  "a2d-childhood-say-it": [
    spk("Cuando era niño, jugaba al fútbol con mis vecinos.", "Soft b in jugaba and vecinos (between vowels): lips barely touch.", "\"When I was a child, I played football with my neighbours.\" Imperfect for childhood habits."),
    spk("De pequeña me gustaba mucho leer.", "Pe-QUE-ña: silent u in que, and ñ as \"ny\".", "\"As a little girl I really liked reading.\" A woman says pequeña; a man says pequeño."),
  ],
  "a2d-say-it-yourself-memory": [
    spk("Era mi cumpleaños y hacía un sol maravilloso.", "Link y hacía: \"yha-CÍ-a\" -- the h is silent and the í is stressed.", "\"It was my birthday and it was beautifully sunny.\" Imperfect to set the scene."),
    spk("Fue el mejor día de mi vida.", "Link fue el into a single syllable, almost \"fwel\".", "\"It was the best day of my life.\" Fue (preterite) sums up the day as a whole."),
  ],
  "a2d-say-it-yourself-birthday-gifts": [
    spk("Mi hermano me regaló un libro y me encantó.", "Two past forms stressed on the last syllable: re-ga-LÓ, en-can-TÓ.", "\"My brother gave me a book and I loved it.\""),
    spk("¿El perfume? Se lo regalé a mi madre.", "Say se lo as one unit before the verb: \"se-lo-re-ga-LÉ\".", "\"The perfume? I gave it to my mother.\" Le becomes se before lo."),
  ],
  "a2d-say-it-yourself-morning": [
    spk("Después de ducharme, me visto y desayuno.", "Ducharme: ch as in \"church\", the r a single tap.", "\"After I shower, I get dressed and have breakfast.\""),
    spk("Antes de salir, me miro en el espejo.", "Espejo: the j is breathy, es-PE-jo.", "\"Before going out, I look at myself in the mirror.\""),
  ],
  "a2d-say-it-yourself-five-years": [
    spk("Dentro de cinco años viviré en otra ciudad.", "The future is stressed on the ending: vi-vi-RÉ.", "\"In five years I'll live in another city.\""),
    spk("Algún día tendré mi propia empresa.", "Ten-DRÉ: tap the r after d, and stress the end.", "\"One day I'll have my own company.\" Tener → tendré."),
  ],
  "a2d-por-para-say-it-yourself": [
    spk("Tengo que terminar el proyecto para el lunes.", "Proyecto: y like \"yes\"; stress pro-YEC-to.", "\"I have to finish the project by Monday.\" Para for a deadline."),
    spk("Por la tarde voy al gimnasio para relajarme.", "Gimnasio starts with the j sound; relajarme has a j too.", "\"In the afternoon I go to the gym to relax.\" Por for a part of the day, para for a purpose."),
  ],
  "a2d-negation-say-it-yourself": [
    spk("Nunca bebo café después de las cinco.", "Bebo: firm b at the start of the word, soft b in the middle.", "\"I never drink coffee after five.\" Nunca before the verb needs no no."),
    spk("De niño no comía ninguna verdura.", "Ninguna: the g is soft between vowels, nin-GU-na.", "\"As a child I didn't eat any vegetables.\" No + verb + ninguna: the double negative is correct in Spanish."),
  ],
  "a2d-say-it-yourself-introduce": [
    spk("De niña vivía en un pueblo, pero en 2015 me mudé a la ciudad.", "Pueblo: \"PWE-blo\"; say 2015 as dos mil quince.", "\"As a girl I lived in a village, but in 2015 I moved to the city.\""),
    spk("Ahora trabajo en un banco y el año que viene estudiaré inglés.", "Ahora: silent h, \"a-O-ra\". Estudiaré is stressed on the end.", "\"Now I work in a bank, and next year I'll study English.\" Present, then future."),
  ],
  "a2r-dialogue-weekend": [
    lc(
      "—¿Qué hiciste el fin de semana? —Nada especial. El sábado limpié la casa.",
      "Listen. What did the person do on Saturday?",
      ["Cleaned the house", "Went out with cousins", "Worked all weekend", "Nothing at all"],
      0,
      "El sábado limpié la casa -- \"On Saturday I cleaned the house.\" Nada especial means \"nothing special\", not \"nothing at all\"; going out and working aren't mentioned."
    ),
    lc(
      "Salí con mis primos y comimos en un restaurante peruano.",
      "Listen. Where did they eat?",
      ["At a Peruvian restaurant", "At the cousins' house", "At a Mexican restaurant", "At home"],
      0,
      "Comimos en un restaurante peruano -- \"we ate at a Peruvian restaurant\". Salí con mis primos means they went out with their cousins, not to their house."
    ),
    spk("—¿Saliste el domingo? —Sí, salí con mis primos.", "Rise on the question; stress sa-LÍS-te and sa-LÍ.", "\"Did you go out on Sunday? -- Yes, I went out with my cousins.\""),
    spk("Él trabajó todo el fin de semana.", "Stress the end: tra-ba-JÓ. Without the stress it would be trabajo, \"I work\".", "\"He worked the whole weekend.\""),
  ],
  "a2r-dialogue-gifts-favors": [
    lc(
      "—¿Qué le regalas a tu madre? —Le regalo unas flores.",
      "Listen. What is the present for the mother?",
      ["Flowers", "A video game", "A book", "A car"],
      0,
      "Le regalo unas flores -- \"I'm giving her some flowers.\" Le refers to a tu madre. The video game in the lesson was for the cousins."
    ),
    spk("—¿Me prestas tu coche? —Claro, te presto el coche.", "Prestas, presto: tap the r after p, and keep the s a hiss.", "\"Will you lend me your car? -- Sure, I'll lend you the car.\""),
  ],
  "at-the-restaurant-1": [
    lc(
      "Para mí, la ensalada, y de segundo, el pescado a la plancha.",
      "Listen. What does the person order as a main course?",
      ["Grilled fish", "A salad", "The dish of the day", "A flan"],
      0,
      "De segundo (as the main course), el pescado a la plancha -- grilled fish. The salad is the starter, and flan would be dessert (de postre)."
    ),
    dict("¿Nos trae la cuenta, por favor?", "¿Nos trae la cuenta, por favor? -- \"Could you bring us the bill, please?\" Trae with the soft tr, cuenta with the \"kw\" sound."),
  ],
  "a2r-dialogue-restaurant-problems": [
    lc(
      "Perdone, la sopa está fría. ¿Me la podría calentar?",
      "Listen. What's the problem?",
      ["The soup is cold", "The soup is too salty", "The bill is wrong", "The soup has nuts"],
      0,
      "La sopa está fría -- \"the soup is cold\" -- and ¿me la podría calentar? asks them to heat it up. Salty would be salada, and the bill la cuenta."
    ),
    spk("Perdone, la sopa está fría. ¿Me la podría calentar?", "Polite tone: a gentle rise at the end of the request.", "\"Excuse me, the soup is cold. Could you heat it up for me?\" Podría softens the request."),
    spk("¿Este plato lleva nueces? Soy alérgica.", "Lleva: ll like y. Nueces: seseo \"NWE-ses\" or distinción \"NWE-thes\".", "\"Does this dish have nuts in it? I'm allergic.\" A man would say alérgico."),
    wr(
      "Write a short online review of a restaurant where something went wrong. Say when you went, what you ordered, what the problem was, how the staff reacted, and whether you'd go back.",
      [50, 80],
      [
        "Use the preterite for what happened (fuimos, pedí, trajeron...)",
        "Describe the problem with estar or ser (la sopa estaba fría)",
        "Say how the waiter or manager reacted",
        "Finish with a recommendation or a verdict",
      ],
      "El viernes fui a cenar con mi novio a La Terraza. Pedí una sopa de pescado y él pidió pollo con patatas. La sopa estaba fría y el pollo llegó muy tarde. El camarero fue muy amable: nos pidió perdón y no nos cobró los postres. La comida es buena, pero el servicio es lento. Volveré, pero no un viernes.",
      "Events in a review take the preterite (pedí, llegó), while descriptions of how things were take the imperfect (estaba fría). Pedir changes e → i in the él form: pidió."
    ),
  ],
  "a2r-spiral-telling-stories": [
    wr(
      "Tell the story of a memorable day: set the scene (where you were, the weather, how you felt), then say what happened, and finish with how it ended.",
      [60, 90],
      [
        "Set the scene with the imperfect (era, hacía, estaba...)",
        "Tell the events with the preterite (llegó, vi, fuimos...)",
        "Use at least two time words (de repente, después, al final...)",
        "Say how the day ended or how you felt",
      ],
      "Era sábado y hacía mucho calor. Yo estaba en la playa con mis amigos y todos estábamos muy contentos. De repente, el cielo se puso negro y empezó a llover. Corrimos a un bar pequeño y allí conocimos a un grupo de músicos. Tocaron la guitarra toda la tarde. Al final, la lluvia fue lo mejor del día. Volví a casa mojado, pero muy feliz.",
      "The imperfect paints the background (era, hacía, estaba); the preterite moves the story forward (empezó, corrimos, conocimos). De repente usually introduces a preterite: something interrupts the scene."
    ),
  ],
  "a2r-spiral-three-times": [
    wr(
      "Write about your plans and promises for next year: work or studies, home, travel and one habit you'll change.",
      [40, 70],
      [
        "Use the future tense for at least three plans (viajaré, tendré...)",
        "Use ir a + infinitive at least once",
        "Mention a time expression (el año que viene, en verano...)",
        "Include one promise with nunca or todos los días",
      ],
      "El año que viene terminaré mis estudios y buscaré trabajo en un hospital. En verano voy a mudarme a un piso más grande con mi hermana. En diciembre viajaremos a Colombia para ver a nuestros abuelos. Y una promesa: haré ejercicio todos los días y nunca comeré en el sofá.",
      "The future is formed on the infinitive (terminaré, buscaré, comeré), with a few irregular stems (haré from hacer). Ir a + infinitive (voy a mudarme) is just as natural for plans."
    ),
    lc(
      "El año que viene viajaremos a Colombia.",
      "Listen. When will they travel?",
      ["Next year", "Last year", "This year", "Every year"],
      0,
      "El año que viene means \"next year\", and viajaremos is the future: \"we'll travel\". Last year would be el año pasado, and this year este año."
    ),
  ],
  "a2r-challenge-dialogue-marathon": [
    lc(
      "—¿Qué le pasa? —Me duele el estómago desde ayer.",
      "Listen. What is wrong with the patient?",
      ["Stomachache since yesterday", "Headache since yesterday", "Stomachache since last week", "A sore throat"],
      0,
      "Me duele el estómago desde ayer -- \"My stomach has hurt since yesterday.\" Head would be la cabeza, throat la garganta, and last week la semana pasada."
    ),
    lc(
      "Perdí mi mochila en el tren. Era negra y tenía un llavero rojo.",
      "Listen. What was the backpack like?",
      ["Black, with a red key ring", "Red, with a black key ring", "Black and very big", "Blue, with red straps"],
      0,
      "Era negra y tenía un llavero rojo -- \"It was black and had a red key ring.\" The imperfect describes the lost object; the colours are the other way round in the second option."
    ),
    spk("Trabajé tres años en un hotel.", "Silent h in hotel; tres has a tap after t.", "\"I worked in a hotel for three years.\" Preterite, because the period is finished."),
    spk("Aprenderé rápido, se lo prometo.", "Tap every r: a-pren-de-RÉ, RÁ-pi-do (initial r trilled), pro-ME-to.", "\"I'll learn fast, I promise you.\" Se lo = to you (usted), it."),
  ],
  "a2r-challenge-buenos-aires-1": [
    lc(
      "Tome el subte, línea A, y bájese en Perú.",
      "Listen. Where should Marco get off?",
      ["At Perú station", "At Plaza de Mayo", "At the end of line A", "He should take the bus"],
      0,
      "Bájese en Perú -- \"get off at Perú\". Subte is the Buenos Aires metro; he's going toward Plaza de Mayo, but the stop is Perú."
    ),
    lc(
      "El hotel está en San Telmo. Es más pequeño que en las fotos, pero muy bonito.",
      "Listen. What does Marco think of the hotel?",
      ["It's smaller than in the photos but very pretty", "It's bigger than in the photos", "It's ugly but central", "It's exactly like the photos"],
      0,
      "Más pequeño que en las fotos, pero muy bonito -- smaller than in the photos, but very pretty."
    ),
    spk("Disculpe, ¿cómo llego a la Plaza de Mayo?", "In Buenos Aires you'd hear llego and Mayo with \"sh\": \"SHE-go\", \"MA-sho\".", "\"Excuse me, how do I get to the Plaza de Mayo?\""),
  ],
  "a2r-challenge-buenos-aires-2": [
    lc(
      "Perdí la billetera en el colectivo.",
      "Listen. What happened to Marco?",
      ["He lost his wallet on the bus", "He found a wallet on the bus", "He lost his ticket on the train", "He left his wallet at the hotel"],
      0,
      "Perdí la billetera en el colectivo -- \"I lost my wallet on the bus.\" In Argentina, a city bus is un colectivo and a wallet una billetera (in Spain, una cartera)."
    ),
    wr(
      "You're on holiday. Write a postcard to a friend: where you are, what you did yesterday, what the place and the weather are like, and what you'll do tomorrow.",
      [40, 70],
      [
        "Start with a greeting (Querida Ana, ¡Hola, Tom!...)",
        "Say what you did yesterday with the preterite",
        "Describe the place and the weather with ser, estar and hace",
        "Say what you'll do tomorrow (voy a... or the future)",
        "Close with a goodbye (Un abrazo, Besos...)",
      ],
      "¡Hola, Tom! Estoy en Buenos Aires y lo estoy pasando genial. Ayer fui a una clase de tango y conocí a gente muy simpática. La ciudad es enorme y muy bonita. Hace un poco de frío, pero hay sol. Mañana voy a visitar La Boca y comeré empanadas. Un abrazo, Marco.",
      "A postcard mixes three times: the preterite for yesterday (fui, conocí), the present for how things are (es, hace), and ir a or the future for tomorrow. Estar + gerund (lo estoy pasando genial) is the natural \"I'm having a great time\"."
    ),
  ],
  "a2r-challenge-host-family-email": [
    wr(
      "Write your own email to the host family you'll live with next month. Introduce yourself, say how and when you started learning Spanish, what you do now, when you'll arrive, and ask them a question.",
      [70, 110],
      [
        "A letter greeting (Querida familia...) and a friendly closing",
        "Introduce yourself in the present (me llamo, estudio, trabajo...)",
        "Say how you started learning Spanish, with the preterite and imperfect",
        "Say when you'll arrive with the future (llegaré...)",
        "Ask the family at least one question (with ustedes)",
      ],
      "Querida familia Ruiz: Me llamo Daniel y tengo veintidós años. Soy de Mánchester y estudio historia en la universidad. Empecé a estudiar español hace tres años, cuando viajé a Perú con mis padres. Allí conocí a una familia muy amable y me gustó mucho el idioma. Ahora hablo un poco mejor, pero todavía cometo muchos errores. Llegaré el 5 de agosto por la tarde. ¿Necesitan algo de Inglaterra? ¿A qué hora cenan normalmente? Muchas gracias por todo. Un abrazo, Daniel",
      "A good introduction email moves through time: the present for who you are, the preterite for how it started (empecé, viajé), the future for the arrival (llegaré). Ustedes (necesitan, cenan) is the natural way to address the whole family."
    ),
  ],
  "a2-comprehensive-review-1": [
    dict("Ayer fuimos al cine y vimos una película muy buena.", "Ayer fuimos al cine y vimos una película muy buena -- \"Yesterday we went to the cinema and saw a very good film.\" Vimos with v, película with an accent on the second syllable."),
  ],
  "a2-comprehensive-review-2": [
    dict("Cuando era pequeña, vivía en un pueblo.", "Cuando era pequeña, vivía en un pueblo -- \"When I was little, I lived in a village.\" Imperfect for background; vivía needs its accent."),
  ],
  "a2-comprehensive-review-3": [
    dict("Mañana me levantaré más temprano que hoy.", "Mañana me levantaré más temprano que hoy -- \"Tomorrow I'll get up earlier than today.\" Future levantaré, and más... que for the comparison."),
  ],
  "a2r-exit-ticket": [
    lc(
      "Llegué tarde porque perdí el autobús.",
      "Listen. Why was the person late?",
      ["They missed the bus", "They lost their keys", "They got up late", "The bus was full"],
      0,
      "Perdí el autobús -- \"I missed the bus\". Perder means both \"to lose\" and \"to miss\" (a bus, a train). Keys would be las llaves."
    ),
  ],
};
