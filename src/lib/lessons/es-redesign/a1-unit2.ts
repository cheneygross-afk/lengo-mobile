// Synced from cheneygross-afk/lengo:src/lib/lessons/es-redesign/a1-unit2.ts by scripts/sync-content.mjs -- edit it there, not here.
// New course, A1 Unit 2: content fixes from Claude's audit in Ricardo's
// format (Claude Feedback/Spanish (new course)/A1 Beginner/Unit 02). They add
// to the Beginner patches in a1.ts (merged section by section in index.ts).
// Section numbers are the lesson's own; question numbers are its practice
// questions (lesson.exercises). Only content changes here: what is taught,
// asked and accepted. The answer checker and the rubric are untouched.
import type { Exercise } from "../types";
import type { LessonPatch } from "./patch";

const speak = (prompt: string, text: string, altAnswers: string[], explanation: string, section?: number): Exercise => ({
  type: "speak",
  prompt,
  text,
  ...(altAnswers.length ? { altAnswers } : {}),
  explanation,
  ...(section === undefined ? {} : { meta: { section } }),
});
const tr = (prompt: string, source: string, answer: string, altAnswers: string[], explanation: string, section?: number): Exercise => ({
  type: "translate",
  prompt,
  direction: "en-es",
  source,
  answer,
  ...(altAnswers.length ? { altAnswers } : {}),
  explanation,
  ...(section === undefined ? {} : { meta: { section } }),
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
const SAY = "Say it in Spanish:";
// The old course's lesson numbers ("Review: Lesson 6.") point at lessons
// the new course numbers differently.
const OLD_NUMBERS: [string, string][] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => [` Review: Lesson ${n}.`, ""]);

export const A1_UNIT2_PATCHES: Record<string, LessonPatch> = {
  "a1r-contrast-articles": {
    // The old "what do you remember?" card doubled the warm-up.
    dropSections: [0],
    sections: {
      2: { reteach: "Three places Spanish and English differ: no un/una before a plain job (Soy médico); no unos/unas for things you can't count (Necesito agua); and el/la for things in general (Las flores son bonitas)." },
    },
    exercises: {
      replace: {
        1: speak(`${SAY} "There's a photo on the table. The photo is my mother's."`, "Hay una foto en la mesa. La foto es de mi madre.", ["Hay una foto en la mesa. La foto es de mi mamá.", "En la mesa hay una foto. La foto es de mi madre.", "En la mesa hay una foto. La foto es de mi mamá.", "Hay una foto en la mesa. Es de mi madre.", "Hay una foto en la mesa. Es de mi mamá."], "Hay brings in a new photo, so una foto; the second time it's a known photo, so la foto. Foto is feminine (short for la fotografía).", 1),
        10: fill("How do you say the bold words in Spanish?", "Tengo ___ amigas en Madrid.", "unas", "I have [some] friends (f.) in Madrid.", "Some + feminine plural = unas (algunas is right too). Las would mean \"the friends\".", ["algunas"]),
        14: tr("Translate to Spanish.", "Ana's friends (m.) arrive today.", "Los amigos de Ana llegan hoy.", ["Hoy llegan los amigos de Ana.", "Los amigos de Ana llegan hoy día."], "Specific friends (Ana's) → los. Unos would be just \"some friends\". Llegan = they arrive."),
        15: tr("Translate to Spanish.", "I'm looking for a house; the house is pretty.", "Busco una casa; la casa es bonita.", ["Busco una casa y la casa es bonita.", "Busco una casa. La casa es bonita.", "Busco una casa; la casa es linda.", "Busco una casa y la casa es linda.", "Busco una casa. La casa es linda."], "First mention → una; once we know which house → la. Bonita or linda: both mean pretty."),
        18: speak("Say out loud in Spanish that you have a cat, and then that the cat is small.", "Tengo un gato. El gato es pequeño.", ["Tengo un gato y el gato es pequeño.", "Tengo un gato. Es pequeño.", "Tengo un gato y es pequeño."], "New information takes un (un gato); the second time, the listener knows which cat, so el gato, or just es pequeño."),
        19: speak(`${SAY} "I have a book."`, "Tengo un libro.", ["Yo tengo un libro."], "Any book, new information: un libro. Tengo = I have."),
        20: speak(`${SAY} "The book is interesting."`, "El libro es interesante.", [], "The book you just mentioned: el libro. Interesante has one form for both genders."),
      },
      // Served between the cards that teach them.
      section: { 5: 1, 8: 1, 15: 1, 0: 2, 12: 3 },
    },
    reword: OLD_NUMBERS,
  },
  "a1r-error-hunt-pronouns-articles": {
    exercises: {
      replace: {
        22: speak(`${SAY} "You are my friend." (to a friend)`, "Tú eres mi amigo.", ["Eres mi amigo.", "Tú eres mi amiga.", "Eres mi amiga."], "Tú (you) has an accent; mi (my) doesn't. Amigo for a man, amiga for a woman."),
        23: speak(`${SAY} "Your friend is nice." (to a friend)`, "Tu amigo es simpático.", ["Tu amiga es simpática."], "Tu (your) has no accent before a noun. Simpático changes with the friend: simpática for a woman."),
        24: speak(`${SAY} "He is the teacher."`, "Él es el profesor.", ["Él es el maestro."], "Él (he) has an accent; el (the) doesn't."),
      },
    },
  },
  "adjective-agreement": {
    dropSections: [0],
    sections: {
      1: {
        body: [
          "An adjective takes the gender and number of the noun it describes, so you can always see what it belongs to. Adjectives in -o have four forms: rojo, roja, rojos, rojas.",
          "Adjectives ending in -e or in most consonants have only two forms, singular and plural: grande / grandes, azul / azules, feliz / felices.",
          "Two groups do add -a for the feminine: nationalities ending in a consonant (español → española) and words in -dor (trabajador → trabajadora).",
        ],
      },
      5: {
        addCheck: [
          { type: "matching", instructions: "Match each word to its meaning.", pairs: [{ left: "amarillo/a", right: "yellow" }, { left: "pequeño/a", right: "small" }, { left: "limpio/a", right: "clean" }, { left: "difícil", right: "difficult" }], explanation: "Amarillo, pequeño and limpio have four forms; difícil only adds -es for the plural: difíciles." },
        ],
      },
    },
    exercises: {
      replace: {
        5: speak(`${SAY} "My house is small. It's white and blue."`, "Mi casa es pequeña. Es blanca y azul.", ["Mi casa es pequeña y es blanca y azul.", "Mi casa es pequeña. Es azul y blanca.", "Mi casa es chica. Es blanca y azul."], "Casa is feminine, so -o adjectives end in -a (pequeña, blanca); azul has one form."),
        8: tr("Make it plural.", "El ejercicio es fácil.", "Los ejercicios son fáciles.", [], "El → los, ejercicio → ejercicios, es → son, and fácil ends in a consonant: fáciles."),
        12: speak(`${SAY} "The sofa is gray and the rugs are yellow." (rug = alfombra)`, "El sofá es gris y las alfombras son amarillas.", [], "Gris has one form for both genders; amarillo becomes amarillas for the feminine plural alfombras."),
        16: speak(`${SAY} "My friend (a woman) is hard-working."`, "Mi amiga es trabajadora.", ["Mi amiga es muy trabajadora."], "Words in -dor add -a for a woman: trabajador → trabajadora."),
      },
      section: { 0: 1, 13: 1, 3: 2, 9: 2, 11: 3 },
    },
    reword: OLD_NUMBERS,
  },
  "a1r-transform-agreement": {
    sections: {
      1: { examples: [{ es: "un chico inteligente / una chica inteligente", en: "a smart boy / a smart girl" }, { es: "el carro azul / los carros azules", en: "the blue car / the blue cars" }] },
    },
    exercises: {
      replace: {
        1: tr("Make it plural.", "El ejercicio es difícil.", "Los ejercicios son difíciles.", [], "Difícil ends in a consonant → add -es: difíciles. El → los, es → son."),
        13: speak("Say it in Spanish: \"The English teachers (all women) are very kind.\"", "Las profesoras inglesas son muy amables.", ["Las maestras inglesas son muy amables."], "Inglesas (nationality adds -a, then -s), but amables only adds -s: -e adjectives don't change for gender."),
        24: speak(`${SAY} "They are English." (men)`, "Ellos son ingleses.", ["Son ingleses."], "Inglés → ingleses: add -es, and the accent mark drops."),
      },
    },
    // Latin American Spanish says carro (coche is Spain's word).
    reword: [["coches", "carros"], ["coche", "carro"]],
  },
  "adjectives-gender-number-drill-1": {
    optionNotes: { 0: ["", "Clima breaks the -a rule: it's masculine.", "Clima is masculine, so el, not la.", "El clima is right, but the adjective must match it: bueno."] },
    summary: "Fast practice: pick el, la, los or las from the noun's ending, including the few nouns that break the rule.",
    sections: {
      1: {
        check: [
          fill("Complete with el or la.", "___ tema de la clase es fácil.", "El", "[The] topic of the class is easy.", "Tema is a Greek -ma word, like problema and idioma, so it's masculine: el tema."),
          fill("Fill in the correct definite article.", "___ programa es muy bueno.", "El", "[The] program is very good.", "Programa is another Greek -ma word, so it's masculine: el programa. Notice the adjective is masculine too: bueno."),
        ],
      },
    },
    exercises: {
      replace: {
        0: { type: "multiple-choice", question: "Clima (climate) ends in -a. Which is right?", options: ["El clima es bueno.", "La clima es buena.", "La clima es bueno.", "El clima es buena."], correctIndex: 0, explanation: "Clima is a Greek -ma word, like problema, so it's masculine: el clima, and the adjective follows: bueno.", optionNotes: ["", "Clima breaks the -a rule: it's masculine.", "Clima is masculine, so el, not la.", "El clima is right, but the adjective must match it: bueno."] },
        1: fill("How do you say the bold words in Spanish?", "la flor → las ___", "flores", "the flower → the [flowers]", "Flor ends in a consonant, so it adds -es: flores."),
        10: speak(`${SAY} "The girls are nice."`, "Las chicas son simpáticas.", [], "Chicas is feminine plural, so las, and simpático becomes simpáticas."),
      },
      add: [speak(`${SAY} "The cities are big."`, "Las ciudades son grandes.", [], "Words in -dad are feminine: las ciudades. Grande only adds -s: grandes.")],
    },
    reword: [["chicas is feminine plural → las. 'Chicas' is feminine plural, so it takes 'las'.", "Chicas is feminine plural, so it takes las."]],
  },
  "adjectives-gender-number-drill-1-part-2": {
    summary: "More fast practice with el, la, los and las: new nouns, the rule breakers, and plurals in -es.",
    sections: {
      0: {
        body: ["Two questions pick the article: is the noun masculine or feminine (look at the ending), and is it one or more? El libro, la mesa, los libros, las mesas. Watch the rule breakers: el día, el mapa, el problema, la mano, la foto."],
        check: [fill("Complete with el or la.", "___ idioma de Brasil es el portugués.", "El", "[The] language of Brazil is Portuguese.", "Idioma ends in -a but is masculine, like el problema: el idioma.")],
      },
    },
    exercises: {
      replace: {
        0: fill("How do you say the bold words in Spanish?", "___ universidad es grande.", "La", "[The] university is big.", "Words ending in -dad are feminine, so universidad takes la."),
        1: fill("How do you say the bold words in Spanish?", "la voz → las ___", "voces", "the voice → the [voices]", "Voz ends in -z: z changes to c and adds -es: voces."),
        4: tr("Correct the sentence.", "Los manos de Ana son pequeñas.", "Las manos de Ana son pequeñas.", [], "Mano ends in -o but is feminine, so the plural article is las. Pequeñas already agrees with it."),
        9: fill("How do you say the bold words in Spanish?", "___ libros son de Pedro.", "Los", "[The] books are Pedro's.", "Libro is masculine, and here it's plural: los."),
        13: { type: "word-order", prompt: "Put the words in order.", words: ["Las", "chicas", "y", "los", "chicos", "son", "de", "Lima"], translation: "The girls and the boys are from Lima", explanation: "Las for the girls, los for the boys, and one son for both." },
        14: tr("Translate to Spanish.", "The lights are new.", "Las luces son nuevas.", [], "Luz → luces (z → c); luz is feminine, so las and nuevas."),
        15: speak(`${SAY} "The university is big."`, "La universidad es grande.", [], "Words in -dad are feminine: la universidad. Grande has one form."),
        17: speak(`${SAY} "The books are Ana's."`, "Los libros son de Ana.", [], "Libros is masculine plural: los. Spanish has no 's: de + the owner."),
      },
    },
  },
  "adjectives-gender-number-drill-2": {
    summary: "Fast practice: un, una, unos and unas, plurals in -s, -es and -ces, and describing words that match.",
    exercises: {
      replace: {
        2: tr("Translate to Spanish.", "the new books", "los libros nuevos", [], "Libros is masculine plural, so los and nuevos, after the noun."),
        3: tr("Translate to Spanish.", "some easy ideas", "unas ideas fáciles", [], "Idea is feminine: unas ideas. Fácil ends in a consonant: fáciles."),
        9: tr("Correct the sentence.", "Los lápizes son de Ana.", "Los lápices son de Ana.", [], "A final -z becomes -c before -es: lápiz → lápices. Spanish doesn't write ze."),
        19: speak(`${SAY} "I need some black pencils."`, "Necesito unos lápices negros.", ["Necesito lápices negros.", "Necesito unos lápices de color negro."], "Masculine plural: unos lápices negros. Spanish often drops unos: Necesito lápices negros."),
        21: speak(`${SAY} "On my street there are two hotels."`, "En mi calle hay dos hoteles.", ["Hay dos hoteles en mi calle."], "Hotel ends in a consonant: hoteles. The place can come first or last."),
        23: speak(`${SAY} "the pencils"`, "los lápices", ["unos lápices"], "Lápiz → lápices: z changes to c before -es."),
      },
      section: { 8: 0, 9: 1, 10: 2 },
    },
    reword: [["lápiz → lápices: z changes to c before -es. Words ending in -z change z to c and add -es: 'lápiz' → 'lápices'.", "Lápiz ends in -z, so z changes to c and adds -es: lápices."]],
  },
  "adjectives-gender-number-drill-3": {
    summary: "Fast practice with buen, mal and gran before a noun, and whole phrases where every word matches.",
    exercises: {
      replace: {
        2: fill("How do you say the bold words in Spanish?", "Ella es una ___ profesora.", "buena", "She is a [good] teacher.", "Bueno doesn't shorten before a feminine noun; it just agrees: una buena profesora."),
        22: tr("Translate to Spanish.", "Ana is a good friend and a great woman.", "Ana es una buena amiga y una gran mujer.", ["Ana es una amiga buena y una gran mujer."], "Buena: feminine never shortens. Gran before any single noun: una gran mujer."),
        25: speak(`${SAY} "She is a good teacher."`, "Ella es una buena profesora.", ["Es una buena profesora.", "Ella es una buena maestra.", "Es una buena maestra."], "Bueno doesn't shorten before a feminine noun: una buena profesora."),
      },
    },
    reword: [["'Bueno' does not shorten before a feminine noun — it just agrees normally: 'buena profesora'.", "Bueno doesn't shorten before a feminine noun; it just agrees: buena profesora."]],
  },
  "a1r-contrast-buen-gran": {
    goal: "use buen, mal, primer and tercer before a noun, and tell gran (great) from grande (big).",
    exercises: {
      replace: {
        1: fill("How do you say the bold words in Spanish?", "Hoy es un ___ día.", "mal", "Today is a [bad] day.", "Malo shortens to mal right before a masculine singular noun: un mal día."),
        2: fill("How do you say the bold words in Spanish?", "Es la ___ semana de clase.", "primera", "It's the [first] week of class.", "Semana is feminine, so primera; only a masculine singular noun takes primer."),
        10: tr("Correct the sentence.", "Es el tercero piso.", "Es el tercer piso.", [], "Tercero drops its -o right before a masculine singular noun: el tercer piso."),
        11: tr("Translate to Spanish.", "a big car", "un carro grande", ["un coche grande", "un auto grande"], "Grande after the noun means big (size)."),
        13: speak(`${SAY} "My brother is a good student."`, "Mi hermano es un buen estudiante.", ["Mi hermano es buen estudiante."], "Bueno shortens to buen before a masculine singular noun."),
        22: speak(`${SAY} "Today is a bad day."`, "Hoy es un mal día.", ["Es un mal día hoy.", "Hoy es un día malo."], "Malo shortens to mal right before a masculine singular noun; after the noun it stays malo."),
      },
    },
  },
  "review-pronouns-ser-gender-articles": {
    exercises: {
      replace: {
        24: speak("Introduce your friend Lucía out loud: she's from Peru and she's a doctor.", "Ella es Lucía. Es de Perú y es doctora.", ["Ella es Lucía, es de Perú y es doctora.", "Ella es Lucía. Es de Perú y es médica.", "Ella se llama Lucía. Es de Perú y es doctora.", "Mi amiga Lucía es de Perú y es doctora.", "Ella es Lucía. Es peruana y es doctora.", "Ella es mi amiga Lucía. Es de Perú y es doctora."], "Es for one person (ella), de for origin, and the job with no article and in the feminine: doctora."),
        28: speak(`${SAY} "She is a doctor."`, "Ella es doctora.", ["Es doctora.", "Ella es médica.", "Es médica."], "Ella takes es, and a job after ser has no article."),
      },
    },
    reword: OLD_NUMBERS,
  },
  "a1r-spiral-articles-adjectives-ser": {
    exercises: {
      replace: {
        8: speak(`${SAY} "My father is tall and nice."`, "Mi padre es alto y simpático.", ["Mi papá es alto y simpático."], "One person (mi padre) → es, and the adjectives are masculine: alto, simpático."),
        10: tr("Translate to Spanish.", "My mother is Mexican.", "Mi madre es mexicana.", ["Mi mamá es mexicana."], "Ser for nationality; mexicano becomes mexicana for a woman. Nationalities are lowercase in Spanish."),
        18: tr("Translate to Spanish.", "The (female) teachers are intelligent and kind.", "Las profesoras son inteligentes y amables.", ["Las maestras son inteligentes y amables."], "Inteligente and amable don't change for gender, only for number."),
        20: tr("Translate to Spanish.", "Some (female) friends are from Germany, and they are very nice.", "Unas amigas son de Alemania y son muy simpáticas.", ["Unas amigas son alemanas y son muy simpáticas.", "Unas amigas son de Alemania y son muy amables.", "Unas amigas son alemanas y son muy amables.", "Unas amigas son de Alemania y son muy simpáticas."], "Unas for \"some\", son for \"they are\", simpáticas (or amables) to match amigas."),
        25: speak(`${SAY} "My friend Tom is English, tall and very nice."`, "Mi amigo Tom es inglés, alto y muy simpático.", ["Mi amigo se llama Tom. Es inglés, alto y muy simpático.", "Mi amigo Tom es inglés. Es alto y muy simpático.", "Mi amigo Tom es inglés, es alto y muy simpático."], "Es for one person; inglés, alto and simpático match a man (inglesa, alta, simpática for a woman)."),
        26: speak(`${SAY} "My mother is tall and nice."`, "Mi madre es alta y simpática.", ["Mi mamá es alta y simpática."], "Madre is a woman, so alta and simpática."),
      },
    },
    reword: [["Ser is irregular — these forms just have to be memorized.", "Ser is irregular: these forms just have to be learned."]],
  },
};
