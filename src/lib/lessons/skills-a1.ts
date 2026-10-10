// Synced from cheneygross-afk/lengo:src/lib/lessons/skills-a1.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exercise } from "./types";
import { dict, lc, spk, wr } from "./skills-authoring";

// A1 listening, speaking and writing practice, appended to the named
// lessons' final reviews by withSkills() (skills.ts). Instructions in
// English. The pronunciation unit itself is sounds-of-spanish.ts.
export const A1_SKILLS: Record<string, Exercise[]> = {
  "a1r-dialogue-what-do-you-do": [
    lc(
      "¿Trabajas o estudias?",
      "Listen. What is the person asking?",
      ["Do you work or study?", "Do you work a lot?", "Where do you study?", "Do you want to study?"],
      0,
      "¿Trabajas o estudias? -- \"Do you work or study?\" (o = or). \"A lot\" would be mucho, \"where\" dónde, and \"want to\" quieres."
    ),
    lc(
      "—¿Practicas deporte? —Sí, practico tenis.",
      "Listen. What sport does the second person play?",
      ["Tennis", "Football", "Swimming", "None"],
      0,
      "Sí, practico tenis -- \"Yes, I play tennis.\" The answer mirrors the question: practicas → practico."
    ),
    spk("—¿Trabajas mucho? —Sí, trabajo mucho.", "Rise at the end of the question, fall at the end of the answer.", "The mirror rule: trabajas (you) in the question, trabajo (I) in the answer."),
    spk("Estudio inglés y trabajo en una tienda.", "Link estudio inglés into one flow: \"es-tu-dioin-glés\".", "\"I study English and work in a shop.\""),
    spk("No, nunca entrenamos juntos.", "Tap the r in entrenamos (tr), and keep juntos' j breathy.", "\"No, we never train together.\""),
  ],
  "a1r-dialogue-whose-where": [
    lc(
      "Las llaves están en la mesa.",
      "Listen. Where are the keys?",
      ["On the table", "In the car", "Under the bed", "In the kitchen"],
      0,
      "Las llaves están en la mesa -- \"The keys are on the table.\" En la mesa can mean on or in; with a table it's \"on\"."
    ),
    lc(
      "¿De quién es este libro?",
      "Listen. What is the person asking?",
      ["Whose book is this?", "Where is this book?", "What is this book?", "How much is this book?"],
      0,
      "¿De quién es...? asks \"whose\". \"Where\" would be dónde está, \"what\" qué, and \"how much\" cuánto cuesta."
    ),
    spk("¿De quién es este libro? Es de Marta.", "Stress quién and Mar-ta; the voice falls on a question-word question.", "\"Whose book is this? It's Marta's.\" Spanish uses de + owner, never an apostrophe."),
    spk("Mi mochila está debajo de la silla.", "Soft b in debajo (between vowels) and ll like y in silla.", "\"My backpack is under the chair.\""),
  ],
  "a1r-dialogue-me-too-me-neither": [
    lc(
      "—Me gusta el helado. —A mí también.",
      "Listen. Does the second person like ice cream?",
      ["Yes, they like it too", "No, they don't", "They don't say"],
      0,
      "A mí también -- \"me too\" -- agrees with a positive gustar sentence. \"Me neither\" would be a mí tampoco, and \"I don't\" a mí no."
    ),
    lc(
      "—No me gusta el frío. —A mí sí.",
      "Listen. What does the second person think of the cold?",
      ["They like it", "They don't like it either", "They love the heat"],
      0,
      "A mí sí disagrees with a negative sentence: \"I do (like it)\". Agreeing would be a mí tampoco, and nobody mentions heat (el calor)."
    ),
    spk("—Me encanta el fútbol. —¡A mí también!", "Say a mí as one flow: \"a-mí\", with the stress on mí.", "\"I love football. -- Me too!\" After gustar and encantar, \"me too\" is a mí también, not yo también."),
    spk("—No me gusta cocinar. —A mí tampoco.", "Tampoco: tam-PO-co, stressed in the middle.", "\"I don't like cooking. -- Me neither.\""),
    spk("Me gustan los perros, pero no me gustan los gatos.", "Tap for pero, trill for perros: make the difference clear.", "\"I like dogs, but I don't like cats.\" Gustan because los perros is plural."),
  ],
  "a1r-mission-prices-ages-phones": [
    lc("Cuesta quince euros.", "Listen. How much does it cost?", ["€15", "€50", "€5", "€14"], 0, "Quince is 15. Fifty is cincuenta, five cinco, and fourteen catorce."),
    lc("Tengo treinta y dos años.", "Listen. How old is the person?", ["32", "23", "42", "12"], 0, "Treinta y dos is 32 (thirty and two). Twenty-three is veintitrés, forty-two cuarenta y dos, twelve doce."),
    dict("Son veinte euros.", "Son veinte euros -- \"That's twenty euros.\" Son is plural because of euros."),
    dict("Tengo diecinueve años.", "Tengo diecinueve años -- \"I'm nineteen.\" Diecinueve is one word; años needs its ñ."),
  ],
  "a1r-mission-timetable": [
    lc("El tren sale a las ocho y media.", "Listen. When does the train leave?", ["8:30", "8:15", "7:30", "8:45"], 0, "Las ocho y media is 8:30. Quarter past would be y cuarto, and 8:45 is las nueve menos cuarto."),
    lc("La clase empieza a la una.", "Listen. When does the class start?", ["1:00", "11:00", "2:00", "12:00"], 0, "A la una is \"at one o'clock\" -- singular la because it's one hour. Eleven is las once, two las dos, twelve las doce."),
    dict("Son las tres y cuarto.", "Son las tres y cuarto -- \"It's a quarter past three.\""),
  ],
  "days-months-dates": [
    lc("Mi cumpleaños es el doce de mayo.", "Listen. When is the birthday?", ["May 12", "May 2", "March 12", "December 5"], 0, "El doce de mayo is May 12. Spanish says the day first, then de + month. Marzo is March, diciembre December."),
    dict("Hoy es lunes.", "Hoy es lunes -- \"Today is Monday.\" Days of the week are written with a small letter in Spanish."),
    dict("Mi cumpleaños es en enero.", "Mi cumpleaños es en enero -- \"My birthday is in January.\" Months also take a small letter, and cumpleaños keeps its ñ and accent."),
  ],
  "a1r-word-web-family-people": [
    wr(
      "Describe your family (or an imaginary one) for a new Spanish-speaking friend: who is in it, their names and ages, and one detail about each person.",
      [25, 50],
      [
        "Say how many people are in your family (somos...)",
        "Give names with se llama and ages with tiene... años",
        "Describe at least two people with ser + an adjective that agrees",
        "Use family words: padre, madre, hermano, hermana...",
      ],
      "En mi familia somos cuatro. Mi padre se llama Luis y tiene cincuenta años. Es profesor. Mi madre se llama Carmen y es muy simpática. Tengo un hermano, Pablo. Tiene veinte años y es alto. ¡Y tenemos un perro, Toby!",
      "Ages use tener (tiene veinte años), never ser. Adjectives agree with the person: simpática for your mother, alto for your brother."
    ),
  ],
  "gustar-mastery-check": [
    wr(
      "Write a message to a language-exchange partner about what you like and don't like (food, sport, music...). Then ask what they like.",
      [25, 50],
      [
        "Use me gusta with one thing or an infinitive",
        "Use me gustan with a plural noun",
        "Say something you don't like with no me gusta(n)",
        "Ask a question back, such as ¿Y a ti?",
      ],
      "¡Hola, Lucía! Me gusta mucho la música, sobre todo el jazz. Me gustan los tacos y la pizza, pero no me gustan las verduras. Me encanta nadar, pero no me gusta correr. ¿Y a ti? ¿Qué te gusta hacer?",
      "Gusta goes with one thing or a verb (me gusta nadar); gustan with plural things (me gustan los tacos). To ask back, say ¿Y a ti?, not ¿Y tú?"
    ),
  ],
  "a1r-mission-weekend-plans": [
    lc(
      "Voy a jugar al fútbol. Hace buen tiempo.",
      "Listen. What is the person going to do?",
      ["Play football", "Go to the cinema", "Watch football on TV", "Stay home because of the weather"],
      0,
      "Voy a jugar al fútbol -- \"I'm going to play football\" -- and hace buen tiempo, \"the weather's nice\". The cinema would be ir al cine, and watching would be ver."
    ),
    wr(
      "Text a friend about your plans for Saturday: say what you're going to do, what the weather is like, and invite them to come.",
      [20, 45],
      [
        "Use ir a + infinitive for at least two plans",
        "Describe the weather with hace or está",
        "Invite your friend: ¿Quieres venir?",
      ],
      "¡Hola, Marta! El sábado voy a ir a la playa con mi hermana. Hace mucho sol. Por la tarde vamos a comer paella en un restaurante. ¿Quieres venir con nosotras?",
      "Plans use ir a + infinitive: voy a ir, vamos a comer. Weather uses hace: hace sol, hace calor. Nosotras is feminine because the group is two women."
    ),
    spk("¿Qué vas a hacer el sábado?", "Merge vas a hacer: \"va-sa-cer\" -- the h is silent.", "\"What are you going to do on Saturday?\" A question-word question: the voice falls at the end."),
  ],
  "a1r-challenge-your-introduction": [
    wr(
      "Write your own language-exchange profile, like Sam's: your name, age, where you're from and where you live, your job or studies, what you like, and what you do at weekends.",
      [30, 60],
      [
        "Name and age (me llamo, tengo... años)",
        "Where you're from and where you live (soy de, vivo en)",
        "Your job or studies (soy..., trabajo en, estudio)",
        "What you like (me gusta / me encanta)",
        "Something you do at weekends (los fines de semana...)",
      ],
      "Me llamo Paula y tengo veinticinco años. Soy de Sevilla, pero ahora vivo en Londres. Soy enfermera y trabajo en un hospital. Me gusta leer y me encantan los gatos. Los fines de semana voy al mercado y cocino con mis amigos.",
      "A profile answers the same questions in the same order. Jobs after soy take no article (soy enfermera), and me encantan is plural because los gatos is plural."
    ),
    spk("Me llamo Paula y tengo veinticinco años.", "Link llamo y into one flow; veinticinco is one word: vein-ti-CIN-co.", "\"My name is Paula and I'm twenty-five.\""),
  ],
  "a1r-challenge-dialogue-marathon": [
    lc(
      "—¿Cuánto cuestan estas naranjas? —Dos euros el kilo.",
      "Listen. How much are the oranges?",
      ["€2 a kilo", "€2 each", "€12 a kilo", "€3 a kilo"],
      0,
      "Dos euros el kilo -- \"two euros a kilo\". Spanish uses el (the) for \"per\": el kilo. Twelve would be doce, three tres."
    ),
    spk("Hola, soy Kenji. Soy de Japón.", "Japón starts with the breathy j sound and is stressed on -PÓN.", "\"Hi, I'm Kenji. I'm from Japan.\""),
    spk("¿Cuánto cuestan estas naranjas?", "Cuánto and cuestan both start \"kw\": here the u is pronounced.", "\"How much are these oranges?\" Cuestan is plural to match naranjas."),
    spk("Voy a ir al museo. Me encantan los museos.", "Voy a ir: \"vo-ya-ir\", all linked.", "\"I'm going to go to the museum. I love museums.\""),
  ],
  "a1-final-review-1": [
    lc("Mi hermana es médica y vive en Lima.", "Listen. What does the sister do?", ["She's a doctor", "She's a teacher", "She's a nurse", "She's a student"], 0, "Médica is a (woman) doctor. A teacher is profesora, a nurse enfermera and a student estudiante."),
    dict("Mis padres son de Chile.", "Mis padres son de Chile -- \"My parents are from Chile.\" Ser for origin, and padres means parents."),
    spk("Mis padres son de Chile, pero viven en España.", "Tap the r in padres and pero; España has ñ.", "\"My parents are from Chile, but they live in Spain.\""),
  ],
  "a1-final-review-2": [
    lc("Estoy cansado porque trabajo mucho.", "Listen. Why is the person tired?", ["Because they work a lot", "Because they are ill", "Because they study at night", "Because they don't sleep"], 0, "Porque trabajo mucho -- \"because I work a lot\". Estar for a temporary state: estoy cansado."),
    dict("La biblioteca está cerca.", "La biblioteca está cerca -- \"The library is nearby.\" Estar for location, and cerca with c."),
    spk("Estoy cansado porque trabajo mucho.", "Estoy: es-TOY, stress on the end. Porque is one word here.", "\"I'm tired because I work a lot.\""),
  ],
  "a1-final-review-3": [
    lc("Hay un supermercado al lado del banco.", "Listen. Where is the supermarket?", ["Next to the bank", "Behind the bank", "In front of the bank", "Far from the bank"], 0, "Al lado del banco -- \"next to the bank\". Behind is detrás de, in front of delante de, far from lejos de."),
    dict("¿Dónde está el museo?", "¿Dónde está el museo? -- \"Where is the museum?\" Dónde and está both have accents."),
    spk("Hay un supermercado al lado del banco.", "Link al lado del into one smooth phrase; the d's are soft.", "\"There's a supermarket next to the bank.\""),
  ],
  "a1r-exit-ticket": [
    lc(
      "—¿Quieres un café? —No, gracias. Prefiero un té.",
      "Listen. What does the second person want?",
      ["A tea", "A coffee", "Nothing", "Water"],
      0,
      "Prefiero un té -- \"I prefer a tea.\" They say no to el café. Agua would be water."
    ),
  ],
  "a1r-mission-how-do-you-feel": [
    spk("Tengo hambre y tengo mucho sueño.", "Hambre: the h is silent, \"AM-bre\". Sueño: \"SWE-ño\".", "\"I'm hungry and very sleepy.\" Spanish uses tener for hunger and sleepiness: tengo hambre, tengo sueño."),
    spk("¿Tienes frío? Yo tengo calor.", "Rise at the end of the question, fall at the end of the answer.", "\"Are you cold? I'm hot.\" Tener frío, tener calor."),
  ],
  "a1r-mission-describe-a-photo": [
    spk("En la foto, mi hermana está en la playa y está muy feliz.", "Está: stress on the end, es-TÁ. Playa: y like \"yes\".", "\"In the photo my sister is at the beach and she's very happy.\" Estar for where she is and for how she feels in the photo."),
  ],
  "a1r-challenge-day-in-madrid-morning": [
    spk("Buenos días. Un café con leche y un cruasán, por favor.", "Buenos días: \"BWE-nos DÍ-as\". Keep the r of por a single tap.", "\"Good morning. A white coffee and a croissant, please.\" A typical café order in Spain."),
  ],
};
