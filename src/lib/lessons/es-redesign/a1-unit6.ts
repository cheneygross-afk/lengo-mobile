// Synced from cheneygross-afk/lengo:src/lib/lessons/es-redesign/a1-unit6.ts by scripts/sync-content.mjs -- edit it there, not here.
// New course, A1 Unit 6: content fixes from Claude's audit in Ricardo's
// format (Claude Feedback/Spanish (new course)/A1 Beginner/Unit 06). They add
// to the Beginner patches in a1.ts (merged section by section in index.ts).
// Section numbers are the lesson's own; question numbers are its practice
// questions (lesson.exercises). Only content changes here: what is taught,
// asked and accepted. The answer checker and the rubric are untouched.
//
// The unit teaches possessives and place words, este / ese / aquel and
// tener. Ir and stem-changing verbs come in Unit 7, yo-go verbs (salgo) in
// A2, the progressive in A2 and the long possessives (mío, tuyo) in B1, so no
// scored question here asks for them; the tener + ir drills and the places
// word web moved to Unit 7, after ir. Latin American words come first (carro,
// suéter, lentes, celular), with Spain's words accepted.
import type { Exercise, LessonTable } from "../types";
import type { LessonPatch } from "./patch";

const speak = (prompt: string, text: string, altAnswers: string[], explanation: string): Exercise => ({
  type: "speak",
  prompt,
  text,
  ...(altAnswers.length ? { altAnswers } : {}),
  explanation,
});
const tr = (prompt: string, source: string, answer: string, altAnswers: string[], explanation: string): Exercise => ({
  type: "translate",
  prompt,
  direction: "en-es",
  source,
  answer,
  ...(altAnswers.length ? { altAnswers } : {}),
  explanation,
});
const fill = (prompt: string, sentence: string, answer: string, en: string | undefined, explanation: string, altAnswers: string[] = []): Exercise => ({
  type: "fill-blank",
  prompt,
  sentence,
  answer,
  ...(en ? { en } : {}),
  ...(altAnswers.length ? { altAnswers } : {}),
  explanation,
});
const mc = (question: string, options: string[], correctIndex: number, explanation: string, optionNotes: string[]): Exercise => ({
  type: "multiple-choice",
  question,
  options,
  correctIndex,
  explanation,
  optionNotes,
});
const ms = (question: string, options: string[], correctIndexes: number[], explanation: string): Exercise => ({
  type: "multi-select",
  question,
  options,
  correctIndexes,
  explanation,
});
const order = (sentence: string, translation: string, explanation: string): Exercise => ({
  type: "word-order",
  prompt: "Put the words in order.",
  words: sentence.split(" "),
  translation,
  explanation,
});
const write = (prompt: string, minWords: number, maxWords: number, rubric: string[], modelAnswer: string, explanation: string): Exercise => ({
  type: "write",
  prompt,
  minWords,
  maxWords,
  rubric,
  modelAnswer,
  explanation,
});
const SAY = "Say it in Spanish:";
const FIX = "Correct the sentence.";
const BOLD = "How do you say the bold words in Spanish?";
// Car is carro in Latin America: keys say carro, and coche and auto stay accepted.
const CAR_ALTS = (answer: string): string[] => [answer.replace(/carro/g, "coche"), answer.replace(/carro/g, "auto")];
// "--" and " — " inside feedback read as a pause: a colon says it plainly.
const DASHES: [string, string][] = [[" -- ", ": "], [" — ", ": "]];

const ORDINALS: LessonTable = {
  caption: "Counting or putting in order",
  head: ["Number", "Counts (how many?)", "Puts in order (which one?)"],
  rows: [
    ["1", "uno, una", "primero, primera (primer día)"],
    ["2", "dos", "segundo, segunda"],
    ["3", "tres", "tercero, tercera (tercer piso)"],
    ["4", "cuatro", "cuarto, cuarta"],
    ["5", "cinco", "quinto, quinta"],
  ],
  note: "Order words agree with the noun. Primero and tercero drop the -o before a masculine singular noun.",
};

