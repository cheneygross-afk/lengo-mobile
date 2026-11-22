// Synced from cheneygross-afk/lengo:src/lib/lessons/es-redesign/a2-unit3.ts by scripts/sync-content.mjs -- edit it there, not here.
// New course, A2 Unit 3 (small linking words · a before people · very, much,
// a little): content fixes from Claude's audit in Ricardo's format (Claude
// Feedback/Spanish (new course)/A2 Elementary/Unit 03). Section and question
// numbers are the lessons' own as they are now. Only content changes here:
// what is taught, asked and accepted. The answer checker and the rubric are
// untouched.
//
// Ten lessons built on later grammar moved (es-redesign-units.json): the por /
// para build-up to B1 Unit 4, the negation and -mente drills to B1 Unit 5,
// the past-tense personal a paragraph to B1 Unit 1 and the pronoun placement
// lessons to B1 Unit 2. The past tenses and object pronouns left the lessons
// that stay here.
import type { Exercise } from "../types";
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
const mc = (question: string, options: string[], correctIndex: number, explanation: string): Exercise => ({
  type: "multiple-choice",
  question,
  options,
  correctIndex,
  explanation,
});
const order = (sentence: string, translation: string, explanation: string): Exercise => ({
  type: "word-order",
  prompt: "Put the words in order.",
  words: sentence.split(" "),
  translation,
  explanation,
});
const SAY = "Say it in Spanish:";
const BOLD = "How do you say the bold words in Spanish?";
const FIX = "Fix the sentence.";
const CORRECT = "Correct the sentence.";

