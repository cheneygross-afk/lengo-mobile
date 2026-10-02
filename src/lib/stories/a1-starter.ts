// Synced from cheneygross-afk/lengo:src/lib/stories/a1-starter.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Story, StoryGloss } from "./types";

// Starter stories: ten very short A1 texts (40-80 words) for readers in
// their first weeks, added after the beginner-difficulty review. Present
// tense only, about the 300 most frequent words, no reflexive se + verb
// and no le/les, and everyday adult situations. They lead the A1 list
// (a1.ts) and their English (a1-english.ts) and glosses (a1-glosses.ts)
// are merged in from here.

export const A1_STARTER_STORIES: Story[] = [
  {
    slug: "starter-un-cafe-por-favor",
    level: "A1",
    title: "Un café, por favor",
    subtitle: "Ana orders breakfast at the café next to her office.",
    paragraphs: [
      "Ana trabaja en una oficina en el centro. Todos los días, antes de trabajar, va a un café pequeño.",
      "\"Buenos días. Un café con leche, por favor\", dice Ana. \"¿Y algo para comer?\", pregunta el camarero. \"Sí, un pan con tomate.\"",
      "El café está muy bueno. Ana paga tres euros y dice: \"Gracias, hasta mañana.\" Son las nueve. Ahora Ana está lista para trabajar.",
    ],
    questions: [
      {
        question: "Where does Ana go before work?",
        options: ["To a small café", "To the gym", "To the market", "To her mother's house"],
        correctIndex: 0,
        explanation: "\"Va a un café pequeño\": she goes to a small café.",
      },
      {
        question: "What does Ana eat?",
        options: ["Bread with tomato", "A sandwich", "Nothing", "Fruit"],
        correctIndex: 0,
        explanation: "She orders \"un pan con tomate\": bread with tomato.",
      },
      {
        question: "How much does she pay?",
        options: ["Three euros", "Two euros", "Nine euros", "Ten euros"],
        correctIndex: 0,
        explanation: "\"Ana paga tres euros.\"",
      },
    ],
  },
  {
    slug: "starter-mi-piso",
    level: "A1",
    title: "Mi piso",
    subtitle: "Luis describes his small flat in the city.",
    paragraphs: [
      "Me llamo Luis y vivo en un piso pequeño en la ciudad. El piso tiene una habitación, un baño y una cocina.",
      "La cocina es muy pequeña, pero tiene una ventana grande. Desde la ventana veo un parque. El piso no es nuevo, pero es bonito y no es caro.",
      "Vivo solo, pero tengo un gato. Se llama Tigre. Tigre duerme todo el día en el sofá.",
    ],
    questions: [
      {
        question: "How many bedrooms does Luis's flat have?",
        options: ["One", "Two", "Three", "None"],
        correctIndex: 0,
        explanation: "\"Tiene una habitación\": one room.",
      },
      {
        question: "What can Luis see from the kitchen window?",
        options: ["A park", "The sea", "A school", "A big street"],
        correctIndex: 0,
        explanation: "\"Desde la ventana veo un parque.\"",
      },
      {
        question: "Who is Tigre?",
        options: ["His cat", "His brother", "His neighbor", "His dog"],
        correctIndex: 0,
        explanation: "\"Tengo un gato. Se llama Tigre.\"",
      },
    ],
  },
  {
    slug: "starter-un-trabajo-nuevo",
    level: "A1",
    title: "Un trabajo nuevo",
    subtitle: "Carmen starts a new job at a bank.",
    paragraphs: [
      "Hoy es lunes. Carmen tiene un trabajo nuevo en un banco. Está un poco nerviosa.",
      "Sus compañeros son simpáticos. Su jefe se llama Pedro. Él habla mucho, pero es muy amable. Carmen tiene una mesa al lado de la ventana.",
      "A las dos, Carmen come con dos compañeras. Hablan de la ciudad, de la familia y del trabajo. Al final del día, Carmen está cansada, pero contenta.",
    ],
    questions: [
      {
        question: "Where is Carmen's new job?",
        options: ["At a bank", "At a school", "At a hospital", "At a shop"],
        correctIndex: 0,
        explanation: "\"Tiene un trabajo nuevo en un banco.\"",
      },
      {
        question: "What is her boss like?",
        options: ["He talks a lot but he's very kind", "He's very quiet", "He's angry", "He's always late"],
        correctIndex: 0,
        explanation: "\"Él habla mucho, pero es muy amable.\"",
      },
      {
        question: "How does Carmen feel at the end of the day?",
        options: ["Tired but happy", "Sad", "Very nervous", "Bored"],
        correctIndex: 0,
        explanation: "\"Carmen está cansada, pero contenta.\"",
      },
    ],
  },
  {
    slug: "starter-en-el-mercado",
    level: "A1",
    title: "En el mercado",
    subtitle: "Jorge buys fruit for the week at the market.",
    paragraphs: [
      "Es sábado y Jorge está en el mercado. Necesita fruta para la semana.",
      "\"¿Cuánto cuestan las naranjas?\", pregunta Jorge. \"Dos euros el kilo\", dice la vendedora. \"Un kilo, por favor. Y también tres plátanos.\"",
      "La vendedora es muy simpática. Jorge paga y dice: \"Gracias, hasta el sábado.\" Jorge compra fruta aquí todas las semanas. Es buena y no es cara.",
    ],
    questions: [
      {
        question: "What day is it?",
        options: ["Saturday", "Monday", "Sunday", "Friday"],
        correctIndex: 0,
        explanation: "\"Es sábado.\"",
      },
      {
        question: "How much is a kilo of oranges?",
        options: ["Two euros", "Three euros", "One euro", "Five euros"],
        correctIndex: 0,
        explanation: "\"Dos euros el kilo.\"",
      },
      {
        question: "What does Jorge buy?",
        options: ["A kilo of oranges and three bananas", "Three kilos of apples", "Bread and milk", "Only bananas"],
        correctIndex: 0,
        explanation: "\"Un kilo, por favor. Y también tres plátanos.\"",
      },
    ],
  },
  {
    slug: "starter-mi-semana",
    level: "A1",
    title: "Mi semana",
    subtitle: "Elena's week: work, Spanish class and the weekend.",
    paragraphs: [
      "Me llamo Elena. De lunes a viernes, trabajo en un hospital. Trabajo mucho y llego a casa tarde.",
      "Los martes y los jueves, estudio español en una escuela por la noche. Mi profesor es de Colombia. La clase es difícil, pero muy interesante.",
      "El sábado y el domingo no trabajo. Leo, camino por el parque y como con mis amigos. ¡Me gusta mucho el fin de semana!",
    ],
    questions: [
      {
        question: "Where does Elena work?",
        options: ["In a hospital", "In a school", "In a restaurant", "In a bank"],
        correctIndex: 0,
        explanation: "\"Trabajo en un hospital.\"",
      },
      {
        question: "When does she study Spanish?",
        options: ["Tuesday and Thursday evenings", "Every morning", "On Saturdays", "On Mondays"],
        correctIndex: 0,
        explanation: "\"Los martes y los jueves, estudio español… por la noche.\"",
      },
      {
        question: "Where is her teacher from?",
        options: ["Colombia", "Spain", "Mexico", "Argentina"],
        correctIndex: 0,
        explanation: "\"Mi profesor es de Colombia.\"",
      },
    ],
  },
  {
    slug: "starter-una-cena-con-amigos",
    level: "A1",
    title: "Una cena con amigos",
    subtitle: "Pablo cooks dinner for three friends.",
    paragraphs: [
      "Es viernes por la noche. Pablo tiene una cena en su casa con tres amigos.",
      "Pablo prepara pasta con tomate y una ensalada. Su amiga Laura trae el vino y Marcos trae el postre: un pastel de chocolate.",
      "Todos comen, beben y hablan mucho. La comida está muy rica. A las doce, los amigos dicen: \"Gracias, Pablo. ¡La próxima cena es en mi casa!\"",
    ],
    questions: [
      {
        question: "What does Pablo cook?",
        options: ["Pasta with tomato and a salad", "Fish and rice", "Pizza", "Soup"],
        correctIndex: 0,
        explanation: "\"Pablo prepara pasta con tomate y una ensalada.\"",
      },
      {
        question: "What does Laura bring?",
        options: ["The wine", "The dessert", "Bread", "Nothing"],
        correctIndex: 0,
        explanation: "\"Su amiga Laura trae el vino.\"",
      },
      {
        question: "What do the friends say at the end?",
        options: ["The next dinner is at their house", "The food is bad", "They want more wine", "They are tired"],
        correctIndex: 0,
        explanation: "\"¡La próxima cena es en mi casa!\"",
      },
    ],
  },
  {
    slug: "starter-el-tren-de-las-ocho",
    level: "A1",
    title: "El tren de las ocho",
    subtitle: "Marta takes the same train to work every morning.",
    paragraphs: [
      "Marta vive fuera de la ciudad. Todos los días, toma el tren de las ocho para ir al trabajo.",
      "El tren tarda cuarenta minutos. Marta lee un libro o escucha música. A veces habla con un señor mayor. Él también toma el tren todos los días.",
      "Hoy el tren llega tarde. Marta llama a su jefa: \"Lo siento, el tren llega tarde.\" \"No hay problema\", dice la jefa.",
    ],
    questions: [
      {
        question: "Where does Marta live?",
        options: ["Outside the city", "In the city center", "Next to her office", "In another country"],
        correctIndex: 0,
        explanation: "\"Marta vive fuera de la ciudad.\"",
      },
      {
        question: "How long is the train ride?",
        options: ["Forty minutes", "Eight minutes", "Two hours", "Fourteen minutes"],
        correctIndex: 0,
        explanation: "\"El tren tarda cuarenta minutos.\"",
      },
      {
        question: "Why does Marta call her boss?",
        options: ["The train is late", "She is sick", "She has a new job", "She wants a day off"],
        correctIndex: 0,
        explanation: "\"Hoy el tren llega tarde.\"",
      },
    ],
  },
  {
    slug: "starter-mi-hermana-en-lima",
    level: "A1",
    title: "Mi hermana en Lima",
    subtitle: "Daniel talks to his sister in Peru every Sunday.",
    paragraphs: [
      "Me llamo Daniel y vivo en Madrid. Mi hermana Sofía vive en Lima, en Perú. Ella es médica y tiene dos hijos.",
      "Todos los domingos, hablo con Sofía por teléfono. En Madrid son las seis de la tarde. En Lima son las once de la mañana.",
      "Sofía habla de su trabajo y de sus hijos. Yo hablo de mi semana. En diciembre, quiero visitar a mi hermana en Lima.",
    ],
    questions: [
      {
        question: "What is Sofía's job?",
        options: ["She's a doctor", "She's a teacher", "She's a lawyer", "She works in a shop"],
        correctIndex: 0,
        explanation: "\"Ella es médica.\"",
      },
      {
        question: "When does Daniel talk to his sister?",
        options: ["Every Sunday", "Every day", "Once a month", "On Fridays"],
        correctIndex: 0,
        explanation: "\"Todos los domingos, hablo con Sofía por teléfono.\"",
      },
      {
        question: "What does Daniel want to do in December?",
        options: ["Visit his sister in Lima", "Move to Lima", "Change jobs", "Visit Madrid"],
        correctIndex: 0,
        explanation: "\"En diciembre, quiero visitar a mi hermana en Lima.\"",
      },
    ],
  },
  {
    slug: "starter-el-fin-de-semana",
    level: "A1",
    title: "El fin de semana",
    subtitle: "Two flatmates plan a quiet weekend.",
    paragraphs: [
      "Es viernes. Lucía y Clara viven juntas en un piso. \"¿Qué hacemos este fin de semana?\", pregunta Lucía.",
      "\"El sábado quiero ir a la playa\", dice Clara. \"Pero mañana hace frío\", dice Lucía. \"Entonces, ¿un museo y un café?\" \"¡Sí, perfecto!\"",
      "El domingo no hacen nada. Leen, ven una película y cocinan juntas. Para Lucía y Clara, es un fin de semana perfecto.",
    ],
    questions: [
      {
        question: "Why don't they go to the beach?",
        options: ["It's going to be cold", "They have to work", "It's too far", "Clara is sick"],
        correctIndex: 0,
        explanation: "\"Pero mañana hace frío.\"",
      },
      {
        question: "What do they do on Saturday instead?",
        options: ["A museum and a café", "The cinema", "Shopping", "They stay home"],
        correctIndex: 0,
        explanation: "\"¿Un museo y un café?\" \"¡Sí, perfecto!\"",
      },
      {
        question: "What do they do on Sunday?",
        options: ["They read, watch a film and cook", "They go to the beach", "They work", "They visit family"],
        correctIndex: 0,
        explanation: "\"Leen, ven una película y cocinan juntas.\"",
      },
    ],
  },
  {
    slug: "starter-en-el-medico",
    level: "A1",
    title: "En el médico",
    subtitle: "Raúl has a headache and goes to the doctor.",
    paragraphs: [
      "Raúl no está bien. Tiene dolor de cabeza y está muy cansado. Hoy no va a trabajar. Va al médico.",
      "\"¿Qué pasa, Raúl?\", pregunta la médica. \"Me duele la cabeza y tengo frío\", dice Raúl. La médica dice: \"No es nada serio. Necesita descansar y beber mucha agua.\"",
      "Raúl está en casa todo el día. Duerme mucho. Por la noche, está mucho mejor.",
    ],
    questions: [
      {
        question: "What's wrong with Raúl?",
        options: ["He has a headache and he's tired", "He has a broken leg", "His stomach hurts", "Nothing"],
        correctIndex: 0,
        explanation: "\"Tiene dolor de cabeza y está muy cansado.\"",
      },
      {
        question: "What does the doctor tell him to do?",
        options: ["Rest and drink a lot of water", "Go to the hospital", "Go back to work", "Eat more"],
        correctIndex: 0,
        explanation: "\"Necesita descansar y beber mucha agua.\"",
      },
      {
        question: "How is Raúl in the evening?",
        options: ["Much better", "Worse", "The same", "At the hospital"],
        correctIndex: 0,
        explanation: "\"Por la noche, está mucho mejor.\"",
      },
    ],
  },
];

