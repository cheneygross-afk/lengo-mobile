// Synced from cheneygross-afk/lengo:src/lib/readings/assorted.ts by scripts/sync-content.mjs -- edit it there, not here.
import { amazonSearchUrl, type Reading } from "./types";

// Not leveled by CEFR -- a general shelf of real Spanish-language books
// across genres, for people who'd rather pick by interest than by
// difficulty (with a wide range of difficulty represented here too).
export const ASSORTED_READINGS: Reading[] = [
  {
    title: "Harry Potter y la piedra filosofal",
    author: "J.K. Rowling",
    tag: "Fantasy",
    description:
      "A story you likely already know, which does a lot of the comprehension work for you while you focus on the language.",
    amazonUrl: amazonSearchUrl("Harry Potter y la piedra filosofal", "J.K. Rowling"),
  },
  {
    title: "Bajo la misma estrella",
    author: "John Green",
    tag: "YA / Romance",
    description:
      "The Spanish edition of The Fault in Our Stars -- contemporary, conversational prose and a fast-moving plot.",
    amazonUrl: amazonSearchUrl("Bajo la misma estrella", "John Green"),
  },
  {
    title: "La casa en Mango Street",
    author: "Sandra Cisneros",
    tag: "Coming-of-age",
    description:
      "Short vignettes narrated by a young girl in Chicago -- brief chapters, plain language, often sold in bilingual editions.",
    amazonUrl: amazonSearchUrl("La casa en Mango Street", "Sandra Cisneros"),
  },
  {
    title: "Veinte poemas de amor y una canción desesperada",
    author: "Pablo Neruda",
    tag: "Poetry",
    description:
      "Short, famous love poems -- read one at a time rather than cover to cover, and a good way to work on rhythm and sound.",
    amazonUrl: amazonSearchUrl("Veinte poemas de amor y una canción desesperada", "Pablo Neruda"),
  },
  {
    title: "Manolito Gafotas",
    author: "Elvira Lindo",
    tag: "Kids / Humor",
    description:
      "A funny, very readable series narrated by a wisecracking kid from Madrid -- genuinely popular with native child readers, and forgiving for learners too.",
    amazonUrl: amazonSearchUrl("Manolito Gafotas", "Elvira Lindo"),
  },
  {
    title: "1080 recetas de cocina",
    author: "Simone Ortega",
    tag: "Cookbook",
    description:
      "A beloved, best-selling Spanish cookbook -- if you'd rather read for a hobby than a plot, recipes are short, repetitive, and full of everyday vocabulary.",
    amazonUrl: amazonSearchUrl("1080 recetas de cocina", "Simone Ortega"),
  },
  {
    title: "El guardián invisible",
    author: "Dolores Redondo",
    tag: "Mystery & Thriller",
    description:
      "A detective returns to her hometown in the Basque Country to hunt a killer staging deaths like old local legends.",
    amazonUrl: amazonSearchUrl("El guardián invisible", "Dolores Redondo"),
  },
  {
    title: "La reina del sur",
    author: "Arturo Pérez-Reverte",
    tag: "Mystery & Thriller",
    description:
      "A Mexican woman flees to Spain after her drug-trafficker boyfriend is killed, and builds her own criminal empire from nothing.",
    amazonUrl: amazonSearchUrl("La reina del sur", "Arturo Pérez-Reverte"),
  },
  {
    title: "Diez negritos",
    author: "Agatha Christie",
    tag: "Mystery & Thriller",
    description:
      "Ten strangers are lured to an island and killed off one by one, in the bestselling mystery novel of all time.",
    amazonUrl: amazonSearchUrl("Diez negritos", "Agatha Christie"),
  },
  {
    title: "El juego del ángel",
    author: "Carlos Ruiz Zafón",
    tag: "Mystery & Thriller",
    description:
      "A struggling writer in 1920s Barcelona takes a strange commission from a mysterious publisher, in this prequel to La sombra del viento.",
    amazonUrl: amazonSearchUrl("El juego del ángel", "Carlos Ruiz Zafón"),
  },
  {
    title: "El día que se perdió la cordura",
    author: "Javier Castillo",
    tag: "Mystery & Thriller",
    description:
      "An FBI agent investigates a young girl's disappearance on Thanksgiving in Manhattan, in a fast, twist-heavy thriller.",
    amazonUrl: amazonSearchUrl("El día que se perdió la cordura", "Javier Castillo"),
  },
  {
    title: "La chica del tren",
    author: "Paula Hawkins",
    tag: "Mystery & Thriller",
    description:
      "A woman who watches a couple from her daily train ride gets pulled into their disappearance and starts to doubt her own memory.",
    amazonUrl: amazonSearchUrl("La chica del tren", "Paula Hawkins"),
  },
  {
    title: "Los renglones torcidos de Dios",
    author: "Torcuato Luca de Tena",
    tag: "Mystery & Thriller",
    description:
      "A woman checks into a psychiatric hospital to investigate a death, and the reader is never quite sure if she's sane.",
    amazonUrl: amazonSearchUrl("Los renglones torcidos de Dios", "Torcuato Luca de Tena"),
  },
  {
    title: "El silencio de los corderos",
    author: "Thomas Harris",
    tag: "Mystery & Thriller",
    description:
      "A young FBI trainee consults an imprisoned cannibal psychiatrist to catch a serial killer skinning his victims.",
    amazonUrl: amazonSearchUrl("El silencio de los corderos", "Thomas Harris"),
  },
  {
    title: "Los mares del sur",
    author: "Manuel Vázquez Montalbán",
    tag: "Mystery & Thriller",
    description:
      "Barcelona detective Pepe Carvalho investigates the murder of a wealthy businessman found dead in a working-class housing block.",
    amazonUrl: amazonSearchUrl("Los mares del sur", "Manuel Vázquez Montalbán"),
  },
  {
    title: "El nombre del viento",
    author: "Patrick Rothfuss",
    tag: "Fantasy & Sci-Fi",
    description:
      "A legendary figure living in hiding tells the true story of his rise from orphan to wizard to legend.",
    amazonUrl: amazonSearchUrl("El nombre del viento", "Patrick Rothfuss"),
  },
  {
    title: "Juego de tronos",
    author: "George R.R. Martin",
    tag: "Fantasy & Sci-Fi",
    description:
      "Noble houses scheme for the throne of a fractured kingdom while an ancient threat gathers beyond a wall of ice.",
    amazonUrl: amazonSearchUrl("Juego de tronos", "George R.R. Martin"),
  },
  {
    title: "La historia interminable",
    author: "Michael Ende",
    tag: "Fantasy & Sci-Fi",
    description:
      "A lonely boy discovers a book that pulls him physically into the dying fantasy world he's reading about.",
    amazonUrl: amazonSearchUrl("La historia interminable", "Michael Ende"),
  },
  {
    title: "El hobbit",
    author: "J.R.R. Tolkien",
    tag: "Fantasy & Sci-Fi",
    description:
      "A comfort-loving hobbit is talked into joining a band of dwarves on a quest to reclaim treasure guarded by a dragon.",
    amazonUrl: amazonSearchUrl("El hobbit", "J.R.R. Tolkien"),
  },
  {
    title: "Fahrenheit 451",
    author: "Ray Bradbury",
    tag: "Fantasy & Sci-Fi",
    description:
      "In a future where books are illegal, a fireman whose job is burning them starts to wonder what's in the ones he destroys.",
    amazonUrl: amazonSearchUrl("Fahrenheit 451", "Ray Bradbury"),
  },
  {
    title: "1984",
    author: "George Orwell",
    tag: "Fantasy & Sci-Fi",
    description:
      "A low-level bureaucrat in a totalitarian state where even thoughts are policed begins to question everything he's been told.",
    amazonUrl: amazonSearchUrl("1984", "George Orwell"),
  },
  {
    title: "Un mundo feliz",
    author: "Aldous Huxley",
    tag: "Fantasy & Sci-Fi",
    description:
      "A future society engineers happiness through genetic design and constant pleasure, until one man wants something more.",
    amazonUrl: amazonSearchUrl("Un mundo feliz", "Aldous Huxley"),
  },
  {
    title: "Fundación",
    author: "Isaac Asimov",
    tag: "Fantasy & Sci-Fi",
    description:
      "A mathematician predicts the fall of a galactic empire and sets up a colony meant to shorten the coming dark age.",
    amazonUrl: amazonSearchUrl("Fundación", "Isaac Asimov"),
  },
  {
    title: "Dune",
    author: "Frank Herbert",
    tag: "Fantasy & Sci-Fi",
    description:
      "A duke's son is thrust into a desert planet's politics, religion, and rebellion after his family is betrayed.",
    amazonUrl: amazonSearchUrl("Dune", "Frank Herbert"),
  },
  {
    title: "La invención de Morel",
    author: "Adolfo Bioy Casares",
    tag: "Fantasy & Sci-Fi",
    description:
      "A fugitive hiding on a remote island falls for a woman who may be part of a strange machine repeating the same days forever.",
    amazonUrl: amazonSearchUrl("La invención de Morel", "Adolfo Bioy Casares"),
  },
  {
    title: "Memorias de Idhún",
    author: "Laura Gallego",
    tag: "Fantasy & Sci-Fi",
    description:
      "Two teenagers are pulled from Earth into a magical world under threat from a race of shape-shifting dragons.",
    amazonUrl: amazonSearchUrl("Memorias de Idhún", "Laura Gallego"),
  },
  {
    title: "La guerra de los mundos",
    author: "H.G. Wells",
    tag: "Fantasy & Sci-Fi",
    description:
      "Martians land in the English countryside and begin a methodical invasion, told from the ground by one ordinary survivor.",
    amazonUrl: amazonSearchUrl("La guerra de los mundos", "H.G. Wells"),
  },
  {
    title: "Orgullo y prejuicio",
    author: "Jane Austen",
    tag: "Romance",
    description:
      "A sharp-tongued young woman and a proud, wealthy landowner slowly work past their first bad impressions of each other.",
    amazonUrl: amazonSearchUrl("Orgullo y prejuicio", "Jane Austen"),
  },
  {
    title: "El niño con el pijama de rayas",
    author: "John Boyne",
    tag: "Historical Fiction",
    description:
      "The son of a Nazi commandant befriends a boy on the other side of the camp fence, not understanding what the fence means.",
    amazonUrl: amazonSearchUrl("El niño con el pijama de rayas", "John Boyne"),
  },
  {
    title: "La ladrona de libros",
    author: "Markus Zusak",
    tag: "Historical Fiction",
    description:
      "A foster girl in Nazi Germany steals books to survive, narrated by Death, who can't stop noticing her.",
    amazonUrl: amazonSearchUrl("La ladrona de libros", "Markus Zusak"),
  },
  {
    title: "El médico",
    author: "Noah Gordon",
    tag: "Historical Fiction",
    description:
      "An orphaned boy in 11th-century England disguises himself as a Jew to study medicine in Persia under a legendary healer.",
    amazonUrl: amazonSearchUrl("El médico", "Noah Gordon"),
  },
  {
    title: "El nombre de la rosa",
    author: "Umberto Eco",
    tag: "Historical Fiction",
    description:
      "A Franciscan friar investigates a string of deaths in a medieval Italian monastery hiding a forbidden book.",
    amazonUrl: amazonSearchUrl("El nombre de la rosa", "Umberto Eco"),
  },
  {
    title: "Trafalgar",
    author: "Benito Pérez Galdós",
    tag: "Historical Fiction",
    description:
      "A teenage sailor lives through the disastrous Battle of Trafalgar aboard a Spanish warship, in the first of Galdós's historical Episodios.",
    amazonUrl: amazonSearchUrl("Trafalgar", "Benito Pérez Galdós"),
  },
  {
    title: "La verdad sobre el caso Savolta",
    author: "Eduardo Mendoza",
    tag: "Historical Fiction",
    description:
      "A lawyer gets tangled in industrial sabotage and political violence in Barcelona just before World War I.",
    amazonUrl: amazonSearchUrl("La verdad sobre el caso Savolta", "Eduardo Mendoza"),
  },
  {
    title: "El asedio",
    author: "Arturo Pérez-Reverte",
    tag: "Historical Fiction",
    description:
      "During Napoleon's siege of Cádiz, a police detective hunts a killer whose murders always land where French artillery is about to strike.",
    amazonUrl: amazonSearchUrl("El asedio", "Arturo Pérez-Reverte"),
  },
  {
    title: "Sapiens: De animales a dioses",
    author: "Yuval Noah Harari",
    tag: "Nonfiction & Memoir",
    description:
      "A sweeping account of how Homo sapiens went from an unremarkable ape to the species running the planet.",
    amazonUrl: amazonSearchUrl("Sapiens: De animales a dioses", "Yuval Noah Harari"),
  },
  {
    title: "El diario de Ana Frank",
    author: "Ana Frank",
    tag: "Nonfiction & Memoir",
    description:
      "A teenage girl's diary of two years spent hiding from the Nazis in a sealed-off attic in Amsterdam.",
    amazonUrl: amazonSearchUrl("El diario de Ana Frank", "Ana Frank"),
  },
  {
    title: "El hombre en busca de sentido",
    author: "Viktor Frankl",
    tag: "Nonfiction & Memoir",
    description:
      "A psychiatrist who survived Nazi concentration camps lays out how he found meaning even there.",
    amazonUrl: amazonSearchUrl("El hombre en busca de sentido", "Viktor Frankl"),
  },
  {
    title: "Yo soy Malala",
    author: "Malala Yousafzai",
    tag: "Nonfiction & Memoir",
    description:
      "A Pakistani teenager shot by the Taliban for going to school tells how she got back up and kept speaking out.",
    amazonUrl: amazonSearchUrl("Yo soy Malala", "Malala Yousafzai"),
  },
  {
    title: "Cómo ganar amigos e influir sobre las personas",
    author: "Dale Carnegie",
    tag: "Nonfiction & Memoir",
    description:
      "A decades-old, still-popular guide to handling people, winning them over, and getting along better at work and at home.",
    amazonUrl: amazonSearchUrl("Cómo ganar amigos e influir sobre las personas", "Dale Carnegie"),
  },
  {
    title: "Steve Jobs",
    author: "Walter Isaacson",
    tag: "Nonfiction & Memoir",
    description:
      "The authorized biography of Apple's co-founder, built on dozens of interviews Jobs gave the author before he died.",
    amazonUrl: amazonSearchUrl("Steve Jobs", "Walter Isaacson"),
  },
  {
    title: "Vivir para contarla",
    author: "Gabriel García Márquez",
    tag: "Nonfiction & Memoir",
    description:
      "The first volume of García Márquez's own life story, from his childhood in Colombia to the start of his writing career.",
    amazonUrl: amazonSearchUrl("Vivir para contarla", "Gabriel García Márquez"),
  },
  {
    title: "El infinito en un junco",
    author: "Irene Vallejo",
    tag: "Nonfiction & Memoir",
    description:
      "An essay-memoir hybrid tracing the history of books and libraries back to the ancient world, and why we still need them.",
    amazonUrl: amazonSearchUrl("El infinito en un junco", "Irene Vallejo"),
  },
  {
    title: "El poder del ahora",
    author: "Eckhart Tolle",
    tag: "Nonfiction & Memoir",
    description:
      "A guide to spiritual practice built around a single idea: most suffering comes from living in the past or future instead of now.",
    amazonUrl: amazonSearchUrl("El poder del ahora", "Eckhart Tolle"),
  },
  {
    title: "Una breve historia de casi todo",
    author: "Bill Bryson",
    tag: "Nonfiction & Memoir",
    description:
      "A layperson's tour through physics, chemistry, biology, and geology, explaining what we know about the universe and how we found out.",
    amazonUrl: amazonSearchUrl("Una breve historia de casi todo", "Bill Bryson"),
  },
  {
    title: "Homo Deus: Breve historia del mañana",
    author: "Yuval Noah Harari",
    tag: "Nonfiction & Memoir",
    description:
      "A follow-up to Sapiens that looks ahead to what might replace disease, famine, and war as humanity's next challenges.",
    amazonUrl: amazonSearchUrl("Homo Deus: Breve historia del mañana", "Yuval Noah Harari"),
  },
  {
    title: "El poder de los hábitos",
    author: "Charles Duhigg",
    tag: "Nonfiction & Memoir",
    description:
      "A look at the science of habit formation, using stories from companies, athletes, and addicts to explain how habits change.",
    amazonUrl: amazonSearchUrl("El poder de los hábitos", "Charles Duhigg"),
  },
  {
    title: "Rimas y leyendas",
    author: "Gustavo Adolfo Bécquer",
    tag: "Poetry",
    description:
      "Short, aching Romantic-era poems paired with the eerie legends that made Bécquer one of Spain's most quoted poets.",
    amazonUrl: amazonSearchUrl("Rimas y leyendas", "Gustavo Adolfo Bécquer"),
  },
  {
    title: "Canto general",
    author: "Pablo Neruda",
    tag: "Poetry",
    description:
      "An epic poem cycle covering the history, land, and people of Latin America, from before the conquest to Neruda's own century.",
    amazonUrl: amazonSearchUrl("Canto general", "Pablo Neruda"),
  },
  {
    title: "Trilce",
    author: "César Vallejo",
    tag: "Poetry",
    description:
      "A jagged, experimental collection that broke from traditional Spanish verse and reshaped what Latin American poetry could sound like.",
    amazonUrl: amazonSearchUrl("Trilce", "César Vallejo"),
  },
  {
    title: "Marinero en tierra",
    author: "Rafael Alberti",
    tag: "Poetry",
    description:
      "A young poet's homesick poems for the sea, written while he was landlocked in Madrid.",
    amazonUrl: amazonSearchUrl("Marinero en tierra", "Rafael Alberti"),
  },
  {
    title: "Prosas profanas y otros poemas",
    author: "Rubén Darío",
    tag: "Poetry",
    description:
      "The book that made Darío the father of Spanish-language literary modernism, full of swans, princesses, and musical language.",
    amazonUrl: amazonSearchUrl("Prosas profanas y otros poemas", "Rubén Darío"),
  },
  {
    title: "Romancero gitano",
    author: "Federico García Lorca",
    tag: "Poetry",
    description:
      "Eighteen ballads steeped in Andalusian gypsy culture, blending folk tradition with Lorca's own strange, vivid imagery.",
    amazonUrl: amazonSearchUrl("Romancero gitano", "Federico García Lorca"),
  },
  {
    title: "Desolación",
    author: "Gabriela Mistral",
    tag: "Poetry",
    description:
      "The Chilean poet's first major collection, written out of grief, exploring motherhood, loss, and rural life.",
    amazonUrl: amazonSearchUrl("Desolación", "Gabriela Mistral"),
  },
  {
    title: "Versos sencillos",
    author: "José Martí",
    tag: "Poetry",
    description:
      "Simple, direct verses by the Cuban independence hero, some of which later became the lyrics to \"Guantanamera.\"",
    amazonUrl: amazonSearchUrl("Versos sencillos", "José Martí"),
  },
  {
    title: "Azul...",
    author: "Rubén Darío",
    tag: "Poetry",
    description:
      "The short story and poetry collection that first announced Spanish American modernism to the literary world.",
    amazonUrl: amazonSearchUrl("Azul...", "Rubén Darío"),
  },
  {
    title: "Piedra de sol",
    author: "Octavio Paz",
    tag: "Poetry",
    description:
      "A single long poem, 584 lines built on the circular Aztec calendar, moving through love, time, and identity.",
    amazonUrl: amazonSearchUrl("Piedra de sol", "Octavio Paz"),
  },
  {
    title: "Espantapájaros",
    author: "Oliverio Girondo",
    tag: "Poetry",
    description:
      "A playful, unconventional mix of prose poems, calligrams, and free verse from one of Argentina's great avant-garde poets.",
    amazonUrl: amazonSearchUrl("Espantapájaros", "Oliverio Girondo"),
  },
  {
    title: "El otro, el mismo",
    author: "Jorge Luis Borges",
    tag: "Poetry",
    description:
      "A collection gathering poems from across Borges's life, circling back often to mirrors, labyrinths, and time.",
    amazonUrl: amazonSearchUrl("El otro, el mismo", "Jorge Luis Borges"),
  },
  {
    title: "Charlie y la fábrica de chocolate",
    author: "Roald Dahl",
    tag: "Kids",
    description:
      "A poor boy wins a golden ticket to tour the strangest, most wonderful chocolate factory in the world.",
    amazonUrl: amazonSearchUrl("Charlie y la fábrica de chocolate", "Roald Dahl"),
  },
  {
    title: "Matilda",
    author: "Roald Dahl",
    tag: "Kids",
    description:
      "A brilliant little girl with neglectful parents and a cruel headmistress discovers she has a strange power of her own.",
    amazonUrl: amazonSearchUrl("Matilda", "Roald Dahl"),
  },
  {
    title: "Momo",
    author: "Michael Ende",
    tag: "Kids",
    description:
      "A strange little girl who's a gifted listener takes on the gray men who are quietly stealing everyone's time.",
    amazonUrl: amazonSearchUrl("Momo", "Michael Ende"),
  },
  {
    title: "Pippi Calzaslargas",
    author: "Astrid Lindgren",
    tag: "Kids",
    description:
      "The strongest girl in the world lives alone with a horse and a monkey and does exactly as she pleases.",
    amazonUrl: amazonSearchUrl("Pippi Calzaslargas", "Astrid Lindgren"),
  },
  {
    title: "El diario de Greg",
    author: "Jeff Kinney",
    tag: "Kids",
    description:
      "A middle-schooler's illustrated diary of surviving school, family, and his own bad decisions.",
    amazonUrl: amazonSearchUrl("El diario de Greg", "Jeff Kinney"),
  },
  {
    title: "Las brujas",
    author: "Roald Dahl",
    tag: "Kids",
    description:
      "A boy and his grandmother uncover a secret society of witches plotting to turn every child in England into a mouse.",
    amazonUrl: amazonSearchUrl("Las brujas", "Roald Dahl"),
  },
  {
    title: "James y el melocotón gigante",
    author: "Roald Dahl",
    tag: "Kids",
    description:
      "An orphaned boy escapes his awful aunts inside a giant peach, crewed by a group of oversized talking insects.",
    amazonUrl: amazonSearchUrl("James y el melocotón gigante", "Roald Dahl"),
  },
  {
    title: "Alicia en el país de las maravillas",
    author: "Lewis Carroll",
    tag: "Kids",
    description:
      "A girl follows a white rabbit down a hole into a nonsensical world of talking creatures and mad tea parties.",
    amazonUrl: amazonSearchUrl("Alicia en el país de las maravillas", "Lewis Carroll"),
  },
  {
    title: "Heidi",
    author: "Johanna Spyri",
    tag: "Kids",
    description:
      "A young orphan sent to live with her gruff grandfather in the Swiss Alps wins him over and falls in love with mountain life.",
    amazonUrl: amazonSearchUrl("Heidi", "Johanna Spyri"),
  },
  {
    title: "El pequeño Nicolás",
    author: "René Goscinny",
    tag: "Kids",
    description:
      "A mischievous French schoolboy narrates his everyday scrapes with friends, teachers, and his own bad ideas.",
    amazonUrl: amazonSearchUrl("El pequeño Nicolás", "René Goscinny"),
  },
  {
    title: "Ana de las Tejas Verdes",
    author: "Lucy Maud Montgomery",
    tag: "Kids",
    description:
      "A talkative orphan girl arrives by mistake at a farm that wanted a boy, and wins over the whole town anyway.",
    amazonUrl: amazonSearchUrl("Ana de las Tejas Verdes", "Lucy Maud Montgomery"),
  },
  {
    title: "Peter Pan y Wendy",
    author: "J.M. Barrie",
    tag: "Kids",
    description:
      "A boy who refuses to grow up brings three London children to Neverland for adventures with pirates and fairies.",
    amazonUrl: amazonSearchUrl("Peter Pan y Wendy", "J.M. Barrie"),
  },
  {
    title: "Divergente",
    author: "Veronica Roth",
    tag: "Young Adult",
    description:
      "In a future Chicago sorted into rigid personality factions, a teenage girl discovers she doesn't fit into just one.",
    amazonUrl: amazonSearchUrl("Divergente", "Veronica Roth"),
  },
  {
    title: "Los juegos del hambre",
    author: "Suzanne Collins",
    tag: "Young Adult",
    description:
      "A girl volunteers to fight to the death in a televised arena to save her little sister from being chosen instead.",
    amazonUrl: amazonSearchUrl("Los juegos del hambre", "Suzanne Collins"),
  },
  {
    title: "Crepúsculo",
    author: "Stephenie Meyer",
    tag: "Young Adult",
    description:
      "A teenage girl moves to a rainy small town and falls for a classmate who turns out to be a vampire.",
    amazonUrl: amazonSearchUrl("Crepúsculo", "Stephenie Meyer"),
  },
  {
    title: "Percy Jackson y el ladrón del rayo",
    author: "Rick Riordan",
    tag: "Young Adult",
    description:
      "A boy with dyslexia and ADHD learns he's the son of a Greek god and gets blamed for a theft he didn't commit.",
    amazonUrl: amazonSearchUrl("Percy Jackson y el ladrón del rayo", "Rick Riordan"),
  },
  {
    title: "Ciudad de hueso",
    author: "Cassandra Clare",
    tag: "Young Adult",
    description:
      "A New York teenager discovers she can see demon-hunters invisible to normal people, and that she's connected to their world.",
    amazonUrl: amazonSearchUrl("Ciudad de hueso", "Cassandra Clare"),
  },
  {
    title: "El curioso incidente del perro a medianoche",
    author: "Mark Haddon",
    tag: "Young Adult",
    description:
      "A teenage boy who thinks in patterns investigates who killed the neighbor's dog, and uncovers a family secret instead.",
    amazonUrl: amazonSearchUrl("El curioso incidente del perro a medianoche", "Mark Haddon"),
  },
  {
    title: "Seis de cuervos",
    author: "Leigh Bardugo",
    tag: "Young Adult",
    description:
      "A criminal prodigy assembles a crew of six outcasts to pull off a heist no one has ever survived.",
    amazonUrl: amazonSearchUrl("Seis de cuervos", "Leigh Bardugo"),
  },
  {
    title: "Ready Player One",
    author: "Ernest Cline",
    tag: "Young Adult",
    description:
      "A teenager in a bleak future spends his time in a vast virtual reality, hunting an Easter egg that will make him rich.",
    amazonUrl: amazonSearchUrl("Ready Player One", "Ernest Cline"),
  },
  {
    title: "La Selección",
    author: "Kiera Cass",
    tag: "Young Adult",
    description:
      "Thirty-five girls compete for a prince's hand in a televised contest that's really a way out of a bleak future.",
    amazonUrl: amazonSearchUrl("La Selección", "Kiera Cass"),
  },
  {
    title: "Ikigai: los secretos de Japón para una vida larga y feliz",
    author: "Héctor García y Francesc Miralles",
    tag: "Cookbooks & Lifestyle",
    description:
      "A look at the Japanese idea of \"reason for being,\" built around interviews with the world's longest-lived villagers.",
    amazonUrl: amazonSearchUrl("Ikigai: los secretos de Japón para una vida larga y feliz", "Héctor García y Francesc Miralles"),
  },
  {
    title: "La magia del orden",
    author: "Marie Kondo",
    tag: "Cookbooks & Lifestyle",
    description:
      "A room-by-room method for deciding what to keep and what to let go of, organized around what \"sparks joy.\"",
    amazonUrl: amazonSearchUrl("La magia del orden", "Marie Kondo"),
  },
  {
    title: "Come, reza, ama",
    author: "Elizabeth Gilbert",
    tag: "Cookbooks & Lifestyle",
    description:
      "A woman rebuilding her life after divorce spends a year eating in Italy, praying in India, and finding balance in Bali.",
    amazonUrl: amazonSearchUrl("Come, reza, ama", "Elizabeth Gilbert"),
  },
  {
    title: "El monje que vendió su Ferrari",
    author: "Robin Sharma",
    tag: "Cookbooks & Lifestyle",
    description:
      "A burned-out, wealthy lawyer gives up everything to study with monks in the Himalayas, and comes back with lessons for living better.",
    amazonUrl: amazonSearchUrl("El monje que vendió su Ferrari", "Robin Sharma"),
  },
  {
    title: "Simple",
    author: "Yotam Ottolenghi",
    tag: "Cookbooks & Lifestyle",
    description:
      "A cookbook built around fewer ingredients and less time, without giving up the bold, vegetable-forward flavors Ottolenghi is known for.",
    amazonUrl: amazonSearchUrl("Simple", "Yotam Ottolenghi"),
  },
  {
    title: "La cocina fácil de Karlos Arguiñano",
    author: "Karlos Arguiñano",
    tag: "Cookbooks & Lifestyle",
    description:
      "Straightforward, everyday recipes from Spain's most familiar TV chef.",
    amazonUrl: amazonSearchUrl("La cocina fácil de Karlos Arguiñano", "Karlos Arguiñano"),
  },
  {
    title: "Jerusalén",
    author: "Yotam Ottolenghi y Sami Tamimi",
    tag: "Cookbooks & Lifestyle",
    description:
      "A cookbook exploring the shared food culture of Jerusalem, from two authors who grew up on opposite sides of the city.",
    amazonUrl: amazonSearchUrl("Jerusalén", "Yotam Ottolenghi y Sami Tamimi"),
  },
  {
    title: "Los cuatro acuerdos",
    author: "Miguel Ruiz",
    tag: "Cookbooks & Lifestyle",
    description:
      "A short book of personal-code rules, drawn from Toltec wisdom, for living with more honesty and less self-inflicted suffering.",
    amazonUrl: amazonSearchUrl("Los cuatro acuerdos", "Miguel Ruiz"),
  },
  {
    title: "Padre rico, padre pobre",
    author: "Robert Kiyosaki",
    tag: "Cookbooks & Lifestyle",
    description:
      "A personal-finance classic contrasting two father figures' very different ideas about money, work, and building wealth.",
    amazonUrl: amazonSearchUrl("Padre rico, padre pobre", "Robert Kiyosaki"),
  },
  {
    title: "Hábitos atómicos",
    author: "James Clear",
    tag: "Cookbooks & Lifestyle",
    description:
      "A practical guide to building good habits and breaking bad ones through small, compounding changes.",
    amazonUrl: amazonSearchUrl("Hábitos atómicos", "James Clear"),
  },
  {
    title: "Los secretos de la mente millonaria",
    author: "T. Harv Eker",
    tag: "Cookbooks & Lifestyle",
    description:
      "A book arguing that people's beliefs about money, formed early in life, quietly shape whether they ever get rich.",
    amazonUrl: amazonSearchUrl("Los secretos de la mente millonaria", "T. Harv Eker"),
  },
  {
    title: "Persépolis",
    author: "Marjane Satrapi",
    tag: "Graphic Novels & Comics",
    description:
      "A black-and-white graphic memoir of growing up in Iran during the Islamic Revolution and the war with Iraq.",
    amazonUrl: amazonSearchUrl("Persépolis", "Marjane Satrapi"),
  },
  {
    title: "Maus: Relato de un superviviente",
    author: "Art Spiegelman",
    tag: "Graphic Novels & Comics",
    description:
      "A cartoonist tells his father's story of surviving the Holocaust, drawing Jews as mice and Nazis as cats.",
    amazonUrl: amazonSearchUrl("Maus: Relato de un superviviente", "Art Spiegelman"),
  },
  {
    title: "Mafalda",
    author: "Quino",
    tag: "Graphic Novels & Comics",
    description:
      "A precocious six-year-old Argentine girl worries about war, politics, and soup, in one of Latin America's most beloved comic strips.",
    amazonUrl: amazonSearchUrl("Mafalda", "Quino"),
  },
  {
    title: "Mortadelo y Filemón",
    author: "Francisco Ibáñez",
    tag: "Graphic Novels & Comics",
    description:
      "Two bumbling secret agents botch increasingly chaotic missions, in one of Spain's longest-running comic series.",
    amazonUrl: amazonSearchUrl("Mortadelo y Filemón", "Francisco Ibáñez"),
  },
  {
    title: "El Eternauta",
    author: "Héctor Germán Oesterheld y Francisco Solano López",
    tag: "Graphic Novels & Comics",
    description:
      "A deadly glowing snow falls on Buenos Aires, and a small group of survivors fights to figure out what's happening and who's behind it.",
    amazonUrl: amazonSearchUrl("El Eternauta", "Héctor Germán Oesterheld y Francisco Solano López"),
  },
  {
    title: "Astérix el Galo",
    author: "René Goscinny y Albert Uderzo",
    tag: "Graphic Novels & Comics",
    description:
      "A small Gaulish village holds out against the entire Roman Empire, thanks to a magic potion and one clever, mustached warrior.",
    amazonUrl: amazonSearchUrl("Astérix el Galo", "René Goscinny y Albert Uderzo"),
  },
  {
    title: "El arte de volar",
    author: "Antonio Altarriba y Kim",
    tag: "Graphic Novels & Comics",
    description:
      "A son pieces together his father's life, from the Spanish Civil War through exile and old age, after his father's suicide.",
    amazonUrl: amazonSearchUrl("El arte de volar", "Antonio Altarriba y Kim"),
  },
  {
    title: "El secreto del Unicornio",
    author: "Hergé",
    tag: "Graphic Novels & Comics",
    description:
      "Reporter Tintín and his dog Snowy chase a set of clues hidden in three model ships, leading toward a pirate's sunken treasure.",
    amazonUrl: amazonSearchUrl("El secreto del Unicornio", "Hergé"),
  },
  {
    title: "V de Vendetta",
    author: "Alan Moore y David Lloyd",
    tag: "Graphic Novels & Comics",
    description:
      "A masked anarchist wages a personal war against a fascist government that's taken over Britain.",
    amazonUrl: amazonSearchUrl("V de Vendetta", "Alan Moore y David Lloyd"),
  },
  {
    title: "Zipi y Zape",
    author: "José Escobar",
    tag: "Graphic Novels & Comics",
    description:
      "Twin brothers get into constant trouble at home and at their strict boarding school, in a classic of Spanish comics.",
    amazonUrl: amazonSearchUrl("Zipi y Zape", "José Escobar"),
  },
  {
    title: "Fortunata y Jacinta",
    author: "Benito Pérez Galdós",
    tag: "Classic Literature",
    description:
      "Two very different women, one from the streets and one from the bourgeoisie, are bound together by their love for the same unreliable man.",
    amazonUrl: amazonSearchUrl("Fortunata y Jacinta", "Benito Pérez Galdós"),
  },
  {
    title: "Niebla",
    author: "Miguel de Unamuno",
    tag: "Classic Literature",
    description:
      "A directionless young man falls for a woman who doesn't love him back, in a strange novel where the character eventually confronts his own author.",
    amazonUrl: amazonSearchUrl("Niebla", "Miguel de Unamuno"),
  },
  {
    title: "Lazarillo de Tormes",
    author: "Anónimo",
    tag: "Classic Literature",
    description:
      "A poor boy survives by serving a string of terrible masters, in the short novel that basically invented the picaresque genre.",
    amazonUrl: amazonSearchUrl("Lazarillo de Tormes", "Anónimo"),
  },
  {
    title: "Doña Bárbara",
    author: "Rómulo Gallegos",
    tag: "Classic Literature",
    description:
      "A ruthless landowner on the Venezuelan plains meets her match in a lawyer trying to bring order and civilization to her territory.",
    amazonUrl: amazonSearchUrl("Doña Bárbara", "Rómulo Gallegos"),
  },
  {
    title: "María",
    author: "Jorge Isaacs",
    tag: "Classic Literature",
    description:
      "A young man falls in love with his adopted sister on a Colombian plantation, in one of the great Romantic novels of Latin America.",
    amazonUrl: amazonSearchUrl("María", "Jorge Isaacs"),
  },
  {
    title: "El árbol de la ciencia",
    author: "Pío Baroja",
    tag: "Classic Literature",
    description:
      "A disillusioned medical student drifts through turn-of-the-century Spain, questioning science, love, and what any of it is for.",
    amazonUrl: amazonSearchUrl("El árbol de la ciencia", "Pío Baroja"),
  },
  {
    title: "La barraca",
    author: "Vicente Blasco Ibáñez",
    tag: "Classic Literature",
    description:
      "A farming family that moves onto cursed, empty land in rural Valencia faces the fury of neighbors who won't forgive them for it.",
    amazonUrl: amazonSearchUrl("La barraca", "Vicente Blasco Ibáñez"),
  },
  {
    title: "Marianela",
    author: "Benito Pérez Galdós",
    tag: "Classic Literature",
    description:
      "A poor, plain village girl guides a blind young man through the countryside, and dreads what will happen once he can see.",
    amazonUrl: amazonSearchUrl("Marianela", "Benito Pérez Galdós"),
  },
  {
    title: "El llano en llamas",
    author: "Juan Rulfo",
    tag: "Short Stories & Essays",
    description:
      "Short, spare stories of rural Mexican poverty and violence, from the writer who inspired a generation of Latin American novelists.",
    amazonUrl: amazonSearchUrl("El llano en llamas", "Juan Rulfo"),
  },
  {
    title: "Cuentos de amor de locura y de muerte",
    author: "Horacio Quiroga",
    tag: "Short Stories & Essays",
    description:
      "Dark, tightly told stories set in the jungles of Argentina and Uruguay, often ending in accident or madness.",
    amazonUrl: amazonSearchUrl("Cuentos de amor de locura y de muerte", "Horacio Quiroga"),
  },
  {
    title: "La rebelión de las masas",
    author: "José Ortega y Gasset",
    tag: "Short Stories & Essays",
    description:
      "An influential essay arguing that mass society was producing a new, dangerous kind of person: entitled, uncultured, and everywhere.",
    amazonUrl: amazonSearchUrl("La rebelión de las masas", "José Ortega y Gasset"),
  },
  {
    title: "Ariel",
    author: "José Enrique Rodó",
    tag: "Short Stories & Essays",
    description:
      "A philosophy teacher's farewell speech to his students becomes an essay about idealism, culture, and Latin America's place in the world.",
    amazonUrl: amazonSearchUrl("Ariel", "José Enrique Rodó"),
  },
  {
    title: "Doce cuentos peregrinos",
    author: "Gabriel García Márquez",
    tag: "Short Stories & Essays",
    description:
      "Twelve short stories about Latin Americans adrift in Europe, written and polished by García Márquez over almost two decades.",
    amazonUrl: amazonSearchUrl("Doce cuentos peregrinos", "Gabriel García Márquez"),
  },
  {
    title: "El matadero",
    author: "Esteban Echeverría",
    tag: "Short Stories & Essays",
    description:
      "A brutal short story set in a Buenos Aires slaughterhouse, read as an allegory against 19th-century dictatorship -- often called Argentina's first short story.",
    amazonUrl: amazonSearchUrl("El matadero", "Esteban Echeverría"),
  },
  {
    title: "La palabra del mudo",
    author: "Julio Ramón Ribeyro",
    tag: "Short Stories & Essays",
    description:
      "A collected volume of the Peruvian writer's short fiction about ordinary people getting by in Lima's poorer neighborhoods.",
    amazonUrl: amazonSearchUrl("La palabra del mudo", "Julio Ramón Ribeyro"),
  },
  {
    title: "Meditaciones del Quijote",
    author: "José Ortega y Gasset",
    tag: "Short Stories & Essays",
    description:
      "The philosopher's first book, using Don Quijote as a jumping-off point for essays on Spanish culture and identity.",
    amazonUrl: amazonSearchUrl("Meditaciones del Quijote", "José Ortega y Gasset"),
  },
  {
    title: "Confabulario",
    author: "Juan José Arreola",
    tag: "Short Stories & Essays",
    description:
      "Short, sharp, often funny fables and fictions from one of Mexico's most inventive short-story writers.",
    amazonUrl: amazonSearchUrl("Confabulario", "Juan José Arreola"),
  },
  {
    title: "El arco y la lira",
    author: "Octavio Paz",
    tag: "Short Stories & Essays",
    description:
      "An essay on what poetry actually is and does, and why human beings keep making it.",
    amazonUrl: amazonSearchUrl("El arco y la lira", "Octavio Paz"),
  },
  {
    title: "Facundo (o Civilización y Barbarie)",
    author: "Domingo Faustino Sarmiento",
    tag: "Short Stories & Essays",
    description:
      "Part biography, part political essay, using a brutal Argentine warlord's life to argue for civilization over rural barbarism.",
    amazonUrl: amazonSearchUrl("Facundo (o Civilización y Barbarie)", "Domingo Faustino Sarmiento"),
  },
  {
    title: "Historias de cronopios y de famas",
    author: "Julio Cortázar",
    tag: "Short Stories & Essays",
    description:
      "Playful, surreal short prose pieces sorting the world into cronopios, famas, and esperanzas -- three very different kinds of people.",
    amazonUrl: amazonSearchUrl("Historias de cronopios y de famas", "Julio Cortázar"),
  },
  {
    title: "Persuasión",
    author: "Jane Austen",
    tag: "Romance",
    description:
      "A quieter, more mature Austen novel following Anne Elliot and a second chance at love with the naval captain she once refused, told with gentle irony.",
    amazonUrl: amazonSearchUrl("Persuasión", "Jane Austen"),
  },
  {
    title: "Emma",
    author: "Jane Austen",
    tag: "Romance",
    description:
      "A comedy of manners about a well-meaning matchmaker who misreads everyone's hearts, including her own, before arriving at genuine self-knowledge and love.",
    amazonUrl: amazonSearchUrl("Emma", "Jane Austen"),
  },
  {
    title: "Jane Eyre",
    author: "Charlotte Brontë",
    tag: "Romance",
    description:
      "A governess of strong moral conviction navigates hardship, an unconventional employer, and her own principles on the path to a hard-won, chaste love.",
    amazonUrl: amazonSearchUrl("Jane Eyre", "Charlotte Brontë"),
  },
  {
    title: "Mujercitas",
    author: "Louisa May Alcott",
    tag: "Romance",
    description:
      "The beloved story of the four March sisters growing up together, with gentle romantic subplots woven into a warm family portrait.",
    amazonUrl: amazonSearchUrl("Mujercitas", "Louisa May Alcott"),
  },
  {
    title: "Amalia",
    author: "José Mármol",
    tag: "Romance",
    description:
      "A romantic historical novel set during Argentina's Rosas dictatorship, pairing a chaste, doomed love story with political intrigue and danger.",
    amazonUrl: amazonSearchUrl("Amalia", "José Mármol"),
  },
  {
    title: "Frederica",
    author: "Georgette Heyer",
    tag: "Romance",
    description:
      "A witty Regency romance in which a practical young woman seeking to launch her siblings in society unexpectedly wins the heart of a jaded aristocrat.",
    amazonUrl: amazonSearchUrl("Frederica", "Georgette Heyer"),
  },
  {
    title: "El amor llega suavemente",
    author: "Janette Oke",
    tag: "Romance",
    description:
      "The first book in a well-known clean, faith-inflected pioneer romance series, following a young widow who agrees to marry a stranger for practical reasons and slowly falls in love.",
    amazonUrl: amazonSearchUrl("El amor llega suavemente", "Janette Oke"),
  },
];
