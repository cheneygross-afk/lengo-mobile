// Synced from cheneygross-afk/lengo:src/lib/exams/dele-a1-lectura.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { ExamPaper } from "./types";

// DELE A1 practice exam -- Prueba 1: Comprensión de lectura.
// 45 minutes, 4 tasks, 25 items.
const SHOPS = [
  "A. Farmacia Sol",
  "B. Librería Letras",
  "C. Panadería La Espiga",
  "D. Gimnasio Activa",
  "E. Óptica Visión",
  "F. Zapatería Pasos",
  "G. Frutería El Huerto",
  "H. Peluquería Rizos",
  "I. Tienda de móviles Conecta",
  "J. Floristería Margarita",
];

const PLACES = [
  "A. el museo",
  "B. el mercado",
  "C. la playa",
  "D. el parque",
  "E. la estación",
  "F. el cine",
  "G. el restaurante",
  "H. la biblioteca",
  "I. el hospital",
];

export const DELE_A1_LECTURA: ExamPaper = {
  id: "lectura",
  kind: "reading",
  title: "Comprensión de lectura",
  minutes: 45,
  group: 1,
  tasks: [
    {
      title: "Tarea 1",
      instructions:
        "Usted va a leer un correo electrónico de Ana a su amiga Laura. Después, debe contestar a las preguntas (1-5). Seleccione la opción correcta (a, b o c).",
      instructionsEn: "Read Ana's email to her friend Laura, then answer questions 1-5. Choose a, b or c.",
      texts: [
        {
          title: "Nuevo mensaje",
          body:
            "De: Ana\nPara: Laura\nAsunto: ¡Hola desde Salamanca!\n\n" +
            "¡Hola, Laura!\n\n" +
            "¿Qué tal? Yo estoy muy bien. Estoy en Salamanca para estudiar español. Vivo con una familia muy simpática: el padre se llama Luis y es médico, la madre se llama Pilar y es profesora. Tienen dos hijos pequeños y un perro.\n\n" +
            "Las clases son de lunes a viernes, de nueve a una. Mi profesor se llama Jorge y es muy divertido. En mi clase hay ocho estudiantes de muchos países. Por la tarde estudio en la biblioteca o paseo por la ciudad. Salamanca es pequeña y muy bonita.\n\n" +
            "Los sábados voy al mercado con Pilar y los domingos como con la familia. ¡La comida es buenísima!\n\n" +
            "Un beso,\nAna",
        },
      ],
      layout: "choice",
      items: [
        {
          n: 1,
          question: "Ana está en Salamanca para…",
          options: ["trabajar.", "estudiar español.", "visitar a su familia."],
          answer: 1,
          explanation: "\"Estoy en Salamanca para estudiar español.\"",
        },
        {
          n: 2,
          question: "Pilar es…",
          options: ["médica.", "profesora.", "estudiante."],
          answer: 1,
          explanation: "\"La madre se llama Pilar y es profesora.\" Luis is the doctor.",
        },
        {
          n: 3,
          question: "Las clases de Ana son…",
          options: ["por la mañana.", "por la tarde.", "los fines de semana."],
          answer: 0,
          explanation: "\"De lunes a viernes, de nueve a una\": in the morning.",
        },
        {
          n: 4,
          question: "En la clase de Ana hay…",
          options: ["ocho estudiantes.", "dos estudiantes.", "estudiantes de un solo país."],
          answer: 0,
          explanation: "\"En mi clase hay ocho estudiantes de muchos países.\"",
        },
        {
          n: 5,
          question: "Los sábados Ana…",
          options: ["va al mercado.", "come con la familia.", "va a la biblioteca."],
          answer: 0,
          explanation: "\"Los sábados voy al mercado con Pilar.\" She eats with the family on Sundays.",
        },
      ],
    },
    {
      title: "Tarea 2",
      instructions:
        "Usted va a leer seis textos breves: avisos, notas y anuncios. Después, debe contestar a las preguntas (6-11). Seleccione la opción correcta (a, b o c).",
      instructionsEn: "Read six short texts (notices, notes and ads) and answer questions 6-11. Choose a, b or c.",
      texts: [
        { label: "Texto 1", body: "MUSEO DE LA CIUDAD\nAbierto de martes a domingo, de 10:00 a 18:00. Lunes, cerrado. Entrada gratis los miércoles." },
        { label: "Texto 2", body: "Mamá: estoy en casa de Pablo. Vuelvo a las ocho para cenar. La comida del perro está en la cocina. Besos, Lucas." },
        { label: "Texto 3", body: "SE VENDE bicicleta azul, casi nueva. 90 euros. Llamar por la tarde al 612 345 678. Preguntar por Marisa." },
        { label: "Texto 4", body: "CLASES DE GUITARRA para niños de 6 a 12 años. Martes y jueves, de 17:00 a 18:00. Información en la secretaría del colegio." },
        { label: "Texto 5", body: "RESTAURANTE EL PATIO. Menú del día: 12 euros. Primer plato, segundo plato, postre y bebida. De lunes a viernes." },
        { label: "Texto 6", body: "Hola, Carmen: el jueves no hay clase de yoga. La profesora está enferma. La próxima clase es el martes. Saludos, Elena." },
      ],
      layout: "choice",
      items: [
        { n: 6, question: "El museo…", options: ["abre los lunes.", "es gratis los miércoles.", "cierra a las diez."], answer: 1, source: 0, explanation: "\"Entrada gratis los miércoles.\" It's closed on Mondays and closes at six." },
        { n: 7, question: "Lucas…", options: ["está en casa de un amigo.", "va a cenar con Pablo.", "tiene que dar de comer al perro."], answer: 0, source: 1, explanation: "\"Estoy en casa de Pablo. Vuelvo a las ocho para cenar.\"" },
        { n: 8, question: "La bicicleta…", options: ["es vieja.", "cuesta noventa euros.", "es roja."], answer: 1, source: 2, explanation: "\"Bicicleta azul, casi nueva. 90 euros.\"" },
        { n: 9, question: "Las clases de guitarra son…", options: ["para adultos.", "dos días a la semana.", "por la mañana."], answer: 1, source: 3, explanation: "\"Martes y jueves\": two days a week, for children, in the afternoon." },
        { n: 10, question: "En el restaurante El Patio, el menú…", options: ["incluye la bebida.", "es solo los fines de semana.", "cuesta veinte euros."], answer: 0, source: 4, explanation: "\"Primer plato, segundo plato, postre y bebida\" for 12 euros, Monday to Friday." },
        { n: 11, question: "Elena dice que…", options: ["no hay clase de yoga el jueves.", "ella está enferma.", "la clase es el jueves."], answer: 0, source: 5, explanation: "\"El jueves no hay clase de yoga. La profesora está enferma.\"" },
      ],
    },
    {
      title: "Tarea 3",
      instructions:
        "Usted va a leer lo que necesitan ocho personas y la lista de tiendas de un centro comercial. Relacione a las personas (12-19) con las tiendas (A-J). Hay dos tiendas que no debe seleccionar.",
      instructionsEn: "Read what eight people need and the list of shops in a shopping centre. Match each person (12-19) with a shop (A-J). Two shops are not used.",
      layout: "select",
      items: [
        { n: 12, question: "Rosa: \"Me duele mucho la cabeza.\"", options: SHOPS, answer: 0, explanation: "A headache: the pharmacy (A)." },
        { n: 13, question: "Pedro: \"Quiero un diccionario de inglés.\"", options: SHOPS, answer: 1, explanation: "A dictionary: the bookshop (B)." },
        { n: 14, question: "Inés: \"Necesito pan para la cena.\"", options: SHOPS, answer: 2, explanation: "Bread: the bakery (C)." },
        { n: 15, question: "Tomás: \"No veo bien de lejos.\"", options: SHOPS, answer: 4, explanation: "He can't see well: the optician's (E)." },
        { n: 16, question: "Lucía: \"Mis zapatos son muy viejos.\"", options: SHOPS, answer: 5, explanation: "New shoes: the shoe shop (F)." },
        { n: 17, question: "Javier: \"Quiero comprar manzanas y naranjas.\"", options: SHOPS, answer: 6, explanation: "Fruit: the greengrocer's (G)." },
        { n: 18, question: "Marta: \"Tengo el pelo muy largo.\"", options: SHOPS, answer: 7, explanation: "Long hair: the hairdresser's (H)." },
        { n: 19, question: "Andrés: \"Mi teléfono no funciona.\"", options: SHOPS, answer: 8, explanation: "A broken phone: the mobile phone shop (I). The gym (D) and the florist's (J) are not used." },
      ],
    },
    {
      title: "Tarea 4",
      instructions:
        "Usted va a leer un texto sobre los planes de Daniel para su semana en Málaga. Relacione las frases (20-25) con los lugares (A-I). Hay tres lugares que no debe seleccionar.",
      instructionsEn: "Read about Daniel's plans for his week in Málaga. Match each sentence (20-25) with a place (A-I). Three places are not used.",
      texts: [
        {
          title: "Mi semana en Málaga",
          body:
            "El lunes llego a Málaga en tren a las once de la mañana. Por la tarde quiero ver los cuadros de Picasso. El martes por la mañana voy a comprar fruta y pescado fresco, y por la tarde voy a nadar en el mar. El miércoles quiero leer y estudiar un poco en un sitio tranquilo. El jueves por la noche ceno con unos amigos: ¡tienen pescado muy bueno! El viernes quiero ver una película en español.",
        },
      ],
      layout: "select",
      items: [
        { n: 20, question: "Daniel llega a la ciudad.", options: PLACES, answer: 4, explanation: "\"Llego a Málaga en tren\": the station (E)." },
        { n: 21, question: "Daniel ve los cuadros de Picasso.", options: PLACES, answer: 0, explanation: "Paintings: the museum (A)." },
        { n: 22, question: "Daniel compra fruta y pescado.", options: PLACES, answer: 1, explanation: "Fresh fruit and fish: the market (B)." },
        { n: 23, question: "Daniel nada en el mar.", options: PLACES, answer: 2, explanation: "Swimming in the sea: the beach (C)." },
        { n: 24, question: "Daniel estudia en un sitio tranquilo.", options: PLACES, answer: 7, explanation: "Reading and studying somewhere quiet: the library (H)." },
        { n: 25, question: "Daniel ve una película.", options: PLACES, answer: 5, explanation: "A film: the cinema (F). The restaurant is Thursday's dinner, which isn't asked; the park and the hospital are not used." },
      ],
    },
  ],
};
