// Synced from cheneygross-afk/lengo:src/lib/lessons/es-redesign/patches-misc.ts by scripts/sync-content.mjs -- edit it there, not here.
// Hand patches (see patch.ts) for single lessons outside the Beginner level.
import type { LessonPatch } from "./patch";

export const MISC_PATCHES: Record<string, LessonPatch> = {
  // Three cards in a row before the first dictation: a check after the first.
  "b2d-rep-ser-estar-dictado-final": {
    sections: {
      0: {
        addCheck: [
          {
            type: "multiple-choice",
            question: "En un dictado, ¿qué haces primero?",
            options: ["Escribir mientras escucho", "Escuchar la frase entera sin escribir", "Leer la frase"],
            correctIndex: 1,
            explanation: "Primero escucha la frase entera una vez. Después vuelve a ponerla y escribe.",
          },
        ],
      },
      // The rule in two cards instead of three, with the three verbs side by side.
      1: {
        body: [
          "Tres verbos, tres preguntas. ¿Dónde o cuándo tiene lugar un evento? Ser. ¿Dónde está una persona o una cosa, o en qué estado ha quedado? Estar. ¿Existe algo que no se ha mencionado antes? Haber, siempre en singular.",
          "Por qué: un evento «es» porque ocurre; un lugar o un objeto «está» porque ocupa un sitio. Haber impersonal no tiene sujeto, así que no concuerda con lo que sigue: hubo problemas, nunca «hubieron».",
        ],
        addTables: [
          {
            caption: "Ser, estar o haber",
            head: ["Pregunta", "Verbo", "Ejemplo"],
            rows: [
              ["¿Dónde o cuándo es el evento?", "ser", "La reunión es en la sala 2."],
              ["¿Dónde está? ¿Cómo ha quedado?", "estar", "La sala está en el segundo piso. Las sillas están colocadas."],
              ["¿Existe algo nuevo?", "haber", "Hay, hubo, había, habrá dos salas."],
            ],
          },
        ],
      },
    },
  },
  // Sounds described in plain words, without phonetic symbols.
  "b1d-ronda-ortografia-subjuntivo": {
    reword: [
      ["«Sace» cambiaría el sonido a /θ/ o /s/", "«Sace» sonaría con s (o con z en España), no con k"],
      ["«Tocemos» cambiaría el sonido a /θ/ o /s/", "«Tocemos» sonaría con s (o con z en España), no con k"],
    ],
  },
  // The four ways to look ahead from the past, side by side.
  "historical-narrative-3": {
    sections: {
      0: {
        addTables: [
          {
            caption: "Anticipar desde el pasado",
            head: ["Forma", "Ejemplo", "Matiz"],
            rows: [
              ["condicional", "Aquella decisión le costaría el trono.", "lo que pasó después"],
              ["iba a + infinitivo", "Nadie sabía que aquel viaje iba a ser el último.", "lo que estaba por pasar"],
              ["habría de + infinitivo", "Aquel joven abogado habría de convertirse en presidente.", "culto, idea de destino"],
              ["estar llamado a", "Estaba llamado a transformar la ciudad.", "destino o vocación"],
            ],
          },
        ],
      },
    },
  },
  // One more sentence to write with an augmentative.
  "diminutives-augmentatives-1": {
    sections: {
      5: {
        addCheck: [
          {
            type: "translate",
            direction: "en-es",
            prompt: "Traduce al español con un aumentativo.",
            source: "What a great goal!",
            answer: "¡Qué golazo!",
            altAnswers: ["¡Vaya golazo!", "¡Menudo golazo!"],
            explanation: "-azo sobre «gol» expresa admiración, no tamaño: un golazo es un gol espectacular.",
          },
        ],
      },
    },
  },
};
