// Synced from cheneygross-afk/lengo:src/lib/lessons/es-redesign/unit-checks.ts by scripts/sync-content.mjs -- edit it there, not here.
// Hand-written unit checks for the new Spanish course, by "level/unit".
// A unit without one gets the check built from its lessons
// (buildRedesignUnitCheck). Written ones ask about the whole unit with new
// sentences, so learners use what they learned rather than recall an item
// they have already answered, and list every correct answer for speaking.
// The questions run from recognising to producing (quick practice, guided
// practice, on your own), which is also the order the player labels them.
import type { Exercise, Lesson } from "../types";
type Level = Lesson["level"];

const say = (prompt: string, text: string, altAnswers: string[], explanation: string): Exercise => ({ type: "speak", prompt, text, altAnswers, explanation });

const A1_U1: Exercise[] = [
  // Listening and reading: recognise.
  { type: "listen-choose", audio: "Somos de Colombia.", question: "Listen. Who is from Colombia?", options: ["we", "they", "I", "you (a friend)"], correctIndex: 0, explanation: "Somos is the nosotros form of ser: we are. They would be son, I soy, and a friend eres." },
  { type: "listen-choose", audio: "¿De dónde es usted?", question: "Listen. What is the person asking?", options: ["Where are you from? (polite)", "Where are you from? (to a friend)", "What's your name? (polite)", "Where are you all from?"], correctIndex: 0, explanation: "¿De dónde es usted? asks where you're from, politely: usted with es. To a friend it's ¿De dónde eres?, and ¿Cómo se llama usted? asks the name." },
  { type: "listen-choose", audio: "Hay dos sillas y una mesa.", question: "Listen. What is in the room?", options: ["two chairs and a table", "a chair and two tables", "two chairs and two tables", "a chair and a table"], correctIndex: 0, explanation: "Hay dos sillas y una mesa: there are two chairs and a table. One hay for both." },
  { type: "multiple-choice", question: "You meet your friend's father for the first time. How do you ask his name?", options: ["¿Cómo se llama usted?", "¿Cómo te llamas?", "¿Cómo se llaman ustedes?", "¿Cómo me llamo?"], correctIndex: 0, explanation: "An older person you've just met gets usted: ¿Cómo se llama usted? Te llamas is for a friend, se llaman ustedes asks a group, and me llamo is about you." },
  { type: "multiple-choice", question: "Pablo, Lucía and Marta are classmates. How do you say \"They are students\"?", options: ["Ellos son estudiantes.", "Ellas son estudiantes.", "Ellos son estudiantas.", "Ellos es estudiantes."], correctIndex: 0, explanation: "With one man in the group it's masculine: ellos. Estudiante doesn't change for a woman, and more than one person takes son." },
  { type: "multiple-choice", question: "Which is correct?", options: ["los mapas", "las mapas", "los mapaes", "las mapa"], correctIndex: 0, explanation: "Mapa is masculine despite its -a (el mapa), so los mapas. It ends in a vowel: just add -s." },
  // Guided: write what you hear, complete, put in order, correct.
  { type: "dictation", audio: "Mi amiga es enfermera.", explanation: "Mi amiga es enfermera: \"My friend is a nurse.\" Mi doesn't change for a woman; enfermero adds -a." },
  { type: "dictation", audio: "Buenas noches, señor.", explanation: "Buenas noches, señor: \"Good evening, sir.\" Noche is feminine, so buenas." },
  { type: "fill-blank", prompt: "Complete with the right form of ser.", sentence: "Tú y yo ___ amigos.", en: "You and I [are] friends.", answer: "somos", explanation: "Tú y yo = nosotros, so ser is somos." },
  { type: "fill-blank", prompt: "Complete with el, la, los or las.", sentence: "___ problema es de Pedro.", en: "[The] problem is Pedro's.", answer: "El", explanation: "Problema is masculine despite its -a: el problema, like el mapa and el día." },
  { type: "word-order", prompt: "Put the words in order.", words: ["Ella", "no", "es", "de", "aquí"], translation: "She isn't from here", explanation: "No goes right before the verb: ella no es." },
  { type: "translate", prompt: "Correct the sentence.", direction: "en-es", source: "Hay el espejo en el baño.", answer: "Hay un espejo en el baño.", explanation: "Hay introduces something new, so it takes un/una, not el/la: hay un espejo." },
  { type: "translate", prompt: "Make it plural.", direction: "en-es", source: "El profesor es de Chile.", answer: "Los profesores son de Chile.", explanation: "El → los, profesor → profesores (consonant + es), es → son." },
  // On your own: translate and speak.
  { type: "translate", prompt: "Translate to Spanish.", direction: "en-es", source: "My friend (a woman) is a doctor.", answer: "Mi amiga es doctora.", altAnswers: ["Mi amiga es médica."], explanation: "Mi stays the same; amiga and doctora are feminine. No una before a plain job." },
  { type: "translate", prompt: "Translate to Spanish.", direction: "en-es", source: "The sofa is Ana's.", answer: "El sofá es de Ana.", explanation: "Spanish has no 's: de + the owner. Sofá is masculine despite its -á: el sofá." },
  {
    type: "translate",
    prompt: "Translate to Spanish (formal).",
    direction: "en-es",
    source: "Are you a teacher, sir?",
    answer: "¿Usted es profesor, señor?",
    altAnswers: ["¿Es usted profesor, señor?", "¿Es profesor, señor?", "Señor, ¿usted es profesor?", "Señor, ¿es usted profesor?", "Señor, ¿es profesor?", "¿Usted es maestro, señor?", "¿Es usted maestro, señor?"],
    explanation: "Sir gets usted, and usted takes es: ¿Usted es profesor? No un before the job.",
  },
  say("Say it in Spanish: \"We aren't teachers.\"", "No somos profesores.", ["Nosotros no somos profesores.", "Nosotras no somos profesoras.", "No somos profesoras.", "No somos maestros.", "No somos maestras.", "Nosotros no somos maestros.", "Nosotras no somos maestras."], "No before the verb: no somos. The job goes plural and has no article."),
  say("Say it in Spanish: \"There are three chairs in the kitchen.\"", "Hay tres sillas en la cocina.", ["En la cocina hay tres sillas."], "One hay for \"there is\" and \"there are\"; the place can come first or last."),
  say(
    "Say it in Spanish: \"Good morning! My name is Laura and I'm from Peru.\"",
    "¡Buenos días! Me llamo Laura y soy de Perú.",
    ["Buenos días, soy Laura y soy de Perú.", "Buenos días, mi nombre es Laura y soy de Perú.", "Buenos días, me llamo Laura. Soy de Perú.", "Buenos días, soy Laura. Soy de Perú.", "Buenos días, me llamo Laura y yo soy de Perú.", "Buen día, me llamo Laura y soy de Perú.", "Buenos días, yo soy Laura y soy de Perú."],
    "Buenos días until lunchtime; me llamo (or soy) for your name and soy de for where you're from.",
  ),
  say("Say it in Spanish: \"The car is pretty.\"", "El carro es bonito.", ["El carro es lindo.", "El coche es bonito.", "El coche es lindo.", "El auto es bonito.", "El auto es lindo."], "Carro is masculine, so el carro and bonito (or lindo). In Spain it's el coche."),
];

