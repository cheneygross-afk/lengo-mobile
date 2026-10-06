// Synced from cheneygross-afk/lengo:src/lib/lessons/en-unit-writing-a2.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { WriteExercise } from "./types";
import { wr } from "./skills-authoring";

// The writing task in each EN-A2 unit's review lesson (en-unit-reviews.ts),
// keyed by unit id as in en-a2.ts ("u01" to "u23"). Same shape as
// en-unit-writing-a1.ts: prompt, rubric and explanation in Spanish, with
// every English word in "double quotes" (a learner's wrong English unquoted,
// after an asterisk); the model answer in English. Each task only needs the
// grammar and words of its unit and the units before.

const t = (prompt: string, rubric: string[], modelAnswer: string, explanation: string): WriteExercise =>
  wr(prompt, [40, 90], rubric, modelAnswer, explanation);

export const EN_A2_UNIT_WRITING: Record<string, WriteExercise> = {
  u01: t(
    "Escribe sobre lo que hiciste el sábado pasado: dónde estuviste, qué hiciste por la mañana y por la tarde, y cómo fue el día. Usa verbos regulares en pasado y \"was\" o \"were\".",
    [
      "Al menos cinco verbos regulares en pasado (\"walked\", \"played\", \"watched\")",
      "\"was\" o \"were\" para decir dónde estabas o cómo fue algo",
      "Una frase negativa con \"didn't\" + verbo en infinitivo",
      "Palabras de tiempo (\"last Saturday\", \"in the morning\", \"then\")",
    ],
    "Last Saturday was a quiet day. In the morning I cleaned my room and I washed my car. Then I walked to the market with my sister. The weather was lovely and the streets were very busy. In the afternoon we watched a film at home. I didn't cook dinner because we ordered a pizza. I really enjoyed the day.",
    "En pasado los verbos regulares terminan en \"-ed\" para todas las personas: \"I walked\", \"we watched\". En la negativa el pasado está en \"didn't\" y el verbo vuelve al infinitivo: \"I didn't cook\", no *I didn't cooked."
  ),
  u02: t(
    "Cuenta un viaje o una excursión que hiciste. Di adónde fuiste, con quién, cómo llegaste, qué viste y qué compraste. Termina con una pregunta a un amigo sobre su último viaje.",
    [
      "Al menos cinco verbos irregulares en pasado (\"went\", \"saw\", \"bought\", \"took\", \"had\")",
      "Una frase negativa con \"didn't\" (\"we didn't see\")",
      "Una pregunta con \"did\" (\"Where did you go?\")",
      "Cuándo fue el viaje (\"last summer\", \"two years ago\")",
    ],
    "Last summer I went to London with my brother. We took the train from Paris and it was very fast. We saw Big Ben and we had lunch in a small cafe near the river. I bought some books and a red umbrella. We didn't go inside Buckingham Palace because it was closed. Where did you go on your last trip?",
    "Los irregulares hay que aprenderlos de memoria: \"go\" > \"went\", \"see\" > \"saw\", \"buy\" > \"bought\". En preguntas y negativas se usa \"did\" con el infinitivo: \"Where did you go?\", no *Where did you went?"
  ),
  u03: t(
    "Cuenta algo que te pasó un día de camino al trabajo o a clase. Describe qué estabas haciendo y qué tiempo hacía, y después qué pasó de repente.",
    [
      "Pasado continuo para el fondo de la historia (\"I was walking\", \"it was raining\")",
      "Pasado simple para lo que pasó (\"I saw\", \"she called\")",
      "\"when\" o \"while\" para unir las dos acciones",
      "Al menos una pregunta o una frase negativa en pasado continuo",
    ],
    "Last Monday I was walking to work. It was raining and I was listening to music. While I was crossing the street, I saw a small dog. It wasn't wearing a collar and it was shaking. I took it to a vet near my office. When I got to work, I was late, but my boss wasn't angry. She took the dog home!",
    "El pasado continuo (\"was\" o \"were\" + \"-ing\") describe lo que estaba pasando; el pasado simple, lo que interrumpe: \"While I was crossing the street, I saw a dog\". Detrás de \"when\" suele ir el pasado simple para la acción corta."
  ),
  u04: t(
    "Escribe sobre tu infancia: cómo era tu vida cuando eras pequeño, qué solías hacer y qué ya no haces. Después cuenta en orden una anécdota corta de esa época.",
    [
      "\"used to\" para hábitos del pasado (\"I used to play\")",
      "\"didn't use to\" para algo que antes no hacías",
      "Conectores para ordenar la historia (\"first\", \"then\", \"after that\", \"in the end\")",
      "Pasado simple y pasado continuo en la anécdota",
    ],
    "When I was a child, I used to live in a small town. I used to play football in the street every afternoon. I didn't use to like vegetables, but now I love them. One day I was playing with my friends when the ball broke a window. First we ran away. Then we felt bad, so we went back. In the end, my dad paid for the window.",
    "\"used to\" + infinitivo expresa hábitos del pasado que ya no ocurren: \"I used to play\". En negativa y pregunta se escribe \"use to\", sin \"d\": \"I didn't use to like\"."
  ),
  u05: t(
    "Escribe sobre tus experiencias: lugares que has visitado, cosas que has hecho y algo que nunca has hecho pero te gustaría hacer. Hazle una pregunta a un amigo con \"Have you ever...?\".",
    [
      "Presente perfecto (\"I have visited\", \"I've eaten\")",
      "Al menos tres participios irregulares (\"been\", \"seen\", \"eaten\", \"written\")",
      "\"never\" para algo que no has hecho nunca",
      "Una pregunta con \"Have you ever...?\"",
    ],
    "I have visited six countries in my life. I've been to Italy twice and I've eaten real pizza in Naples. I have seen the Eiffel Tower, but I have never climbed it. I've never flown in a helicopter, but I want to try it one day. My brother has gone to Canada for a month, so I can't ask him. Have you ever been to Asia?",
    "Para experiencias sin fecha se usa el presente perfecto: \"I've been to Italy\". Ojo: \"has been\" significa que fue y volvió, y \"has gone\" que todavía está allí."
  ),
  u06: t(
    "Escribe un mensaje a un amigo sobre tu semana: cosas que acabas de hacer, cosas que ya has hecho y otras que todavía no. Di también cuánto tiempo llevas en tu casa o en tu trabajo.",
    [
      "\"just\" y \"already\" en frases afirmativas",
      "\"yet\" en una frase negativa o una pregunta",
      "\"for\" y \"since\" con el presente perfecto (\"I've lived here for three years\")",
      "Una frase en pasado simple con un momento concreto (\"yesterday\", \"on Monday\")",
    ],
    "Hi Tom! It's been a busy week. I've just finished a big project at work, so I'm very happy. I've already booked our hotel for the summer, but I haven't bought the plane tickets yet. On Monday I met my new boss. I've worked at this company for three years and I've lived in my apartment since 2022. Have you found a new job yet?",
    "En español decimos «llevo tres años aquí», pero en inglés se usa el presente perfecto: \"I've worked here for three years\", no *I work here since three years. \"for\" va con un periodo y \"since\" con el punto de inicio."
  ),
  u07: t(
    "Vas a hacer una cena para cuatro amigos. Escribe qué hay en tu cocina, qué falta y qué tienes que comprar. Di también si hay demasiado o suficiente de algo.",
    [
      "\"some\" y \"any\" (\"There is some rice\", \"We don't have any eggs\")",
      "\"much\" con incontables y \"many\" con contables",
      "\"a few\" o \"a little\"",
      "\"too much\", \"too many\" o \"enough\"",
    ],
    "I'm cooking dinner for four friends tonight. There is some rice and a little cheese in the fridge, but we don't have any eggs. There aren't many tomatoes, only a few, so I need to buy more. We have a lot of bread, maybe too much! There isn't much milk, but it's enough for the dessert. How much money do I need? Not much, I think.",
    "\"much\" va con incontables (\"much milk\") y \"many\" con contables en plural (\"many tomatoes\"). Palabras como \"bread\", \"money\" o \"information\" son incontables en inglés: no llevan \"-s\" ni \"a\"."
  ),
  u08: t(
    "Compara dos ciudades o pueblos que conoces: el tamaño, el clima, los precios y la gente. Termina diciendo cuál es el mejor lugar que has visitado y por qué.",
    [
      "Comparativos cortos con \"-er than\" (\"bigger than\", \"hotter than\")",
      "Comparativos largos con \"more ... than\" (\"more expensive than\")",
      "Un superlativo (\"the best\", \"the most beautiful\")",
      "\"as ... as\" o \"not as ... as\"",
    ],
    "I live in Valencia, but I grew up in a small village. Valencia is bigger and noisier than my village, and it's more expensive too. The village is quieter and the people are friendlier. In winter the village is colder than the city. Valencia isn't as green as my village, but it has the beach. The best place I've ever visited is Lisbon. It's the most beautiful city in Europe for me.",
    "Con adjetivos cortos se añade \"-er\" y con los largos \"more\": \"bigger\", \"more expensive\", nunca *more big. El comparativo va con \"than\", no con \"that\", y el superlativo con \"in\": \"the most beautiful city in Europe\"."
  ),
  u09: t(
    "Escribe a un amigo sobre tus planes para el fin de semana y para el verano. Incluye una cita ya fijada, un plan, una predicción y una decisión que tomas en este momento.",
    [
      "Presente continuo para citas fijadas (\"I'm meeting Ana on Saturday\")",
      "\"going to\" para planes e intenciones",
      "\"will\" para una predicción o una decisión del momento",
      "Expresiones de futuro (\"tomorrow\", \"next week\", \"this summer\")",
    ],
    "Hi Emma! This weekend is going to be busy. On Saturday morning I'm meeting Carlos for coffee, and in the evening we're going to a concert. This summer I'm going to travel to Scotland with my cousins. I think it will be cold, but I don't care! Oh, you need a book for your trip? I'll lend you mine. I'll bring it tomorrow.",
    "\"going to\" es para planes ya pensados y \"will\" para predicciones o decisiones del momento (\"I'll lend you mine\"). Para citas con hora y lugar se usa el presente continuo: \"I'm meeting Carlos on Saturday\"."
  ),
  u10: t(
    "Un estudiante nuevo llega a tu escuela o a tu trabajo. Escríbele las normas principales, lo que no está permitido, lo que no es necesario hacer y dos consejos.",
    [
      "\"have to\" o \"must\" para obligaciones",
      "\"mustn't\" para prohibiciones",
      "\"don't have to\" para lo que no es necesario",
      "\"should\" o \"shouldn't\" para consejos",
    ],
    "Welcome to the school! Here are the main rules. You have to arrive before nine o'clock and you must sign in at reception. You mustn't use your phone in class. You don't have to wear a uniform, so you can wear normal clothes. On Fridays you don't have to bring books. You should talk to the teachers if you have a problem, and you shouldn't miss the first week.",
    "Cuidado: \"mustn't\" significa «no debes, está prohibido», pero \"don't have to\" significa «no hace falta». Después de \"must\" y \"should\" va el infinitivo sin \"to\": \"You should talk\", no *You should to talk."
  ),
  u11: t(
    "Escribe un mensaje a un vecino. Pídele un favor con educación, ofrécele tu ayuda con algo, sugiere un plan para el fin de semana y di qué cosas podrían pasar.",
    [
      "Una petición educada con \"Could you...?\" o \"Can you...?\"",
      "Un ofrecimiento con \"Shall I...?\" o \"I can...\"",
      "Una sugerencia (\"Shall we...?\", \"Why don't we...?\", \"Let's...\")",
      "\"might\" o \"could\" para algo posible",
    ],
    "Hi Mrs. Brown! I'm going away for the weekend. Could you water my plants on Saturday, please? I might come back late on Sunday, so I could give you the key on Friday evening. You said your car isn't working. Shall I take you to the supermarket tomorrow? Also, why don't we have dinner together next week? It might be fun to invite the other neighbors too.",
    "\"Could you...?\" es más educado que \"Can you...?\" para pedir favores. \"might\" expresa que algo es posible pero no seguro: \"I might come back late\", sin \"to\" detrás."
  ),
  u12: t(
    "Escribe sobre tus aficiones y tus planes: qué disfrutas haciendo, qué odias hacer, qué quieres aprender este año y para qué estudias inglés.",
    [
      "Verbos con \"-ing\" (\"enjoy\", \"love\", \"hate\", \"don't mind\")",
      "Verbos con \"to\" (\"want\", \"decide\", \"hope\", \"need\")",
      "\"want someone to\" (\"My parents want me to...\")",
      "\"to\" para expresar finalidad (\"I study English to travel\")",
    ],
    "I really enjoy cooking and I love going to the mountains on weekends. I hate getting up early, but I don't mind working late. This year I want to learn to swim properly, and I hope to run a race in the fall. My parents want me to visit them more often. I'm studying English to get a better job and to travel around the world.",
    "Después de \"enjoy\" o \"hate\" va el verbo con \"-ing\" y después de \"want\" o \"hope\", \"to\" + infinitivo. Para la finalidad se usa \"to\", nunca *for to: \"I'm studying English to travel\"."
  ),
  u13: t(
    "Describe un día normal de tu semana, de la mañana a la noche. Usa expresiones con \"make\", \"do\", \"take\" y \"get\" y al menos dos verbos frasales.",
    [
      "Expresiones con \"make\" y \"do\" (\"make breakfast\", \"do the dishes\", \"do homework\")",
      "\"take\" o \"have\" (\"take a shower\", \"have lunch\")",
      "Dos usos de \"get\" (\"get up\", \"get to work\", \"get tired\")",
      "Dos verbos frasales (\"wake up\", \"turn off\", \"look for\", \"put on\")",
    ],
    "I wake up at seven and I get up ten minutes later. I take a shower, put on my clothes and make breakfast. I take the bus and I get to work at nine. At work I make a lot of phone calls and I do some exercise at lunchtime. In the evening I do the dishes and help my son with his homework. When I get tired, I turn off the TV and go to bed.",
    "En español todo es «hacer», pero en inglés se dice \"make breakfast\" y \"do the dishes\": \"make\" es para crear algo y \"do\" para tareas y actividades. Y no se dice *take breakfast, sino \"have breakfast\"."
  ),
  u14: t(
    "Escribe sobre tus planes para el próximo fin de semana y lo que harás según lo que pase. Incluye al menos tres condiciones y una frase con \"when\" o \"as soon as\".",
    [
      "Primer condicional: \"If\" + presente, \"will\" + verbo",
      "Una condición negativa (\"If it doesn't rain\", \"unless\")",
      "\"when\", \"as soon as\" o \"until\" con presente (\"when I finish\")",
      "Una frase de condicional cero para algo que siempre es verdad",
    ],
    "This weekend depends on the weather. If it's sunny on Saturday, we'll go to the beach. If it rains, we'll stay home and watch films. If my sister doesn't come, I'll visit my grandmother. As soon as I finish work on Friday, I'll call my friends. When I get home, I'll pack my bag. If I don't sleep well, I always feel tired, so I won't go to bed late.",
    "Después de \"if\", \"when\" y \"as soon as\" se usa el presente aunque hablemos del futuro: \"If it rains, we'll stay home\", no *If it will rain. En español pasa algo parecido: «cuando llegue», no «cuando llegaré»."
  ),
  u15: t(
    "Describe tu barrio o tu ciudad: los lugares que te gustan, las personas que conoces allí y algo que no hay. Usa oraciones de relativo para dar más información.",
    [
      "\"who\" para personas y \"which\" o \"that\" para cosas",
      "\"where\" para lugares (\"the cafe where I...\")",
      "\"something\", \"anything\", \"nothing\" o \"nobody\"",
      "Un pronombre reflexivo o \"one\" / \"ones\" (\"myself\", \"the old one\")",
    ],
    "I live in a quiet neighborhood which is near the river. There's a small cafe where I have breakfast on Sundays. The woman who works there knows everybody. There is a park that has two playgrounds, a new one and an old one. There isn't anything to do at night and nobody goes out after ten. I like it because I can relax and enjoy myself there.",
    "En inglés las personas llevan \"who\" y las cosas \"which\" o \"that\": \"the woman who works there\". En negativa no se dice *There isn't nothing; se dice \"There isn't anything\" o \"There's nothing\", nunca dos negaciones."
  ),
  u16: t(
    "Describe a una persona que conoces: cómo es, cómo hace las cosas y cómo se siente con su trabajo o sus estudios. Termina con algo que es demasiado o no lo bastante para ella.",
    [
      "Al menos tres adverbios de modo (\"quickly\", \"carefully\", \"well\")",
      "Un adjetivo en \"-ed\" y otro en \"-ing\" (\"bored\" / \"boring\")",
      "\"too\" o \"enough\" con un adjetivo",
      "\"very\", \"really\", \"quite\" o \"a bit\"",
    ],
    "My friend Lucia is a nurse. She is really kind and she speaks very calmly to her patients. She works hard and she drives carefully, but she walks quickly everywhere. She thinks her job is interesting, but she is often tired after the night shift. She plays the piano quite well. She says her apartment is too small and it isn't quiet enough to sleep during the day.",
    "El adverbio describe cómo se hace algo y suele ir al final: \"She speaks calmly\". El de \"good\" es \"well\". \"bored\" es cómo te sientes y \"boring\" cómo es algo: \"The film is boring, so I'm bored\"."
  ),
  u17: t(
    "Explica a un amigo cómo llegar desde la estación a tu casa y cuenta qué tal fue tu último viaje a otra ciudad. Usa preposiciones de movimiento y de tiempo.",
    [
      "Preposiciones de movimiento (\"along\", \"across\", \"past\", \"into\")",
      "\"arrive in\" / \"arrive at\" o \"get to\"",
      "Medios de transporte (\"by bus\", \"on foot\")",
      "Un verbo o adjetivo con preposición (\"wait for\", \"afraid of\", \"good at\")",
    ],
    "When you get to the station, walk along the main street and go past the bank. Go across the bridge and my house is the blue one next to the park. It takes ten minutes on foot. Last month I went to Seville by train. I arrived in Seville at eight and waited for my friend for twenty minutes. We stayed there from Friday until Sunday and I was sad to leave.",
    "Con \"arrive\" no se usa \"to\": se dice \"arrive in\" para ciudades y \"arrive at\" para edificios. Y fíjate en \"wait for\": \"I waited for my friend\", no *I waited my friend."
  ),
  u18: t(
    "Escribe un mensaje a un amigo nuevo para conocerlo mejor. Cuenta dos cosas sobre ti y hazle al menos cinco preguntas de distintos tipos.",
    [
      "Una pregunta de sujeto sin \"do\" (\"Who taught you English?\")",
      "Una pregunta que termina en preposición (\"Where are you from?\")",
      "\"What's it like?\" o \"How long / how often...?\"",
      "Una pregunta indirecta (\"Do you know where...?\") y una reacción como \"So do I\"",
    ],
    "Hi Sam! Thanks for your message. You love jazz? So do I! You don't like football? Neither do I! I have some questions for you. Where are you from? What's your city like? How often do you go to concerts? Who taught you to play the guitar? What are you interested in? Do you know where I can find good jazz in your city?",
    "Si la pregunta es sobre el sujeto, no lleva \"do\": \"Who taught you?\", no *Who did teach you? En las preguntas indirectas el orden es el de una afirmación: \"Do you know where I can find...?\", no *where can I find."
  ),
  u19: t(
    "Escribe a un amigo sobre tus últimas vacaciones: el viaje, el alojamiento, el dinero que gastaste y lo que hiciste en tu tiempo libre. Si te pusiste enfermo o tuviste algún problema, cuéntalo también.",
    [
      "Vocabulario de viajes (\"flight\", \"luggage\", \"book a room\", \"sightseeing\")",
      "Vocabulario de dinero (\"spend\", \"cheap\", \"pay by card\")",
      "Una actividad de tiempo libre o deporte (\"go hiking\", \"play tennis\")",
      "Una frase sobre la salud (\"I had a headache\", \"I felt sick\")",
    ],
    "Hi Diego! I just got back from Ireland. The flight was short but they lost my luggage for a day! We booked a room in a small hotel near the sea. It wasn't cheap, but breakfast was included. We went sightseeing in Dublin and went hiking in the mountains. I spent too much money on souvenirs and I paid for everything by card. On the last day I had a terrible headache, so I stayed in bed.",
    "\"luggage\" es incontable: \"my luggage\", nunca *my luggages. Se dice \"spend money on something\" y \"pay for something\": \"I paid for everything\", no *I paid everything."
  ),
  u20: t(
    "Escribe tu opinión sobre vivir en una ciudad grande o en el campo. Da dos razones, una idea contraria y una conclusión, y usa bien al menos dos palabras que son falsos amigos.",
    [
      "Expresiones de opinión (\"I think\", \"in my opinion\", \"probably\")",
      "Conectores (\"because\", \"however\", \"also\", \"so\")",
      "Al menos dos falsos amigos bien usados (\"actually\", \"sensible\", \"realize\", \"library\")",
      "Una conclusión (\"In the end\", \"All in all\")",
    ],
    "In my opinion, living in a big city is better for young people. First, there are more jobs, so it's easier to find work. Also, there are museums, concerts and a big library. However, cities are noisy and expensive. Actually, I grew up in the country and I loved it. I realized that I miss the quiet life. All in all, I think the city is the sensible choice now, but I'll probably move back one day.",
    "Cuidado con los falsos amigos: \"actually\" significa «en realidad», no «actualmente»; \"library\" es «biblioteca», no «librería»; y \"sensible\" es «sensato», no «sensible»."
  ),
  u21: t(
    "Te alojaste en un hotel y hubo un problema en tu habitación. Escribe un correo educado a la recepción: explica qué pasó, pide una solución y da las gracias.",
    [
      "Un saludo y una despedida formales (\"Dear Sir or Madam\", \"Best regards\")",
      "Pasado simple para explicar el problema",
      "Una petición educada (\"Could you...?\", \"I would like...\")",
      "Vocabulario del hotel (\"room\", \"reception\", \"check out\", \"refund\")",
    ],
    "Dear Sir or Madam, I stayed in room 214 from March 3rd to March 5th. Unfortunately, the heating didn't work and the room was very cold at night. I called reception twice, but nobody came to fix it. I also had to wait an hour to check out. I would like a partial refund for the two nights. Could you please reply by email? Thank you for your help. Best regards, Ana Torres",
    "En un correo formal se usan fórmulas fijas como \"Dear Sir or Madam\" y \"Best regards\", y peticiones suaves como \"I would like\" o \"Could you please...?\" en lugar de *I want."
  ),
  u22: t(
    "Escribe un correo informal a un amigo que no ves desde hace tiempo. Cuéntale qué hiciste el año pasado, qué has hecho últimamente y qué planes tienes. Termina con una invitación.",
    [
      "Pasado simple y presente perfecto bien diferenciados",
      "Un futuro con \"going to\" o \"will\"",
      "Un saludo y una despedida informales (\"Hi\", \"Take care\")",
      "Una invitación (\"Would you like to...?\", \"Why don't you...?\")",
    ],
    "Hi Emma! I haven't heard from you for ages. How are you? Last year I moved to Madrid and I started a new job in a bank. It was hard at first, but now I love it. Recently I've joined a gym and I've made some new friends. Next summer I'm going to visit my family in Peru. Would you like to come and stay with me in Madrid before that? Take care and write soon!",
    "Si dices cuándo pasó algo, usa el pasado simple: \"Last year I moved\". Si no hay momento concreto o es reciente, el presente perfecto: \"I've joined a gym\", no *I have moved last year."
  ),
  u23: t(
    "Vas a pasar un mes con una familia anfitriona en Estados Unidos. Escríbeles un correo: preséntate, cuenta algo de tu pasado y tus experiencias, explica tus planes y hazles algunas preguntas.",
    [
      "Presente simple para presentarte y tus gustos",
      "Pasado simple y presente perfecto para tu historia y tus experiencias",
      "Futuro (\"going to\", \"will\") y un condicional con \"if\"",
      "Dos preguntas educadas (\"Do I need to...?\", \"Could you...?\")",
    ],
    "Dear Mr. and Mrs. Miller, my name is Sofia and I'm twenty-two. I'm from Argentina and I study biology. I started learning English when I was ten, but I have never been to the United States. I'm going to arrive on July 2nd. If my flight is late, I'll send you a message. I love cooking, so I'll make you a typical dish from my country. Do I need to bring a towel? Could you tell me about your town? Best wishes, Sofia",
    "Este correo repasa todo el A2: pasado simple con fecha (\"I started when I was ten\"), presente perfecto para experiencias (\"I have never been\") y el condicional con presente detrás de \"if\" (\"If my flight is late\")."
  ),
};
