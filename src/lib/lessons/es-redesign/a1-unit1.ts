// Synced from cheneygross-afk/lengo:src/lib/lessons/es-redesign/a1-unit1.ts by scripts/sync-content.mjs -- edit it there, not here.
// New course, A1 Unit 1: content fixes from Claude's audit in Ricardo's
// format (Claude Feedback/Spanish (new course)/A1 Beginner/Unit 01). They add
// to the Beginner patches in a1.ts (merged section by section in index.ts).
// Section numbers are the lesson's own; question numbers are its practice
// questions (lesson.exercises). Only content changes here: what is taught,
// asked and accepted. The answer checker and the rubric are untouched.
import type { Exercise, LessonSection } from "../types";
import type { LessonPatch } from "./patch";

const speak = (prompt: string, text: string, altAnswers: string[], explanation: string, section?: number): Exercise => ({
  type: "speak",
  prompt,
  text,
  ...(altAnswers.length ? { altAnswers } : {}),
  explanation,
  ...(section === undefined ? {} : { meta: { section } }),
});
const at = (section: number, e: Exercise): Exercise => ({ ...e, meta: { ...e.meta, section } });

// Greetings, Subject Pronouns & Ser, Part 2: yes/no questions and answers,
// so the first part (no, questions) teaches what it practises.
const YES_NO: LessonSection = {
  heading: "Yes or no: asking and answering",
  body: [
    "Answer a yes/no question with sí or no, then the sentence: ¿Eres de aquí? Sí, soy de aquí. To say no, Spanish often says no twice: No, no soy de aquí. The first no answers the question; the second makes the verb negative.",
    "Ask about someone else the same way: ¿Ana es de Chile? No, no es de Chile. Es de Perú. Only your rising voice (and the ¿? in writing) makes it a question.",
  ],
  examples: [
    { es: "¿Eres estudiante? Sí, soy estudiante.", en: "Are you a student? Yes, I'm a student." },
    { es: "¿Es usted de México? No, no soy de México.", en: "Are you from Mexico? No, I'm not from Mexico." },
    { es: "¿Ana es de Chile? No, es de Perú.", en: "Is Ana from Chile? No, she's from Peru." },
  ],
  tables: [{ caption: "Yes or no", head: ["Question", "Yes", "No"], rows: [["¿Eres de aquí?", "Sí, soy de aquí.", "No, no soy de aquí."], ["¿Es profesora?", "Sí, es profesora.", "No, no es profesora."]] }],
  reteach: "Sí or no answers first; then the sentence. For no, the verb gets its own no as well: No, no soy de aquí. Questions keep the order of the plain sentence: ¿Eres de aquí?",
  checkpoint: [
    {
      type: "multiple-choice",
      question: "Someone asks \"¿Eres de Colombia?\" You're not. Which answer is right?",
      options: ["No, no soy de Colombia.", "No, soy no de Colombia.", "No, no eres de Colombia.", "Sí, no soy de Colombia."],
      correctIndex: 0,
      explanation: "No answers the question, and a second no goes right before the verb: no soy. \"Soy no\" puts it after the verb, \"no eres\" talks about the other person, and sí means yes.",
      optionNotes: ["", "No goes before the verb, never after it: no soy.", "You're answering about yourself, so the verb is soy, not eres.", "Sí means yes; you mean no."],
    },
  ],
};

// mi / tu got their own card (it was the fifth paragraph of the jobs card).
const MY_YOUR: LessonSection = {
  heading: "My and your: mi and tu",
  body: [
    "Mi = my, tu = your (to a friend). They don't change for a man or a woman: mi amigo, mi amiga. With more than one, add -s: mis amigos, tus amigas. Careful: tu (your) has no accent mark; tú (you) has one.",
  ],
  examples: [
    { es: "Mi amiga es de Perú. Mis amigos son de Chile.", en: "My friend is from Peru. My friends are from Chile." },
    { es: "¿Tu profesor es de aquí?", en: "Is your teacher from here?" },
  ],
  reteach: "Mi and tu stay the same for a man or a woman: mi amigo, mi amiga. They add -s for more than one: mis amigos. Tu (your) has no accent mark; tú (you) does.",
  checkpoint: [
    {
      type: "fill-blank",
      prompt: "How do you say the bold words in Spanish?",
      sentence: "___ amiga es de Perú.",
      en: "[My] friend is from Peru.",
      answer: "Mi",
      explanation: "Mi = my, the same for amigo and amiga.",
    },
    {
      type: "multiple-choice",
      question: "Which sentence means \"Your friend is from Chile\"?",
      options: ["Tu amigo es de Chile.", "Tú amigo es de Chile.", "Tu amigo eres de Chile.", "Tus amigo es de Chile."],
      correctIndex: 0,
      explanation: "Tu (your) has no accent mark, and the verb follows the friend: es. Tú with the accent means \"you\", eres is for tú, and tus is only for more than one friend.",
      optionNotes: ["", "Tú with an accent mark means \"you\"; \"your\" is tu.", "The friend is él or ella, so the verb is es.", "Tus is for more than one: tus amigos."],
    },
  ],
};

