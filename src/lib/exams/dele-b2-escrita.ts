// Synced from cheneygross-afk/lengo:src/lib/exams/dele-b2-escrita.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { ExamPaper } from "./types";

// DELE B2 practice exam -- Prueba 3: Expresión e interacción escritas.
// 80 minutes, 2 tasks, as in the real exam. Tarea 1 starts from a
// recording, as the real one does. (The real Tarea 2 option 1 shows a
// chart; here the survey data is given as text.)
export const DELE_B2_ESCRITA: ExamPaper = {
  id: "escrita",
  kind: "writing",
  title: "Expresión e interacción escritas",
  minutes: 80,
  group: 1,
  tasks: [
    {
      title: "Tarea 1",
      instructions:
        "Usted va a escuchar un fragmento de un programa de radio. Escúchelo dos veces y tome notas. Después, escriba una carta. Número de palabras: entre 150 y 180.",
      write: [
        {
          prompt:
            "Usted vive en el barrio del que habla la noticia. Escriba una carta al director del periódico local en la que: se presente y explique su relación con el barrio; resuma el proyecto del ayuntamiento; exprese su opinión sobre él, con argumentos; proponga alguna alternativa o mejora.",
          input: {
            audio: {
              label: "Noticia de radio",
              lines: [
                {
                  voice: "f",
                  text: "El Ayuntamiento ha presentado esta mañana su proyecto para el mercado de San Andrés, cerrado desde hace tres años. La propuesta es convertir el antiguo edificio en un centro comercial con tiendas de moda, un gimnasio y un aparcamiento subterráneo de cuatrocientas plazas.",
                },
                {
                  voice: "f",
                  text: "Según el concejal de urbanismo, el proyecto creará más de doscientos puestos de trabajo y atraerá visitantes a una zona que ha perdido población en los últimos años. Sin embargo, la asociación de vecinos ya ha mostrado su rechazo. Sus representantes recuerdan que el barrio no tiene ni biblioteca ni centro para mayores, y temen que el aparcamiento aumente el tráfico en unas calles muy estrechas.",
                },
                {
                  voice: "f",
                  text: "Los comerciantes de la zona también están preocupados: creen que el centro comercial hará desaparecer las pequeñas tiendas que aún resisten. El proyecto se podrá consultar en la web municipal y los ciudadanos podrán presentar alegaciones hasta el treinta de noviembre.",
                },
              ],
            },
          },
          minWords: 150,
          maxWords: 180,
          rubric: [
            "Formato de carta formal: saludo, presentación, despedida y firma.",
            "Resume con precisión el proyecto y las reacciones que menciona la noticia.",
            "Expresa una opinión clara y la justifica con al menos dos argumentos.",
            "Propone una alternativa o mejora concreta.",
            "Usa conectores y estructuras de B2 (aunque + subjuntivo, no creo que…, sería conveniente que…).",
          ],
          modelAnswer:
            "Estimado señor director:\n\nMe llamo Laura Gil y vivo desde hace más de veinte años en el barrio de San Andrés, a pocos metros del antiguo mercado. Le escribo a propósito del proyecto que acaba de presentar el Ayuntamiento para convertir el edificio en un centro comercial con gimnasio y un aparcamiento de cuatrocientas plazas.\n\nEntiendo que el concejal quiera crear empleo y atraer visitantes, pero no creo que esta sea la solución. En primer lugar, nuestras calles son muy estrechas y el aparcamiento multiplicaría el tráfico. En segundo lugar, un centro comercial acabaría con las pocas tiendas de barrio que quedan, que son precisamente las que dan vida a la zona.\n\nSería mucho más conveniente que el mercado se destinara a lo que el barrio necesita: una biblioteca, un centro para mayores y algunos puestos para productores locales. Así se crearía empleo sin perder nuestra identidad.\n\nAnimo a todos los vecinos a presentar alegaciones antes del treinta de noviembre.\n\nAtentamente,\nLaura Gil",
        },
      ],
    },
    {
      title: "Tarea 2",
      instructions:
        "Elija solo una de las dos opciones que se le ofrecen y escriba un texto. Número de palabras: entre 150 y 180.",
      write: [
        {
          label: "Opción 1",
          prompt:
            "Usted colabora con una revista digital y le han pedido un artículo de opinión a partir de los datos de esta encuesta. En su artículo debe: comentar los datos más relevantes; comparar la situación con la de su país; dar su opinión sobre el uso del móvil entre los adolescentes; proponer alguna medida.",
          input: {
            text: {
              title: "Encuesta: los adolescentes y el móvil (jóvenes de 14 a 17 años)",
              body:
                "Tienen móvil propio: 94 %\nLo miran nada más despertarse: 71 %\nLo usan más de 4 horas al día: 48 %\nSe sienten nerviosos si no lo tienen cerca: 45 %\nSus padres les ponen límites de uso: 32 %\nCreen que el móvil les quita horas de sueño: 58 %",
            },
          },
          minWords: 150,
          maxWords: 180,
          rubric: [
            "Selecciona y comenta los datos más relevantes, sin enumerarlos todos.",
            "Compara con la situación en su país.",
            "Da una opinión argumentada.",
            "Propone al menos una medida concreta.",
            "Registro de artículo de opinión, con título y párrafos bien conectados.",
          ],
          modelAnswer:
            "Conectados desde el primer minuto\n\nSegún una encuesta reciente, casi todos los adolescentes de entre catorce y diecisiete años tienen móvil propio, y siete de cada diez lo miran nada más despertarse. Pero el dato que más me ha llamado la atención es otro: casi la mitad se pone nerviosa si no lo tiene cerca, y solo un tercio de las familias pone algún límite.\n\nEn mi país la situación es muy parecida. Mis sobrinos, por ejemplo, pasan las comidas familiares mirando la pantalla, y sus padres se han rendido.\n\nNo creo que el problema sea el móvil en sí, que es una herramienta útil para estudiar y comunicarse, sino la falta de límites. Si más de la mitad de los jóvenes reconoce que duerme menos por su culpa, es evidente que algo falla.\n\nPor eso, propongo que los institutos ofrezcan talleres sobre uso responsable, dirigidos también a los padres. Además, sería conveniente que las familias acordaran normas sencillas, como no llevar el móvil al dormitorio. Educar es más eficaz que prohibir.",
        },
        {
          label: "Opción 2",
          prompt:
            "Usted participa en un blog de viajeros. Escriba una entrada sobre un viaje en el que algo salió mal. Debe contar: dónde y cuándo fue y con quién viajaba; qué problema tuvo; cómo reaccionó y cómo se resolvió; qué aprendió de aquella experiencia.",
          minWords: 150,
          maxWords: 180,
          rubric: [
            "Sitúa el viaje en el tiempo y el espacio.",
            "Narra el problema combinando bien los tiempos del pasado (indefinido, imperfecto, pluscuamperfecto).",
            "Describe reacciones y sentimientos con vocabulario variado.",
            "Extrae una conclusión o aprendizaje.",
            "Registro adecuado para un blog, con un estilo personal y ameno.",
          ],
          modelAnswer:
            "El día que perdimos el último tren\n\nHace dos veranos viajé por Italia con mi amiga Carla. Habíamos planeado cada detalle: hoteles reservados, billetes comprados, museos con hora. O eso creíamos.\n\nEl cuarto día, en Florencia, nos entretuvimos tanto en una terraza que llegamos a la estación cuando nuestro tren a Roma acababa de salir. Era el último de la noche, y el hotel de Roma ya estaba pagado. Carla se puso a llorar y yo, que normalmente soy la tranquila, empecé a discutir con el empleado de la taquilla en un italiano bastante creativo.\n\nAl final, una señora mayor que lo había oído todo nos ofreció dormir en su casa. Nos preparó una cena increíble y nos contó historias de su juventud hasta las dos de la madrugada. A la mañana siguiente tomamos el primer tren.\n\nAquella noche aprendí dos cosas: que no se puede controlar todo y que, a veces, los mejores recuerdos de un viaje son justo los que no estaban en el plan.",
        },
      ],
    },
  ],
};