const A1_U2: Exercise[] = [
  // Listening and reading: recognise.
  { type: "listen-choose", audio: "Tengo un perro. El perro es negro.", question: "Listen. How many dogs are there?", options: ["one", "two", "three", "none"], correctIndex: 0, explanation: "Un perro brings the dog in; el perro is the same dog again. A second dog would be otro perro." },
  { type: "listen-choose", audio: "Las casas blancas son bonitas.", question: "Listen. What is pretty?", options: ["the white houses", "the white house", "the black houses", "a white house"], correctIndex: 0, explanation: "Las casas blancas: las and the -s endings say more than one, and blancas is white." },
  { type: "listen-choose", audio: "Es un gran hombre.", question: "Listen. What is the man like?", options: ["great", "big", "tall", "good"], correctIndex: 0, explanation: "Gran before the noun means great. A big man is un hombre grande, a tall one alto, a good one un buen hombre." },
  { type: "multiple-choice", question: "You mention a book for the first time. Which is right?", options: ["Tengo un libro.", "Tengo el libro.", "Tengo una libro.", "Tengo uno libro."], correctIndex: 0, explanation: "Something new takes un/una; libro is masculine: un libro. El libro is for a book the listener already knows.", optionNotes: ["", "El libro is a book the listener already knows about.", "Libro is masculine: un.", "Before a noun, uno shortens to un: un libro."] },
  { type: "multiple-choice", question: "Which phrase matches all the way through?", options: ["las camisas blancas", "las camisas blancos", "la camisas blancas", "las camisa blancas"], correctIndex: 0, explanation: "Camisa is feminine, and here there are several: las, camisas and blancas all agree.", optionNotes: ["", "Camisas is feminine: blancas.", "La is for one; camisas is plural.", "Las and blancas are plural, so the noun is too: camisas."] },
  { type: "multiple-choice", question: "How do you say \"a good friend\" (a man)?", options: ["un buen amigo", "un bueno amigo", "un amigo buen", "una buena amigo"], correctIndex: 0, explanation: "Bueno drops its -o right before a masculine singular noun: un buen amigo (un amigo bueno is right too).", optionNotes: ["", "Before the noun, bueno shortens: buen.", "Buen only goes before the noun; after it, bueno.", "Amigo is masculine: un buen."] },
  // Guided: write what you hear, complete, put in order, correct.
  { type: "dictation", audio: "Las luces son azules.", explanation: "Las luces son azules: \"The lights are blue.\" Luz → luces (z → c) and azul → azules (consonant + es)." },
  { type: "dictation", audio: "Es mi primer día.", explanation: "Es mi primer día: \"It's my first day.\" Primero drops its -o before a masculine noun." },
  { type: "fill-blank", prompt: "Complete with español in the right form.", sentence: "Ana es ___.", en: "Ana is [Spanish].", answer: "española", explanation: "Nationalities ending in a consonant add -a for a woman: español → española." },
  { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Necesito ___ lápices.", en: "I need [some] pencils.", answer: "unos", altAnswers: ["algunos"], explanation: "Lápices is masculine plural, so \"some\" is unos (algunos is right too)." },
  { type: "word-order", prompt: "Put the words in order.", words: ["Tengo", "un", "carro", "rojo", "y", "una", "casa", "grande"], translation: "I have a red car and a big house", explanation: "The describing word follows the noun: un carro rojo, una casa grande." },
  { type: "translate", prompt: "Correct the sentence.", direction: "en-es", source: "Las mapas son nuevas.", answer: "Los mapas son nuevos.", explanation: "Mapa is masculine despite its -a: los mapas, and nuevos agrees with it." },
  { type: "translate", prompt: "Make it plural.", direction: "en-es", source: "El profesor francés es simpático.", answer: "Los profesores franceses son simpáticos.", explanation: "Every word goes plural: los, profesores, franceses (the accent drops), son, simpáticos." },
  // On your own: translate and speak.
  { type: "translate", prompt: "Translate to Spanish.", direction: "en-es", source: "The green doors are big.", answer: "Las puertas verdes son grandes.", explanation: "Puerta is feminine: las puertas. Verde and grande only add -s." },
  { type: "translate", prompt: "Translate to Spanish.", direction: "en-es", source: "She's a doctor. She's Ana's doctor.", answer: "Es doctora. Es la doctora de Ana.", altAnswers: ["Ella es doctora. Es la doctora de Ana.", "Es doctora; es la doctora de Ana.", "Es doctora y es la doctora de Ana.", "Ella es doctora y es la doctora de Ana.", "Es médica. Es la médica de Ana.", "Ella es médica. Es la médica de Ana."], explanation: "A plain job has no una: es doctora. Whose doctor → la doctora de Ana." },
  { type: "translate", prompt: "Translate to Spanish.", direction: "en-es", source: "Lima is a great city.", answer: "Lima es una gran ciudad.", explanation: "Gran before any single noun means great. Una ciudad grande would be a big city." },
  say("Say it in Spanish: \"The white cats are small.\"", "Los gatos blancos son pequeños.", [], "Every word agrees with los gatos: blancos, pequeños."),
  say("Say it in Spanish: \"I have a dog. The dog is big.\"", "Tengo un perro. El perro es grande.", ["Tengo un perro y el perro es grande.", "Tengo un perro. Es grande.", "Tengo un perro y es grande."], "New information takes un; then the listener knows which dog: el perro, or just es grande."),
  say("Say it in Spanish: \"My friends (all women) are Mexican and very nice.\"", "Mis amigas son mexicanas y muy simpáticas.", ["Mis amigas son mexicanas y son muy simpáticas.", "Mis amigas son mexicanas y muy amables.", "Mis amigas son mexicanas y son muy amables."], "All women: amigas, mexicanas, simpáticas. Mis adds -s with a plural noun."),
  say("Say it in Spanish: \"It's my first day.\"", "Es mi primer día.", ["Hoy es mi primer día."], "Primero drops its -o right before a masculine singular noun: mi primer día."),
];

