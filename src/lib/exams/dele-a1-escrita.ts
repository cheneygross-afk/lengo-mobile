// Synced from cheneygross-afk/lengo:src/lib/exams/dele-a1-escrita.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { ExamPaper } from "./types";

// DELE A1 practice exam -- Prueba 3: Expresión e interacción escritas.
// 25 minutes, 2 tasks: a form, then a short message.
export const DELE_A1_ESCRITA: ExamPaper = {
  id: "escrita",
  kind: "writing",
  title: "Expresión e interacción escritas",
  minutes: 25,
  group: 1,
  tasks: [
    {
      title: "Tarea 1",
      instructions:
        "Usted quiere hacer un curso de cocina en el centro cultural de su barrio. Complete el formulario de inscripción. Escriba frases cortas.",
      instructionsEn: "You want to sign up for a cooking class at your local cultural centre. Fill in the registration form with short sentences.",
      write: [
        {
          prompt:
            "Complete el formulario: nombre y apellidos; nacionalidad; dirección; teléfono o correo electrónico; profesión; días y horario que prefiere para el curso; por qué quiere aprender a cocinar.",
          input: {
            text: {
              title: "Centro Cultural La Plaza: inscripción en el curso de cocina",
              body:
                "Nombre y apellidos:\nNacionalidad:\nDirección:\nTeléfono o correo electrónico:\nProfesión:\n¿Qué días y a qué hora prefiere el curso?\n¿Por qué quiere aprender a cocinar?",
            },
          },
          minWords: 30,
          maxWords: 55,
          rubric: [
            "Fills in every field of the form",
            "Gives the nationality and profession with the right agreement (estadounidense, profesora...)",
            "Says days and times correctly (los lunes, por la tarde, a las seis)",
            "Gives a simple reason with porque",
          ],
          modelAnswer:
            "Nombre y apellidos: Emma Walker\nNacionalidad: estadounidense\nDirección: calle Mayor, 15, segundo A, Madrid\nCorreo electrónico: emma.walker@correo.com\nProfesión: profesora de inglés\nDías y horario: los martes y los jueves, por la tarde, a las seis.\n¿Por qué? Porque me gusta mucho la comida española y quiero cocinar para mis amigos.",
        },
      ],
    },
    {
      title: "Tarea 2",
      instructions: "Escriba un mensaje a un amigo. Número de palabras: entre 20 y 30.",
      instructionsEn: "Write a message to a friend of 20-30 words.",
      write: [
        {
          prompt:
            "Usted está de vacaciones. Escriba un mensaje a un amigo: diga dónde está, con quién, cómo es el lugar y qué hace todos los días.",
          minWords: 20,
          maxWords: 30,
          rubric: [
            "Says where you are and who with",
            "Describes the place with ser or hay",
            "Says what you do every day in the present tense",
            "Greets and says goodbye",
          ],
          modelAnswer:
            "¡Hola, Marcos! Estoy en Cádiz con mi familia. La ciudad es pequeña y muy bonita, y hay playas grandes. Todos los días nado y como pescado. ¡Hasta pronto!",
        },
      ],
    },
  ],
};