export const A1_UNIT6_PATCHES: Record<string, LessonPatch> = {
  "possessives-prepositions": {
    sections: {
      0: {
        body: ["A quick look back at Unit 3. Today's sentences say whose things are and where they are."],
        check: [
          mc("\"El libro ___ en la mesa.\"", ["está", "es", "son", "estás"], 0, "Where a thing is takes estar: el libro está en la mesa.", ["", "Ser doesn't give location.", "Son is plural; there is one book.", "Estás is the tú form."]),
          mc("\"Mi hermana ___ profesora.\"", ["es", "está", "son", "es una"], 0, "A job takes ser, with no article: es profesora.", ["", "A job takes ser, not estar.", "Son is plural; there is one sister.", "A job after ser takes no article."]),
          mc("\"Mi hermana ___ cansada hoy.\"", ["está", "es", "son", "estoy"], 0, "How someone feels today takes estar: está cansada.", ["", "Ser is for what someone is like, not how they feel today.", "Son is plural; there is one sister.", "Estoy is the yo form."]),
        ],
      },
      2: {
        body: ["A small toolkit of prepositions covers most beginner sentences. Two of them merge with el: de + el = del, a + el = al (el libro del profesor, llego al parque). They never merge with la, los, las or the pronoun él."],
        check: [
          { type: "translate", direction: "en-es", prompt: "Translate to Spanish.", source: "without money", answer: "sin dinero", explanation: "Sin means without and goes straight before the noun: sin dinero." },
          mc("Llego ___ parque a las cinco. (I arrive at the park at five.)", ["al", "a el", "del", "en el"], 0, "Arriving at a place takes a, and a + el always merges into al: llego al parque.", ["", "A + el is always written al.", "Del means of or from the.", "Llegar takes a before the place."]),
        ],
      },
    },
    exercises: {
      replace: {
        2: mc("El regalo es ___ mi madre. (The gift is for my mother.)", ["con", "para", "sin", "de"], 1, "Para means for, and marks who gets something: para mi madre.", ["Con means with.", "", "Sin means without.", "De means of or from: de mi madre would make it hers already."]),
        16: tr("Translate to Spanish.", "The book is for your (informal) mother.", "El libro es para tu madre.", ["El libro es para tu mamá."], "Para marks who gets something, and tu is for one mother."),
      },
    },
  },
  "review-possessives-prepositions-questions-1": {
    goal: "ask who, what and where, and say whose things are and where they are.",
    summary: "Mixed review, no new material: question words, possessives and place words (part 1 of 2).",
    reword: DASHES,
    exercises: {
      replace: {
        0: fill(BOLD, "¿___ años tienes?", "Cuántos", "How old are you? (literally: [how many] years do you have?)", "Años is masculine plural, so cuántos. ¿Cuántos años tienes? (how many years do you have?) is the usual way to ask someone's age."),
        6: fill(BOLD, "___ casa es muy bonita.", "Su", "[Their] house is very pretty.", "Before one thing, their is su: su casa. Su also means his, her or your (usted); the context tells you which."),
        19: tr(FIX, "El perro está detrás de el carro.", "El perro está detrás del carro.", ["El perro está detrás del coche.", "El perro está detrás del auto."], "De + el always merges into del: detrás del carro. De la, de los and de las never merge."),
        20: tr("Change café to cafés.", "El café es para mi madre.", "Los cafés son para mi madre.", ["Los cafés son para mi mamá."], "Plural moves the article and the verb too: los cafés son. Mi stays, because there is still one mother."),
      },
    },
  },
  "review-possessives-prepositions-questions-2": {
    goal: "ask how, why and how many, and say whose things are and where they are.",
    summary: "Mixed review, no new material: question words, possessives and place words (part 2 of 2).",
    reword: DASHES,
    exercises: {
      replace: {
        6: order("Mis primos son simpáticos pero están cansados hoy.", "My cousins are nice but they're tired today.", "Simpáticos is what they're like, so ser; cansados is how they feel today, so estar. Both verbs fit in one sentence."),
        21: order("El regalo para mi madre está en mi carro", "The gift for my mother is in my car", "Para marks who gets the gift, and estar says where it is."),
        23: speak(`${SAY} "I drink my coffee without sugar"`, "Tomo el café sin azúcar.", ["Tomo mi café sin azúcar.", "Bebo el café sin azúcar."], "Sin means without and goes straight before the noun: sin azúcar."),
      },
    },
  },
  "a1r-error-hunt-questions-prepositions": {
    goal: "spot and fix missing accents in question words and missing al and del.",
    summary: "Missing accents, missing contractions, the wrong question word: find them and fix them.",
    sections: {
      1: {
        body: [
          "A + el → al, and de + el → del. They're not optional: the two words run together when you speak, and Spanish writes what it says.",
          "They only happen with el. A la, a los, a las, de la, de los, de las stay apart, and so does the pronoun él (it has its own stress and means he / him).",
        ],
        examples: [
          { es: "Llego al mercado.", en: "I arrive at the market. (a + el)" },
          { es: "Es el libro del profesor.", en: "It's the teacher's book. (de + el)" },
          { es: "Es el libro de él.", en: "It's his book. (no contraction with the pronoun él)" },
          { es: "Caminamos a la playa.", en: "We walk to the beach. (a la: no contraction)" },
        ],
      },
    },
    reword: DASHES,
    exercises: {
      replace: {
        1: mc("Which sentence is correct?", ["Camino a la tienda y al banco.", "Camino al tienda y al banco.", "Camino a la tienda y a el banco.", "Camino al la tienda y al banco."], 0, "La tienda has no contraction (a la), but a + el banco becomes al banco.", ["", "Al only goes before a masculine noun; tienda is feminine.", "A + el must merge into al.", "Al la doubles the article."]),
        4: ms("Which sentences have an error?", ["El gato está encima del carro.", "Es la oficina de el director.", "La mochila de él está aquí.", "Caminamos a los museos."], [1], "De + el director → del director. De él (the pronoun) doesn't merge, and a los never merges."),
        5: tr("Translate to Spanish.", "When is the class? I think that it's at nine.", "¿Cuándo es la clase? Creo que es a las nueve.", ["¿Cuándo es la clase? Creo que es a las 9."], "¿Cuándo? asks the question, with its accent. Que after creo just links the two parts, so it has no accent."),
        7: tr("Change the place to la playa.", "Llego al parque.", "Llego a la playa.", [], "Playa is feminine, and a la never merges: al becomes a la."),
        8: tr("Change the owner to el profesor.", "Es el carro de Ana.", "Es el carro del profesor.", ["Es el coche del profesor.", "Es el auto del profesor."], "De + el profesor merges into del profesor."),
        11: tr(FIX, "Llego a el banco.", "Llego al banco.", [], "A + el always merges into al."),
        12: tr(FIX, "Es el carro de el profesor.", "Es el carro del profesor.", ["Es el coche del profesor.", "Es el auto del profesor."], "De + el always merges into del."),
        16: fill(BOLD, "El carro de ___ es rojo.", "él", "[His] car is red.", "De + the pronoun él doesn't merge, and él keeps its accent: el carro de él."),
        17: speak(`${SAY} "I walk to the park and to the beach"`, "Camino al parque y a la playa.", ["Yo camino al parque y a la playa."], "Parque is masculine, so a + el = al; playa is feminine, so a la stays apart."),
        19: mc("Which sentence is correct?", ["Regreso de el cine a las diez.", "Regreso del cine a las diez.", "Regreso del la escuela a las diez.", "Regreso de cine a las diez."], 1, "De + el contracts to del: regreso del cine.", ["De + el must merge into del.", "", "Del la doubles the article.", "The cinema needs its article: del cine."]),
        22: order("¿Cuándo llegas al aeropuerto?", "When do you arrive at the airport?", "The question word comes first with its accent, and a + el merges into al."),
        23: speak(`${SAY} "Where do you live? I live where my grandmother lives"`, "¿Dónde vives? Vivo donde vive mi abuela.", ["¿Dónde vives tú? Vivo donde vive mi abuela."], "¿Dónde? asks the question, with an accent. In the answer donde just links two parts (where my grandmother lives), so it has no accent."),
        24: speak(`${SAY} "I arrive at the market"`, "Llego al mercado.", ["Yo llego al mercado."], "Mercado is masculine, so a + el merges into al."),
        25: speak(`${SAY} "It's the teacher's book"`, "Es el libro del profesor.", ["Es el libro de la profesora."], "Spanish has no 's: the thing, then de + the owner, and de + el merges into del."),
      },
    },
  },
  "vocabulary-practice-3": {
    sections: {
      1: { body: ["Most location words come in opposite pairs, and they end in de: delante de / detrás de, dentro de / fuera de, cerca de / lejos de. That de links to the noun, so de + el becomes del: detrás del carro. Entre and sobre are single words and take no de."] },
    },
    exercises: {
      replace: {
        21: tr("Translate to Spanish.", "My cousin lives on our street.", "Mi primo vive en nuestra calle.", ["Mi prima vive en nuestra calle."], "Calle is feminine, so our is nuestra."),
      },
    },
  },
  "a1r-transform-possessives": {
    summary: "Change the owner or the number of things owned, and keep every possessive correct.",
    reword: [["primos is plural → tus. More than one primo → tus.", "Several cousins, so tu becomes tus."]],
    exercises: {
      replace: {
        23: speak("Say it out loud: change «mi escuela» to \"our school\".", "nuestra escuela", [], "Escuela is feminine, so nuestra. Unlike mi, nuestro changes for masculine and feminine as well as for plural."),
      },
    },
  },
  "a1r-contrast-apostrophe-s": {
    sections: {
      0: {
        body: [
          "English puts the owner first with 's (Ana's car). Spanish has no 's at all, so it puts the thing first and the owner after de: el carro de Ana, literally \"the car of Ana\".",
          "Because de comes right before the owner, de + el merges into del when the owner has el: el libro del profesor.",
        ],
        examples: [
          { es: "el carro de Ana", en: "Ana's car" },
          { es: "los perros de mis vecinos", en: "my neighbors' dogs" },
          { es: "la madre de mi amigo", en: "my friend's mother" },
        ],
      },
      1: {
        body: ["Su carro could be his, her, their or your car. When it's unclear, use de + person instead: el carro de él, el carro de ella, el carro de ustedes."],
        examples: [{ es: "Ana y Luis son mis vecinos. El carro de ella es rojo.", en: "Ana and Luis are my neighbors. Her car is red." }],
        check: [fill(BOLD, "El carro de ___ es azul.", "él", "[His] car is blue.", "De él makes it clear it's his (su could be his, her or their). De + the pronoun él doesn't merge, and él keeps its accent.")],
      },
    },
    reword: DASHES,
    exercises: {
      replace: {
        8: tr("Translate to Spanish.", "my father's car", "el carro de mi padre", ["el carro de mi papá", ...CAR_ALTS("el carro de mi padre"), ...CAR_ALTS("el carro de mi papá")], "Thing + de + owner: el carro de mi padre."),
        9: tr(FIX, "Es el carro de el médico.", "Es el carro del médico.", CAR_ALTS("Es el carro del médico."), "Thing + de + owner, and de + el always merges into del."),
        17: tr("Rewrite it so it clearly means \"their\" (several men).", "Su carro es negro.", "El carro de ellos es negro.", CAR_ALTS("El carro de ellos es negro."), "Su could mean his, her, your or their; de ellos (thing + de + owner) makes it clearly theirs."),
        18: tr("Change the owner to el profesor.", "El carro de la profesora es rojo.", "El carro del profesor es rojo.", CAR_ALTS("El carro del profesor es rojo."), "With a masculine owner, de + el profesor merges into del profesor."),
        14: fill(BOLD, "Ana y Luis son mis vecinos. El perro de ___ es grande.", "ella", "Ana and Luis are my neighbors. [Her] dog is big.", "De ella makes it clear the dog is Ana's; su perro could be his, her or their dog."),
        21: speak(`${SAY} "Ana and Luis are my neighbors. Her car is red"`, "Ana y Luis son mis vecinos. El carro de ella es rojo.", ["Ana y Luis son mis vecinos. El coche de ella es rojo."], "Su carro could be his or hers, so el carro de ella makes it clearly Ana's."),
        22: speak(`${SAY} "His car is blue"`, "El carro de él es azul.", ["El coche de él es azul.", "Su carro es azul."], "De él makes it clear it's his. De + the pronoun él doesn't merge, and él keeps its accent."),
      },
    },
  },
  "a1r-contrast-cardinal-ordinal": {
    goal: "tell counting numbers from order numbers: tres or tercero, uno or primero.",
    summary: "Counting numbers and order numbers side by side, plus the short forms primer and tercer.",
    sections: { 0: { addTables: [ORDINALS] } },
    exercises: {
      replace: {
        24: speak(`${SAY} "I have three siblings"`, "Tengo tres hermanos.", ["Yo tengo tres hermanos."], "How many uses the counting number: tres. Tercero would say which one in order."),
      },
    },
  },
  "demonstratives-1": {
    summary: "Point things out with este, ese and aquel, and learn the neuter forms for things you can't name.",
    sections: {
      0: {
        examples: [
          { es: "Este libro es nuevo.", en: "This book is new. (Libro is masculine, so este.)" },
          { es: "Esta silla es cómoda.", en: "This chair is comfortable. (Silla is feminine, so esta.)" },
          { es: "Estos zapatos son nuevos.", en: "These shoes are new. (The plural of este is estos.)" },
          { es: "Estas flores son para mi madre.", en: "These flowers are for my mother. (Flores is feminine plural, so estas.)" },
        ],
      },
      1: {
        body: [
          "The ese family points to something close to the person you're talking to, rather than to you: roughly \"that\" and \"those\". It has the same four endings as este, just without the t: ese, esa, esos, esas.",
          "It's also the natural choice when you're referring back to something the other person just mentioned.",
        ],
        examples: [
          { es: "Ese carro es rápido.", en: "That car (near you) is fast." },
          { es: "¿Esa mochila es de Ana?", en: "Is that backpack (near you) Ana's? (Mochila is feminine, so esa.)" },
          { es: "Esos niños son mis primos.", en: "Those kids (near you) are my cousins." },
          { es: "Esas mesas son nuevas.", en: "Those tables (near you) are new." },
        ],
        check: [
          fill(BOLD, "¿Son de Ana ___ llaves?", "esas", "Are [those] keys Ana's? (the ones you're holding)", "Llaves is feminine plural and close to the listener, so esas: esas llaves."),
          tr("Change it to a glass near the listener.", "Este vaso está sucio.", "Ese vaso está sucio.", [], "Moving the glass next to the listener swaps the este family for the ese family; vaso is still masculine singular, so este → ese."),
        ],
      },
    },
    reword: DASHES,
    exercises: {
      replace: {
        6: tr("Translate to Spanish.", "that car (near you)", "ese carro", ["ese coche", "ese auto"], "Near the listener takes the ese family, and carro is masculine: ese."),
        15: order("Ese carro es de mi padre", "That car (near you) is my father's", "Ese comes before carro (masculine, near the listener); de mi padre says whose it is."),
        17: tr(FIX, "Aquello carro es rojo.", "Aquel carro es rojo.", CAR_ALTS("Aquel carro es rojo."), "Aquello is neuter and never goes before a noun. With a masculine noun like carro, use aquel."),
        12: speak(`${SAY} "Is that pen (near you) Ana's?"`, "¿Esa pluma es de Ana?", ["¿Es de Ana esa pluma?", "¿Ese bolígrafo es de Ana?", "¿Es de Ana ese bolígrafo?"], "Pluma is feminine and near the listener, so esa. The owner comes after de: de Ana."),
        19: speak(`${SAY} "This book is new"`, "Este libro es nuevo.", [], "Libro is masculine and near you, so este. The masculine form ends in -e, not -o."),
        20: speak(`${SAY} "What is this?"`, "¿Qué es esto?", [], "You can't name the thing yet, so there's no noun to agree with: the neuter esto."),
        21: speak(`${SAY} "This chair is comfortable"`, "Esta silla es cómoda.", [], "Silla is feminine, so esta, and cómoda agrees with it too."),
      },
    },
  },
  "demonstratives-2": {
    sections: {
      1: {
        examples: [
          { es: "Clara: Me gusta esta bufanda. ¿Cuánto cuesta?", en: "Clara: I like this scarf. How much is it?" },
          { es: "Raúl: ¿Esa bufanda azul? Cien pesos.", en: "Raúl: That blue scarf (near you)? A hundred pesos." },
          { es: "Clara: ¿Y aquellos sombreros, allí en la pared?", en: "Clara: And those hats over there, on the wall?" },
          { es: "Raúl: Esos son más caros. Y aquello, ¿qué es? ¿Un cinturón?", en: "Raúl: Those are more expensive. And that thing over there, what is it? A belt?" },
        ],
        check: [
          mc("Where is the scarf Clara first points to, relative to Clara and Raúl?", ["Far from both of them", "Close to Clara, the speaker", "Close to Raúl, the listener", "It isn't specified"], 1, "Clara says esta bufanda, and este / esta marks something near the speaker.", ["Far from both would be aquella.", "", "Near Raúl would be esa.", "Esta tells you: it's near Clara."]),
          mc("Why does Raúl say aquello, not aquel or aquella, for the mystery object?", ["Because the object is plural", "Because he doesn't know what it is, so there's no noun to agree with", "Because it's a mistake: it should be aquella", "Because the object is close to Raúl"], 1, "Aquello is the neuter form: Raúl can't name the object yet, so there's no noun to match.", ["Plural would be aquellos or aquellas.", "", "It's not a mistake: aquella needs a feminine noun.", "Aquello means far away, not near Raúl."]),
        ],
      },
      2: {
        examples: [
          { es: "la silla", en: "chair" },
          { es: "la mesa", en: "table" },
          { es: "el libro", en: "book" },
          { es: "la ventana", en: "window" },
          { es: "el carro", en: "car (el coche in Spain)" },
          { es: "el perro", en: "dog" },
          { es: "la puerta", en: "door" },
          { es: "el lápiz", en: "pencil" },
          { es: "la lámpara", en: "lamp" },
          { es: "el teléfono", en: "phone" },
          { es: "la casa", en: "house" },
          { es: "el cuaderno", en: "notebook" },
          { es: "la taza", en: "cup" },
          { es: "el reloj", en: "clock / watch" },
          { es: "la calle", en: "street" },
          { es: "el árbol", en: "tree" },
          { es: "la bolsa", en: "bag" },
          { es: "el sombrero", en: "hat" },
        ],
      },
    },
    reword: [...DASHES, [" bark a lot: dogs far away", " bark a lot, far away"], [" new: shoes right here", " new, right here"]],
    exercises: {
      replace: {
        0: order("¿Qué es eso? Es un regalo.", "What is that? It's a gift.", "Eso is the neuter form for a thing you haven't named yet: there's no noun for it to agree with."),
        1: ms("Which sentences use the demonstrative correctly?", ["Estos zapatos son nuevos. (These shoes are new, right here.)", "Esa lápiz es azul. (That pencil is blue.)", "Aquellos perros son grandes. (Those dogs over there are big.)", "Esto casa es grande. (This house is big.)"], [0, 2], "Esa lápiz should be ese lápiz (lápiz is masculine), and esto casa should be esta casa: esto never goes before a noun."),
        19: speak(`${SAY} "I like this shirt, but not that one"`, "Me gusta esta camisa, pero no esa.", [], "That one is just esa: the noun drops, and esa stays feminine because it stands for esa camisa."),
        20: speak(`${SAY} "Do you want this cake or that one over there?"`, "¿Quieres este pastel o aquel?", [], "Aquel stands alone for aquel pastel, so it is masculine like pastel."),
      },
    },
  },
  "a1r-transform-demonstratives": {
    summary: "Move things closer or farther away and change their number: every demonstrative has to follow.",
    sections: {
      0: {
        check: [
          fill(BOLD, "esa casa → ___ casa", "aquella", "that house (near you) → [that] house (over there, far from both of us)", "Distance changes the start (es- → aquel-); casa is still feminine singular, so the ending stays -a: aquella."),
          tr("Change it to a car right next to you, the speaker.", "Aquel carro es rápido.", "Este carro es rápido.", CAR_ALTS("Este carro es rápido."), "Bringing it next to you swaps the start to est-; carro is masculine singular, so este. Nothing else in the sentence changes."),
        ],
      },
    },
    exercises: {
      replace: {
        1: fill(BOLD, "ese carro → ___ carro", "este", "that car (near you) → [this] car (near me)", "Near the speaker, masculine singular: este."),
      },
    },
    reword: [
      ["far from both, feminine singular → aquella. Distance", "Distance"],
      ["este → estos before a masculine plural noun. Este becomes", "Este becomes"],
      ["esa → esas before a plural noun. Demonstratives", "Demonstratives"],
      ["near the speaker, masculine singular → este. Near the speaker", "Near the speaker"],
      ["aquella → aquellas before a plural noun. Demonstratives", "Demonstratives"],
    ],
  },
  "vocabulary-practice-2": {
    reword: DASHES,
    exercises: {
      replace: {
        20: speak(`${SAY} "to dance"`, "bailar", [], "Bailar is a regular -ar verb: bailo, bailas, baila."),
        21: speak(`${SAY} "to sing"`, "cantar", [], "Cantar is a regular -ar verb: canto, cantas, canta."),
      },
    },
  },
  "a1-word-web-clothes": {
    goal: "say what people wear with llevar and what you put on with me pongo, with colors that agree.",
    sections: {
      0: {
        examples: [
          { es: "la camisa, la camiseta", en: "the shirt, the T-shirt" },
          { es: "los pantalones, la falda, el vestido", en: "the pants, the skirt, the dress" },
          { es: "los zapatos, las botas, los calcetines", en: "the shoes, the boots, the socks" },
          { es: "el abrigo, la chaqueta, el suéter", en: "the coat, the jacket, the sweater (el jersey in Spain)" },
          { es: "Hoy llevo una camisa blanca.", en: "Today I'm wearing a white shirt. (What's on me now: llevar.)" },
          { es: "Hace frío, así que me pongo el abrigo.", en: "It's cold, so I put on my coat. (The action: ponerse, with el, not mi.)" },
        ],
        check: [
          fill(BOLD, "Siempre ___ pantalones negros al trabajo.", "llevo", "I always [wear] black pants to work.", "Wearing as a habit is llevar → llevo (usar is also common in Latin America).", ["uso"]),
          mc("It starts to rain. \"I put on my boots.\" Which is best?", ["Me pongo las botas.", "Llevo las botas.", "Me pongo a las botas.", "Pongo las botas."], 0, "Putting on is the action, so ponerse: me pongo, with las (the me already says whose).", ["", "Llevo las botas means you already have them on.", "No a after ponerse.", "Pongo without me means to put something somewhere."]),
        ],
      },
    },
    exercises: {
      replace: {
        0: speak(`${SAY} "I put on my shoes and walk to school"`, "Me pongo los zapatos y camino a la escuela.", ["Me pongo los zapatos y camino al colegio.", "Me pongo mis zapatos y camino a la escuela."], "The action of putting on is ponerse: me pongo, with los (the me already says whose)."),
        5: tr("Translate to Spanish.", "I put on a sweater because it's cold.", "Me pongo un suéter porque hace frío.", ["Me pongo un jersey porque hace frío.", "Me pongo un suéter porque tengo frío.", "Me pongo un jersey porque tengo frío."], "Me pongo = I put on (the action). Suéter is the Latin American word; Spain says jersey."),
        23: write("Your cousin's wedding is on Saturday. Write a short email to a friend: say what you put on, what someone in your family wears, and ask what your friend puts on.", 20, 50, ["Me pongo for what you put on", "Llevar for what people wear", "Clothes with colors that agree (un vestido azul, unos zapatos negros)", "A question to your friend (¿Qué te pones tú?)"], "Hola, Clara: El sábado es la boda de mi prima. Me pongo un vestido azul y unos zapatos negros. También llevo una chaqueta blanca, porque en la noche hace frío. Mi hermano lleva un traje gris y una corbata roja. ¿Qué te pones tú? Besos, Inés", "Me pongo is what you put on; llevar is what someone is wearing. Colors agree like other adjectives: una chaqueta blanca, unos zapatos negros, but gris and azul only change for the plural."),
        24: speak(`${SAY} "Today I'm wearing a white shirt"`, "Hoy llevo una camisa blanca.", ["Hoy uso una camisa blanca.", "Llevo una camisa blanca hoy."], "What's on you now is llevar: llevo. Blanca agrees with camisa."),
        25: speak(`${SAY} "These shoes are old, but they're comfortable"`, "Estos zapatos son viejos, pero son cómodos.", [], "Zapatos is masculine plural, so estos, viejos and cómodos all end in -os."),
      },
    },
  },
  "a1r-word-web-feelings": {
    goal: "say how you feel with estar and a feeling word, and say why with porque.",
    summary: "Opposites, causes and reactions: use the Beginner feeling words with estar in real situations.",
    sections: {
      2: {
        examples: [
          { es: "Estoy nerviosa porque tengo un examen.", en: "I'm nervous because I have an exam." },
          { es: "Mi padre está enojado porque el carro está roto.", en: "My father is angry because the car is broken." },
        ],
      },
    },
    exercises: {
      replace: {
        0: speak(`${SAY} "My sisters are very stressed because they have a lot of work"`, "Mis hermanas están muy estresadas porque tienen mucho trabajo.", [], "A feeling takes estar, and estresado agrees with mis hermanas: estresadas. Porque gives the reason."),
        23: write("Write a short diary entry about a day with ups and downs. Say how you feel in the morning, at midday, in the afternoon and now, and why.", 20, 50, ["Estar + feeling words (cansado, nervioso, contento…)", "Porque to give a reason", "Times of day (en la mañana, a mediodía…)", "At least four different feelings"], "Querido diario: Hoy es un día raro. En la mañana estoy cansada porque trabajo mucho. A mediodía estoy nerviosa: tengo un examen de inglés. En la tarde estoy muy contenta porque el examen es fácil. Ahora, en la noche, estoy tranquila y un poco aburrida.", "Feelings take estar, and the feeling word agrees with the person: estoy cansada, nerviosa, contenta. Porque gives the reason for each one."),
        25: speak(`${SAY} "Today I'm busy, but tomorrow I'm free"`, "Hoy estoy ocupado, pero mañana estoy libre.", ["Hoy estoy ocupada, pero mañana estoy libre."], "Busy and free are states, so estar both times; ocupada if you're a woman."),
      },
    },
  },
  "a1r-dialogue-whose-where": {
    summary: "A roommate conversation about lost things: practice possessives and place words together.",
    reword: [
      ...DASHES,
      ["nuestro → nuestros: masculine plural (libros). ", ""],
      ["tu → mi: answering about your own thing. ", ""],
    ],
    exercises: {
      replace: {
        24: write("Write a short dialogue with your roommate. You can't find your things: ask where your keys, phone and glasses are, and answer with possessives and place words.", 15, 40, ["Mi, tu, su, mis, tus, sus", "Place words (en, debajo de, al lado de, sobre…)", "Estar for where things are", "Questions with ¿dónde…?"], "¿Dónde están mis llaves? Tus llaves están en la mesa, al lado de mi libro. ¿Y mi celular? Está debajo de tu chaqueta. ¿Y los lentes de Ana? Sus lentes están en el sofá. ¡Gracias!", "Possessives agree with the thing owned, not the owner: mis llaves, tu chaqueta, sus lentes. De + el becomes del, and estar tells you where things are."),
      },
    },
  },
  "a1r-mission-prices-ages-phones": {
    summary: "Fill out a sign-up form and pay at a market stall: numbers the way you'll actually hear them.",
    reword: [
      ...DASHES,
      ["costar → cuesta: one melon. ", ""],
      ["81 → ochenta y un: uno shortens to un before a masculine noun. ", ""],
    ],
  },
  "a1r-mission-timetable": {
    sections: {
      1: {
        examples: [
          { es: "Matemáticas: 8:15, a las ocho y cuarto", en: "Math: at a quarter past eight" },
          { es: "Historia: 12:45, a la una menos cuarto", en: "History: at a quarter to one (counted down from one)" },
          { es: "Arte: 1:30, a la una y media", en: "Art: at one thirty" },
        ],
      },
      2: {
        examples: [
          { es: "Línea 5: sale a las 7:40, a las ocho menos veinte", en: "Line 5: leaves at twenty to eight" },
          { es: "Llega al centro a las 8:05, a las ocho y cinco", en: "Arrives downtown at five past eight" },
        ],
      },
    },
    reword: [
      ...DASHES,
      ["menos = to (minutes before the hour). ", ""],
      ["a las + hour = at. At + time → a las.", "A las + the hour says when something happens."],
      ["La clase empieza a la una.", "La clase es a la una."],
      ["When does the class start?", "When is the class?"],
    ],
  },
  "a1r-spiral-numbers-time-possessives": {
    summary: "Plan a family day using possessives, numbers and time, plus ser, estar and the present tense from before.",
    reword: [
      ["nuestro → nuestros: masculine plural (abuelos). ", ""],
      ["primero → primer: shortened before a masculine singular noun. ", ""],
    ],
  },
  "a1-my-day-routine": {
    sections: {
      0: {
        check: [
          mc("\"I have dinner at nine.\"", ["Ceno a las nueve.", "Ceno son las nueve.", "Ceno a la nueve.", "Ceno las nueve."], 0, "A las + the hour says when something happens.", ["", "Son las tells the time now, not when.", "La is only for la una.", "At needs a: a las nueve."]),
          mc("\"At what time is the class?\"", ["¿A qué hora es la clase?", "¿Qué hora es la clase?", "¿A qué hora son la clase?", "¿Cuándo hora es la clase?"], 0, "¿A qué hora…? asks when something happens.", ["", "Without a, it asks what time it is now.", "One class takes es.", "Cuándo already means when; it doesn't go with hora."]),
          mc("\"It's seven in the morning.\"", ["Son las siete de la mañana.", "Son las siete de la tarde.", "Es la siete de la mañana.", "Son las siete en la mañana."], 0, "De la mañana gives a.m. with a clock time, and seven takes son las.", ["", "De la tarde is the afternoon.", "Seven is plural: son las.", "With a clock time, Spanish says de la mañana."]),
        ],
      },
      1: {
        body: [
          "Many routine verbs describe something you do to yourself, and Spanish says so with me in front: levanto la caja is \"I lift the box\", so me levanto is \"I lift myself\": I get up. Despierto a mi hijo is \"I wake my son\"; me despierto is \"I wake (myself) up\". The me always goes right before the verb.",
          "Verbs that aren't done to yourself have no me: desayuno (I have breakfast), camino (I walk), trabajo (I work). For now, learn the me-verbs as phrases for yo: me despierto, me levanto, me ducho, me visto. You'll see the full pattern (te levantas, se levanta) in the Elementary level.",
        ],
      },
      2: {
        examples: [
          { es: "Luego camino a la parada y tomo el autobús.", en: "Then I walk to the stop and take the bus." },
          { es: "Durante el día trabajo en una oficina.", en: "During the day I work in an office." },
          { es: "Regreso a casa a las seis.", en: "I come back home at six." },
          { es: "Me siento en el sofá y leo un rato.", en: "I sit down on the sofa and read for a while. (Me siento: I sit myself down.)" },
          { es: "Mientras ceno, escucho la radio.", en: "While I have dinner, I listen to the radio." },
          { es: "Entonces me acuesto, normalmente a las once.", en: "Then I go to bed, normally at eleven." },
        ],
      },
    },
    exercises: {
      replace: {
        4: speak(`${SAY} "I shower and then I take the bus"`, "Me ducho y luego tomo el autobús.", ["Me ducho y entonces tomo el autobús.", "Me ducho y después tomo el autobús."], "Me ducho takes me (you shower yourself); tomo doesn't. Luego (or entonces) = then."),
        22: speak(`${SAY} "I wake up at six thirty"`, "Me despierto a las seis y media.", [], "You wake yourself up, so me despierto; a las + the time says when."),
      },
    },
  },
  "possessives-prepositions-unit-review": {
    goal: "show you can hear, say and write this unit: possessives and place words, este, ese and aquel, and tener.",
    summary: "Hear, say and write the unit's grammar: possessives and place words, este, ese and aquel, tener and its phrases, and your daily routine.",
    sections: {
      1: {
        body: ["Say each English sentence in Spanish out loud, then check your answer. Your recordings aren't saved."],
        check: [
          speak(`${SAY} "My brother is sixteen and our house is near the park."`, "Mi hermano tiene dieciséis años y nuestra casa está cerca del parque.", ["Mi hermano tiene dieciséis años, y nuestra casa está cerca del parque."], "Tener for age, nuestra for casa, and de + el = del."),
          speak(`${SAY} "I like this shirt, but that one (near you) is Ana's."`, "Me gusta esta camisa, pero esa es de Ana.", [], "Esta is near you; esa stands alone for esa camisa, near the listener. Whose it is goes after de."),
          speak(`${SAY} "I get up at seven and I have breakfast at half past seven."`, "Me levanto a las siete y desayuno a las siete y media.", ["Me levanto a las siete y luego desayuno a las siete y media."], "Me levanto takes me; desayuno doesn't. A las says when."),
          speak(`${SAY} "We're very hungry and we have to eat."`, "Tenemos mucha hambre y tenemos que comer.", ["Tenemos mucha hambre y tenemos que comer ya."], "Hunger is something you have, and hambre takes mucha; tener que + a verb says what you have to do."),
        ],
      },
      2: {
        check: [
          write("Describe your morning with times and the people at home. Say when you get up and have breakfast, how old someone in your family is, and point at one of your things with este, esta, ese or esa.", 20, 50, ["At least two times (a las siete, a las ocho y media…)", "A possessive (mi, tu, su, nuestro…)", "Tener for age or a feeling (tiene veinte años, tengo hambre)", "Este, esta, ese or esa with a noun"], "Me levanto a las siete. Desayuno a las siete y media con mi hermano. Mi hermano tiene doce años. Nuestra casa está cerca de la estación. Esta mochila es de mi hermano. Tomo el autobús a las ocho.", "Possessives match the thing owned: mi hermano, nuestra casa. Age takes tener, and a las says when."),
        ],
      },
    },
    exercises: {
      replace: {
        2: mc("\"Those shoes (near you) are new.\"", ["Esos zapatos son nuevos.", "Esas zapatos son nuevos.", "Estos zapatos son nuevos.", "Esos zapatos es nuevo."], 0, "Near the listener is the ese family, and zapatos is masculine plural: esos.", ["", "Zapatos is masculine, so the ending is -os.", "Estos would be near you, the speaker.", "Several shoes take son and nuevos."]),
        4: mc("\"I'm cold.\"", ["Tengo frío.", "Estoy frío.", "Soy frío.", "Tengo fría."], 0, "Feeling cold is something you have: tengo frío.", ["", "Estar doesn't go with the noun frío for a person.", "Soy frío would mean you're an unfriendly person.", "Frío is a noun here, so it doesn't change."]),
        5: mc("You don't know what the thing far away is. You ask:", ["¿Qué es aquello?", "¿Qué es aquel?", "¿Qué es aquella?", "¿Qué es esto?"], 0, "No noun yet means no gender: the neuter aquello, for far away.", ["", "Aquel needs a masculine noun.", "Aquella needs a feminine noun.", "Esto is for something right here."]),
      },
      add: [
        tr("Translate to Spanish.", "These are my sister's books.", "Estos son los libros de mi hermana.", ["Estos libros son de mi hermana."], "Spanish has no 's: thing + de + owner. Estos stands for estos libros."),
        tr("Translate to Spanish.", "Our parents have a small house.", "Nuestros padres tienen una casa pequeña.", ["Nuestros papás tienen una casa pequeña."], "Nuestros agrees with padres, and ellos takes tienen."),
        tr(FIX, "Mis hermana tiene veinte años.", "Mi hermana tiene veinte años.", [], "One sister takes mi; mis is for several things."),
      ],
    },
  },
};