const A1_U3: Exercise[] = [
  // Listening and reading: recognise.
  { type: "listen-choose", audio: "Mi tía es aburrida.", question: "Listen. What is the aunt like?", options: ["boring", "bored", "tired", "ready"], correctIndex: 0, explanation: "Es aburrida, with ser, says what she's like: boring. Está aburrida would mean she's bored right now." },
  { type: "listen-choose", audio: "Mi hermano está en el hospital.", question: "Listen. What do you learn about the brother?", options: ["where he is", "his job", "where he's from", "what he's like"], correctIndex: 0, explanation: "Está en el hospital: estar says where he is. His job would take ser: es médico." },
  { type: "listen-choose", audio: "La cena está lista.", question: "Listen. What does it mean?", options: ["Dinner is ready.", "Dinner is clever.", "Dinner is tasty.", "Dinner is cold."], correctIndex: 0, explanation: "Estar listo means ready. Ser listo means clever, and tasty would be está rica." },
  { type: "multiple-choice", question: "Which sentence says where the museum is?", options: ["El museo está en el centro.", "El museo es en el centro.", "El museo están en el centro.", "El museo estás en el centro."], correctIndex: 0, explanation: "Where a building is takes estar, and el museo takes está.", optionNotes: ["", "Where a place is takes estar, even a building.", "Están is plural; there's one museum.", "Estás is the tú form."] },
  { type: "multiple-choice", question: "La boda ___ en el parque. (The wedding is in the park.)", options: ["es", "está", "son", "están"], correctIndex: 0, explanation: "A wedding is an event, and where an event takes place uses ser: la boda es en el parque.", optionNotes: ["", "Estar is for where people and things are; an event takes ser.", "Son is plural; there's one wedding.", "Están is estar, and plural."] },
  { type: "multiple-choice", question: "How does a woman say \"I'm bored\"?", options: ["Estoy aburrida.", "Soy aburrida.", "Estoy aburrido.", "Soy aburrido."], correctIndex: 0, explanation: "Bored is how you feel now: estar aburrido, and a woman says aburrida.", optionNotes: ["", "Soy aburrida means \"I'm boring\".", "A woman says aburrida.", "Soy aburrido means \"I'm boring\", said by a man."] },
  // Guided: write what you hear, complete, put in order, correct.
  { type: "dictation", audio: "Somos de Perú y estamos en Chile.", explanation: "Somos de Perú y estamos en Chile: \"We're from Peru and we're in Chile.\" Origin takes ser, where you are takes estar." },
  { type: "dictation", audio: "Las tiendas están cerradas hoy.", explanation: "Las tiendas están cerradas hoy: \"The shops are closed today.\" Closed is a state, so estar; cerradas agrees with tiendas." },
  { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Mi padre ___ médico.", en: "My father [is] a doctor.", answer: "es", explanation: "A job says what someone is, so ser: mi padre = él → es." },
  { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "¿Dónde ___ los baños?", en: "Where [are] the bathrooms?", answer: "están", explanation: "Where things are takes estar, and los baños is plural: están." },
  { type: "word-order", prompt: "Put the words in order.", words: ["Mi", "amiga", "es", "de", "Chile", "y", "está", "muy", "contenta"], translation: "My friend is from Chile and she's very happy", explanation: "Origin takes ser (es de Chile); a feeling right now takes estar (está contenta)." },
  { type: "translate", prompt: "Correct the sentence.", direction: "en-es", source: "Mi madre está abogada.", answer: "Mi madre es abogada.", altAnswers: ["Mi mamá es abogada."], explanation: "A job takes ser, never estar: es abogada." },
  { type: "translate", prompt: "Correct the sentence.", direction: "en-es", source: "Mis primos son en la playa.", answer: "Mis primos están en la playa.", explanation: "Where people are takes estar, and mis primos is plural: están." },
  // On your own: translate and speak.
  { type: "translate", prompt: "Translate to Spanish.", direction: "en-es", source: "My grandfather is very kind, but today he is tired.", answer: "Mi abuelo es muy amable, pero hoy está cansado.", altAnswers: ["Mi abuelo es muy amable pero hoy está cansado.", "Mi abuelo es muy amable, pero está cansado hoy.", "Mi abuelo es muy amable pero está cansado hoy.", "Mi abuelo es muy simpático, pero hoy está cansado.", "Mi abuelo es muy simpático pero hoy está cansado."], explanation: "Kind is what he's like (ser: es amable); tired today is how he is now (estar: está cansado)." },
  { type: "translate", prompt: "Translate to Spanish.", direction: "en-es", source: "The party is at Ana's house.", answer: "La fiesta es en la casa de Ana.", altAnswers: ["La fiesta es en casa de Ana."], explanation: "A party is an event, so ser says where it takes place: es en la casa de Ana." },
  { type: "translate", prompt: "Translate to Spanish.", direction: "en-es", source: "The windows are closed and the house is quiet (tranquila).", answer: "Las ventanas están cerradas y la casa está tranquila.", explanation: "Closed and quiet right now are both states, so estar twice. Cerradas agrees with ventanas, tranquila with casa." },
  say("Say it in Spanish: \"We're from Mexico, but now we're in Spain.\"", "Somos de México, pero ahora estamos en España.", ["Somos de México, pero estamos en España ahora.", "Nosotros somos de México, pero ahora estamos en España.", "Somos de México pero ahora estamos en España."], "Origin takes ser (somos de México); where you are now takes estar (estamos en España)."),
  say("Say it in Spanish: \"My sister is a teacher.\"", "Mi hermana es profesora.", ["Mi hermana es maestra."], "A job takes ser, with no una before it: es profesora."),
  say("Say it in Spanish: \"The cake is delicious.\"", "El pastel está rico.", ["El pastel está delicioso.", "El pastel está muy rico."], "Food that tastes good right now takes estar: está rico. Es rico would mean wealthy."),
  say("Say it in Spanish: \"The school is far away.\"", "La escuela está lejos.", [], "Where a place is takes estar, even a building that never moves: está lejos."),
];

const check = (slug: string, level: Level, title: string, summary: string, body: string, exercises: Exercise[]): Lesson => ({
  slug,
  level,
  number: 0,
  unitReview: true,
  title,
  summary,
  goal: "show you can hear, say and write everything from this unit, with sentences you haven't seen.",
  duration: "15 min",
  sections: [{ heading: "Unit check", body: [body] }],
  exercises,
});

export const ES_UNIT_CHECKS: Record<string, Lesson> = {
  "a1/1": check(
    "es-a1-unit-1-unit-review",
    "A1",
    "Unit 1 check: I, you, he, she, we, they · Masculine and feminine words · More than one",
    "Twenty new questions on the whole unit: ser, tú and usted, no, jobs for a man or a woman, gender and plurals, hay and de.",
    "Twenty questions on the whole unit, all with new sentences: first you listen and recognise, then you complete and correct, then you write and speak on your own. Play the audio as often as you like; your recordings aren't saved.",
    A1_U1,
  ),
  "a1/2": check(
    "es-a1-unit-2-unit-review",
    "A1",
    "Unit 2 check: The, a, some · Describing words that match · Where describing words go",
    "Twenty new questions on the whole unit: el or un, some, agreement, nationalities, where describing words go, and buen, gran and primer.",
    "Twenty questions on the whole unit, all with new sentences: first you listen and recognise, then you complete and correct, then you write and speak on your own. Play the audio as often as you like; your recordings aren't saved.",
    A1_U2,
  ),
  "a1/3": check(
    "es-a1-unit-3-unit-review",
    "A1",
    "Unit 3 check: Ser: who and what someone is · Estar: where and how someone is · Ser or estar: the first choices",
    "Twenty new questions on the whole unit: ser for who, what and whose, estar for where and how, events, and the words that change meaning.",
    "Twenty questions on the whole unit, all with new sentences: first you listen and recognise, then you complete and correct, then you write and speak on your own. Play the audio as often as you like; your recordings aren't saved.",
    A1_U3,
  ),
};
