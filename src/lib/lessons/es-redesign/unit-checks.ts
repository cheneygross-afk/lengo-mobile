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

const A1_U4: Exercise[] = [
  // Listening and reading: recognise.
  { type: "listen-choose", audio: "Son las ocho menos cuarto.", question: "Listen. What time is it?", options: ["7:45", "8:15", "8:45", "4:08"], correctIndex: 0, explanation: "Ocho menos cuarto counts a quarter back from eight: 7:45. 8:15 would be las ocho y cuarto." },
  { type: "listen-choose", audio: "Hay quinientas personas en el concierto.", question: "Listen. How many people are at the concert?", options: ["500", "50", "5,000", "105"], correctIndex: 0, explanation: "Quinientas is 500, the irregular hundred, in the feminine to agree with personas. 50 is cincuenta." },
  { type: "listen-choose", audio: "Mi cumpleaños es el primero de julio.", question: "Listen. When is the birthday?", options: ["July 1", "June 1", "July 4", "January 7"], correctIndex: 0, explanation: "El primero de julio is July 1: the day comes first, then de + the month. Junio is June." },
  { type: "multiple-choice", question: "\"There are two banks on my street.\"", options: ["Hay dos bancos en mi calle.", "Están dos bancos en mi calle.", "Son dos bancos en mi calle.", "Hay los bancos en mi calle."], correctIndex: 0, explanation: "A number brings in new things, so hay, and hay never changes for the plural.", optionNotes: ["", "Están says where known things are; dos bancos is new.", "Son says what things are, not that they exist.", "Hay never takes el, la, los or las."] },
  { type: "multiple-choice", question: "Which one means \"my friends and I cook\"?", options: ["Mis amigos y yo cocinamos.", "Mis amigos y yo cocinan.", "Mis amigos y yo cocino.", "Mis amigos y yo cocinas."], correctIndex: 0, explanation: "A group that includes yo is nosotros, so -amos: cocinamos.", optionNotes: ["", "Cocinan leaves you out: that's ellos.", "Cocino is only yo; the group is nosotros.", "Cocinas is the tú form."] },
  { type: "multiple-choice", question: "\"The class is at one in the afternoon.\"", options: ["La clase es a la una de la tarde.", "La clase es a las una de la tarde.", "La clase es la una de la tarde.", "La clase es a la una en la tarde."], correctIndex: 0, explanation: "When something happens takes a, one o'clock is singular (a la una), and the part of the day takes de.", optionNotes: ["", "One o'clock takes la, not las.", "When something happens needs a: a la una.", "After a clock time, use de la tarde."] },
  // Guided: write what you hear, complete, put in order, correct.
  { type: "dictation", audio: "Hoy es el quince de marzo.", explanation: "Hoy es el quince de marzo: \"Today is March fifteenth.\" A plain number for the day, de, and the month in lowercase." },
  { type: "dictation", audio: "Hay veintiún libros en la mesa.", explanation: "Hay veintiún libros en la mesa: \"There are twenty-one books on the table.\" Veintiuno shortens to veintiún, with an accent, before a masculine noun." },
  { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Tú ___ inglés y francés.", en: "You [speak] English and French. (tú)", answer: "hablas", explanation: "Tú always takes -as with -ar verbs: habl- + -as = hablas." },
  { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "La chaqueta cuesta ___ pesos.", en: "The jacket costs [one hundred and twenty] pesos.", answer: "ciento veinte", explanation: "With a number after it, cien becomes ciento, and no y follows the hundreds: ciento veinte." },
  { type: "word-order", prompt: "Put the words in order.", words: ["Los", "sábados", "mi", "padre", "cocina", "la", "cena"], translation: "On Saturdays my father cooks dinner", explanation: "Los sábados means every Saturday, with no word for \"on\". Mi padre = él, so cocina." },
  { type: "translate", prompt: "Correct the sentence.", direction: "en-es", source: "Hay el supermercado al lado del banco.", answer: "El supermercado está al lado del banco.", altAnswers: ["Hay un supermercado al lado del banco."], explanation: "Hay never takes el. A known place takes estar (el supermercado está...), or bring in a new one with un (hay un supermercado...)." },
  { type: "translate", prompt: "Correct the sentence.", direction: "en-es", source: "Ustedes trabaja mucho.", answer: "Ustedes trabajan mucho.", explanation: "Ustedes takes the ellos ending, -an: trabajan." },
  // On your own: translate and speak.
  { type: "translate", prompt: "Translate to Spanish.", direction: "en-es", source: "It's 3:30 and the train arrives at four.", answer: "Son las tres y media y el tren llega a las cuatro.", altAnswers: ["Son las tres y treinta y el tren llega a las cuatro."], explanation: "The time now: son las tres y media. When something happens: a las cuatro. Llegar → llega for el tren." },
  { type: "translate", prompt: "Translate to Spanish.", direction: "en-es", source: "My grandmother is ninety-one years old.", answer: "Mi abuela tiene noventa y un años.", altAnswers: ["Mi abuela tiene 91 años."], explanation: "Age takes tiene + años. Años is masculine, so noventa y uno shortens to noventa y un." },
  { type: "translate", prompt: "Translate to Spanish.", direction: "en-es", source: "On Mondays we study at the library.", answer: "Los lunes estudiamos en la biblioteca.", altAnswers: ["Estudiamos en la biblioteca los lunes.", "Los lunes nosotros estudiamos en la biblioteca.", "Los lunes nosotras estudiamos en la biblioteca."], explanation: "Every Monday is los lunes, with no word for \"on\". Nosotros → estudiamos." },
  say("Say it in Spanish: \"Is there a pharmacy near here?\"", "¿Hay una farmacia cerca de aquí?", ["¿Hay una farmacia cerca?", "¿Hay una farmacia por aquí?"], "Asking whether one exists takes hay + una. The question is the same sentence with question marks."),
  say("Say it in Spanish: \"What time is it? It's a quarter past ten.\"", "¿Qué hora es? Son las diez y cuarto.", ["¿Qué hora es? Son las diez y quince."], "¿Qué hora es? never changes. Ten is plural (son las), and quarter past is y cuarto."),
  say("Say it in Spanish: \"My birthday is in October.\"", "Mi cumpleaños es en octubre.", [], "A month on its own takes en, written in lowercase: en octubre."),
  say("Say it in Spanish: \"I work in an office and my sister studies at the university.\"", "Trabajo en una oficina y mi hermana estudia en la universidad.", ["Yo trabajo en una oficina y mi hermana estudia en la universidad."], "Each verb takes its own subject's ending: trabajo (yo, -o), estudia (mi hermana, -a)."),
];

const A1_U5: Exercise[] = [
  // Listening and reading: recognise.
  { type: "listen-choose", audio: "Mis abuelos viven en el campo.", question: "Listen. Where do the grandparents live?", options: ["in the country", "in the city", "near the beach", "with us"], correctIndex: 0, explanation: "Viven en el campo means they live in the country. Viven is the ellos form of vivir." },
  { type: "listen-choose", audio: "No bebemos café en la noche.", question: "Listen. What does it mean?", options: ["We don't drink coffee at night.", "We drink coffee at night.", "They don't drink coffee at night.", "I don't drink coffee at night."], correctIndex: 0, explanation: "No comes right before the verb, and bebemos (-emos) is nosotros: we don't drink." },
  { type: "listen-choose", audio: "¿Cuándo abren la tienda?", question: "Listen. What is the question about?", options: ["when the shop opens", "where the shop is", "why the shop is closed", "how many shops there are"], correctIndex: 0, explanation: "Cuándo asks when, and abren is the ustedes / ellos form of abrir: when do they open the shop?" },
  { type: "multiple-choice", question: "\"We write emails every day.\"", options: ["Escribimos correos todos los días.", "Escribemos correos todos los días.", "Escriben correos todos los días.", "Escribo correos todos los días."], correctIndex: 0, explanation: "Escribir is an -ir verb, so nosotros takes -imos: escribimos.", optionNotes: ["", "-emos is for -er verbs; escribir is -ir.", "Escriben is ellos or ustedes.", "Escribo is yo."] },
  { type: "multiple-choice", question: "Answer: \"Viajo a Colombia.\" What was the question?", options: ["¿Adónde viajas?", "¿Dónde viajas?", "¿De dónde eres?", "¿Cuándo viajas?"], correctIndex: 0, explanation: "The answer says where you're heading (a Colombia), so the question asks adónde.", optionNotes: ["", "Movement toward a place takes adónde.", "That asks where you're from.", "That asks when; the answer gives a place."] },
  { type: "multiple-choice", question: "\"Who are your teachers?\"", options: ["¿Quiénes son tus profesores?", "¿Quién son tus profesores?", "¿Quiénes es tus profesores?", "¿Cuáles son tus profesores?"], correctIndex: 0, explanation: "Several people take the plural quiénes, and the verb follows: son.", optionNotes: ["", "Quién is for one person.", "Several people take son, not es.", "Cuáles asks which ones, not who."] },
  // Guided: write what you hear, complete, put in order, correct.
  { type: "dictation", audio: "Leo el periódico en la mañana.", explanation: "Leo el periódico en la mañana: \"I read the newspaper in the morning.\" Yo takes -o: leo." },
  { type: "dictation", audio: "¿Por qué no comes carne?", explanation: "¿Por qué no comes carne?: \"Why don't you eat meat?\" Por qué is two words with an accent, and no goes right before the verb." },
  { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Ustedes ___ muchas cartas.", en: "You all [receive] a lot of letters.", answer: "reciben", explanation: "Recibir is -ir, and ustedes takes the ellos ending -en, the same as -er verbs: reciben." },
  { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "¿___ hermanas tienes? —Tengo tres.", en: "[How many] sisters do you have? —I have three.", answer: "Cuántas", explanation: "Hermanas is feminine plural, so cuánto agrees as cuántas." },
  { type: "word-order", prompt: "Put the words in order.", words: ["¿Con", "quién", "comes", "los", "domingos?"], translation: "Who do you eat with on Sundays?", explanation: "The preposition goes to the front with the question word: ¿Con quién...? Then the verb." },
  { type: "translate", prompt: "Correct the sentence.", direction: "en-es", source: "Mi hermana no vivir aquí.", answer: "Mi hermana no vive aquí.", explanation: "After no, the verb still takes its ending: mi hermana is ella, so vive." },
  { type: "translate", prompt: "Correct the sentence.", direction: "en-es", source: "¿Donde aprendes español?", answer: "¿Dónde aprendes español?", explanation: "As a question word, dónde always carries its accent." },
  // On your own: translate and speak.
  { type: "translate", prompt: "Translate to Spanish.", direction: "en-es", source: "My friends don't understand the question.", answer: "Mis amigos no comprenden la pregunta.", altAnswers: ["Mis amigas no comprenden la pregunta.", "Mis amigos no entienden la pregunta.", "Mis amigas no entienden la pregunta."], explanation: "Mis amigos is ellos, so comprender takes -en, and no goes right before the verb." },
  { type: "translate", prompt: "Translate to Spanish.", direction: "en-es", source: "What do you (tú) drink in the afternoon?", answer: "¿Qué bebes en la tarde?", altAnswers: ["¿Qué bebes por la tarde?", "¿Qué tomas en la tarde?", "¿Qué tomas por la tarde?", "¿Qué bebes tú en la tarde?"], explanation: "A thing takes qué, first, then the verb in the tú form: bebes." },
  { type: "translate", prompt: "Translate to Spanish.", direction: "en-es", source: "We sell bread and we open at eight.", answer: "Vendemos pan y abrimos a las ocho.", altAnswers: ["Nosotros vendemos pan y abrimos a las ocho.", "Vendemos pan y abrimos a las 8."], explanation: "Vender is -er (vendemos) and abrir is -ir (abrimos): only nosotros shows the difference." },
  say("Say it in Spanish: \"Where do you live?\"", "¿Dónde vives?", ["¿Dónde vives tú?", "¿Dónde vive usted?"], "No movement, so plain dónde, then the tú form of vivir: vives."),
  say("Say it in Spanish: \"I don't run in the park.\"", "No corro en el parque.", ["Yo no corro en el parque."], "No goes right before the verb, and yo takes -o: corro."),
  say("Say it in Spanish: \"Why are you studying Spanish? Because I want to travel.\"", "¿Por qué estudias español? Porque quiero viajar.", ["¿Por qué estudias español? Porque quiero viajar mucho."], "The question is por qué (two words, accent); the answer is porque (one word, no accent)."),
  say("Say it in Spanish: \"My parents read and I write.\"", "Mis padres leen y yo escribo.", ["Mis papás leen y yo escribo."], "Each verb takes its own subject's ending: leen (ellos, -en), escribo (yo, -o)."),
];

const A1_U6: Exercise[] = [
  // Listening and reading: recognise.
  { type: "listen-choose", audio: "Nuestros abuelos tienen ochenta años.", question: "Listen. What does it mean?", options: ["Our grandparents are eighty.", "Our grandparents are eighteen.", "My grandparents are eighty.", "Their grandparents are eighty."], correctIndex: 0, explanation: "Nuestros is our, and age takes tener + años: tienen ochenta años." },
  { type: "listen-choose", audio: "Esa mochila es de mi hermana.", question: "Listen. Whose is the backpack?", options: ["my sister's", "my brother's", "your sister's", "mine"], correctIndex: 0, explanation: "Thing + de + owner: es de mi hermana, my sister's. Esa says it's near the listener." },
  { type: "listen-choose", audio: "Tengo mucha sed.", question: "Listen. How does the person feel?", options: ["very thirsty", "very hungry", "very cold", "in a hurry"], correctIndex: 0, explanation: "Tener sed is to be thirsty, and mucha makes it stronger. Hungry is hambre, cold frío and a hurry prisa." },
  { type: "multiple-choice", question: "\"Those houses over there are big.\"", options: ["Aquellas casas son grandes.", "Aquellos casas son grandes.", "Esas casas son grandes.", "Aquella casas es grande."], correctIndex: 0, explanation: "Far from both of you is the aquel family, and casas is feminine plural: aquellas.", optionNotes: ["", "Casas is feminine, so the ending is -as.", "Esas is near the listener, not far from both.", "Several houses take aquellas and son."] },
  { type: "multiple-choice", question: "\"Their dog is under the table.\"", options: ["Su perro está debajo de la mesa.", "Sus perro está debajo de la mesa.", "Su perro es debajo de la mesa.", "Su perro está debajo la mesa."], correctIndex: 0, explanation: "One dog takes su, even with several owners; location takes estar, and debajo needs de.", optionNotes: ["", "Sus is for several things; there is one dog.", "Where something is takes estar.", "Debajo always takes de before the noun."] },
  { type: "multiple-choice", question: "\"I'm cold.\"", options: ["Tengo frío.", "Estoy frío.", "Soy frío.", "Tengo fría."], correctIndex: 0, explanation: "Feeling cold is something you have: tengo frío. Frío is a noun here, so it doesn't change.", optionNotes: ["", "Estar doesn't go with the noun frío for a person.", "Soy frío would mean you're an unfriendly person.", "Frío is a noun here, so it has no feminine form."] },
  // Guided: write what you hear, complete, put in order, correct.
  { type: "dictation", audio: "Estos zapatos son de mi padre.", explanation: "Estos zapatos son de mi padre: \"These shoes are my father's.\" Estos ends in -os, never -es." },
  { type: "dictation", audio: "¿Cuántos años tienes?", explanation: "¿Cuántos años tienes?: \"How old are you?\" Cuántos agrees with años, and tú takes tienes." },
  { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "___ hijas son muy simpáticas.", en: "[Our] daughters are very nice.", answer: "Nuestras", explanation: "Nuestro agrees with the thing owned: hijas is feminine plural, so nuestras." },
  { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "Mis primos ___ un perro y dos gatos.", en: "My cousins [have] a dog and two cats.", answer: "tienen", explanation: "Mis primos is ellos, and the stress falls on the stem, so ten- becomes tien-: tienen." },
  { type: "word-order", prompt: "Put the words in order.", words: ["Me", "gusta", "esta", "camisa,", "pero", "no", "esa."], translation: "I like this shirt, but not that one.", explanation: "Esa stands alone for esa camisa, so it is feminine like camisa." },
  { type: "translate", prompt: "Correct the sentence.", direction: "en-es", source: "Nosotros tienemos dos hijos.", answer: "Nosotros tenemos dos hijos.", altAnswers: ["Tenemos dos hijos."], explanation: "In tenemos the stress is on the ending, so the stem stays ten-." },
  { type: "translate", prompt: "Correct the sentence.", direction: "en-es", source: "Es el libro de el profesor.", answer: "Es el libro del profesor.", explanation: "De + el always merges into del." },
  // On your own: translate and speak.
  { type: "translate", prompt: "Translate to Spanish.", direction: "en-es", source: "This book is my brother's.", answer: "Este libro es de mi hermano.", explanation: "Spanish has no 's: thing + de + owner. Libro is masculine, so este." },
  { type: "translate", prompt: "Translate to Spanish.", direction: "en-es", source: "We have to study today.", answer: "Tenemos que estudiar hoy.", altAnswers: ["Hoy tenemos que estudiar.", "Nosotros tenemos que estudiar hoy.", "Nosotras tenemos que estudiar hoy."], explanation: "Tener que + infinitive says what you have to do; only tener changes: tenemos." },
  { type: "translate", prompt: "Translate to Spanish.", direction: "en-es", source: "My sister is twenty-one years old.", answer: "Mi hermana tiene veintiún años.", altAnswers: ["Mi hermana tiene 21 años."], explanation: "Age takes tener, and veintiuno shortens to veintiún before años." },
  say("Say it in Spanish: \"Is that pen (near you) Ana's?\"", "¿Esa pluma es de Ana?", ["¿Es de Ana esa pluma?", "¿Ese bolígrafo es de Ana?", "¿Es de Ana ese bolígrafo?"], "Near the listener is the ese family, and pluma is feminine: esa. The owner comes after de."),
  say("Say it in Spanish: \"I'm hungry and I'm in a hurry.\"", "Tengo hambre y tengo prisa.", ["Tengo hambre y prisa.", "Yo tengo hambre y tengo prisa."], "Hunger and hurry are things you have: tengo hambre, tengo prisa."),
  say("Say it in Spanish: \"Our keys are on the table.\"", "Nuestras llaves están en la mesa.", ["Nuestras llaves están sobre la mesa.", "Nuestras llaves están encima de la mesa."], "Llaves is feminine plural, so nuestras; where things are takes estar."),
  say("Say it in Spanish: \"What is that over there?\"", "¿Qué es aquello?", [], "You can't name the thing yet, and it's far from both of you: the neuter aquello."),
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
  "a1/4": check(
    "es-a1-unit-4-unit-review",
    "A1",
    "Unit 4 check: There is, there are · Numbers, prices, time and dates · Regular -ar verbs now",
    "Twenty new questions on the whole unit: hay or está, numbers and prices, the time, days and dates, and regular -ar verbs.",
    "Twenty questions on the whole unit, all with new sentences: first you listen and recognise, then you complete and correct, then you write and speak on your own. Play the audio as often as you like; your recordings aren't saved.",
    A1_U4,
  ),
  "a1/5": check(
    "es-a1-unit-5-unit-review",
    "A1",
    "Unit 5 check: Regular -er and -ir verbs now · Saying no · Asking questions",
    "Twenty new questions on the whole unit: -er and -ir verbs, no before the verb, and the question words.",
    "Twenty questions on the whole unit, all with new sentences: first you listen and recognise, then you complete and correct, then you write and speak on your own. Play the audio as often as you like; your recordings aren't saved.",
    A1_U5,
  ),
  "a1/6": check(
    "es-a1-unit-6-unit-review",
    "A1",
    "Unit 6 check: My, your, our · This, that, that over there · Tener and its phrases",
    "Twenty new questions on the whole unit: possessives and de for whose, place words, este, ese and aquel, and tener for having, age and feelings.",
    "Twenty questions on the whole unit, all with new sentences: first you listen and recognise, then you complete and correct, then you write and speak on your own. Play the audio as often as you like; your recordings aren't saved.",
    A1_U6,
  ),
};