// Spoken questions the old course made from its own notes: their feedback
// read as a fragment ("en = in."), so each gets a full sentence, and the
// three in the demonstratives transformations now say what to change.
const SPOKEN_FIXES: Record<string, Record<number, Exercise>> = {
  "possessives-prepositions": {
    1: speak(`${SAY} "I live in Madrid"`, "Vivo en Madrid.", ["Yo vivo en Madrid."], "En is for being in or at a place: en Madrid."),
  },
  "review-possessives-prepositions-questions-1": {
    2: speak(`${SAY} "The dog is behind the house"`, "El perro está detrás de la casa.", [], "Detrás de means behind, and where a thing is takes estar."),
    23: speak(`${SAY} "How old are you?"`, "¿Cuántos años tienes?", ["¿Cuántos años tienes tú?"], "Años is masculine plural, so cuántos: literally, how many years do you have?"),
  },
  "review-possessives-prepositions-questions-2": {
    24: speak(`${SAY} "We live in a big city"`, "Vivimos en una ciudad grande.", ["Nosotros vivimos en una ciudad grande."], "Vivir is an -ir verb, and nosotros takes -imos: vivimos."),
  },
  "vocabulary-practice-3": {
    22: speak(`${SAY} "The cat is behind the sofa"`, "El gato está detrás del sofá.", [], "Detrás de + el sofá: de + el always merges into del."),
    23: speak(`${SAY} "I live near the school, not far from it"`, "Vivo cerca de la escuela, no lejos de ella.", [], "Cerca de (near) and lejos de (far from) are opposites, and both take de."),
  },
  "a1r-transform-demonstratives": {
    23: speak("Say it out loud: move «esa casa» far from both of you.", "aquella casa", [], "Distance changes the start (es- → aquel-); casa is still feminine singular, so the ending stays -a: aquella."),
    24: speak("Say it out loud: make «este chico» plural.", "estos chicos", [], "Este becomes estos before a masculine plural noun, never estes."),
    25: speak("Say it out loud: make «esa camisa» plural.", "esas camisas", [], "Demonstratives agree in number: esa → esas before a plural noun."),
  },
  "a1-word-web-clothes": {
    3: speak(`${SAY} "I'm wearing black pants and a white shirt"`, "Llevo pantalones negros y una camisa blanca.", ["Llevo unos pantalones negros y una camisa blanca.", "Yo llevo pantalones negros y una camisa blanca.", "Uso pantalones negros y una camisa blanca."], "Llevar is to wear, and each color agrees with its own noun: pantalones negros, camisa blanca."),
  },
  "a1r-word-web-feelings": {
    24: speak(`${SAY} "We're worried about the exam"`, "Estamos preocupados por el examen.", ["Estamos preocupadas por el examen."], "Preocupar gives preocupado, and it agrees with nosotros: preocupados."),
  },
  "a1r-mission-prices-ages-phones": {
    24: speak(`${SAY} "I'm twenty-eight years old"`, "Tengo veintiocho años.", ["Tengo 28 años.", "Yo tengo veintiocho años."], "Age takes tener, and 21 to 29 are one word: veintiocho."),
    25: speak(`${SAY} "My number is 6 42 31 90"`, "Mi número es el seis, cuarenta y dos, treinta y uno, noventa.", [], "Phone numbers are read in pairs, and ser gives the number: es el seis…"),
  },
  "a1r-spiral-numbers-time-possessives": {
    21: speak(`${SAY} "My dad is 46 and works until three"`, "Mi padre tiene cuarenta y seis años y trabaja hasta las tres.", ["Mi papá tiene cuarenta y seis años y trabaja hasta las tres."], "Age takes tener, and hasta las tres says until when."),
    22: speak(`${SAY} "My aunt and uncle arrive at one"`, "Mis tíos llegan a la una.", [], "Mis is for several people, and one o'clock is singular: a la una."),
    23: speak(`${SAY} "Our house is twenty minutes from the park"`, "Nuestra casa está a veinte minutos del parque.", [], "Nuestra agrees with casa, and a veinte minutos de says how far."),
  },
  "a1-my-day-routine": {
    2: speak(`${SAY} "I come back home at seven"`, "Regreso a casa a las siete.", ["Vuelvo a casa a las siete."], "Regresar takes no me, because you don't do it to yourself: regreso."),
  },
};
for (const [slug, fixes] of Object.entries(SPOKEN_FIXES)) {
  const p = (A1_UNIT6_PATCHES[slug] ??= {});
  p.exercises = { ...p.exercises, replace: { ...(p.exercises?.replace ?? {}), ...fixes } };
}

