// Synced from cheneygross-afk/lengo:src/lib/lessons/level-test-a1.ts by scripts/sync-content.mjs -- edit it there, not here.
import { authoring } from "./authoring";
import { dict, wr } from "./skills-authoring";
import { listeningItems, readingSection, type LevelTest } from "./level-test-authoring";

// The A1 level test (see level-tests.ts): only A1 material -- ser and
// estar, the present tense, estar + gerund, gustar, tener/ir/hacer/hay,
// possessives, demonstratives, numbers, time, dates and questions.
const { fe, sec } = authoring("en");

export const LEVEL_TEST_A1: LevelTest = {
  title: "A1 Level Test: Ready for A2?",
  summary:
    "The end-of-A1 test: reading, listening, writing Spanish from English and a short message, 46 questions on what A1 teaches. Pass with 70% to move on to A2.",
  duration: "40 min",
  sections: [
    readingSection(
      "Part 1 · Reading: an email",
      "Read Tomás's email, then answer the five questions under it.",
      [
        "¡Hola, Marta! Me llamo Tomás y soy tu nuevo compañero de piso. Tengo veinticuatro años y soy de Sevilla. Soy estudiante de medicina.",
        "Por las mañanas voy a la universidad y por las tardes trabajo en una cafetería. Me gusta mucho la música y toco la guitarra. No me gustan los gatos, pero me encantan los perros.",
        "Mi habitación es pequeña, pero tiene una ventana grande. Todavía no tengo tu número de teléfono. ¿Cuándo llegas a Madrid? ¡Hasta pronto! Tomás",
      ],
      [
        ["Where is Tomás from?", ["Seville", "Madrid", "Valencia", "Barcelona"], "\"Soy de Sevilla\": he is from Seville. He lives in Madrid now."],
        [
          "What does Tomás do in the afternoons?",
          ["He works in a café", "He goes to university", "He plays the guitar in a bar", "He studies at home"],
          "\"Por las tardes trabajo en una cafetería.\" He goes to university in the mornings.",
        ],
        ["Which animals does Tomás love?", ["Dogs", "Cats", "Birds", "Horses"], "\"No me gustan los gatos, pero me encantan los perros.\""],
        [
          "What is his room like?",
          ["Small, with a big window", "Big, with a small window", "Small, with no window", "Big and bright"],
          "\"Mi habitación es pequeña, pero tiene una ventana grande.\"",
        ],
        [
          "Who is Tomás?",
          ["Marta's new flatmate", "Marta's brother", "Marta's teacher", "A waiter at Marta's café"],
          "\"Soy tu nuevo compañero de piso\": he is her new flatmate.",
        ],
      ]
    ),
    readingSection(
      "Part 1 · Reading: a notice",
      "Read the library notice, then answer the questions.",
      [
        "BIBLIOTECA MUNICIPAL. Horario: de lunes a viernes, de nueve a ocho. Los sábados, de diez a dos. Los domingos está cerrada.",
        "En la biblioteca hay libros, periódicos y ordenadores. Los niños tienen una sala especial en el primer piso. Para llevar libros a casa, necesitas una tarjeta. La tarjeta es gratis.",
      ],
      [
        ["When is the library closed?", ["On Sundays", "On Saturdays", "On Mondays", "Every afternoon"], "\"Los domingos está cerrada.\""],
        ["What time does it close on Saturdays?", ["At two", "At eight", "At ten", "At nine"], "\"Los sábados, de diez a dos\": from ten to two."],
        [
          "Where is the children's room?",
          ["On the first floor", "Next to the entrance", "In the newspaper room", "There isn't one"],
          "\"Los niños tienen una sala especial en el primer piso.\"",
        ],
        ["What do you need to take books home?", ["A card", "Money", "A passport", "Nothing"], "\"Para llevar libros a casa, necesitas una tarjeta.\""],
        ["How much is the card?", ["It's free", "Ten euros", "Two euros", "It depends on your age"], "\"La tarjeta es gratis.\""],
      ]
    ),
    {
      heading: "Part 2 · Listening",
      body: [
        "Turn your sound on. Each question plays part of a recording: listen as many times as you like, then choose the answer. The last two are dictations: type exactly what you hear.",
      ],
      checkpoint: [
        ...listeningItems(
          [
            "Hola, Pablo, soy Ana. Estoy en el café de la plaza, al lado del banco. Son las cinco y cuarto. ¿Vienes? Hay una mesa libre y tengo tu libro. ¡Hasta luego!",
          ],
          [
            [0, "Listen. Where is Ana?", ["In the café in the square", "At the bank", "At home", "In the library"], "\"Estoy en el café de la plaza, al lado del banco.\""],
            [0, "Listen again. What time is it?", ["5:15", "5:45", "4:15", "5:30"], "\"Son las cinco y cuarto\": a quarter past five."],
            [0, "What does Ana have?", ["Pablo's book", "Pablo's keys", "Two coffees", "A ticket"], "\"Tengo tu libro\": she has his book."],
            [
              0,
              "What does Ana want?",
              ["Pablo to come to the café", "Pablo to go to the bank", "To go home", "To buy a book"],
              "\"¿Vienes? Hay una mesa libre\": she wants him to come.",
            ],
          ]
        ),
        ...listeningItems(
          [
            "Mi familia es pequeña. Mi madre se llama Carmen y es enfermera. Mi padre es profesor de inglés.",
            "Tengo una hermana, Lola. Lola tiene doce años y es muy simpática. Vivimos en un piso en Valencia y tenemos un perro.",
          ],
          [
            [0, "Listen. What is the mother's job?", ["Nurse", "Teacher", "Doctor", "Shop assistant"], "\"Mi madre se llama Carmen y es enfermera.\""],
            [0, "What does the father teach?", ["English", "Spanish", "Music", "Maths"], "\"Mi padre es profesor de inglés.\""],
            [1, "How old is Lola?", ["12", "2", "20", "10"], "\"Lola tiene doce años.\""],
            [
              1,
              "Where does the family live?",
              ["In a flat in Valencia", "In a house in Valencia", "In a flat in Madrid", "On a farm"],
              "\"Vivimos en un piso en Valencia.\"",
            ],
          ]
        ),
        dict("¿Cuántos años tienes?", "¿Cuántos años tienes? -- \"How old are you?\" Cuántos has an accent and agrees with años."),
        dict("Mi hermano vive en Madrid.", "Mi hermano vive en Madrid. -- \"My brother lives in Madrid.\""),
      ],
    },
    sec(
      "Part 3 · Grammar and vocabulary",
      "Type the Spanish for the bold words. Small accent slips are accepted with a note.",
      [],
      [
        fe("Mi madre ___ médica.", "es", "My mother [is] a doctor.", "A profession takes ser: es médica."),
        fe("Nosotros ___ en la cocina ahora.", "estamos", "We [are] in the kitchen now.", "Location takes estar: estamos."),
        fe("Ellos ___ de México.", "son", "They [are] from Mexico.", "Origin takes ser: son de México."),
        fe("¿Dónde ___ el baño?", "está", "Where [is] the bathroom?", "Where something is takes estar: ¿dónde está?"),
        fe("Yo ___ en un banco.", "trabajo", "I [work] in a bank.", "Trabajar → yo trabajo."),
        fe("¿Tú ___ café por la mañana?", "bebes", "Do you [drink] coffee in the morning?", "Beber → tú bebes. Tomas (tomar) is also right.", ["tomas"]),
        fe("Mi hermana ___ en Lima.", "vive", "My sister [lives] in Lima.", "Vivir → ella vive."),
        fe("Los niños ___ hasta las nueve.", "duermen", "The children [sleep] until nine.", "Dormir changes o → ue: duermen."),
        fe("¿___ jugar al fútbol?", "Quieres", "[Do you want] to play football?", "Querer changes e → ie: quieres (or quiere for usted).", ["Quiere"]),
        fe("Yo ___ dos hermanos.", "tengo", "I [have] two brothers.", "Tener → yo tengo."),
        fe("Mañana ___ al cine.", "voy", "Tomorrow [I'm going] to the cinema.", "Ir → yo voy: voy al cine."),
        fe("¿Qué ___ los fines de semana?", "haces", "What [do you do] at the weekend?", "Hacer → tú haces (usted hace).", ["hace"]),
        fe("___ un supermercado cerca de mi casa.", "Hay", "[There is] a supermarket near my house.", "There is / there are: hay."),
        fe("Me ___ el chocolate.", "gusta", "I [like] chocolate.", "One thing liked: gusta."),
        fe("¿Te ___ los deportes?", "gustan", "Do you [like] sports?", "Plural thing liked: gustan."),
        fe("Es la casa de Pedro. Es ___ casa.", "su", "It's Pedro's house. It's [his] house.", "His, her, their: su."),
        fe("___ hijos son muy altos.", "Nuestros", "[Our] children are very tall.", "Nuestro agrees with hijos: nuestros."),
        fe("Las casas de esta calle son muy ___.", "antiguas", "The houses on this street are very [old].", "Antiguo agrees with las casas: antiguas (viejas also works).", ["viejas"]),
        fe("Es una ciudad muy ___.", "bonita", "It's a very [pretty] city.", "Bonito agrees with ciudad (feminine): bonita.", ["linda", "hermosa"]),
        fe("___ libro es muy interesante.", "Este", "[This] book is very interesting.", "Near the speaker, masculine: este libro."),
        fe("Son las ___.", "tres y media", "It's [half past three].", "Half past: y media. Son las tres y media."),
        fe("Mi cumpleaños es el ___ de mayo.", "quince", "My birthday is on the [fifteenth] of May.", "Dates use plain numbers: el quince de mayo.", ["15"]),
        fe("¿___ te llamas?", "Cómo", "[What]'s your name?", "Spanish asks \"how are you called\": ¿Cómo te llamas?"),
        fe("¿___ cuesta el billete?", "Cuánto", "[How much] is the ticket?", "Prices: ¿Cuánto cuesta?"),
        fe(
          "Ahora mismo ___ la cena.",
          "estoy haciendo",
          "Right now [I'm making] dinner.",
          "Something happening right now: estar + gerund, estoy haciendo (or estoy preparando, estoy cocinando).",
          ["estoy preparando", "estoy cocinando"]
        ),
      ]
    ),
  ],
  exercises: [
    wr(
      "Part 4 · Writing. Write a short message to a new Spanish-speaking friend: your name, where you are from and where you live, what you do (work or study) and two things you like.",
      [25, 50],
      [
        "Say your name and where you are from (soy de...)",
        "Say where you live and what you do (vivo en..., soy estudiante / trabajo en...)",
        "Say two things you like with me gusta / me gustan",
        "End with a question for your friend",
      ],
      "¡Hola! Me llamo Sara y soy de Canadá, pero vivo en Barcelona. Soy estudiante de arte. Me gusta mucho bailar y me encantan los tacos. Tengo un gato muy simpático. ¿Y tú? ¿De dónde eres?",
      "Origin and profession take ser (soy de Canadá, soy estudiante); gusta goes with one thing or a verb, gustan with plural things."
    ),
  ],
};