export const A1_STARTER_ENGLISH: Record<string, string[]> = {
  "starter-un-cafe-por-favor": [
    "Ana works in an office downtown. Every day, before work, she goes to a small café.",
    "\"Good morning. A coffee with milk, please,\" Ana says. \"And something to eat?\" the waiter asks. \"Yes, bread with tomato.\"",
    "The coffee is very good. Ana pays three euros and says, \"Thanks, see you tomorrow.\" It's nine o'clock. Now Ana is ready to work.",
  ],
  "starter-mi-piso": [
    "My name is Luis and I live in a small flat in the city. The flat has one bedroom, a bathroom and a kitchen.",
    "The kitchen is very small, but it has a big window. From the window I see a park. The flat isn't new, but it's nice and it isn't expensive.",
    "I live alone, but I have a cat. His name is Tigre. Tigre sleeps all day on the sofa.",
  ],
  "starter-un-trabajo-nuevo": [
    "Today is Monday. Carmen has a new job at a bank. She's a little nervous.",
    "Her coworkers are nice. Her boss's name is Pedro. He talks a lot, but he's very kind. Carmen has a desk next to the window.",
    "At two, Carmen has lunch with two coworkers. They talk about the city, family and work. At the end of the day, Carmen is tired but happy.",
  ],
  "starter-en-el-mercado": [
    "It's Saturday and Jorge is at the market. He needs fruit for the week.",
    "\"How much are the oranges?\" Jorge asks. \"Two euros a kilo,\" the stallholder says. \"A kilo, please. And three bananas too.\"",
    "The stallholder is very friendly. Jorge pays and says, \"Thanks, see you Saturday.\" Jorge buys fruit here every week. It's good and it isn't expensive.",
  ],
  "starter-mi-semana": [
    "My name is Elena. From Monday to Friday, I work in a hospital. I work a lot and get home late.",
    "On Tuesdays and Thursdays, I study Spanish at a school in the evening. My teacher is from Colombia. The class is hard, but very interesting.",
    "On Saturday and Sunday I don't work. I read, walk in the park and eat with my friends. I really like the weekend!",
  ],
  "starter-una-cena-con-amigos": [
    "It's Friday night. Pablo is having a dinner at his place with three friends.",
    "Pablo makes pasta with tomato and a salad. His friend Laura brings the wine and Marcos brings dessert: a chocolate cake.",
    "Everyone eats, drinks and talks a lot. The food is delicious. At twelve, the friends say, \"Thanks, Pablo. The next dinner is at my place!\"",
  ],
  "starter-el-tren-de-las-ocho": [
    "Marta lives outside the city. Every day, she takes the eight o'clock train to go to work.",
    "The train takes forty minutes. Marta reads a book or listens to music. Sometimes she talks to an older man. He takes the train every day too.",
    "Today the train is late. Marta calls her boss: \"I'm sorry, the train is late.\" \"No problem,\" her boss says.",
  ],
  "starter-mi-hermana-en-lima": [
    "My name is Daniel and I live in Madrid. My sister Sofía lives in Lima, in Peru. She's a doctor and she has two children.",
    "Every Sunday, I talk to Sofía on the phone. In Madrid it's six in the evening. In Lima it's eleven in the morning.",
    "Sofía talks about her work and her children. I talk about my week. In December, I want to visit my sister in Lima.",
  ],
  "starter-el-fin-de-semana": [
    "It's Friday. Lucía and Clara share a flat. \"What shall we do this weekend?\" Lucía asks.",
    "\"On Saturday I want to go to the beach,\" Clara says. \"But tomorrow it's going to be cold,\" Lucía says. \"So, a museum and a café?\" \"Yes, perfect!\"",
    "On Sunday they don't do anything. They read, watch a film and cook together. For Lucía and Clara, it's a perfect weekend.",
  ],
  "starter-en-el-medico": [
    "Raúl isn't well. He has a headache and he's very tired. Today he isn't going to work. He goes to the doctor.",
    "\"What's wrong, Raúl?\" the doctor asks. \"My head hurts and I'm cold,\" Raúl says. The doctor says, \"It's nothing serious. You need to rest and drink a lot of water.\"",
    "Raúl stays at home all day. He sleeps a lot. By the evening, he's much better.",
  ],
};

// Glosses for the few words the A1 lessons don't teach.
export const A1_STARTER_GLOSSES: Record<string, StoryGloss[]> = {
  "starter-en-el-mercado": [
    { es: "el vendedor / la vendedora", en: "seller, stallholder", forms: ["vendedora"] },
    { es: "el plátano", en: "banana", forms: ["plátanos"] },
  ],
};