// Tener is a recut lesson (recuts-a1.ts), so its fixes go into the recut's own patch.
export const TENER_RECUT_FIX: LessonPatch = {
    sections: {
      1: {
        examples: [
          { es: "Yo tengo un perro.", en: "I have a dog. (Yo takes the irregular tengo.)" },
          { es: "Ellos tienen dos carros.", en: "They have two cars. (The stress is on the stem: tien-.)" },
          { es: "Tenemos una casa grande.", en: "We have a big house. (The stress is on the ending, so ten- stays.)" },
        ],
      },
    },
    exercises: {
      replace: {
        14: tr("Translate to Spanish.", "I have a car.", "Tengo un carro.", CAR_ALTS("Tengo un carro."), "Tener is irregular in the yo form: tengo."),
        18: speak(`${SAY} "I have a car"`, "Tengo un carro.", CAR_ALTS("Tengo un carro."), "Yo takes tengo, the irregular -go form of tener."),
        4: speak(`${SAY} "I have to study"`, "Tengo que estudiar.", ["Yo tengo que estudiar."], "Tener que + a verb says what you have to do. Only tener changes; estudiar stays whole."),
        10: speak(`${SAY} "I have a dog"`, "Yo tengo un perro.", ["Tengo un perro."], "Yo takes the irregular form tengo."),
        11: speak(`${SAY} "I'm twenty"`, "Tengo veinte años.", ["Tengo 20 años.", "Yo tengo veinte años."], "Age takes tener: literally, I have twenty years."),
        17: speak(`${SAY} "I have two siblings"`, "Yo tengo dos hermanos.", ["Tengo dos hermanos."], "Yo takes tengo, the -go form of tener."),
      },
    },
  };
