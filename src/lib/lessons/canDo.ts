// Synced from cheneygross-afk/lengo:src/lib/lessons/canDo.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { SpanishLevelPath } from "./levels";

// CEFR "can-do" statements for each core level: what a learner who
// finishes the level can actually do in Spanish. Written from the CEFR
// global and skill descriptors (Council of Europe, Companion Volume 2020)
// and fitted to what this course's lessons, stories and readings cover.
// Shown at the top of each level's lessons page and on the public
// curriculum outline. Pure data, synced to the app with the lessons.
//
// Each statement has both languages: A1/A2 pages show the English (the
// instruction language there), B1 and up show the Spanish, tap-to-hear.

export type CanDoSkill = "listening" | "reading" | "speaking" | "conversation" | "writing";

export type CanDoStatement = {
  skill: CanDoSkill;
  en: string;
  es: string;
};

export const CAN_DO_SKILL_LABELS: Record<CanDoSkill, { en: string; es: string }> = {
  listening: { en: "Listening", es: "Comprensión auditiva" },
  reading: { en: "Reading", es: "Comprensión lectora" },
  speaking: { en: "Speaking", es: "Expresión oral" },
  conversation: { en: "Conversation", es: "Interacción" },
  writing: { en: "Writing", es: "Expresión escrita" },
};