export const A1_UNIT1_PATCHES: Record<string, LessonPatch> = {
  // L01-L02 in the new course.
  "greetings-pronouns-ser-1": {
    parts: [
      { summary: "Introduce yourself, meet every form of ser (to be), and choose between tú and usted.", goal: "introduce yourself, use the right form of ser for each person, and choose tú or usted." },
      { summary: "Use ser for your name, where you're from and your job, and greet people at the right time of day.", goal: "say your name, where you're from and your job with ser, and greet people by the time of day." },
    ],
    sections: {
      3: {
        body: [
          "Spanish is the main language of 21 countries and territories. Speakers everywhere understand each other: like British and American English, they differ in sound and some words, not the basics.",
          "The big grammar difference is \"you all\". Spain says vosotros (sois) to friends and ustedes (son) to strangers. Latin America says ustedes (son) to everyone. This course uses Latin American Spanish, so you'll say ustedes; you only need to recognize vosotros.",
          "Good to know: in Argentina, Uruguay and parts of Central America, people say vos instead of tú (vos sos = tú eres). You'll understand it when you hear it; this course uses tú.",
        ],
      },
      5: {
        examples: [
          { es: "Buenas noches.", en: "Good evening. / Good night. (after dark, hello or goodbye)" },
          { es: "Me llamo Ana. ¿Cómo te llamas?", en: "My name is Ana. What's your name? (to a friend)" },
          { es: "¿Cómo se llama usted?", en: "What's your name? (to a stranger: se goes with usted)" },
          { es: "Mucho gusto.", en: "Nice to meet you." },
          { es: "Encantado. / Encantada.", en: "Nice to meet you. (said by a man / by a woman)" },
          { es: "¿Cómo estás? Bien, gracias. ¿Y tú?", en: "How are you? Fine, thanks. And you? (to a friend)" },
        ],
      },
    },
    exercises: {
      section: { 0: 2, 1: 1, 2: 1, 3: 1, 4: 1, 5: 2, 6: 1, 7: 1, 8: 2, 9: 4, 10: 5, 11: 5, 12: 4, 13: 5, 14: 5, 15: 3, 16: 5 },
      replace: {
        11: {
          type: "speak",
          prompt: "Say it in Spanish: \"Good morning! My name is Pablo\"",
          text: "¡Buenos días! Me llamo Pablo.",
          altAnswers: ["¡Buenos días! Soy Pablo.", "¡Buenos días! Mi nombre es Pablo.", "¡Buen día! Me llamo Pablo.", "Buenos días, me llamo Pablo.", "Buenos días, yo soy Pablo.", "Buenos días, yo me llamo Pablo."],
          explanation: "Buenos días until lunchtime; me llamo literally means \"I call myself\". Soy Pablo and Mi nombre es Pablo are also correct.",
        },
        14: {
          type: "speak",
          prompt: "Say it in Spanish: \"Nice to meet you, I'm from Canada\"",
          text: "Mucho gusto, soy de Canadá.",
          altAnswers: ["Encantado, soy de Canadá.", "Encantada, soy de Canadá.", "Mucho gusto, yo soy de Canadá.", "Encantado, yo soy de Canadá.", "Encantada, yo soy de Canadá."],
          explanation: "Mucho gusto (or encantado / encantada) = nice to meet you; origin is ser + de: soy de.",
        },
        16: speak(
          "Answer out loud as Sam from Canada: someone asks \"¡Hola! ¿Cómo te llamas? ¿De dónde eres?\"",
          "Me llamo Sam y soy de Canadá.",
          ["¡Hola! Me llamo Sam y soy de Canadá.", "Hola, me llamo Sam. Soy de Canadá.", "Me llamo Sam. Soy de Canadá.", "Soy Sam y soy de Canadá.", "Hola, soy Sam y soy de Canadá.", "Hola, soy Sam. Soy de Canadá.", "Soy Sam. Soy de Canadá.", "Hola, yo soy Sam y soy de Canadá.", "Hola, me llamo Sam y yo soy de Canadá."],
          "Answer each question with the yo form of its verb: te llamas → me llamo, eres → soy de. In real life, use your own name and country.",
          5,
        ),
      },
      drop: [17],
      add: [
        {
          type: "multiple-choice",
          question: "In Madrid, a friend asks your group \"¿De dónde sois?\" What is she asking?",
          options: ["Where are you all from?", "Where are we from?", "Where are they from?", "Where is she from?"],
          correctIndex: 0,
          explanation: "Sois is Spain's vosotros form: \"you all\" among friends. In Latin America the same question is ¿De dónde son ustedes? You only need to understand sois.",
          meta: { section: 3 },
        },
        speak(
          "Say it in Spanish: \"Hello, my name is Ana.\"",
          "Hola, me llamo Ana.",
          ["Hola, soy Ana.", "Hola, mi nombre es Ana.", "Hola, yo soy Ana.", "Hola, yo me llamo Ana."],
          "Hola, me llamo Ana is the most common way. Hola, soy Ana and Hola, mi nombre es Ana are just as right.",
          0,
        ),
        speak("Say it in Spanish: \"I'm from Argentina.\"", "Soy de Argentina.", ["Yo soy de Argentina."], "Soy can only mean \"I am\", so yo is optional: Soy de Argentina.", 1),
        speak(
          "Say it in Spanish to an older stranger (formal): \"Are you from here?\"",
          "¿Usted es de aquí?",
          ["¿Es usted de aquí?", "¿Es de aquí?"],
          "To a stranger, use usted with es: ¿Usted es de aquí? or ¿Es usted de aquí? To a friend it would be ¿Eres de aquí?",
          2,
        ),
        speak(
          "Say it in Spanish, the Latin American way: \"Where are you all from?\"",
          "¿De dónde son ustedes?",
          ["¿Ustedes de dónde son?", "¿De dónde son?"],
          "Latin America uses ustedes son for every \"you all\". In Spain, friends would hear ¿De dónde sois?",
          3,
        ),
        speak(
          "Say it in Spanish: \"She's from Mexico, and she's a doctor.\"",
          "Ella es de México y es doctora.",
          ["Es de México y es doctora.", "Ella es de México y ella es doctora.", "Ella es de México. Es doctora.", "Es de México. Es doctora.", "Ella es de México y es médica."],
          "Ser for origin (es de) and for a job (es doctora), with no una before the job. Doctor adds -a for a woman.",
          4,
        ),
        at(4, { type: "fill-blank", prompt: "Write the job for a woman.", sentence: "Marta es ___. (profesor)", en: "Marta is [a teacher].", answer: "profesora", altAnswers: ["maestra"], explanation: "Profesor ends in a consonant, so a woman is profesora. No una before a plain job." }),
        at(5, { type: "translate", prompt: "Make it formal.", direction: "en-es", source: "¿Cómo te llamas?", answer: "¿Cómo se llama usted?", altAnswers: ["¿Cómo se llama?"], explanation: "Te goes with tú; with usted it's se: ¿Cómo se llama usted? Usted can be left out." }),
      ],
    },
  },

  // L03-L04 in the new course.
  "greetings-pronouns-ser-2": {
    summary: "Say what you're not with no, ask and answer yes/no questions, and name people's jobs for a man or a woman.",
    parts: [
      { summary: "Say what you're not with no, and ask and answer yes/no questions.", goal: "say what you're not with no, and ask and answer yes/no questions." },
      { summary: "Name people's jobs for a man or a woman, say my and your, and follow a first conversation.", goal: "name people's jobs for a man or a woman, use mi and tu, and follow a first conversation." },
    ],
    insert: [
      { before: 1, section: YES_NO },
      { before: 2, section: MY_YOUR },
    ],
    sections: {
      1: {
        body: [
          "Words for people follow a pattern you can apply to words you've never seen. Ending in -o? Change it to -a for a woman: abogado → abogada. Ending in a consonant? Add -a: profesor → profesora, doctor → doctora. Ending in -e or -ista? It usually stays the same, and only el/la shows who you mean: el estudiante, la estudiante, el artista, la artista.",
          "These are patterns, not laws: a few words keep one form (la piloto, la joven), and a few -e words change (el jefe → la jefa).",
          "Plurals work like every noun: -s after a vowel, -es after a consonant (profesores). A mixed group of men and women takes the masculine: Diego y Sofía son músicos.",
          "Remember from Part 1: after ser, a job has no un/una. Soy enfermera, not soy una enfermera.",
        ],
        examples: [
          { es: "Él es abogado. Ella es abogada.", en: "He's a lawyer. She's a lawyer. (-o → -a)" },
          { es: "Mi vecina es escritora.", en: "My neighbor is a writer. (consonant + a)" },
          { es: "Pablo es estudiante y Marta también.", en: "Pablo is a student and so is Marta. (-e: same word for both)" },
          { es: "Ellos son profesores.", en: "They are teachers. (consonant + es; a mixed group is masculine)" },
        ],
        tables: [{ caption: "Words for people: man → woman", head: ["Ending", "Change", "Example"], rows: [["-o", "-o → -a", "abogado → abogada"], ["consonant", "add -a", "profesor → profesora"], ["-e or -ista", "usually no change", "estudiante, dentista"]], note: "A few words break the pattern: el jefe → la jefa, la piloto." }],
        check: [
          {
            type: "multiple-choice",
            question: "A man who paints is a pintor. What is a woman who paints?",
            options: ["pintora", "pintoro", "pintor", "pintera"],
            correctIndex: 0,
            explanation: "Pintor ends in a consonant, so the feminine adds -a: pintora, like profesora and doctora. It doesn't swap to -o first, and only -e and -ista words usually stay the same.",
          },
          {
            type: "multi-select",
            question: "These words are new. Which ones are the same for a man and a woman?",
            options: ["dentista (dentist)", "cantante (singer)", "mesero (waiter)", "pianista (pianist)", "director (director)"],
            correctIndexes: [0, 1, 3],
            explanation: "Words ending in -ista, and most ending in -e, don't change: el/la dentista, el/la cantante, el/la pianista. Mesero ends in -o (mesera) and director in a consonant (directora).",
          } as Exercise,
        ],
      },
      2: {
        addCheck: [
          {
            type: "matching",
            instructions: "Match each word to its meaning.",
            pairs: [
              { left: "nombre", right: "name" },
              { left: "apellido", right: "last name" },
              { left: "profesión", right: "profession" },
              { left: "vecino/a", right: "neighbor" },
            ],
            explanation: "Your nombre is your first name and your apellido your last name. Vecino changes for a woman (vecina); nombre, apellido and profesión are things, with one fixed gender.",
          } as Exercise,
        ],
      },
      3: { body: ["Read the exchange, then answer two questions about it."] },
    },
    exercises: {
      // 0-3 greetings and questions, 4-20 jobs (final section numbers, after the two inserted sections).
      section: { 0: 1, 1: 1, 3: 1, 4: 4, 5: 2, 6: 2, 7: 2, 8: 2, 9: 2, 10: 2, 11: 2, 12: 4, 13: 4, 14: 4, 15: 2, 16: 4, 17: 4, 18: 2, 19: 2, 20: 4, 21: 0 },
      replace: {
        0: {
          type: "translate",
          prompt: "Translate to Spanish.",
          direction: "en-es",
          source: "Good evening! What's your name? (informal)",
          answer: "¡Buenas noches! ¿Cómo te llamas?",
          altAnswers: ["Buenas noches, ¿cómo te llamas?", "¡Buenas noches! ¿Cómo te llamas tú?", "Buenas noches, ¿cómo te llamas tú?", "¡Buenas noches! ¿Cuál es tu nombre?", "Buenas noches, ¿cuál es tu nombre?"],
          explanation: "Buenas noches is also a greeting after dark. To a friend, ¿Cómo te llamas? (te goes with tú). ¿Cuál es tu nombre? is right too.",
        } as Exercise,
        4: {
          type: "translate",
          prompt: "Translate to English.",
          direction: "es-en",
          source: "Ellas son compañeras y son extranjeras.",
          answer: "They are classmates and they are foreigners.",
          altAnswers: [
            "They are coworkers and they are foreigners.", "They are classmates and they are foreign.", "They are coworkers and they are foreign.", "They're classmates and they're foreigners.",
            "They are classmates and foreigners.", "They're classmates and foreigners.", "They are coworkers and foreigners.", "They're coworkers and foreigners.", "They're coworkers and they're foreigners.",
            "They are foreign classmates.", "They are foreign coworkers.",
          ],
          explanation: "Compañera = classmate or coworker (a woman); extranjera = foreigner. Ellas takes son.",
        } as Exercise,
        21: speak("Say it in Spanish: \"I'm not from here.\"", "No soy de aquí.", ["Yo no soy de aquí."], "No goes right before the verb: no soy. Spanish needs no extra word like \"don't\".", 0),
      },
      drop: [2],
      add: [
        at(0, { type: "fill-blank", prompt: "How do you say the bold words in Spanish?", sentence: "___ me llamo Ana. Me llamo Sara.", en: "My name [isn't] Ana. My name is Sara.", answer: "No", explanation: "No goes before me, te or se: No me llamo Ana. \"Me no llamo\" is never right." }),
        at(0, { type: "word-order", prompt: "Put the words in order.", words: ["Ella", "no", "es", "profesora"], translation: "She isn't a teacher", explanation: "No goes right before the verb: ella no es. Still no una before the job." } as Exercise),
        at(0, { type: "translate", prompt: "Translate to Spanish.", direction: "en-es", source: "We aren't from here.", answer: "No somos de aquí.", altAnswers: ["Nosotros no somos de aquí.", "Nosotras no somos de aquí."], explanation: "No before the verb: no somos. Nosotros is optional, because somos already means \"we are\"." }),
        at(1, { type: "translate", prompt: "Translate to Spanish (to a friend).", direction: "en-es", source: "Are you a student?", answer: "¿Eres estudiante?", altAnswers: ["¿Tú eres estudiante?", "¿Eres tú estudiante?"], explanation: "No \"do\" and no swap: the plain sentence Eres estudiante becomes a question with ¿? and a rising voice." }),
        at(1, { type: "translate", prompt: "Answer the question with no, in a full sentence.", direction: "en-es", source: "¿Es usted de México?", answer: "No, no soy de México.", altAnswers: ["No, yo no soy de México.", "No. No soy de México.", "No soy de México."], explanation: "The question uses usted, so you answer about yourself: soy. No answers the question, and a second no goes before the verb." }),
        at(1, {
          type: "translate",
          prompt: "Translate to Spanish.",
          direction: "en-es",
          source: "Is Ana from Chile? No, she's from Peru.",
          answer: "¿Ana es de Chile? No, es de Perú.",
          altAnswers: ["¿Es Ana de Chile? No, es de Perú.", "¿Ana es de Chile? No, ella es de Perú.", "¿Es Ana de Chile? No, ella es de Perú.", "¿Ana es de Chile? No, no es de Chile, es de Perú.", "¿Es Ana de Chile? No, no es de Chile, es de Perú."],
          explanation: "Ana es de Chile becomes a question just by the ¿? (or by moving es first). The answer about Ana uses es.",
        }),
        speak("Say it in Spanish: \"My name isn't Ana.\"", "No me llamo Ana.", ["Yo no me llamo Ana.", "Mi nombre no es Ana."], "No goes before me: no me llamo. \"Me no llamo\" is never right.", 0),
        speak("Answer out loud with no: \"¿Eres de aquí?\" (Say: \"No, I'm not from here.\")", "No, no soy de aquí.", ["No, yo no soy de aquí.", "No soy de aquí."], "The first no answers the question; the second goes right before the verb: no soy.", 1),
        speak("Say it in Spanish: \"My friend Ana is a doctor.\"", "Mi amiga Ana es doctora.", ["Mi amiga Ana es médica."], "Mi doesn't change for a woman, but the job does: doctor → doctora. No una after ser.", 2),
        speak("Answer out loud as Diego, from Colombia: \"¿De dónde eres?\"", "Soy de Colombia.", ["Yo soy de Colombia.", "De Colombia."], "The answer mirrors the question: ¿De dónde eres? → Soy de... In real life, say your own country.", 5),
      ],
    },
  },

  // L05-L06 in the new course.
  "gender-number-articles-1": {
    parts: [
      { summary: "Learn why every Spanish noun is masculine or feminine, and pick the right article: el, la, un, una, unos or unas.", goal: "tell masculine from feminine nouns by their ending and pick el, la, un, una, unos or unas." },
      { summary: "Make nouns plural, choose the gender of a group of people, and make the words around a noun agree with it.", goal: "make nouns plural, describe a group with the right gender, and make articles and describing words agree." },
    ],
    // The lesson's own review section: the new course opens every lesson with its own warm-up.
    dropSections: [0],
    sections: {
      5: {
        check: [
          {
            type: "multiple-choice",
            question: "Mesa (table) is feminine. Which sentence agrees all the way through? (white = blanco / blanca)",
            options: ["La mesa es blanca.", "La mesa es blanco.", "El mesa es blanca.", "El mesa es blanco."],
            correctIndex: 0,
            explanation: "A feminine noun makes the whole sentence feminine: la for the article and blanca for the describing word. Each wrong option breaks the chain somewhere.",
          },
          {
            type: "fill-blank",
            prompt: "Complete with the right form of bonito (pretty).",
            sentence: "Los sombreros son ___.",
            en: "The hats are [pretty].",
            answer: "bonitos",
            explanation: "Sombrero (hat) ends in -o, so it's masculine, and here it's plural: los sombreros, so bonitos (bonito + s).",
          },
        ],
      },
    },
    exercises: {
      section: { 0: 1, 1: 2, 2: 2, 3: 2, 4: 3, 5: 3, 6: 3, 7: 2, 8: 3, 9: 2, 10: 3, 11: 2, 12: 5, 13: 3, 14: 2, 15: 4, 16: 5, 17: 4 },
      replace: {
        12: { type: "translate", prompt: "Translate to Spanish.", direction: "en-es", source: "The house is pretty.", answer: "La casa es bonita.", altAnswers: ["La casa es linda."], explanation: "Casa is feminine, so la casa, and the word describing it ends in -a too. Linda is right too.", meta: { section: 5 } } as Exercise,
        16: speak("Say it in Spanish: \"The door is pretty.\"", "La puerta es bonita.", ["La puerta es linda."], "Puerta is feminine, so la puerta and bonita (or linda): feminine all the way.", 5),
      },
      add: [
        speak("Say it in Spanish: \"a university and a window\"", "una universidad y una ventana", [], "-dad words are always feminine (una universidad), and ventana ends in -a (una ventana).", 1),
        speak("Say it in Spanish: \"a cat and some flowers\"", "un gato y unas flores", ["un gato y algunas flores"], "Gato is masculine (un); flor is feminine (unas flores, plural with -es).", 2),
        speak("Say it in Spanish: \"The book is Ana's.\"", "El libro es de Ana.", [], "Libro ends in -o: el libro. The owner comes after de.", 2),
        speak("Say it in Spanish: \"the pencils and the cities\"", "los lápices y las ciudades", [], "Lápiz → lápices (z becomes c before -es); ciudad → ciudades.", 3),
        at(3, { type: "multiple-choice", question: "What is the plural of el lápiz (pencil)?", options: ["los lápices", "los lápizes", "los lápiz", "las lápices"], correctIndex: 0, explanation: "A final z becomes c before -es: lápiz → lápices. Lápiz is masculine, so los.", optionNotes: ["", "Before -es, z changes to c: lápices.", "A noun ending in a consonant adds -es in the plural.", "Lápiz is masculine: los lápices."] } as Exercise),
        at(4, { type: "fill-blank", prompt: "Complete with ellos or ellas.", sentence: "Marta y Ana son de Chile. ___ son amigas.", en: "Marta and Ana are from Chile. [They] are friends.", answer: "Ellas", explanation: "Only women, so ellas. With one man in the group it would be ellos." }),
        at(5, { type: "translate", prompt: "Make it plural.", direction: "en-es", source: "La puerta es bonita.", answer: "Las puertas son bonitas.", altAnswers: ["Las puertas son lindas."], explanation: "Everything that goes with the noun goes plural: las, puertas, son, bonitas." }),
      ],
    },
  },

  // L07 in the new course.
  "gender-number-articles-2": {
    summary: "Learn nouns whose ending doesn't tell their gender, twenty words around the house, hay (there is, there are) and de for whose things are, then read a short classroom description.",
    dropSections: [0],
    sections: {
      // Now the lesson's first card (after the warm-up): it opens with the rule, then the nouns that don't follow it.
      1: {
        watchOut: false,
        body: [
          "Most of the time the ending tells you the gender: -o is masculine (el libro), -a is feminine (la mesa). When the ending doesn't give it away (la pared, el reloj, el sofá, el jardín), the article is the only way to know. So learn la pared, not just pared: the article is part of the word.",
          "A few more nouns break the -o/-a pattern, so learn them with their article too: el mapa and el problema are masculine (many -ma words are), and la foto is feminine (short for la fotografía).",
        ],
      },
      4: {
        body: [
          "Household nouns, each with its article. Most -a nouns take la and most -o nouns take el, but watch la pared, el reloj, el sofá and el jardín, whose endings don't give the gender away.",
          "Spelling tip: some nouns drop their written accent mark in the plural: el jardín → los jardines, like la canción → las canciones. Others keep it: el sofá → los sofás. Learn each plural as you meet it.",
        ],
      },
      5: {
        body: ["Read this short classroom description in Spanish, then answer the questions. New word: grande (big), plural grandes. The English comes after you answer."],
        check: [
          {
            type: "multiple-choice",
            question: "According to the passage, how many chairs are there?",
            options: ["none", "one", "two", "three"],
            correctIndex: 1,
            explanation: "Una silla = one chair; dos mesas = two tables. The passage: \"In the classroom there is a book, two tables and a chair. The book is Pedro's. The tables are big.\"",
          },
          {
            type: "multiple-choice",
            question: "According to the passage, what is Pedro's?",
            options: ["the book", "the tables", "the chair", "the classroom"],
            correctIndex: 0,
            explanation: "El libro es de Pedro: the book is Pedro's. The tables are only described: they're big.",
          },
        ],
      },
    },
    exercises: {
      replace: {
        4: { type: "multiple-choice", question: "What is the plural of el jardín (garden)?", options: ["los jardines", "los jardínes", "las jardines", "los jardín"], correctIndex: 0, explanation: "Jardín ends in a consonant, so it adds -es, and the accent mark drops: los jardines, like canción → canciones.", optionNotes: ["", "The accent mark drops in the plural: jardines.", "Jardín is masculine: los jardines.", "A noun ending in a consonant adds -es in the plural."] } as Exercise,
        6: { type: "translate", prompt: "Correct the sentence.", direction: "en-es", source: "Hay dos jardínes.", answer: "Hay dos jardines.", explanation: "The plural of jardín is jardines, with no accent mark, like canción → canciones." } as Exercise,
        7: speak("Say it in Spanish: \"There's a mirror in the bathroom.\"", "Hay un espejo en el baño.", ["En el baño hay un espejo."], "Espejo ends in -o and is masculine: un espejo. The place can come first or last.", undefined),
        10: speak("Say it in Spanish: \"There are two windows and a door.\"", "Hay dos ventanas y una puerta.", ["Hay una puerta y dos ventanas."], "One hay for \"there is\" and \"there are\". Ventana and puerta are both feminine.", undefined),
        14: speak(
          "Answer out loud: someone asks \"¿Qué hay en tu dormitorio?\" Say there's a bed, a closet and a lamp.",
          "En mi dormitorio hay una cama, un clóset y una lámpara.",
          ["Hay una cama, un clóset y una lámpara.", "Hay una cama, un clóset y una lámpara en mi dormitorio.", "En mi dormitorio hay una cama, un armario y una lámpara.", "Hay una cama, un armario y una lámpara.", "En mi cuarto hay una cama, un clóset y una lámpara."],
          "One hay covers the whole list. Use un/una with each new thing: una cama, un clóset, una lámpara.",
          undefined,
        ),
        15: speak(
          "Say it in Spanish: \"There's a bed in the bedroom.\"",
          "Hay una cama en el dormitorio.",
          ["En el dormitorio hay una cama.", "Hay una cama en el cuarto.", "En el cuarto hay una cama.", "Hay una cama en la habitación.", "En la habitación hay una cama.", "Hay una cama en la recámara.", "En la recámara hay una cama."],
          "Hay + una for something new: una cama. The place can come first or last.",
          undefined,
        ),
      },
    },
  },

  // L08 in the new course.
  "a1r-dialogue-first-meetings": {
    summary: "Walk through five real first conversations: greetings, names, where people are from, jobs, and tú or usted.",
    sections: {
      0: { addCheck: [{ type: "dictation", audio: "Soy de México.", explanation: "Soy de México: \"I'm from Mexico\". México has a written accent on the é, and the x sounds like a Spanish j." } as Exercise] },
      1: { addCheck: [{ type: "listen-choose", audio: "¿De dónde eres?", question: "Listen. What is the person asking?", options: ["What's your name?", "Where do you live?", "Who are you?", "Where are you from?"], correctIndex: 3, explanation: "¿De dónde eres? is \"Where are you from?\" (to someone you call tú). The answer starts with Soy de..." } as Exercise] },
      2: {
        body: ["Now Diego meets Lucía's grandfather. With an older stranger, Spanish speakers usually switch from tú to usted, and the verb switches with it: usted takes the él / ella form. Señor or señora, said to the person, sits between commas: Buenas tardes, señor."],
        check: [
          {
            type: "multiple-choice",
            question: "Which question should Diego use with Lucía's grandfather?",
            options: ["¿De dónde eres tú?", "¿De dónde son ustedes?", "¿De dónde soy yo?", "¿De dónde es usted?"],
            correctIndex: 3,
            explanation: "With one older person you're being polite to, use usted, and usted takes the él/ella form of ser: es. Eres is for a friend, son ustedes for a group.",
          },
          { type: "fill-blank", prompt: "Complete the dialogue.", sentence: "—Buenas tardes, señor. ¿De dónde ___ usted? —Soy de Lima.", answer: "es", explanation: "Usted takes es, the él / ella form. Eres is only for tú." } as Exercise,
        ],
      },
      4: {
        check: [
          {
            type: "multiple-choice",
            question: "What is Tomás's job?",
            options: ["teacher", "student", "nurse", "lawyer"],
            correctIndex: 2,
            explanation: "Soy enfermero = I'm a nurse; no un/una after ser. Lucía is the teacher, and \"No\" tells you he isn't a student.",
          },
          {
            type: "translate",
            prompt: "Translate to Spanish.",
            direction: "en-es",
            source: "My coworker (a woman) is a nurse.",
            answer: "Mi compañera de trabajo es enfermera.",
            altAnswers: ["Mi compañera es enfermera."],
            explanation: "Both -o words switch to -a for a woman: compañera, enfermera. Compañero on its own can also mean classmate.",
          } as Exercise,
        ],
      },
    },
    exercises: {
      drop: [6, 7],
      replace: {
        2: speak("Answer out loud in Spanish: ¿De dónde eres tú? (Say: \"I'm from Chile\")", "Soy de Chile.", ["Yo soy de Chile.", "De Chile."], "The answer mirrors the question: tú eres → yo soy. Es would be for usted.", undefined),
      },
    },
  },

  // L09 in the new course.
  "a1r-dialogue-first-meetings-part-2": {
    summary: "Put the whole unit to work: ask and answer names and origins, switch between tú and usted, catch it by ear, and write your own introduction.",
    exercises: {
      replace: {
        4: { type: "word-order", prompt: "Put the words in order.", words: ["Buenas", "noches,", "señora,", "¿de", "dónde", "es", "usted?"], translation: "Good evening, ma'am, where are you from?", explanation: "Señora is the person you're talking to, so it sits between commas right after the greeting. Usted, because she's an older stranger." } as Exercise,
        21: speak(
          "Say it in Spanish: \"Hi, I'm Marta and I'm from Madrid\"",
          "Hola, yo soy Marta y soy de Madrid.",
          ["Hola, soy Marta y soy de Madrid.", "Hola, me llamo Marta y soy de Madrid.", "Hola, yo me llamo Marta y soy de Madrid.", "Hola, soy Marta. Soy de Madrid.", "Hola, me llamo Marta. Soy de Madrid.", "Hola, soy Marta, de Madrid."],
          "Soy for both your name and your origin; yo is optional. Me llamo Marta works too.",
          undefined,
        ),
      },
    },
  },
};
