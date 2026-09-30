// Synced from cheneygross-afk/lengo:src/lib/exams/dele-c1-oral.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { ExamPaper } from "./types";

// DELE C1 practice exam -- Prueba 4: Destrezas integradas: comprensión
// de lectura y expresión e interacción orales. 20 minutes with the
// examiner, after 20 minutes to prepare tasks 1 and 2.
export const DELE_C1_ORAL: ExamPaper = {
  id: "oral",
  kind: "speaking",
  title: "Destrezas integradas: comprensión de lectura y expresión e interacción orales",
  minutes: 20,
  prepMinutes: 20,
  group: 1,
  tasks: [
    {
      title: "Tarea 1",
      instructions:
        "Lea el texto y prepare una presentación oral de 3 a 5 minutos en la que resuma sus ideas principales y exponga su postura. Después, el entrevistador le hará algunas preguntas (2-3 minutos).",
      speak: {
        prompt: "Presentación: el turismo de masas en las ciudades patrimonio.",
        material: [
          {
            title: "Texto: «¿Morir de éxito?»",
            body:
              "Venecia recibe cada año unos veinte millones de visitantes, mientras su población residente no deja de disminuir: hoy apenas supera los cincuenta mil habitantes en el centro histórico. El fenómeno se repite, a otra escala, en ciudades como Barcelona, Dubrovnik o Ámsterdam. Los defensores del turismo subrayan que genera empleo y financia la conservación de monumentos que, de otro modo, se deteriorarían. Sus detractores sostienen que el modelo actual expulsa a los vecinos, encarece la vivienda, sustituye el comercio tradicional por tiendas de recuerdos y convierte los barrios históricos en decorados. Algunas ciudades han empezado a actuar: Venecia cobra una tasa de acceso a los visitantes de un día; Ámsterdam ha prohibido la apertura de nuevos hoteles en el centro; Dubrovnik limita el número de cruceros diarios. Los resultados, por ahora, son discutidos.",
          },
        ],
        points: [
          "Resuma el problema que plantea el texto.",
          "Exponga los argumentos de defensores y detractores.",
          "Valore las medidas adoptadas por las ciudades.",
          "Defienda una postura propia con argumentos y ejemplos.",
        ],
        examinerQuestions: [
          "¿Conoce algún caso parecido en su país?",
          "¿Cobraría usted una tasa a los turistas? ¿Cree que eso disuade a alguien?",
          "¿Qué responsabilidad tienen los propios turistas?",
          "¿Cómo imagina estas ciudades dentro de veinte años?",
        ],
        prepMinutes: 10,
        speakMinutes: 7,
        modelAnswer:
          "El texto plantea una paradoja: algunas de las ciudades más admiradas del mundo corren el riesgo de morir de éxito. Venecia es el ejemplo más extremo: veinte millones de visitantes al año frente a una población residente que ya apenas supera los cincuenta mil habitantes en el centro.\n\nEl autor presenta dos posturas. Por un lado, quienes defienden el turismo recuerdan que crea empleo y que financia la conservación del patrimonio. Por otro, sus críticos señalan que expulsa a los vecinos, dispara el precio de la vivienda y transforma los barrios históricos en simples escenarios.\n\nEn cuanto a las medidas, me parecen interesantes, aunque insuficientes por separado. La tasa de Venecia tiene un valor simbólico, pero dudo que disuada a quien ya ha viajado miles de kilómetros. Limitar los cruceros, como hace Dubrovnik, me parece más eficaz, porque ataca el tipo de visita que menos deja en la ciudad y más la satura.\n\nMi postura es que el problema no es el turismo en sí, sino la falta de planificación. Una ciudad patrimonio debe seguir siendo, ante todo, un lugar donde se pueda vivir. Por eso creo que la prioridad debería ser proteger la vivienda: limitar los pisos turísticos, garantizar alquileres asequibles y mantener el comercio de proximidad. Si los vecinos se van, lo que queda ya no es una ciudad, sino un museo al aire libre, y eso, a la larga, tampoco interesa a los turistas.",
      },
    },
    {
      title: "Tarea 2",
      instructions:
        "Conversación sobre el tema de la Tarea 1. El entrevistador le planteará distintas cuestiones y usted deberá argumentar y matizar sus opiniones durante 4 o 6 minutos.",
      speak: {
        prompt: "Conversación: viajar de forma responsable.",
        points: [
          "Responda con argumentos y ejemplos concretos.",
          "Matice sus opiniones y reaccione a los contraargumentos del entrevistador.",
          "Use estructuras de concesión y de hipótesis (aun así, por mucho que, de haber sabido…).",
        ],
        examinerQuestions: [
          "¿Qué entiende usted por viajar de forma responsable?",
          "Hay quien dice que el turismo sostenible es solo una estrategia de marketing. ¿Está de acuerdo?",
          "¿Debería limitarse el número de vuelos baratos por motivos medioambientales?",
          "¿Alguna vez ha cambiado un plan de viaje por motivos éticos o ecológicos?",
          "¿Qué papel deberían tener los vecinos en las decisiones sobre el turismo de su ciudad?",
        ],
        prepMinutes: 10,
        speakMinutes: 6,
        modelAnswer:
          "—¿Qué entiende por viajar de forma responsable?\n—Para mí, significa ser consciente del impacto que tiene tu visita: alojarte donde el dinero se quede en la comunidad, respetar las costumbres locales y no visitar un lugar solo para hacerte la foto.\n—Hay quien dice que el turismo sostenible es solo marketing.\n—En parte tienen razón: muchas empresas se ponen la etiqueta \"sostenible\" sin cambiar nada. Aun así, no creo que debamos descartar el concepto; lo que hace falta es una certificación seria que distinga lo real de lo cosmético.\n—¿Limitaría los vuelos baratos?\n—Es una cuestión delicada. Por mucho que me preocupe el medio ambiente, los vuelos baratos han permitido viajar a gente que antes no podía. Yo empezaría por eliminar los vuelos cortos cuando existe una alternativa en tren razonable, como se ha hecho en Francia.\n—¿Ha cambiado algún plan de viaje por motivos éticos?\n—Sí. Iba a hacer un crucero por el Mediterráneo y, después de leer sobre su impacto en ciudades como Dubrovnik, preferí recorrer la costa en tren. De haberlo sabido antes, habría viajado así desde el principio.\n—¿Qué papel deberían tener los vecinos?\n—Uno central. Son quienes sufren las consecuencias, así que deberían participar en las decisiones, por ejemplo mediante consultas vinculantes.",
      },
    },
    {
      title: "Tarea 3",
      instructions:
        "Negociación. Usted y el entrevistador deben llegar a un acuerdo a partir de una situación y unas propuestas. Defienda su postura, reaccione a los argumentos del entrevistador y lleguen a una decisión conjunta (4-6 minutos). Esta tarea no se prepara previamente.",
      speak: {
        prompt:
          "Usted forma parte de la comisión que decide cómo invertir un premio de 100.000 euros que ha recibido su pueblo. Solo pueden elegir una o, como máximo, dos de estas propuestas.",
        material: [
          {
            title: "Propuestas",
            body:
              "1. Rehabilitar la antigua escuela como centro de coworking para atraer teletrabajadores.\n2. Crear un servicio de transporte a demanda para personas mayores.\n3. Organizar un festival anual de música para atraer turismo.\n4. Instalar placas solares en los edificios municipales para reducir la factura eléctrica.\n5. Conceder becas a jóvenes del pueblo para que estudien una formación profesional.",
          },
        ],
        points: [
          "Elija la propuesta que le parece prioritaria y defiéndala.",
          "Valore las demás propuestas y rebata los argumentos del entrevistador.",
          "Haga concesiones cuando sea razonable.",
          "Lleguen a un acuerdo final.",
        ],
        examinerQuestions: [
          "Yo apostaría por el festival: da visibilidad al pueblo y atrae dinero enseguida.",
          "¿Y no cree que el coworking tiene más futuro que el transporte para mayores?",
          "Las placas solares se amortizan solas, ¿no sería lo más sensato?",
          "Bien, ¿en qué podemos ponernos de acuerdo?",
        ],
        prepMinutes: 0,
        speakMinutes: 6,
        modelAnswer:
          "—Yo apostaría por el festival: da visibilidad y atrae dinero.\n—Entiendo su punto de vista, pero un festival de un fin de semana no resuelve los problemas de fondo del pueblo. Para mí, la prioridad es el transporte para mayores: muchos vecinos no pueden ir al médico sin depender de sus hijos.\n—¿Y no tiene más futuro el coworking?\n—Tiene futuro, sin duda, y reconozco que atraer población joven es clave. Pero con cien mil euros no se rehabilita un edificio entero, y nadie nos garantiza que vayan a venir teletrabajadores.\n—Las placas solares se amortizan solas.\n—En eso tiene razón, y es un argumento de peso: el ahorro permitiría financiar otros servicios cada año. Le propongo una cosa: combinemos las placas solares con el transporte a demanda. Las placas generan un ahorro permanente y el transporte responde a una necesidad urgente.\n—¿Y el festival?\n—Podríamos plantearlo más adelante, buscando patrocinadores, sin tocar este dinero.\n—De acuerdo, entonces: placas solares y transporte para mayores.\n—Perfecto. Creo que es una decisión equilibrada entre el presente y el futuro.",
      },
    },
  ],
};