export const A2_UNIT3_PATCHES: Record<string, LessonPatch> = {
  "possessives-prepositions-drill-1": {
    goal: "use mi, tu, su and nuestro with the thing owned: mis llaves, nuestra casa.",
    summary: "My, your, his, our: the possessive matches the thing owned (mi libro, mis libros, nuestra casa), with lots of practice.",
    sections: {
      0: {
        body: [
          "Remember the rule: a Spanish possessive agrees with the thing owned, never with the owner. Mi, tu and su have no masculine or feminine form, so they stay the same before any singular noun.",
          "That's why \"his car\" and \"her car\" are both su carro: su looks at carro, not at the person who owns it.",
        ],
        examples: [
          { es: "mi libro / mi mesa", en: "my book / my table (no gender change)" },
          { es: "tu amigo / tu amiga", en: "your friend (m./f.)" },
          { es: "su carro", en: "his / her / your (formal) / their car" },
        ],
      },
      1: {
        examples: [
          { es: "mis libros", en: "my books" },
          { es: "tus amigas", en: "your friends (f.)" },
          { es: "sus carros", en: "his / her / your / their cars" },
        ],
      },
      2: {
        examples: [
          { es: "nuestro perro / nuestra perra", en: "our dog (m./f.)" },
          { es: "nuestros primos / nuestras primas", en: "our cousins (m./f.)" },
          { es: "vuestro carro / vuestra casa", en: "your (pl., Spain) car / house" },
        ],
      },
    },
    exercises: {
      replace: {
        14: tr("Translate to Spanish.", "our car", "nuestro carro", ["nuestro coche", "nuestro auto"], "Nuestro agrees with carro: masculine singular."),
        18: speak(`${SAY} "Is it your house? (tú)"`, "¿Es tu casa?", ["¿Esta es tu casa?", "¿Es esta tu casa?"], "One way to say it: \"¿Es tu casa?\". Tu has no feminine form: tu casa, tu libro."),
      },
    },
  },
  "possessives-prepositions-drill-2": {
    goal: "say where things are with cerca de, debajo de, al lado del and entre.",
    summary: "Place words (cerca de, debajo de, entre), the small words de, a, con, sin and para, and the joins al and del.",
    sections: {
      1: {
        heading: "De, a, con, sin, para",
        body: [
          "These small words cover origin (de), direction (a), company (con), absence (sin) and who gets something (para): para mi madre.",
          "Thanks for something is always gracias por: gracias por tu ayuda. Learn it as one phrase for now; the other uses of por come later.",
        ],
        examples: [
          { es: "de México", en: "from Mexico" },
          { es: "a la escuela", en: "to school" },
          { es: "con amigos / sin azúcar", en: "with friends / without sugar" },
          { es: "para mi madre", en: "for my mother (she gets it)" },
          { es: "gracias por tu ayuda", en: "thanks for your help (a fixed phrase)" },
        ],
        check: [
          mc("Este café es ___ ti. (This coffee is for you.)", ["para", "de", "con", "sin"], 0, "Para marks who something is for: para ti. \"De\" means of or from, \"con\" means with and \"sin\" means without."),
        ],
      },
    },
  },
  "possessives-prepositions-drill-3": {
    goal: "use a possessive and a place word in one sentence: Mi carro está al lado del parque.",
    summary: "Both in one sentence: a possessive that matches the thing owned and a place word with its de.",
    exercises: {
      replace: {
        2: speak(`${SAY} "Their car is far from our house"`, "Su carro está lejos de nuestra casa.", ["Su coche está lejos de nuestra casa.", "Su auto está lejos de nuestra casa."], "One way to say it: \"Su carro está lejos de nuestra casa\". Su (their) doesn't change for gender; nuestra agrees with the feminine casa; lejos de means \"far from\"."),
        5: { type: "translate", direction: "en-es", prompt: "Change the owner to \"we\".", source: "Mi carro está al lado del parque.", answer: "Nuestro carro está al lado del parque.", altAnswers: ["Nuestro coche está al lado del parque.", "Nuestro auto está al lado del parque."], explanation: "Our + carro (masculine singular) = nuestro carro. The place phrase doesn't change." },
        17: fill(BOLD, "Tu perro está debajo ___ carro.", "del", "Your dog is under [the] car.", "Debajo de + el → del."),
      },
    },
  },
  "personal-a": {
    parts: [
      { goal: "use a before a person you see, call or wait for: Veo a María.", summary: "Veo a María, but veo la casa: a goes before a specific person (or a named pet) who receives the action." },
      { goal: "tell when the a is left out: things, any person, tener and hay.", summary: "When not to use the personal a: things, places, any person, tener for family and hay." },
    ],
    sections: {
      1: {
        body: [
          "Why does Spanish need it? Spanish word order is freer than English, and the a tags the person who receives the action, so you always know who sees whom: Juan ve a María. Things can't be confused with the doer, so they don't need the tag.",
          "Remember that a combines with the article el to make al: Veo al profesor (a + el profesor = al profesor).",
        ],
        check: [
          mc("Ana asks: «¿A quién buscas?» Which answer fits?", ["A mi hermano.", "Mi hermano busca.", "Al mi hermano.", "De mi hermano."], 0, "¿A quién? asks which person, so the answer keeps the a: a mi hermano. A + mi never joins into al; only a + el does."),
          fill("Complete with a or al.", "Espero ___ médico en la sala.", "al", undefined, "Médico is a person, so he takes the personal a, and a + el always joins to make al. A el is never written, and a on its own would leave out the article."),
        ],
      },
      3: {
        examples: [
          { es: "Tengo dos hermanos.", en: "I have two brothers." },
          { es: "Tengo tres hijos.", en: "I have three children." },
          { es: "Tengo a mi hija en brazos.", en: "I have my daughter in my arms." },
          { es: "Tengo al perro en el carro.", en: "I have the dog in the car." },
        ],
      },
    },
    exercises: {
      replace: {
        12: tr("Translate to Spanish.", "I have two sisters and I visit my grandmother a lot.", "Tengo dos hermanas y visito mucho a mi abuela.", ["Tengo dos hermanas y visito a mi abuela mucho.", "Yo tengo dos hermanas y visito mucho a mi abuela."], "Tener for family takes no a (tengo dos hermanas); visitar + a specific person does (visito a mi abuela)."),
        17: mc("«¿A quién llama Laura?» What is the question?", ["Who is Laura calling?", "Who is calling Laura?", "Where is Laura calling from?", "When is Laura calling?"], 0, "A quién asks for the person who receives the action, so Laura is the one calling. Who is calling Laura would be ¿Quién llama a Laura?"),
      },
    },
  },
  "a2r-error-hunt-personal-a": {
    reword: [["fontanero", "plomero"]],
    sections: {
      0: {
        check: [
          mc("\"Llamo mi jefe todos los lunes.\" What's missing?", ["a before mi jefe", "the before jefe", "le before llamo", "nothing"], 0, "A specific person as direct object needs the personal a: llamo a mi jefe. It doesn't need an article or le, so it's not \"nothing\"."),
        ],
      },
    },
    exercises: {
      replace: {
        0: fill(FIX, "Hoy veo ___ Marta en el supermercado. (learner wrote: nothing)", "a", undefined, "A specific person → veo a Marta."),
        1: fill(FIX, "Espero ___ autobús en la esquina. (learner wrote: al)", "el", undefined, "A thing → no personal a: espero el autobús."),
        4: { type: "multi-select", question: "Which sentences are correct?", options: ["Ayudo a mi vecino.", "Escucho a la radio.", "Admiro a mi profesora.", "Tengo un amigo en Cuba."], correctIndexes: [0, 2, 3], explanation: "La radio is a thing, so escucho la radio, without a. The other three are correct: people take a, and tener usually doesn't." },
        7: tr(CORRECT, "Llamo mi madre todas las noches.", "Llamo a mi madre todas las noches.", ["Todas las noches llamo a mi madre.", "Llamo a mi mamá todas las noches."], "Mi madre is a specific person and the direct object of llamar, so she needs the personal a. English has no word for it, which is why it's so easy to drop."),
        13: tr("Translate to Spanish.", "We're looking for a plumber.", "Buscamos un plomero.", ["Buscamos un fontanero.", "Estamos buscando un plomero.", "Estamos buscando un fontanero."], "Any plumber, not a specific one, so no a: the person isn't an individual you know yet."),
        14: tr("Change it to your own plumber, Luis.", "Buscamos un plomero.", "Buscamos a nuestro plomero, Luis.", ["Buscamos a nuestro fontanero, Luis.", "Estamos buscando a nuestro plomero, Luis.", "Estamos buscando a nuestro fontanero, Luis."], "Once the plumber is a specific person you know (Luis), the personal a appears: buscamos a nuestro plomero."),
        15: mc("«Visito el museo y mi tía.» What's wrong?", ["Missing a before mi tía", "Extra a before el museo", "Should be al museo", "Nothing"], 0, "Visito el museo y a mi tía: the aunt is a specific person and needs a; the museum is a place and doesn't."),
        16: tr(CORRECT, "Admiro mucho mi padre.", "Admiro mucho a mi padre.", ["Admiro a mi padre mucho."], "Mi padre is a specific person receiving the admiration, so he takes the personal a."),
        17: tr("Make it negative.", "Veo a alguien en la fiesta.", "No veo a nadie en la fiesta.", [], "Alguien becomes nadie in a negative sentence, and no goes before the verb. Both keep the personal a: they refer to people."),
        20: order("Hoy acompaño a mi abuela al médico", "Today I'm going with my grandmother to the doctor", "Acompañar a + person (personal a); a + el médico = al médico (where you go)."),
        21: tr("Translate to Spanish.", "Do you see someone in the garden? (tú)", "¿Ves a alguien en el jardín?", [], "Alguien refers to a person, so as a direct object it takes a."),
      },
    },
  },
  "a2d-personal-a-sort": {
    exercises: {
      replace: {
        0: fill("A or nothing? (write a, al, or –): \"I visit my grandparents on Sundays.\"", "Visito ___ mis abuelos los domingos.", "a", undefined, "Mis abuelos are specific people as direct object, so the personal a: visito a mis abuelos."),
        1: fill("A or nothing? (write a, al, or –): \"I'm calling the plumber to fix the shower.\"", "Llamo ___ plomero para arreglar la ducha.", "al", undefined, "Specific person: a + el = al."),
        2: mc("«Busco ___ mesero.» (any waiter)", ["un (no a)", "a un", "al", "a el"], 0, "An unspecified person (any waiter) usually takes no personal a: busco un mesero. \"A un\" is possible but suggests a specific one, and \"al\" and \"a el\" mean the waiter."),
        7: order("Hoy voy a conocer al novio de mi hermana.", "Today I'm going to meet my sister's boyfriend.", "A + el = al: the boyfriend is a specific person."),
        11: fill(BOLD, "Hoy visitamos ___ catedral.", "la", "Today we're visiting [the] cathedral.", "A place → no a: la catedral. A la catedral would wrongly treat it like a person."),
        19: tr("Translate to Spanish.", "I have my son in the car.", "Tengo a mi hijo en el carro.", ["Tengo a mi hijo en el coche.", "Tengo a mi hijo en el auto."], "Here tener means having someone physically with you, so the personal a appears."),
        22: tr("Translate to Spanish.", "We invite our neighbors to dinner.", "Invitamos a nuestros vecinos a cenar.", ["Invitamos a nuestros vecinos a la cena."], "Invitar + people → personal a. The second a just means 'to' (a cenar)."),
        25: tr("Change 'la catedral' to 'mi abuela'.", "Visito la catedral.", "Visito a mi abuela.", [], "A place takes no a, but a specific person does: visito a mi abuela."),
        26: {
          type: "write",
          prompt: "Your cat is lost. Write a notice for your building: describe the cat, say where you're looking for it, and say you're also looking for someone to feed your other cats.",
          minWords: 25,
          maxWords: 60,
          rubric: ["Personal a with a specific person or pet (busco a mi gato)", "No a with someone non-specific (busco una persona…)", "A description of the pet", "Contact details"],
          modelAnswer: "¡Ayuda! Busco a mi gato, Bigotes. Es gris y blanco y tiene un collar rojo. Busco en el jardín y en la calle todos los días. ¿Alguien ve a mi gato? También busco una persona para cuidar a mis otros gatos este fin de semana. Vivo en el tercer piso, apartamento 3.",
          explanation: "A specific person or pet takes a (busco a mi gato, cuidar a mis gatos); someone you haven't found yet doesn't (busco una persona).",
        },
      },
    },
  },
  "a2g-muy-vs-mucho": {
    sections: {
      0: {
        check: [
          mc("\"The exam is very difficult.\"", ["El examen es muy difícil.", "El examen es mucho difícil.", "El examen es muy mucho difícil.", "El examen es mucha difícil."], 0, "Difícil is an adjective, so it takes muy. Mucho goes with nouns and verbs, never directly before an adjective."),
        ],
      },
      1: {
        body: [
          "Before a noun, mucho means \"a lot of, much, many\" and agrees with the noun like an adjective: mucho trabajo, mucha gente, muchos libros, muchas veces.",
          "After a verb, mucho means \"a lot\" and doesn't change: Trabajo mucho. Ella lee mucho. Llueve mucho.",
          "Some ideas that are adjectives in English are nouns in Spanish, so they take mucho: tengo mucho frío (I'm very cold), tengo mucha hambre (I'm very hungry), tengo mucho sueño, hace mucho calor.",
          "Poco (little, not much) works just like mucho: tengo poco tiempo, pocas personas, como poco. Before a describing word, say un poco: estoy un poco cansado (a bit tired).",
        ],
      },
      2: {
        body: [
          "Before más, menos, mejor and peor, use mucho, not muy: mucho mejor (much better), mucho más barato (much cheaper), mucho menos. (Muy mayor on its own is fine: it means very old, elderly.)",
          "Muchísimo is \"really a lot\": Te quiero muchísimo. Muy can become -ísimo on the adjective: muy caro → carísimo.",
          "A common mistake is \"muy mucho\". Standard Spanish doesn't put them together: say muchísimo instead.",
        ],
        examples: [
          { es: "Este hotel es mucho mejor.", en: "This hotel is much better." },
          { es: "El tren es mucho más rápido.", en: "The train is much faster." },
          { es: "Me gusta muchísimo.", en: "I like it very much." },
          { es: "El departamento es carísimo.", en: "The apartment is really expensive." },
        ],
      },
    },
    exercises: {
      replace: {
        2: fill(BOLD, "Hoy hay ___ carros en la calle.", "muchos", "There are [a lot of] cars on the street today.", "Before a noun, mucho agrees with it: carros is masculine plural, so muchos."),
        3: fill(BOLD, "Los domingos duermo ___ y el lunes estoy bien.", "mucho", "On Sundays I sleep [a lot] and on Monday I feel fine.", "After a verb (duermo), \"a lot\" is mucho, and it doesn't change form."),
        21: tr("Make it stronger: much bigger.", "Mi casa es más grande.", "Mi casa es mucho más grande.", [], "Before más, menos, mejor and peor, 'much' is mucho, never muy."),
      },
      add: [
        fill(BOLD, "Hoy tengo ___ tiempo para comer.", "poco", "Today I have [little] time to eat.", "Poco works like mucho: before a noun it matches it, and tiempo is masculine singular."),
        tr("Translate to Spanish.", "I'm a bit tired, but I'm very happy.", "Estoy un poco cansado, pero estoy muy contento.", ["Estoy un poco cansada, pero estoy muy contenta.", "Estoy un poco cansado pero estoy muy contento.", "Estoy un poco cansada pero estoy muy contenta.", "Estoy un poco cansado, pero muy contento.", "Estoy un poco cansada, pero muy contenta."], "Un poco before a describing word means a bit; muy means very. Neither changes form."),
      ],
    },
  },
};
