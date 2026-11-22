// Synced from cheneygross-afk/lengo:src/lib/lessons/a2-unit3-fixes.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";
import { applyLessonFixes, applySpokenFixes, choose, chooseSentence, edit, fbIs, mc, spIs, trIs, warmUp, type LessonFix } from "./unit-fixes";

// A2 Unit 3 (The imperfect): content fixes from Claude's audit in Ricardo's
// format (ES-A2-U03_CL_2026-11-22). Content only. See unit-fixes.ts for why
// some items become choices: the checker passes a missing accent with a
// note (comiamos, veias, nadabamos, habia) and forgives a v for b
// (cantavan, ivas) as a typo, while this unit teaches exactly the
// accented -ía and -ábamos endings and the b of -aba and iba. Items whose
// point is one of those become choices with the slip as an option; items
// whose point is choosing the tense stay typed. The first lesson is split
// in two, fixed under its base slug.

const FIXES: Record<string, LessonFix> = {
  // L01-L02
  "imperfect-tense-1": {
    goal: "describe how things used to be (habits, age, weather, people) with the -aba and -ía endings and the three irregulars era, iba and veía.",
    warmUp: warmUp("Warm-up: the preterite", "A quick look back at Units 1 and 2. The preterite reports one finished event. Today's tense describes how things were.", [
      mc("\"Yesterday I played in the park.\"", ["Ayer jugué en el parque.", "Ayer jugé en el parque.", "Ayer juego en el parque.", "Ayer jugó en el parque."], "One finished event: preterite, yo -é, with gu before e. (Unit 1.)"),
      mc("\"We went to the beach on Saturday.\"", ["El sábado fuimos a la playa.", "El sábado fueron a la playa.", "El sábado vamos a la playa.", "El sábado fuímos a la playa."], "Ir in the preterite: fuimos, with no accent. (Unit 2.)"),
      mc("\"She had a problem.\"", ["Tuvo un problema.", "Tenió un problema.", "Tuvó un problema.", "Tiene un problema."], "Tener → tuv- + -o, no accent. (Unit 2.)"),
    ]),
    items: [
      choose("Nosotros ___ juntos los domingos.", ["cocinabamos", "cocinavamos", "cocinamos"]),
      chooseSentence("Mis tíos venden fruta en el mercado.", ["Mis tíos vendian fruta en el mercado.", "Mis tíos vendaban fruta en el mercado.", "Mis tíos venden fruta en el mercado."]),
      choose("Antes nosotros ___ la televisión por la noche.", ["veiamos", "víamos", "vimos"]),
      chooseSentence("Ella vivía en Bogotá.", ["Nosotros viviamos en Bogotá.", "Nosotros vivíabamos en Bogotá.", "Nosotros vivimos en Bogotá."]),
      chooseSentence("You (tú) used to go to school by bus.", ["Ivas a la escuela en autobús.", "Íbas a la escuela en autobús.", "Fuiste a la escuela en autobús."]),
      edit(trIs("Cuando era pequeño, iva al colegio en bici."), (e) => ({ ...e, source: "Cuando era pequeño, iva a la escuela en bici.", answer: "Cuando era pequeño, iba a la escuela en bici.", altAnswers: ["Cuando era pequeño, iba al colegio en bici."] })),
    ],
  },
  // L03
  "a2d-pattern-imperfect-endings": {
    goal: "give every person of an -ar, -er or -ir verb in the imperfect, with the accent on -ábamos and on every -ía.",
    items: [
      choose("De niños, ___ mucho.", ["nadabamos", "nadavamos", "nadamos"]),
      choose("De niña, yo ___ en el parque.", ["corria", "corrí", "corraba"]),
      choose("De niños, mis hermanos ___ en el parque.", ["corrian", "corraban", "corrieron"]),
      choose("Antes tú ___ en una tienda, ¿no?", ["trabajavas", "trabajabais", "trabajaste"]),
      choose("De niño, ¿tú ___ en el parque?", ["corrias", "corrabas", "corriste"]),
      choose("Mi abuela ___ muchas cartas.", ["escribia", "escribaba", "escribió"]),
      chooseSentence("Mis hermanas bailan mucho.", ["Mis hermanas bailavan mucho.", "Mis hermanas bailaron mucho.", "Mis hermanas bailan mucho."]),
      chooseSentence("Escribo poemas.", ["Escribia poemas.", "Escribaba poemas.", "Escribí poemas."]),
      chooseSentence("Ellos bebían leche.", ["Nosotros bebiamos leche.", "Nosotros bebíabamos leche.", "Nosotros bebían leche."]),
      chooseSentence("Mi padre cocinaba los domingos.", ["Tú cocinavas los domingos.", "Tú cocinaba los domingos.", "Tú cocinabais los domingos."]),
      chooseSentence("Mis tíos vivíban en la ciudad.", ["Mis tíos vivian en la ciudad.", "Mis tíos vivaban en la ciudad.", "Mis tíos vivíban en la ciudad."]),
      chooseSentence("We used to eat at my grandmother's house.", ["Comiamos en casa de mi abuela.", "Comíabamos en casa de mi abuela.", "Comimos en casa de mi abuela."]),
      edit(trIs("You all (Latin America) used to sing in the car."), (e) => ({ type: "multiple-choice", question: `${e.prompt}\n"${e.source}"`, options: ["Ustedes cantaban en el carro.", "Ustedes cantavan en el carro.", "Ustedes cantábamos en el carro.", "Ustedes cantaron en el carro."], correctIndex: 0, explanation: e.explanation })),
    ],
  },
  // L04
  "a2d-ser-ir-ver-imperfect": {
    goal: "use the only three irregular imperfects (era, iba, veía) for descriptions, habits and routines, with their accents.",
    items: [
      choose("Tú ___ a tus primos todos los veranos.", ["veias", "vías", "viste"]),
      chooseSentence("Ellos ven a sus primos.", ["Ellos veian a sus primos.", "Ellos vían a sus primos.", "Ellos vieron a sus primos."]),
      chooseSentence("Antes yo vía las noticias todas las noches.", ["Antes yo veia las noticias todas las noches.", "Antes yo vía las noticias todas las noches.", "Antes yo vi las noticias todas las noches."]),
      chooseSentence("When you (tú) were little, did you use to go to the beach?", ["Cuando eras pequeño, ¿ivas a la playa?", "Cuando fuiste pequeño, ¿ibas a la playa?", "Cuando eras pequeño, ¿fuiste a la playa?"]),
      edit(trIs("Ella iba al trabajo en coche."), (e) => ({ ...e, source: "Ella iba al trabajo en carro.", answer: "Yo iba al trabajo en carro.", altAnswers: ["Iba al trabajo en carro.", "Yo iba al trabajo en coche.", "Iba al trabajo en coche.", "Yo iba al trabajo en auto."] })),
    ],
  },
  // L05
  "imperfect-tense-2": {
    goal: "tell a childhood memory in the imperfect, with soler + infinitive and 30 words for childhood and memories.",
    warmUp: warmUp("Warm-up: the imperfect", "A quick look back at the last three lessons before the memory.", [
      mc("\"We used to swim a lot.\"", ["Nadábamos mucho.", "Nadabamos mucho.", "Nadamos mucho.", "Nadíamos mucho."], "-ar nosotros: -ábamos, with an accent. (Lesson 3.)"),
      mc("\"They used to live in the countryside.\"", ["Vivían en el campo.", "Vivian en el campo.", "Vivaban en el campo.", "Vivieron en el campo."], "-ir ellos: -ían, with an accent on the í. (Lesson 3.)"),
      mc("\"When I was a kid, I used to go to the park.\"", ["Cuando era niño, iba al parque.", "Cuando fui niño, iba al parque.", "Cuando era niño, iva al parque.", "Cuando era niño, fui al parque."], "Era for a stage of life, iba (with b) for a habit. (Lesson 4.)"),
    ]),
    items: [
      chooseSentence("We used to eat ice cream in the yard.", ["Comiamos helado en el patio.", "Comíabamos helado en el patio.", "Comimos helado en el patio."]),
    ],
  },
  // L06
  "a2r-mission-childhood-interview": {
    goal: "ask and answer questions about someone's childhood in the imperfect, turning tú questions into yo answers.",
    items: [
      choose("Mis hermanos y yo ___ en el jardín.", ["jugabamos", "jugavamos", "jugaban"]),
      choose("En mi pueblo no ___ internet.", ["habia", "habían", "hubo"]),
      chooseSentence("Did you (tú) use to watch TV?", ["¿Veias la televisión?", "¿Vías la televisión?", "¿Viste la televisión?"]),
      edit(trIs("En mi pueblo no habían coches."), (e) => ({ ...e, source: "En mi pueblo no habían carros.", answer: "En mi pueblo no había carros.", altAnswers: ["En mi pueblo no había coches."] })),
      edit(trIs("There were no cars, so we walked everywhere."), (e) => ({ ...e, answer: "No había carros, así que caminábamos a todas partes.", altAnswers: ["No había coches, así que caminábamos a todas partes.", "No había autos, así que caminábamos a todas partes.", "No había carros, así que íbamos a pie a todas partes."] })),
      edit(spIs("Después de la escuela hacía los deberes y jugaba con mis amigos."), (e) => ({ ...e, text: "Después de la escuela hacía la tarea y jugaba con mis amigos.", altAnswers: ["Después de la escuela hacía los deberes y jugaba con mis amigos."] })),
    ],
  },
  // L07
  "a2r-spiral-past-forms": {
    goal: "choose between the preterite and the imperfect for Beginner verbs (gustar, ser, estar, tener) and get each form right.",
    items: [
      edit(fbIs("A mi padre le ___ los coches antiguos."), (e) => ({ ...e, sentence: "A mi padre le ___ los carros antiguos." })),
    ],
  },
  // L08
  "a2d-describe-the-scene": {
    goal: "set a past scene in the imperfect: the time, the weather, age, feelings, what people looked like and what was going on.",
    items: [
      chooseSentence("Hay muchos turistas en la plaza.", ["Habia muchos turistas en la plaza.", "Habían muchos turistas en la plaza.", "Hubo muchos turistas en la plaza."]),
      edit(fbIs("___ muchos coches en la calle."), (e) => ({ ...e, sentence: "___ muchos carros en la calle." })),
    ],
  },
  // L09
  "a2d-old-habits-new-habits": {
    goal: "contrast how things used to be (antes + imperfect) with how they are now (ahora + present).",
    items: [
      choose("De niños, mis primos ___ en el pueblo; ahora viven en Madrid.", ["vivian", "vivaban", "vivieron"]),
      choose("Antes no ___ Internet en casa; ahora sí.", ["habia", "habían", "hay"]),
      edit(fbIs("Antes mi hermana ___ al trabajo en metro; ahora va andando."), (e) => ({ ...e, sentence: "Antes mi hermana ___ al trabajo en metro; ahora camina." })),
      edit(trIs("En aquella época no tuve teléfono móvil; ahora tengo dos."), (e) => ({ ...e, source: "En aquella época no tuve celular; ahora tengo dos.", answer: "En aquella época no tenía celular; ahora tengo dos.", altAnswers: ["En aquella época no tenía teléfono celular; ahora tengo dos.", "En aquella época no tenía móvil; ahora tengo dos."] })),
      edit(trIs("As kids, we used to play in the street; now children play with their phones."), (e) => ({ ...e, answer: "De niños, jugábamos en la calle; ahora los niños juegan con el celular.", altAnswers: ["De niños, jugábamos en la calle; ahora los niños juegan con sus celulares.", "De niños, jugábamos en la calle; ahora los niños juegan con sus teléfonos.", "De niños, jugábamos en la calle; ahora los niños juegan con el móvil.", "De niños, jugábamos en la calle; ahora los niños juegan con sus móviles."] })),
    ],
  },
};

export function withA2Unit3Fixes(lessons: Lesson[]): Lesson[] {
  return applyLessonFixes(lessons, FIXES);
}

export function withA2Unit3SpokenFixes(lessons: Lesson[], keep: (from: Lesson, to: Lesson) => Lesson): Lesson[] {
  return applySpokenFixes(lessons, FIXES, keep);
}
