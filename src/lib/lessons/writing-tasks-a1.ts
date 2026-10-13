// Synced from cheneygross-afk/lengo:src/lib/lessons/writing-tasks-a1.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { UnitWriting } from "./unitWriting";

// Extra writing tasks for this level's units, so every unit asks the learner to
// write at least three times: keyed by the lesson each is added to (see
// unitWriting.ts). Marked by the AI writing feedback like every writing task.
export const A1_WRITING_TASKS: UnitWriting = {
  "adjective-agreement": [
    {
      "type": "write",
      "prompt": "Write a caption for a photo of your Spanish class. Say who three or four of the people are, where they're from and what they're like.",
      "minWords": 20,
      "maxWords": 50,
      "rubric": [
        "Ser for names and origin (es Ana, son de Inglaterra)",
        "El, la, los, las to point people out (la profesora, los chicos)",
        "At least three adjectives that agree in gender and number",
        "Nationality adjectives (alemanas, inglés…)"
      ],
      "modelAnswer": "Es una foto de mi clase de español. La profesora es Ana. Es de Chile y es muy simpática. Los chicos altos son Tom y Ben. Son ingleses. Las chicas morenas son Mia y Lena. Son alemanas y muy inteligentes. ¡Es una clase internacional!",
      "explanation": "Every adjective matches its noun: la profesora es simpática, los chicos altos, las chicas morenas, son alemanas. Nationalities are adjectives too, so they agree and take no capital letter."
    }
  ],
  "sounds-r-rr": [
    {
      "type": "write",
      "prompt": "Describe your pet, or a friend's pet: its name, what it's like and who it belongs to. Use plenty of words with r and rr, then read your text aloud.",
      "minWords": 15,
      "maxWords": 40,
      "rubric": [
        "Se llama… for the pet's name",
        "At least four words with a trilled r (perro, Roberto, rápido, rojo…)",
        "At least two words with a single tap r (pero, caro, para…)",
        "Ser + adjectives that agree"
      ],
      "modelAnswer": "Mi perro se llama Rufo. Es un perro pequeño y marrón. Es muy rápido, pero un poco raro. Es el perro de mi amigo Roberto. Roberto es simpático y Rufo es muy listo. ¡Es un perro perfecto!",
      "explanation": "Trill the rr (perro, marrón) and every r at the start of a word (Rufo, rápido, raro, Roberto). Between vowels a single r is one quick tap: pero, Roberto, perfecto."
    }
  ],
  "sounds-ll-y-c-z-s": [
    {
      "type": "write",
      "prompt": "You're on holiday in a Spanish city. Write a short postcard to a friend: say where you are and describe the city, the streets and the people. Use words with ll, y, c and z.",
      "minWords": 15,
      "maxWords": 40,
      "rubric": [
        "A postcard greeting and goodbye (¡Hola…!, Un beso…)",
        "Words with ll and y (Sevilla, calle, Yolanda…)",
        "Words with ce, ci and z (ciudad, plaza, cerveza…)",
        "Ser + adjectives that agree (las calles son estrechas)"
      ],
      "modelAnswer": "¡Hola, Yolanda! Un saludo desde Sevilla. La ciudad es preciosa. Las calles son estrechas y muy bonitas, y la plaza es enorme. La gente es muy simpática. Un beso, Ignacio.",
      "explanation": "Ll and y sound the same in most places (Sevilla, calles, Yolanda). Ce, ci and z sound like th in most of Spain and like s in Latin America: ciudad, preciosa, plaza, Ignacio."
    }
  ],
  "present-tense-er-ir-verbs-2": [
    {
      "type": "write",
      "prompt": "Write a short email to a new pen pal. Say where and who you live with, what you eat and drink, what you read and what you're learning, then ask two questions.",
      "minWords": 20,
      "maxWords": 50,
      "rubric": [
        "At least four -er and -ir verbs (vivo, como, bebo, leo, escribo…)",
        "The nosotros form of one verb (comemos, bebemos…)",
        "Times of day (por la mañana, por la tarde)",
        "Two questions with the tú form (¿Dónde vives?)"
      ],
      "modelAnswer": "Hola, Pablo: Me llamo Emma y vivo en Dublín con mi hermana. Ella escribe libros y yo aprendo español. Por la mañana bebemos café y comemos pan. Por la tarde leo en el parque. ¿Dónde vives tú? ¿Qué lees? Un abrazo, Emma.",
      "explanation": "-Er and -ir verbs share most endings: como, comes, come; vivo, vives, vive. They only split in nosotros and vosotros: comemos but vivimos."
    }
  ],
  "stem-changing-verbs-o-ue-e-i": [
    {
      "type": "write",
      "prompt": "Write a short dialogue with a friend about plans for Saturday. Ask what they want to do, say what you prefer and what you can't do, and agree on a plan.",
      "minWords": 20,
      "maxWords": 50,
      "rubric": [
        "At least four stem-changing verbs (quieres, prefiero, puedo, juegas, duermo, pedimos…)",
        "One nosotros form without the change (jugamos, podemos…)",
        "Questions and answers between two people",
        "Querer / poder / preferir + infinitive"
      ],
      "modelAnswer": "—¿Qué quieres hacer el sábado? —Prefiero jugar al tenis. ¿Juegas tú? —Sí, pero no puedo por la mañana. Duermo mucho los sábados. —Entonces jugamos por la tarde y después pedimos una pizza. —¡Perfecto!",
      "explanation": "The stem changes in the boot: quieres, prefiero, juegas, puedo, duermo. Nosotros keeps the original vowel: jugamos, pedimos."
    }
  ],
  "a1-irregulars-tengo-vengo-digo-oigo": [
    {
      "type": "write",
      "prompt": "Write a short diary entry about a typical Monday at your new job: how you and your colleagues come to work, what you have, what you hear and what people say.",
      "minWords": 20,
      "maxWords": 50,
      "rubric": [
        "Vengo / vienen for how people arrive",
        "Tengo for what you have",
        "Digo / dice and oigo",
        "Time words (los lunes, siempre, temprano)"
      ],
      "modelAnswer": "Querido diario: Los lunes vengo a la oficina en autobús. Salgo de casa temprano y siempre oigo música. En la oficina tengo una mesa nueva. Mi jefe dice: «¡Buenos días!» y yo digo: «¡Hola!». Mis compañeros vienen tarde. Tengo mucho trabajo, pero el trabajo es interesante.",
      "explanation": "Tener, venir, decir and oír add -go in the yo form (tengo, vengo, digo, oigo), and the other forms change their vowel: tiene, vienen, dice."
    }
  ],
  "saber-vs-conocer": [
    {
      "type": "write",
      "prompt": "Describe a good friend: where they're from, what they know how to do, what they don't know how to do, and which people and places they know well.",
      "minWords": 20,
      "maxWords": 50,
      "rubric": [
        "Saber + infinitive for skills (sabe cocinar)",
        "Conocer a + a person",
        "Conocer + a place (conoce Italia)",
        "One negative (no sabe…)"
      ],
      "modelAnswer": "Mi amiga Carla es de Valencia. Es muy simpática. Sabe cocinar muy bien y sabe hablar tres idiomas. Conoce muy bien Italia y conoce a muchas personas en Roma. No sabe nadar, pero yo sí sé. ¿Conoces tú a Carla?",
      "explanation": "Saber is for facts and skills (sabe cocinar, sé nadar); conocer is for places and people you're familiar with. With people, conocer takes a: conoce a muchas personas."
    }
  ],
  "ser-vs-estar-2": [
    {
      "type": "write",
      "prompt": "You're on holiday. Write a postcard to a friend: say where you are and who with, what the town and hotel are like, where the hotel is, and how everyone feels.",
      "minWords": 20,
      "maxWords": 50,
      "rubric": [
        "Estar for location (estoy en…, está cerca de…)",
        "Ser for what places are like (es pequeña, es cómodo)",
        "Estar for feelings and states (estoy contento, está enfermo)",
        "A greeting and goodbye"
      ],
      "modelAnswer": "¡Hola, Marta! Estoy en Cádiz con mi familia. La ciudad es pequeña y muy bonita. El hotel está cerca de la playa y es muy cómodo. Las playas son enormes. Mi hermano está un poco enfermo, pero yo estoy muy contento. ¡Hasta pronto! Lucas",
      "explanation": "Ser describes what something is like (la ciudad es bonita, el hotel es cómodo); estar gives location (está cerca de la playa) and how someone is right now (está enfermo, estoy contento)."
    }
  ],
  "present-progressive": [
    {
      "type": "write",
      "prompt": "It's Saturday afternoon and a friend wants to come over. Text them back: say what you and the people at home are doing right now, then ask them a question.",
      "minWords": 15,
      "maxWords": 40,
      "rubric": [
        "Estar + gerund for actions happening now",
        "At least one irregular gerund (leyendo, durmiendo…)",
        "Different people (mi madre, mis hermanos…)",
        "A question to your friend"
      ],
      "modelAnswer": "¡Hola, Dani! Ahora no puedo salir. Estoy limpiando la cocina. Mi madre está cocinando y mi padre está leyendo el periódico. Mis hermanos están jugando en el jardín. ¿Y tú? ¿Qué estás haciendo?",
      "explanation": "Estar + gerund says what is happening right now: -ar verbs take -ando (limpiando), -er and -ir verbs -iendo (haciendo), and leer becomes leyendo."
    }
  ],
  "a1r-dialogue-whose-where": [
    {
      "type": "write",
      "prompt": "Write a short dialogue with your flatmate. You can't find your things: ask where your keys, phone and glasses are, and answer with possessives and place words.",
      "minWords": 15,
      "maxWords": 40,
      "rubric": [
        "Mi, tu, su, mis, tus, sus",
        "Location words (en, debajo de, al lado de, sobre…)",
        "Estar for where things are",
        "Questions with ¿dónde…?"
      ],
      "modelAnswer": "—¿Dónde están mis llaves? —Tus llaves están en la mesa, al lado de mi libro. —¿Y mi móvil? —Está debajo de tu chaqueta. —¿Y las gafas de Ana? —Sus gafas están en el sofá. —¡Gracias!",
      "explanation": "Possessives agree with the thing owned, not the owner: mis llaves, tu chaqueta, sus gafas. De + el becomes del, and estar tells you where things are."
    }
  ],
  "a1r-mission-prices-ages-phones": [
    {
      "type": "write",
      "prompt": "You're moving and want to sell some things. Write a short ad: three things with their prices in words, how old one of them is, and your phone number in words.",
      "minWords": 20,
      "maxWords": 50,
      "rubric": [
        "At least three prices in words (cuarenta y cinco euros…)",
        "Tiene… años for an age",
        "A phone number in words, in pairs",
        "Un / una that agree with the things (una bicicleta, un sofá)"
      ],
      "modelAnswer": "Vendo mis cosas. Una bicicleta roja: setenta euros. Tiene cuatro años. Una mesa grande: cuarenta y cinco euros. Dos sillas: veinte euros cada una. Mi teléfono es el seis, uno, dos, treinta y cuatro, cincuenta y seis, setenta y ocho.",
      "explanation": "From 31 to 99 you write numbers as three words: cuarenta y cinco, setenta y ocho. Spanish phone numbers are often read in pairs: treinta y cuatro, cincuenta y seis."
    }
  ],
  "a1-core-words-time-linking": [
    {
      "type": "write",
      "prompt": "Write a short email to your Spanish teacher before the exam. Say what you already know, what you still don't understand, and ask one question.",
      "minWords": 20,
      "maxWords": 50,
      "rubric": [
        "Todavía (no) for what isn't finished",
        "Casi and también",
        "Aunque or entonces to link ideas",
        "A question with a question word (¿cuándo?, ¿dónde?…)"
      ],
      "modelAnswer": "Hola, profesora: Estoy casi lista para el examen. Ya sé los números y los días de la semana. También entiendo las preguntas. Pero todavía no comprendo bien los verbos irregulares. Aunque estudio todos los días, es difícil. ¿Cuándo es la clase de repaso? Gracias. Julia",
      "explanation": "Todavía no means not yet, casi means almost and también means also. Aunque (although) links two ideas that pull in different directions."
    }
  ],
  "a1-word-web-clothes": [
    {
      "type": "write",
      "prompt": "You're going to a wedding on Saturday. Write an email to a friend: say what you're going to wear, what someone in your family is wearing, and ask what they're wearing.",
      "minWords": 20,
      "maxWords": 50,
      "rubric": [
        "Me pongo for what you put on",
        "Llevar for what people wear",
        "Clothes with colours that agree (un vestido azul, unos zapatos negros)",
        "A question to your friend (¿Qué te pones tú?)"
      ],
      "modelAnswer": "Hola, Clara: El sábado voy a la boda de mi prima. Me pongo un vestido azul y unos zapatos negros. También llevo una chaqueta blanca, porque por la noche hace frío. Mi hermano lleva un traje gris y una corbata roja. ¿Qué te pones tú? Besos, Inés",
      "explanation": "Me pongo is what you put on; llevar is what someone is wearing. Colours agree like other adjectives: una chaqueta blanca, unos zapatos negros, but gris and azul only change for the plural."
    }
  ],
  "a1r-word-web-feelings": [
    {
      "type": "write",
      "prompt": "Write a short diary entry about a day with ups and downs. Say how you feel in the morning, at midday, in the afternoon and now, and why.",
      "minWords": 20,
      "maxWords": 50,
      "rubric": [
        "Estar + feeling adjectives (cansado, nervioso, contento…)",
        "Porque to give a reason",
        "Times of day (por la mañana, a mediodía…)",
        "At least four different feelings"
      ],
      "modelAnswer": "Querido diario: Hoy es un día raro. Por la mañana estoy cansada porque duermo poco. A mediodía estoy nerviosa: tengo un examen de inglés. Por la tarde estoy muy contenta porque el examen es fácil. Ahora, por la noche, estoy tranquila y un poco aburrida.",
      "explanation": "Feelings use estar, and the adjective agrees with the person: estoy cansada, nerviosa, contenta. Porque gives the reason for each one."
    }
  ]
};
