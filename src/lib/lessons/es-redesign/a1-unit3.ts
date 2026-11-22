// Synced from cheneygross-afk/lengo:src/lib/lessons/es-redesign/a1-unit3.ts by scripts/sync-content.mjs -- edit it there, not here.
// New course, A1 Unit 3: content fixes from Claude's audit in Ricardo's
// format (Claude Feedback/Spanish (new course)/A1 Beginner/Unit 03). They add
// to the Beginner patches in a1.ts (merged section by section in index.ts).
// Section numbers are the lesson's own; question numbers are its practice
// questions (lesson.exercises). Only content changes here: what is taught,
// asked and accepted. The answer checker and the rubric are untouched.
//
// The two recut lessons (es-ser-who-you-are, es-estar-how-and-where) take
// their patches here through recuts-gaps.ts, since a recut takes no other.
//
// The unit teaches ser and estar. Telling the time and dates (Unit 4),
// -ar/-er/-ir verbs (Units 4 and 5), este/esta (Unit 6), tener (Unit 6),
// ir (Unit 7) and estar + -ando (A2 Unit 4) come later, so no scored
// question here asks for them.
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
const toEn = (prompt: string, source: string, answer: string, altAnswers: string[], explanation: string): Exercise => ({
  type: "translate",
  prompt,
  direction: "es-en",
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
const match = (instructions: string, pairs: [string, string][], explanation: string): Exercise => ({
  type: "matching",
  instructions,
  pairs: pairs.map(([left, right]) => ({ left, right })),
  explanation,
});
const SAY = "Say it in Spanish:";
const SER_ESTAR = ["es", "está", "son", "están"];
// The old course's lesson numbers ("Review: Lesson 6.") point at lessons
// the new course numbers differently.
const OLD_NUMBERS: [string, string][] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => [` Review: Lesson ${n}.`, ""]);

export const A1_UNIT3_PATCHES: Record<string, LessonPatch> = {
  "es-ser-who-you-are": {
    exercises: {
      replace: {
        9: speak(`${SAY} "My grandparents are Mexican."`, "Mis abuelos son mexicanos.", [], "Mis abuelos = ellos, so ser gives son. Mexicano adds -s for more than one, and nationalities are lowercase."),
      },
      // Spoken questions of its own, so none is made from the example notes.
      add: [
        speak(`${SAY} "I'm from Argentina."`, "Soy de Argentina.", ["Yo soy de Argentina."], "Soy can only mean \"I am\", so yo isn't needed. Origin is ser + de: soy de Argentina."),
        speak(`${SAY} "She's from Mexico."`, "Ella es de México.", ["Es de México."], "Ella takes es, and where someone is from is ser + de: es de México."),
      ],
    },
    reword: OLD_NUMBERS,
  },
  "es-estar-how-and-where": {
    exercises: {
      replace: {
        // Tener (tenemos) and porque come later; por el examen is taught in this lesson.
        2: tr("Translate to Spanish.", "We're nervous (nerviosos) about the exam.", "Estamos nerviosos por el examen.", ["Estamos nerviosas por el examen.", "Nosotros estamos nerviosos por el examen.", "Nosotras estamos nerviosas por el examen."], "A feeling takes estar: estamos nerviosos. Por el examen says what it's about, as in preocupados por el examen."),
        10: speak(`${SAY} "Today I'm busy, but tomorrow (mañana) I'm free."`, "Hoy estoy ocupado, pero mañana estoy libre.", ["Hoy estoy ocupada, pero mañana estoy libre.", "Hoy estoy ocupado pero mañana estoy libre.", "Hoy estoy ocupada pero mañana estoy libre."], "Busy today and free tomorrow are both states, so estar twice: estoy. A woman says ocupada; libre is the same for both."),
        13: speak(`${SAY} "The school is far from downtown."`, "La escuela está lejos del centro.", [], "Where a place is takes estar: está lejos. De + el centro becomes del centro."),
        14: speak(`${SAY} "The supermarket is near my house."`, "El supermercado está cerca de mi casa.", [], "Where a place is takes estar: está cerca de. De doesn't join with mi: de mi casa."),
      },
    },
  },
  "ser-vs-estar-1": {
    summary: "Spanish has two verbs for \"to be\": ser for what something is, estar for how or where it is right now.",
    sections: {
      0: {
        examples: [
          { es: "Soy alto.", en: "I am tall. (what I'm like)" },
          { es: "Ella es doctora.", en: "She is a doctor. (her job)" },
          { es: "Somos de Chile.", en: "We're from Chile. (origin)" },
          { es: "Son las tres.", en: "It's three o'clock. (the time takes ser; telling the time comes in Unit 4)" },
        ],
      },
    },
    exercises: {
      replace: {
        13: tr("Correct the sentence.", "Mi amiga está de Colombia.", "Mi amiga es de Colombia.", [], "Where someone is from takes ser + de: es de Colombia. Estar is for where she is now: está en Lima."),
        20: speak(`${SAY} "She is a doctor."`, "Ella es doctora.", ["Es doctora.", "Ella es médica.", "Es médica."], "A job says what she is, so ser: es doctora, with no una before a plain job."),
      },
    },
  },
  "ser-vs-estar-2": {
    exercises: {
      replace: {
        2: speak(`${SAY} "My mother is worried."`, "Mi madre está preocupada.", ["Mi mamá está preocupada."], "Worry is a feeling, so estar: mi madre → está. Preocupada agrees with madre."),
        4: speak(`${SAY} "We are ready."`, "Nosotros estamos listos.", ["Estamos listos.", "Estamos listas.", "Nosotras estamos listas."], "Ready is how you are right now: estar listo. With ser, listo would mean clever. A group of women says listas."),
        // ¡Vamos! (ir) comes in Unit 7.
        13: tr("Correct the sentence.", "Yo soy aburrido en la clase.", "Yo estoy aburrido en la clase.", ["Estoy aburrido en la clase.", "Estoy aburrida en la clase.", "Yo estoy aburrida en la clase."], "The speaker means \"bored\" (how they feel now), so estar. \"Soy aburrido\" says \"I am boring\"."),
        12: tr("Correct the sentence.", "El taxi es listo.", "El taxi está listo.", [], "Ready is estar listo; ser listo means clever, and a taxi can't be clever."),
        23: speak(`${SAY} "The class is boring."`, "La clase es aburrida.", [], "Boring is what the class is like, so ser: es aburrida. Está aburrida would mean the class feels bored."),
      },
    },
    reword: OLD_NUMBERS,
  },
  "ser-vs-estar-mastery-check": {
    summary: "Mixed questions on ser and estar, with the cases learners miss most: food that tastes good, being married, cold coffee and a closed bank.",
    exercises: {
      replace: {
        1: order("Mi abuela está muy cansada hoy.", "My grandmother is very tired today.", "Feeling tired is a state that changes, so estar, and cansada agrees with the feminine abuela."),
        5: match("Match each use to ser or estar.", [["nationality", "ser"], ["a temporary illness", "estar"], ["a job", "ser"], ["an emotion right now", "estar"]], "Lasting facts about who someone is (nationality, job) use ser; conditions and feelings that change use estar."),
        6: fill("How do you say the bold words in Spanish?", "Mi tía ___ profesora.", "es", "My aunt [is] a teacher.", "A job says who someone is, so ser: mi tía = ella → es. No una before a plain job."),
        8: tr("Translate to Spanish.", "The keys (llaves) are in the car.", "Las llaves están en el carro.", ["Las llaves están en el auto.", "Las llaves están en el coche."], "Where a thing is takes estar, and las llaves is plural: están. Carro or auto in Latin America, coche in Spain."),
        13: tr("Correct the sentence.", "El banco es cerrado hoy.", "El banco está cerrado hoy.", ["Hoy el banco está cerrado."], "Closed is a state that changes (it opens again tomorrow), so estar: está cerrado."),
        15: speak(`${SAY} "My aunt is married."`, "Mi tía está casada.", ["Mi tía es casada."], "Estar casada is the most common way to say it; es casada is also heard. Casada agrees with tía."),
        16: speak(`${SAY} "The keys are in the car."`, "Las llaves están en el carro.", ["Las llaves están en el auto.", "Las llaves están en el coche."], "Where things are takes estar, and llaves is plural: están."),
        17: speak(`${SAY} "We are from Colombia."`, "Nosotros somos de Colombia.", ["Somos de Colombia.", "Nosotras somos de Colombia."], "Origin (de + place) takes ser: somos, not estamos."),
      },
      add: [speak(`${SAY} "The coffee is cold."`, "El café está frío.", [], "This coffee is cold now, so estar: está frío. Es frío would make cold part of what coffee is.")],
    },
  },
  "ser-vs-estar-mastery-check-part-2": {
    summary: "More ser and estar with new sentences: jobs, traits, feelings, and where people, places and parties are.",
    sections: {
      0: { body: ["A quick look back at the rule: ser for what someone or something is, estar for how or where it is right now. Then more practice with new sentences."] },
    },
    exercises: {
      replace: {
        // Ir (van) and salir come later.
        0: fill("How do you say the bold words in Spanish?", "Los niños ___ enfermos hoy y están en casa.", "están", "The children [are] sick today and they're at home.", "Being sick today is a condition that changes, so estar. Los niños = ellos → están."),
        1: fill("How do you say the bold words in Spanish?", "¿___ listos, chicos?", "Están", "[Are] you ready, guys? (ustedes)", "Ready is a state: estar listo. Talking to a group (ustedes) takes están. Ser listo would mean clever."),
        5: tr("Change to nosotros.", "Estoy ocupado hoy.", "Estamos ocupados hoy.", ["Nosotros estamos ocupados hoy.", "Estamos ocupadas hoy.", "Hoy estamos ocupados.", "Hoy estamos ocupadas."], "Being busy is a temporary state, so estar stays; nosotros → estamos and the describing word goes plural: ocupados."),
        13: speak(`${SAY} "My sister is a teacher, but today she's at home and she's sick."`, "Mi hermana es profesora, pero hoy está en casa y está enferma.", ["Mi hermana es maestra, pero hoy está en casa y está enferma.", "Mi hermana es profesora pero hoy está en casa y está enferma."], "Her job takes ser (es profesora); where she is and how she feels today take estar (está en casa, está enferma)."),
        14: speak(`${SAY} "The children are sick today and they're at home."`, "Los niños están enfermos hoy y están en casa.", ["Hoy los niños están enfermos y están en casa."], "Sick today and at home are both estar: a condition and a place. Los niños → están."),
        15: speak(`${SAY} "Are you ready, guys?"`, "¿Están listos, chicos?", ["Chicos, ¿están listos?"], "Ready is estar listo, and a group (ustedes) takes están."),
      },
    },
  },
  "a1r-error-hunt-ser-estar": {
    exercises: {
      replace: {
        // The time comes in Unit 4.
        3: ms("Which sentences are already correct?", ["Mi tía es doctora.", "La reunión está en la oficina.", "El café está frío.", "Madrid es en España."], [0, 2], "A job takes ser (es doctora) and coffee that's cold now takes estar. An event (la reunión) takes ser: es en la oficina. A city's location takes estar: está en España."),
        20: order("La clase es en la biblioteca.", "The class is in the library.", "A class is an event, so ser says where it takes place: es en la biblioteca."),
        23: speak(`${SAY} "The plant is dead."`, "La planta está muerta.", [], "Muerto always takes estar, even though it's permanent. Muerta agrees with planta."),
      },
    },
    reword: [...OLD_NUMBERS, ["\"¿Dónde es el museo?\" — what's the fix?", "\"¿Dónde es el museo?\" What's the fix?"]],
  },
  "ser-vs-estar-drill-1": {
    summary: "Quick reps with ser for who and what someone is and whose something is, and estar for where. No new rules.",
    goal: "use ser for who and what someone is, and estar for where.",
    sections: {
      0: {
        body: [
          "Remember the rule: ser says what someone or something is (who, job, origin, family, whose it is); estar says where it is or how it is right now. Ask \"what is it?\" or \"where / how is it?\" before you pick.",
          "Ser handles who and what someone is: their job, where they're from and who they are.",
        ],
      },
      // Clocks and calendars come in Unit 4: this card keeps the family part.
      1: {
        heading: "Ser: family and whose it is",
        body: ["Ser also says how people are related and whose something is: Es mi hermana. El libro es de Ana. Both say what someone or something is."],
        examples: [
          { es: "Es mi hermana.", en: "She's my sister." },
          { es: "El libro es de Ana.", en: "The book is Ana's." },
        ],
        check: [tr("Translate to Spanish.", "He's my brother.", "Es mi hermano.", ["Él es mi hermano."], "Family ties take ser: es mi hermano. Mi (my) has no accent.")],
        reteach: "Family and whose something is take ser too: Ana es mi prima. La casa es de mis padres.",
      },
      2: { body: ["Estar covers where a person, place or thing is. One exception to know: events (a party, a concert, a class) use ser for where they take place: La fiesta es en mi casa."] },
    },
    exercises: {
      replace: {
        4: ms("Which sentences use ser correctly?", ["El carro es de mi padre.", "El carro está de mi padre.", "Mi tío es abogado.", "Mi tío está abogado."], [0, 2], "Whose something is and a job both take ser: el carro es de mi padre, mi tío es abogado. \"Está de mi padre\" and \"está abogado\" wrongly use estar."),
        5: ms("Which sentences use estar correctly?", ["El cine está lejos.", "El cine es lejos.", "Estamos en casa.", "Somos en casa."], [0, 2], "Where a place is and where people are both take estar: está lejos, estamos en casa. \"Es lejos\" and \"somos en casa\" wrongly use ser."),
        8: speak(`${SAY} "She's my sister."`, "Es mi hermana.", ["Ella es mi hermana."], "Family ties take ser: es mi hermana."),
        9: fill("How do you say the bold words in Spanish?", "La casa ___ de mis padres.", "es", "The house [is] my parents'.", "Whose something is takes ser + de: la casa es de mis padres."),
        15: tr("Correct the sentence.", "El libro está de Ana.", "El libro es de Ana.", [], "Whose something is takes ser + de: es de Ana. Estar is for where it is: el libro está en la mesa."),
        22: speak(`${SAY} "We are from Peru."`, "Somos de Perú.", ["Nosotros somos de Perú.", "Nosotras somos de Perú."], "Origin takes ser + de: nosotros → somos."),
        23: speak(`${SAY} "The bank is far away."`, "El banco está lejos.", [], "Where a place is takes estar, even a building that never moves: está lejos."),
      },
    },
  },
  "ser-vs-estar-drill-2": {
    summary: "Drill estar for states and feelings, and the words that change meaning with ser or estar: aburrido, listo, malo and rico.",
    sections: {
      0: {
        body: [
          "Remember the rule: ser describes what something is like by nature; estar describes its condition right now. That is why some describing words change meaning with the verb.",
          "Estar is for how someone feels or a condition that can change.",
        ],
      },
    },
    // Estar + -ando/-iendo comes in A2 Unit 4.
    dropSections: [2],
    exercises: {
      replace: {
        0: mc("La película ___ muy aburrida. (The movie is really boring.)", SER_ESTAR, 0, "Being boring is what the movie is like, so ser: es aburrida. \"Está aburrida\" would mean the movie feels bored, and \"son\" and \"están\" are plural.", ["", "Está aburrida would mean the film feels bored.", "Son is plural.", "Están is plural."]),
        2: fill("How do you say the bold words in Spanish?", "Mi hermana ___ muy lista y muy simpática.", "es", "My sister [is] very clever and very nice.", "Clever (ser listo) and nice are what she's like, so ser: es. Está lista would mean she's ready."),
        4: speak(`${SAY} "The soup tastes delicious."`, "La sopa está rica.", ["La sopa está deliciosa.", "La sopa está muy rica."], "Estar rico with food you're eating means it tastes good; ser rico about a person means wealthy."),
        8: speak(`${SAY} "The class is very boring."`, "La clase es muy aburrida.", [], "Boring as a trait: ser aburrido. Estar aburrido would mean bored."),
        12: fill("How do you say the bold words in Spanish?", "¡El pastel ___ muy rico!", "está", "The cake [tastes] really delicious!", "Estar rico = tastes good; ser rico = wealthy."),
        13: tr("Change to ella.", "Estoy aburrido.", "Está aburrida.", ["Ella está aburrida."], "Bored is how she feels now, so estar stays: ella → está, and aburrido turns feminine: aburrida."),
        15: tr("Translate to Spanish.", "Is dinner (la cena) ready?", "¿Está lista la cena?", ["¿La cena está lista?", "¿Está la cena lista?"], "Ready is estar listo, and cena is feminine: lista. Es lista would mean clever."),
        16: tr("Translate to Spanish.", "The man is bad, but today he is sick.", "El hombre es malo, pero hoy está malo.", ["El hombre es malo, pero hoy está enfermo.", "El hombre es malo pero hoy está malo.", "El hombre es malo pero hoy está enfermo."], "Ser malo = a bad person; estar malo = sick."),
        17: order("Mis padres están muy aburridos hoy", "My parents are very bored today", "Bored today is a state: estar aburridos, agreeing with mis padres."),
        19: tr("Correct the sentence.", "¿Eres listo para el examen?", "¿Estás listo para el examen?", ["¿Estás lista para el examen?"], "Ready is estar listo. Ser listo means clever, which doesn't fit \"para el examen\"."),
        20: tr("Correct the sentence.", "La leche es mala hoy.", "La leche está mala hoy.", ["Hoy la leche está mala."], "Milk that has gone off is a state: estar mala. Es mala would call milk bad by nature."),
        21: speak(`${SAY} "The door is open."`, "La puerta está abierta.", [], "Open is a condition that changes, so estar. Abierta agrees with puerta."),
        22: speak(`${SAY} "He is boring."`, "Él es aburrido.", ["Es aburrido."], "Boring is what he's like, so ser. Él está aburrido would mean he's bored."),
      },
    },
    reword: [[" — same word, different meaning.", ". Same word, different meaning."]],
  },
  "ser-vs-estar-drill-3": {
    summary: "Fast mixed reps: choose ser or estar in every kind of sentence. No new rules.",
    sections: {
      0: {
        body: [
          "Remember the rule: ser for what someone or something is (who, origin, job, events, lasting qualities); estar for where it is and how it is right now (location, feelings, conditions).",
          "No new rules here. Just choose ser or estar fast.",
        ],
        check: [
          mc("Mis padres ___ en casa ahora. (My parents are at home now.)", ["son", "están", "es", "está"], 1, "Current location takes estar, and mis padres is plural: están. \"Son\" and \"es\" are ser, and \"está\" is singular.", ["Son is ser, and where people are takes estar.", "", "Es is ser, and singular.", "Está is singular; mis padres is plural."]),
          mc("El restaurante ___ muy bueno. (The restaurant is very good.)", SER_ESTAR, 0, "Being a good restaurant is a lasting quality, so ser: es muy bueno. \"Está muy bueno\" would describe how something tastes right now, and \"son\" and \"están\" are plural.", ["", "Está bueno says how food tastes right now.", "Son is plural.", "Están is plural, and estar."]),
        ],
      },
      1: { reteach: "Say what someone is like in general with ser and how they are today with estar, both in one sentence: Normalmente soy tranquilo, pero hoy estoy estresado." },
    },
    optionNotes: {
      5: ["Es would make tiredness part of who she is; hoy makes it a state.", "", "Son is plural and ser.", "Están is plural; there's one sister."],
    },
    exercises: {
      replace: {
        0: toEn("Translate this sentence to English.", "El niño está malo hoy y está en casa.", "The child is sick today and he's at home.", ["The child is sick today and is at home.", "The child is sick today and he is at home.", "The boy is sick today and he's at home.", "The boy is sick today and is at home.", "The boy is sick today and he is at home.", "The kid is sick today and he's at home.", "The child is ill today and he's at home."], "Estar malo here means sick: a condition today, not a trait. Está en casa says where he is."),
        1: order("Ellos están en la oficina ahora.", "They are in the office now.", "Where people are takes estar: ellos → están."),
        3: match("Match each use to ser or estar.", [["a feeling today", "estar"], ["a job", "ser"], ["a family relationship", "ser"], ["where something is located", "estar"]], "Feelings and location take estar; jobs and family ties take ser."),
        4: speak(`${SAY} "My parents are from Chile, but now they're in Mexico."`, "Mis padres son de Chile, pero ahora están en México.", ["Mis padres son de Chile, pero están en México ahora.", "Mis papás son de Chile, pero ahora están en México.", "Mis papás son de Chile, pero están en México ahora.", "Mis padres son de Chile pero ahora están en México."], "Origin takes ser (son de Chile); where they are now takes estar (están en México)."),
        5: mc("Mi hermana ___ muy cansada hoy. (My sister is very tired today.)", SER_ESTAR, 1, "Tired today is a state, so estar, and mi hermana takes está. \"Es\" would make tiredness part of who she is; \"son\" and \"están\" are plural.", []),
        9: fill("How do you say the bold words in Spanish?", "Las ventanas ___ abiertas.", "están", "The windows [are] open.", "Open is a condition that changes, so estar. Las ventanas = ellas → están."),
        11: speak(`${SAY} "We are in a restaurant."`, "Estamos en un restaurante.", ["Nosotros estamos en un restaurante.", "Nosotras estamos en un restaurante."], "Where you are takes estar: nosotros → estamos."),
        19: order("El libro es muy interesante", "The book is very interesting", "A lasting quality of the book: ser."),
      },
    },
    reword: [[" — both in one sentence.", ", both in one sentence."]],
  },
  "a1r-mission-describe-a-photo": {
    sections: {
      0: {
        examples: [
          { es: "Ella es mi prima Clara. Es muy divertida.", en: "She's my cousin Clara. She's really fun. (who she is, what she's like: ser)" },
          { es: "En la foto, está un poco cansada.", en: "In the photo, she's a little tired. (how she is then: estar)" },
          { es: "Estamos en la playa de Cancún.", en: "We're at the beach in Cancún. (where: estar)" },
        ],
      },
      1: {
        body: [
          "Where a person, place or thing is takes estar, even for things that never move, like cities and buildings. Where someone or something is from takes ser.",
          "One exception: an event (a party, a wedding, a meeting) uses ser for where it takes place: La fiesta es en mi casa.",
        ],
      },
    },
    exercises: {
      replace: {
        2: speak(`${SAY} "The hotel food is fantastic."`, "La comida del hotel es fantástica.", ["La comida del hotel está fantástica."], "A general quality of the hotel's food takes ser: es fantástica. If you mean it tastes fantastic right now, está fantástica is right too."),
        15: tr("Translate to Spanish.", "He's my brother Pablo. He's very kind.", "Es mi hermano Pablo. Es muy amable.", ["Él es mi hermano Pablo. Es muy amable.", "Él es mi hermano Pablo. Él es muy amable.", "Es mi hermano Pablo. Él es muy amable.", "Es mi hermano Pablo y es muy amable.", "Él es mi hermano Pablo y es muy amable.", "Es mi hermano Pablo. Es muy simpático.", "Él es mi hermano Pablo. Es muy simpático."], "Who he is (es mi hermano) and what he's like (es amable) both take ser."),
        22: speak("Your friend asks: ¿Quiénes son? Answer aloud: they're your parents, they're from Lima, and in the photo they're at the hotel.", "Son mis padres. Son de Lima y en la foto están en el hotel.", ["Son mis padres, son de Lima y en la foto están en el hotel.", "Son mis papás. Son de Lima y en la foto están en el hotel.", "Son mis padres. Son de Lima y están en el hotel en la foto."], "Who they are and where they're from take ser (son mis padres, son de Lima); where they are takes estar (están en el hotel)."),
        24: speak(`${SAY} "She's my cousin Clara. She's really fun."`, "Ella es mi prima Clara. Es muy divertida.", ["Es mi prima Clara. Es muy divertida.", "Ella es mi prima Clara y es muy divertida.", "Es mi prima Clara y es muy divertida."], "Who she is and what she's like both take ser: es mi prima, es divertida."),
      },
    },
    reword: [["There's no difference — they're interchangeable.", "There's no difference: they're interchangeable."]],
  },
  "a1r-spiral-ser-estar-present": {
    summary: "Ser and estar meet everything from Units 1 and 2: articles, gender and number, and describing words that agree. A check of everything so far.",
    goal: "choose between ser and estar and make every word agree.",
    sections: {
      // Everyday -ar, -er and -ir verbs come in Units 4 and 5.
      0: {
        heading: "Two verbs, two jobs, one sentence",
        body: [
          "Remember the rules: ser says what someone is (job, origin, personality); estar says how or where they are right now. Real sentences often need both.",
          "Before you answer, name the job of every verb: describing, locating or feeling?",
        ],
        examples: [
          { es: "Mi hermana es profesora y está en la escuela.", en: "My sister is a teacher (ser: job) and she's at school (estar: location)." },
          { es: "Estoy cansado, pero soy feliz.", en: "I'm tired (estar: feeling), but I'm a happy person (ser: trait)." },
        ],
        check: [
          fill("How do you say the bold words in Spanish?", "Nosotros ___ en casa y estamos contentos.", "estamos", "We [are] at home and we're happy.", "Where people are takes estar, and nosotros takes estamos."),
          fill("How do you say the bold words in Spanish?", "Mi perro ___ muy simpático.", "es", "My dog [is] very friendly.", "What the dog is like is a trait, so ser: mi perro = él → es."),
        ],
        reteach: "Name each verb's job: who or what someone is (ser), where they are (estar), how they feel now (estar). Mi padre es médico y hoy está en casa.",
      },
    },
    exercises: {
      replace: {
        0: mc("Which sentence means \"The students are in the library and they are very busy\"?", ["Los estudiantes están en la biblioteca y están muy ocupados.", "Los estudiantes son en la biblioteca y están muy ocupados.", "Los estudiantes están en la biblioteca y son muy ocupados.", "Los estudiantes están en la biblioteca y están muy ocupadas."], 0, "Location takes estar (están en la biblioteca), and busy is a state, so estar again. Ocupados agrees with los estudiantes.", ["", "Where people are takes estar: están en la biblioteca.", "Busy is a state: están ocupados.", "Los estudiantes is masculine: ocupados."]),
        1: fill("How do you say the bold words in Spanish?", "¿Cómo ___ tus padres?", "están", "How [are] your parents? (how they're doing today)", "¿Cómo están? asks how people are doing right now, so estar. ¿Cómo son? would ask what they're like."),
        2: speak(`${SAY} "My parents are tall and very nice."`, "Mis padres son altos y muy simpáticos.", ["Mis papás son altos y muy simpáticos.", "Mis padres son altos y muy amables.", "Mis padres son altos y son muy simpáticos."], "What people are like takes ser: son. Both describing words agree with mis padres: masculine plural."),
        4: fill("Complete with ser or estar.", "Ellas ___ en el parque y están contentas.", "están", undefined, "Where people are takes estar, and ellas takes están."),
        5: fill("Complete with ser or estar.", "Mi padre ___ cocinero y está en el restaurante.", "es", "My father [is] a cook and he's at the restaurant.", "A job takes ser: es cocinero. Where he is takes estar: está en el restaurante."),
        6: fill("Complete with ser or estar.", "¿Dónde ___ tú? Estoy en la oficina.", "estás", "Where [are] you? I'm at the office.", "A question about location takes estar, and tú takes estás."),
        8: tr("Make it plural.", "Mi hermano es estudiante y está en clase.", "Mis hermanos son estudiantes y están en clase.", [], "Everything follows the plural subject: mi → mis, es → son, estudiante → estudiantes, está → están."),
        9: tr("Change to ella.", "Estoy en casa y estoy cansado.", "Está en casa y está cansada.", ["Ella está en casa y está cansada."], "Both verbs change to the ella form: estoy → está. Cansado turns feminine for her: cansada."),
        11: tr("Make both verbs negative.", "Los estudiantes son de Chile y están en Lima.", "Los estudiantes no son de Chile y no están en Lima.", [], "No goes right before each verb you want to deny. Origin keeps ser, location keeps estar."),
        12: tr("Correct the sentence.", "Mis hermanas son preocupadas por el examen.", "Mis hermanas están preocupadas por el examen.", [], "Worried is a feeling, so estar: están preocupadas. Por el examen says what it's about."),
        14: tr("Correct the sentence.", "La profesora son inteligente y simpática.", "La profesora es inteligente y simpática.", ["La maestra es inteligente y simpática."], "La profesora is one person, so ser takes the ella form: es, not son. Both describing words already agree."),
        17: speak(`${SAY} "The soup is hot and the kitchen (cocina) is small."`, "La sopa está caliente y la cocina es pequeña.", ["La sopa está caliente y la cocina es chica."], "The soup's temperature right now is a state (estar); the size of the kitchen is what it's like (ser)."),
        18: tr("Translate to Spanish.", "You (informal) are very nervous today.", "Estás muy nervioso hoy.", ["Estás muy nerviosa hoy.", "Hoy estás muy nervioso.", "Hoy estás muy nerviosa.", "Tú estás muy nervioso hoy.", "Tú estás muy nerviosa hoy.", "Hoy tú estás muy nervioso.", "Hoy tú estás muy nerviosa."], "Nervous today is a state: estar, tú form estás. Nervioso for a man, nerviosa for a woman."),
        19: toEn("Translate to English.", "Mis amigos son de Perú pero están en Chile.", "My friends are from Peru but they are in Chile.", ["My friends are from Peru, but they are in Chile.", "My friends are from Peru but they're in Chile.", "My friends are from Peru, but they're in Chile.", "My friends are from Peru but are in Chile.", "My friends are from Peru, but are in Chile."], "Ser de = where they're from; estar en = where they are now."),
        20: order("Hoy estamos muy ocupados pero estamos contentos.", "Today we're very busy but we're happy.", "Busy and happy today are both states: estar twice, and both describing words agree with nosotros."),
        22: speak(`${SAY} "My friend (m.) is from Mexico, he's in Madrid, and today he's very happy."`, "Mi amigo es de México, está en Madrid y hoy está muy contento.", ["Mi amigo es de México, está en Madrid y está muy contento hoy.", "Mi amigo es mexicano, está en Madrid y hoy está muy contento.", "Mi amigo es de México, está en Madrid y hoy está muy feliz."], "Three jobs: ser for origin (es de México), estar for where he is (está en Madrid) and for how he feels today (está contento)."),
        23: speak(`${SAY} "The windows are open."`, "Las ventanas están abiertas.", [], "Open is a state: estar. Ventanas is feminine plural, so están abiertas."),
      },
    },
  },
};
