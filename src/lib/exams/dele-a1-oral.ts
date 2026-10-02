// Synced from cheneygross-afk/lengo:src/lib/exams/dele-a1-oral.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { ExamPaper } from "./types";

// DELE A1 practice exam -- Prueba 4: Expresión e interacción orales.
// About 15 minutes with the examiner, after 15 minutes to prepare tasks
// 1 and 2. (The real Tarea 4 uses pictures; here they're described.)
export const DELE_A1_ORAL: ExamPaper = {
  id: "oral",
  kind: "speaking",
  title: "Expresión e interacción orales",
  minutes: 15,
  prepMinutes: 15,
  group: 2,
  tasks: [
    {
      title: "Tarea 1",
      instructions: "Presentación personal. Hable sobre usted durante 1 o 2 minutos.",
      instructionsEn: "Introduce yourself for 1-2 minutes.",
      speak: {
        prompt: "Preséntese.",
        points: ["Nombre y edad.", "Nacionalidad y lenguas que habla.", "Dónde vive y con quién.", "Profesión o estudios.", "Una cosa que le gusta."],
        prepMinutes: 5,
        speakMinutes: 2,
        modelAnswer:
          "Hola, me llamo Daniel y tengo treinta y dos años. Soy irlandés, de Dublín. Hablo inglés y un poco de español. Ahora vivo en Valencia con mi pareja y nuestro perro, Max. Soy ingeniero y trabajo en una empresa de energía solar. Me gusta mucho correr por la playa por la mañana.",
      },
    },
    {
      title: "Tarea 2",
      instructions: "Exposición de un tema. Hable sobre el tema de la lámina durante 2 o 3 minutos.",
      instructionsEn: "Talk about the topic on the card for 2-3 minutes.",
      speak: {
        prompt: "Mi casa",
        points: ["Dónde está su casa.", "Cómo es: grande, pequeña, nueva, antigua.", "Qué habitaciones tiene.", "Qué hay en su habitación favorita.", "Qué le gusta y qué no le gusta de su casa."],
        prepMinutes: 10,
        speakMinutes: 3,
        modelAnswer:
          "Mi casa está en el centro de la ciudad, cerca de un parque. Es un piso pequeño pero muy bonito. Tiene dos dormitorios, un salón, una cocina y un baño. Mi habitación favorita es el salón: hay un sofá azul, una mesa, muchos libros y una ventana grande. Por la tarde entra mucho sol. Me gusta mucho mi casa porque es tranquila y luminosa. No me gusta la cocina porque es muy pequeña y no hay lavaplatos.",
      },
    },
    {
      title: "Tarea 3",
      instructions: "Conversación con el entrevistador. El entrevistador le hace preguntas sobre las Tareas 1 y 2 durante 3 o 4 minutos.",
      instructionsEn: "Conversation: the examiner asks you about Tasks 1 and 2 for 3-4 minutes.",
      speak: {
        prompt: "Conversación sobre usted y su casa.",
        points: ["Responda con frases completas.", "Si no entiende, pida que repita: ¿Puede repetir, por favor?"],
        examinerQuestions: [
          "¿Desde cuándo vive en esa ciudad?",
          "¿Con quién vive?",
          "¿Qué hace normalmente por la tarde?",
          "¿Cómo es su barrio? ¿Qué hay cerca de su casa?",
          "¿Qué le gusta hacer los fines de semana?",
        ],
        prepMinutes: 0,
        speakMinutes: 4,
        modelAnswer:
          "—¿Con quién vive?\n—Vivo con mi pareja, Laura, y con nuestro perro.\n—¿Qué hace normalmente por la tarde?\n—Trabajo hasta las cinco. Después voy al gimnasio o paseo con el perro.\n—¿Cómo es su barrio?\n—Es tranquilo. Hay un parque, un supermercado y muchos bares. La playa está a diez minutos.\n—¿Qué le gusta hacer los fines de semana?\n—Me gusta ir a la playa, comer con amigos y ver películas.",
      },
    },
    {
      title: "Tarea 4",
      instructions: "Diálogos basados en imágenes. Usted y el entrevistador hablan en cuatro situaciones. Duración: 2 o 3 minutos.",
      instructionsEn: "Short dialogues based on pictures: you and the examiner talk in four situations, 2-3 minutes in all.",
      speak: {
        prompt: "Usted está en una cafetería y en la calle. Pida y pregunte lo que necesita en cada situación.",
        material: [
          { title: "Imagen 1", body: "Una cafetería. En la barra hay cafés, zumos y bocadillos con sus precios." },
          { title: "Imagen 2", body: "Una calle con un banco, una farmacia y una parada de autobús." },
          { title: "Imagen 3", body: "Una tienda de ropa. Un jersey rojo en el escaparate: 25 €." },
          { title: "Imagen 4", body: "Un reloj que marca las cinco menos cuarto." },
        ],
        points: [
          "Imagen 1: pida algo de comer y de beber y pregunte el precio.",
          "Imagen 2: pregunte dónde está la farmacia.",
          "Imagen 3: pregunte si tienen el jersey en otro color.",
          "Imagen 4: conteste qué hora es.",
        ],
        examinerQuestions: ["Hola, ¿qué quiere tomar?", "La farmacia está al lado del banco.", "Sí, también lo tenemos en azul y en negro.", "Perdone, ¿qué hora es?"],
        prepMinutes: 0,
        speakMinutes: 3,
        modelAnswer:
          "—Hola, ¿qué quiere tomar?\n—Un zumo de naranja y un bocadillo de jamón, por favor. ¿Cuánto es?\n—Seis euros.\n—Perdone, ¿dónde está la farmacia?\n—Está al lado del banco.\n—Muchas gracias.\n—Hola. ¿Tienen este jersey en otro color?\n—Sí, también lo tenemos en azul y en negro.\n—Perdone, ¿qué hora es?\n—Son las cinco menos cuarto.",
      },
    },
  ],
};
