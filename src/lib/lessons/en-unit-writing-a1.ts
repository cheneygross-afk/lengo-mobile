// Synced from cheneygross-afk/lengo:src/lib/lessons/en-unit-writing-a1.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { WriteExercise } from "./types";
import { wr } from "./skills-authoring";

// The writing task in each EN-A1 unit's review lesson (en-unit-reviews.ts),
// keyed by unit id as in en-a1.ts ("u1" to "u10"). Prompt, rubric and
// explanation in Spanish, with every English word in "double quotes" (a
// learner's wrong English unquoted, after an asterisk); the model answer
// in English. Each task only needs the grammar and words of its unit and
// the units before.

const t = (prompt: string, rubric: string[], modelAnswer: string, explanation: string): WriteExercise =>
  wr(prompt, [25, 60], rubric, modelAnswer, explanation);

export const EN_A1_UNIT_WRITING: Record<string, WriteExercise> = {
  u1: t(
    "Preséntate a un compañero nuevo de clase y presenta a un amigo. Saluda, di cómo te llamas, de dónde eres y a qué te dedicas, y describe a tu amigo con dos o tres adjetivos.",
    [
      "Un saludo (\"Hi\", \"Hello\") y una despedida",
      "\"I am\" o \"I'm\" con tu nombre, tu país y tu trabajo",
      "\"He is\" o \"She is\" con dos o tres adjetivos",
      "\"a\" o \"an\" delante de la profesión (\"I'm a student\")",
    ],
    "Hi! I'm Carlos. I'm from Mexico and I'm a student. This is my friend Emma. She is from Canada. She is a nurse. She is tall, friendly and very funny. Nice to meet you!",
    "En inglés el sujeto siempre aparece: \"She is a nurse\", nunca solo *Is a nurse. Y con las profesiones se usa \"a\" o \"an\": \"I'm a student\", no *I'm student."
  ),
  u2: t(
    "Escribe cuatro o cinco frases cortas sobre ti y tu familia con palabras que tengan los sonidos de esta unidad. Después léelas en voz alta, despacio.",
    [
      "Tu nombre y de dónde eres",
      "Al menos dos palabras con \"th\" (\"this\", \"three\", \"thank you\")",
      "Al menos una palabra con \"h\" (\"hello\", \"happy\", \"house\")",
      "Una palabra con la vocal corta de \"fish\" y otra con la larga de \"cheese\"",
    ],
    "Hello! My name is Sofia. I'm from Spain. This is my brother. He is thirty-three. He is very happy in his new house. We eat cheese and fish on Fridays. Thank you!",
    "La \"th\" de \"three\" y \"thank you\" se dice con la lengua entre los dientes, y la \"h\" de \"happy\" y \"house\" es un soplo suave, no una jota. La vocal de \"fish\" es corta y relajada; la de \"cheese\", larga."
  ),
  u3: t(
    "Describe un día normal entre semana: qué haces por la mañana, en el trabajo o en clase y por la noche. Escribe también dos frases sobre un amigo o un familiar.",
    [
      "Al menos cuatro verbos en presente simple (\"I work\", \"I eat\")",
      "La \"-s\" de la tercera persona (\"she works\", \"he goes\")",
      "Una frase negativa con \"don't\" o \"doesn't\"",
      "Un adverbio de frecuencia (\"always\", \"usually\", \"never\")",
    ],
    "I get up early every day. I usually have coffee and toast. I work in an office and I start at nine. My sister doesn't work in an office. She is a nurse and she works at night. In the evening I always cook dinner and I watch TV.",
    "Con \"he\", \"she\" e \"it\" el verbo lleva \"-s\": \"she works\". En la negativa la \"-s\" pasa a \"doesn't\" y el verbo se queda sin ella: \"she doesn't work\", no *she doesn't works."
  ),
  u4: t(
    "Es sábado por la tarde. Escribe un mensaje a un amigo: di qué estás haciendo ahora y qué están haciendo las personas de tu casa. Añade una frase sobre lo que haces normalmente los sábados.",
    [
      "\"I'm\" + verbo con \"-ing\" para lo que pasa ahora",
      "Al menos dos personas más (\"my brother is\", \"my parents are\")",
      "Una frase en presente simple para lo habitual (\"I usually\")",
      "Palabras de tiempo como \"now\", \"right now\" o \"today\"",
    ],
    "Hi Tom! It's Saturday and I'm at home. Right now I'm reading a book on the sofa. My brother is playing video games and my parents are cooking lunch. The dog is sleeping. I usually go to the park on Saturdays, but today it's raining. What are you doing?",
    "Para lo que pasa ahora se usa \"am\", \"is\" o \"are\" + verbo con \"-ing\": \"I'm reading\", nunca *I reading. Para lo habitual, el presente simple: \"I usually go\"."
  ),
  u5: t(
    "Describe tu rutina de la mañana con horas. Di a qué hora te levantas, desayunas y sales de casa, y habla de una cosa tuya y de una cosa de un familiar.",
    [
      "Al menos tres horas (\"at seven o'clock\", \"at half past eight\")",
      "Un posesivo (\"my\", \"his\", \"her\", \"our\")",
      "El genitivo \"'s\" (\"my sister's car\")",
      "Una preposición de lugar (\"in\", \"on\", \"next to\")",
    ],
    "I get up at seven o'clock. I have breakfast at half past seven in the kitchen. My keys are on the table next to the door. I leave home at a quarter past eight. I go to work in my sister's car. Her car is small and red.",
    "\"His\" y \"her\" dependen de quién es el dueño, no de la cosa: \"her car\" es el coche de ella. Para decir de quién es algo se usa \"'s\": \"my sister's car\", no *the car of my sister."
  ),
  u6: t(
    "Escribe sobre tu familia y tu cumpleaños. Di la fecha de tu cumpleaños y quién hay en tu familia, y hazle a un amigo dos preguntas sobre la suya.",
    [
      "Una fecha (\"on April 12th\")",
      "Al menos dos palabras de familia (\"mother\", \"brother\", \"grandparents\")",
      "Dos preguntas con palabras interrogativas (\"When\", \"How many\")",
      "Los meses y los días con mayúscula (\"April\", \"Monday\")",
    ],
    "My birthday is on April 12th. I live with my mother, my father and my little brother. My grandparents live in another city, but they always visit us in April. When is your birthday? How many brothers and sisters do you have?",
    "En inglés los meses y los días van con mayúscula: \"April\", \"Monday\". Las preguntas llevan auxiliar: \"How many brothers do you have?\", no *How many brothers you have?"
  ),
  u7: t(
    "Describe tu barrio o tu ciudad: qué hay, qué te gusta hacer allí y qué sabes hacer y qué no.",
    [
      "\"there is\" con singular y \"there are\" con plural",
      "\"I like\" + un sustantivo o un verbo con \"-ing\"",
      "\"I can\" o \"I can't\" + verbo sin \"to\"",
      "\"have\" o \"has\" (\"My town has a beach\")",
    ],
    "I live in a small town near the sea. There is a big park and there are two supermarkets. My town has a beautiful beach. I like swimming and I like the cafes in the square. I can swim very well, but I can't surf. There isn't a cinema, and that's a problem!",
    "«Hay» se dice \"there is\" con singular y \"there are\" con plural, nunca *it has. Después de \"can\" el verbo va sin \"to\": \"I can swim\", no *I can to swim."
  ),
  u8: t(
    "Un amigo se queda en tu casa este fin de semana. Déjale una nota con instrucciones: qué tiene que hacer, qué no tiene que hacer y de quién son algunas cosas.",
    [
      "Al menos tres imperativos (\"Open\", \"Take\", \"Don't\")",
      "\"this\" o \"these\" para lo que está cerca, \"that\" o \"those\" para lo que está lejos",
      "Pronombres de objeto (\"me\", \"him\", \"her\", \"it\", \"them\")",
      "Un saludo y una despedida",
    ],
    "Hi Lucia! Welcome to my house. This is your key. Please take it with you. Those books on the shelf are my brother's, so don't touch them, please! The cat is hungry at six, so give him some food. Call me if you have a problem. See you soon!",
    "El imperativo no lleva sujeto: \"Take it\", \"Don't touch them\". Los pronombres de objeto van después del verbo: \"Call me\", no *Me call."
  ),
  u9: t(
    "Escribe un correo corto a un amigo nuevo de otro país. Preséntate, describe tu rutina, di qué te gusta y qué sabes hacer, y cuenta qué estás haciendo ahora mismo.",
    [
      "\"to be\" para presentarte (\"I'm\", \"I'm from\")",
      "Presente simple, con la \"-s\" de la tercera persona",
      "Presente continuo para ahora (\"I'm writing\")",
      "\"like\" o \"can\" para gustos y habilidades",
    ],
    "Hi Emma! My name is Diego and I'm from Chile. I'm twenty-five and I'm a nurse. I work in a hospital and my sister works there too. I like music and I can play the guitar. Right now I'm writing this email in a cafe. Write soon!",
    "Repasa los tres pilares del nivel Fundamentos: \"to be\" (\"I'm from Chile\"), el presente simple con \"-s\" (\"my sister works\") y el presente continuo para lo que pasa ahora (\"I'm writing\")."
  ),
  u10: t(
    "Describe tu fin de semana ideal: dónde estás, con quién, qué hay allí, qué hacen y por qué te gusta. Usa todo lo que sabes del nivel Fundamentos.",
    [
      "Al menos cinco frases completas, todas con sujeto",
      "Presente simple y presente continuo",
      "\"there is\" o \"there are\"",
      "Un posesivo o un pronombre de objeto",
    ],
    "My ideal weekend is at the beach with my friends. There is a small house near the sea and there are lots of restaurants. On Saturday morning we swim and we play volleyball. My friend Tom always cooks fish for us. On Sunday I read a book and I listen to music. I love it because it's quiet.",
    "En inglés toda frase necesita sujeto, también con el tiempo o las cosas: \"It's quiet\", no *Is quiet. Es la diferencia más importante con el español."
  ),
};