export const CAN_DO_STATEMENTS: Record<SpanishLevelPath, CanDoStatement[]> = {
  a1: [
    {
      skill: "conversation",
      en: "Introduce yourself and others, and ask and answer simple questions about where people live, what they do and what they have.",
      es: "Presentarte y presentar a otros, y hacer y responder preguntas sencillas sobre dónde vive la gente, a qué se dedica y qué tiene.",
    },
    {
      skill: "conversation",
      en: "Order food and drink, ask for prices and quantities, and handle numbers, times and dates.",
      es: "Pedir comida y bebida, preguntar precios y cantidades, y manejar números, horas y fechas.",
    },
    {
      skill: "listening",
      en: "Understand familiar words and very basic phrases about yourself and your surroundings when people speak slowly and clearly.",
      es: "Entender palabras conocidas y frases muy básicas sobre ti y tu entorno cuando la gente habla despacio y con claridad.",
    },
    {
      skill: "reading",
      en: "Read short, simple texts such as signs, menus, notices and messages, and follow a short graded story.",
      es: "Leer textos breves y sencillos, como carteles, menús, avisos y mensajes, y seguir un cuento corto graduado.",
    },
    {
      skill: "speaking",
      en: "Describe your daily routine, your family, your home and the people you know in simple sentences.",
      es: "Describir tu rutina diaria, tu familia, tu casa y a la gente que conoces con frases sencillas.",
    },
    {
      skill: "writing",
      en: "Fill in a form with your personal details and write a short, simple message or postcard.",
      es: "Rellenar un formulario con tus datos personales y escribir un mensaje o una postal breve y sencilla.",
    },
  ],
  a2: [
    {
      skill: "speaking",
      en: "Talk about what you did yesterday, last week or as a child, using the preterite and the imperfect.",
      es: "Contar lo que hiciste ayer, la semana pasada o de pequeño, con el pretérito indefinido y el imperfecto.",
    },
    {
      skill: "conversation",
      en: "Get by in everyday transactions: shopping, transport, the doctor's, the bank and booking a room.",
      es: "Desenvolverte en gestiones cotidianas: compras, transporte, el médico, el banco y reservar una habitación.",
    },
    {
      skill: "conversation",
      en: "Make, accept and turn down invitations, and arrange when and where to meet.",
      es: "Hacer, aceptar y rechazar invitaciones, y quedar en cuándo y dónde veros.",
    },
    {
      skill: "listening",
      en: "Catch the main point of short, clear announcements and messages, and of conversations on familiar topics.",
      es: "Captar la idea principal de avisos y mensajes cortos y claros, y de conversaciones sobre temas conocidos.",
    },
    {
      skill: "reading",
      en: "Find specific information in everyday texts such as ads, timetables, listings and short emails.",
      es: "Encontrar información concreta en textos cotidianos como anuncios, horarios, listados y correos breves.",
    },
    {
      skill: "speaking",
      en: "Compare people, places and things, and say what you prefer and why.",
      es: "Comparar personas, lugares y cosas, y decir qué prefieres y por qué.",
    },
    {
      skill: "writing",
      en: "Write a short personal email or note about plans, thanks or an apology.",
      es: "Escribir un correo o una nota personal breve sobre planes, agradecimientos o disculpas.",
    },
  ],
  b1: [
    {
      skill: "conversation",
      en: "Deal with most situations while travelling, and enter unprepared into a conversation on familiar topics.",
      es: "Resolver la mayoría de las situaciones de un viaje y meterte sin preparación en una conversación sobre temas conocidos.",
    },
    {
      skill: "speaking",
      en: "Express wishes, feelings, doubts and opinions with the subjunctive, and give reasons for them.",
      es: "Expresar deseos, sentimientos, dudas y opiniones con el subjuntivo, y justificarlos.",
    },
    {
      skill: "speaking",
      en: "Tell a story or describe an experience, a plan or a hope, connecting the events clearly.",
      es: "Narrar una historia o describir una experiencia, un plan o una ilusión, enlazando los hechos con claridad.",
    },
    {
      skill: "listening",
      en: "Follow the main points of clear standard speech about work, study and leisure, and of many radio and TV programs.",
      es: "Seguir las ideas principales de un discurso claro sobre trabajo, estudios y ocio, y de muchos programas de radio y televisión.",
    },
    {
      skill: "reading",
      en: "Understand everyday texts and short articles, and read a whole short story for pleasure.",
      es: "Entender textos cotidianos y artículos breves, y leer un cuento entero por placer.",
    },
    {
      skill: "writing",
      en: "Write a connected text on a familiar topic, or a letter describing experiences and impressions.",
      es: "Escribir un texto cohesionado sobre un tema conocido, o una carta en la que describes experiencias e impresiones.",
    },
  ],
  b2: [
    {
      skill: "conversation",
      en: "Talk with native speakers fluently and spontaneously enough that neither side has to strain.",
      es: "Conversar con hablantes nativos con la fluidez y la espontaneidad suficientes para que nadie tenga que esforzarse.",
    },
    {
      skill: "speaking",
      en: "Argue a point of view on a current issue, weighing the advantages and drawbacks of each option.",
      es: "Defender un punto de vista sobre un tema de actualidad, sopesando las ventajas y los inconvenientes de cada opción.",
    },
    {
      skill: "speaking",
      en: "Report what other people said, asked or recommended, and speculate about what might have happened.",
      es: "Transmitir lo que otros dijeron, preguntaron o recomendaron, y hacer hipótesis sobre lo que pudo haber pasado.",
    },
    {
      skill: "listening",
      en: "Follow extended speech, lectures and the news, and most films in standard Spanish.",
      es: "Seguir discursos extensos, conferencias y las noticias, y la mayoría de las películas en español estándar.",
    },
    {
      skill: "reading",
      en: "Read articles and reports in which writers take a stance, and contemporary novels.",
      es: "Leer artículos e informes en los que el autor adopta una postura, y novelas contemporáneas.",
    },
    {
      skill: "writing",
      en: "Write a clear, detailed essay or report that gives reasons for and against a position.",
      es: "Redactar un ensayo o un informe claro y detallado que exponga argumentos a favor y en contra de una postura.",
    },
  ],
  c1: [
    {
      skill: "speaking",
      en: "Express yourself fluently and spontaneously without obviously searching for words.",
      es: "Expresarte con fluidez y espontaneidad sin tener que buscar las palabras de forma evidente.",
    },
    {
      skill: "conversation",
      en: "Use Spanish flexibly for social, academic and professional purposes, adjusting your register to the situation.",
      es: "Usar el español con flexibilidad en contextos sociales, académicos y profesionales, adaptando el registro a cada situación.",
    },
    {
      skill: "listening",
      en: "Understand extended speech even when it isn't clearly structured, including fast speech and a range of accents.",
      es: "Comprender discursos extensos aunque no estén bien estructurados, incluso a velocidad nativa y con acentos variados.",
    },
    {
      skill: "reading",
      en: "Understand long, demanding texts, literary and factual, and recognize implicit meaning and irony.",
      es: "Comprender textos largos y exigentes, literarios o informativos, y captar sentidos implícitos y la ironía.",
    },
    {
      skill: "writing",
      en: "Write well-structured, detailed texts on complex subjects, using connectors and nominal style with control.",
      es: "Escribir textos claros, bien estructurados y detallados sobre temas complejos, dominando los conectores y el estilo nominal.",
    },
    {
      skill: "speaking",
      en: "Concede, qualify and hedge: say what you think with exactly the degree of certainty you mean.",
      es: "Conceder, matizar y atenuar: decir lo que piensas con el grado exacto de certeza que quieres transmitir.",
    },
  ],
  c2: [
    {
      skill: "listening",
      en: "Understand with ease virtually everything you hear, from live debate to colloquial speech, slang and regional accents.",
      es: "Comprender sin esfuerzo prácticamente todo lo que oyes, desde un debate en directo hasta el habla coloquial, la jerga y los acentos regionales.",
    },
    {
      skill: "reading",
      en: "Read any kind of text, including abstract, legal, technical and literary writing, and appreciate its style.",
      es: "Leer cualquier tipo de texto, también el abstracto, el jurídico, el técnico y el literario, y apreciar su estilo.",
    },
    {
      skill: "speaking",
      en: "Express yourself spontaneously and very precisely, conveying fine shades of meaning even in complex situations.",
      es: "Expresarte de forma espontánea y muy precisa, transmitiendo matices sutiles incluso en situaciones complejas.",
    },
    {
      skill: "conversation",
      en: "Move between registers at will, from formal to colloquial, and use idioms, irony and humour naturally.",
      es: "Pasar de un registro a otro a voluntad, del formal al coloquial, y usar modismos, ironía y humor con naturalidad.",
    },
    {
      skill: "writing",
      en: "Write complex reports, articles and reviews in a style suited to the reader, with a logical structure that helps them follow.",
      es: "Redactar informes, artículos y reseñas complejos con un estilo adecuado al lector y una estructura lógica que le ayude a seguirlos.",
    },
    {
      skill: "conversation",
      en: "Summarize and reconstruct arguments from different spoken and written sources into a coherent presentation.",
      es: "Resumir y reconstruir argumentos de distintas fuentes orales y escritas en una exposición coherente.",
    },
  ],
};

/** The level's can-do statements, in display order. */
export function canDoFor(levelPath: SpanishLevelPath): CanDoStatement[] {
  return CAN_DO_STATEMENTS[levelPath];
}

/** Which language a level's can-do statements are shown in: English at
 * A1/A2, Spanish from B1 (the course's instruction-language rule). */
export function canDoLanguage(levelPath: SpanishLevelPath): "en" | "es" {
  return levelPath === "a1" || levelPath === "a2" ? "en" : "es";
}
