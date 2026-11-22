// Synced from cheneygross-afk/lengo:src/lib/lessons/a1-unit4-fixes.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Lesson } from "./types";
import { alts, applyLessonFixes, applySpokenFixes, choose, chooseSentence, drop, edit, fbIs, keepMeta, mc, spIs, trIs, warmUp, type LessonFix } from "./unit-fixes";

// A1 Unit 4 (Everyday irregulars): content fixes from Claude's audit in
// Ricardo's format (ES-A1-U04_CL_2026-11-22). Content only. See
// unit-fixes.ts for why the irregular forms are checked with choices
// (conosco, tiengo, traego, decen pass the checker as typos).

const FIXES: Record<string, LessonFix> = {
  // L01
  "a1-irregulars-yo-go": {
    goal: "use pongo, salgo, traigo and hago, and keep every other form of these verbs regular.",
    warmUp: warmUp("Warm-up: the boot verbs", "A quick look back at Unit 3. Today's verbs are odd in one form only, and that form is yo.", [
      mc("\"Yo ___ un café.\" (querer)", ["quiero", "quero", "queremos", "quiere"], "Yo is inside the boot: quiero. (Unit 3: e → ie.)"),
      mc("\"Nosotros ___ ir mañana.\" (poder)", ["podemos", "puedemos", "pueden", "puedo"], "Nosotros is outside the boot, so poder keeps its o: podemos."),
      mc("\"Ellos ___ en una casa grande.\" (vivir)", ["viven", "vivimos", "vivís", "vive"], "Ellos takes -en for -er and -ir verbs: viven."),
    ]),
    items: [
      drop(trIs("I put the books on the shelf.")),
      drop(trIs("Hacemos las camas.")),
      alts(trIs("I do my homework at night."), ["Hago la tarea en la noche.", "Hago mi tarea en la noche.", "Yo hago la tarea en la noche."]),
      choose("Yo ___ la comida.", ["traego", "trao", "trae"]),
      chooseSentence("I'm bringing the wine and you're bringing the bread.", ["Yo traego el vino y tú traes el pan.", "Yo trao el vino y tú traes el pan.", "Yo traigo el vino y tú traigas el pan."]),
      chooseSentence("What are you (informal) bringing? I'm bringing flowers.", ["¿Qué traes? Traego flores.", "¿Qué traigues? Traigo flores.", "¿Qué traes? Trae flores."]),
      chooseSentence("Pongo la mesa.", ["Ponimos la mesa.", "Pongomos la mesa.", "Ponen la mesa."]),
      chooseSentence("We go out on Saturdays.", ["Salemos los sábados.", "Salgomos los sábados.", "Salen los sábados."]),
      edit(spIs("Siempre pongo el teléfono en el bolso."), (e) => ({ ...e, text: "Siempre pongo el celular en la bolsa.", altAnswers: ["Siempre pongo el teléfono en la bolsa.", "Siempre pongo mi celular en mi bolsa.", "Siempre pongo mi teléfono en mi bolsa.", "Siempre pongo el teléfono en el bolso.", "Siempre pongo el móvil en el bolso."] })),
      edit((e) => e.type === "word-order" && e.words.includes("coche"), (e) => ({ ...e, words: e.words.map((w: string) => (w === "coche." ? "carro." : w === "coche" ? "carro" : w)) })),
    ],
  },
  // L02
  "a1-irregulars-tengo-vengo-digo-oigo": {
    goal: "use tengo, vengo, digo and oigo, and the boot forms tienes, viene, dicen, oyes.",
    warmUp: warmUp("Warm-up: yo-go verbs", "A quick look back at the last lesson. Today's verbs add a vowel change to the -go.", [
      mc("\"Yo ___ de casa a las ocho.\" (salir)", ["salgo", "salo", "sale", "salimos"], "Salir has -go in yo: salgo. (Lesson: yo-go verbs.)"),
      mc("\"Tú ___ la cena.\" (hacer)", ["haces", "hagas", "hago", "haz"], "Only yo is odd (hago). Tú is regular: haces."),
      mc("\"Yo ___ las llaves en la mesa.\" (poner)", ["pongo", "pono", "pone", "ponemos"], "Poner → pongo, like salgo and traigo."),
    ]),
    items: [
      drop(trIs("Vengo a las ocho.")),
      drop((e) => e.type === "matching" && e.pairs.some((p) => p.left === "tengo")),
      choose("Mi jefa ___ mañana a las nueve.", ["vene", "vienen", "vengo"]),
      choose("___ dos hijos y un perro.", ["Tiengo", "Teno", "Tiene"]),
      choose("Perdón, no te ___ bien.", ["oygo", "oyo", "oye"]),
      choose("¿A qué hora ___ tú a casa?", ["venes", "vengo", "viene"]),
      choose("Mi madre siempre ___ que trabajo demasiado.", ["dece", "dicen", "digo"]),
      choose("Yo ___ de la escuela.", ["viengo", "veno", "viene"]),
      choose("Ellos ___ tres hijos.", ["tenen", "tiene", "tengo"]),
      choose("Nosotros ___ la verdad.", ["dicimos", "decemos", "dicen"]),
      chooseSentence("I'm coming from work and I'm hungry.", ["Viengo del trabajo y tengo hambre.", "Veno del trabajo y tengo hambre.", "Vengo del trabajo y tiengo hambre."]),
      chooseSentence("What do you (informal) say? Yes or no?", ["¿Qué deces? ¿Sí o no?", "¿Qué digues? ¿Sí o no?", "¿Qué dice? ¿Sí o no?"]),
      chooseSentence("Tienen una casa grande.", ["Tiengo una casa grande.", "Teno una casa grande.", "Tiene una casa grande."]),
      chooseSentence("Oigo música.", ["Oien música.", "Oigen música.", "Oye música."]),
      edit(trIs("Do you (informal) have a car?"), (e) => ({ ...e, answer: "¿Tienes carro?" })),
      chooseSentence("Do you (informal) have a car?", ["¿Tenes carro?", "¿Tengo carro?", "¿Tienen carro?"]),
      edit(trIs("Nosotros tienemos dos coches."), (e) => ({ ...e, source: "Nosotros tienemos dos carros.", answer: "Nosotros tenemos dos carros.", altAnswers: ["Tenemos dos carros.", "Nosotras tenemos dos carros.", "Nosotros tenemos dos coches.", "Tenemos dos coches."] })),
      chooseSentence("Nosotros tienemos dos carros.", ["Nosotros tienemos dos carros.", "Nosotros tenimos dos carros.", "Nosotros tienen dos carros."]),
      chooseSentence("Ellos decen que sí.", ["Ellos decen que sí.", "Ellos digen que sí.", "Ellos dice que sí."]),
      chooseSentence("Yo tieno hambre.", ["Yo tieno hambre.", "Yo tiengo hambre.", "Yo tiene hambre."]),
      chooseSentence("My friends come at eight and say hello.", ["Mis amigos venen a las ocho y dicen hola.", "Mis amigos vienen a las ocho y decen hola.", "Mis amigos vienen a las ocho y digen hola."]),
    ],
  },
  // L03
  "a1-irregulars-dar-ver-saber": {
    goal: "use doy, veo and sé, and the regular forms of dar, ver and saber.",
    text: [["No veo bien sin gafas.", "No veo bien sin lentes."]],
    warmUp: warmUp("Warm-up: tengo, vengo, digo", "A quick look back before three more short verbs with an odd yo.", [
      mc("\"Yo ___ dos hermanos.\" (tener)", ["tengo", "tieno", "teno", "tiene"], "Tener has -go in yo: tengo. (Lesson: tengo, vengo, digo, oigo.)"),
      mc("\"¿Qué ___ tú?\" (decir)", ["dices", "deces", "digo", "decís"], "Tú is inside the boot, so e becomes i: dices."),
      mc("\"Nosotros ___ a las ocho.\" (venir)", ["venimos", "vienimos", "venemos", "vienen"], "Nosotros is outside the boot and venir is -ir: venimos."),
    ]),
    items: [
      drop(trIs("I don't know.")),
      alts(trIs("I give my seat to an older man."), ["Le doy mi asiento a un señor mayor.", "Doy mi asiento a un señor mayor.", "Le doy mi lugar a un señor mayor.", "Le doy mi lugar a un hombre mayor."]),
      choose("No ___ la dirección del hotel.", ["sabimos", "sé", "saben"]),
    ],
  },
  // L04
  "a1-irregulars-conocer": {
    goal: "use conozco and parezco, and put a before a person you know.",
    warmUp: warmUp("Warm-up: doy, veo, sé", "A quick look back. Conocer is one more verb with an odd yo.", [
      mc("\"Yo te ___ mi número.\" (dar)", ["doy", "do", "da", "damos"], "Dar → doy, like soy. (Lesson: dar, ver, saber.)"),
      mc("\"No ___ la respuesta.\" (saber, yo)", ["sé", "se", "sabo", "sabe"], "Yo sé, with an accent. Se without one is another word."),
      mc("\"¿___ el autobús?\" (ver, tú)", ["Ves", "Vees", "Veo", "Ve"], "Ver is regular outside yo: ves."),
    ]),
    items: [
      drop(trIs("El libro parece interesante.")),
      drop(trIs("What do you (informal) think of the house?")),
      drop((e) => e.type === "word-order" && e.words.join(" ").startsWith("Conozco a un músico")),
      choose("¿___ a mi novia?", ["Conozces", "Conozco", "Sabes"]),
      choose("Yo ___ a tu madre.", ["conosco", "conoco", "conoce"]),
      choose("Tú ___ Lima.", ["conozces", "conozco", "conocemos"]),
      chooseSentence("I know a good restaurant near here.", ["Conosco un buen restaurante cerca de aquí.", "Conoco un buen restaurante cerca de aquí.", "Conoce un buen restaurante cerca de aquí."]),
      chooseSentence("Do you know Pedro?", ["¿Conoces Pedro?", "¿Conozces a Pedro?", "¿Conozco a Pedro?"]),
      chooseSentence("Conocemos a la profesora.", ["Conosco a la profesora.", "Conozco la profesora.", "Conoce a la profesora."]),
      chooseSentence("We know the neighbors.", ["Conocemos los vecinos.", "Conozcemos a los vecinos.", "Conocen a los vecinos."]),
      chooseSentence("Conozco a Madrid muy bien.", ["Conozco a Madrid muy bien.", "Conosco Madrid muy bien.", "Conoce Madrid muy bien."]),
      chooseSentence("Yo conoco a tu hermana.", ["Yo conoco a tu hermana.", "Yo conosco a tu hermana.", "Yo conozco tu hermana."]),
      chooseSentence("I know Quito well, but I don't know your city.", ["Conosco bien Quito, pero no conozco tu ciudad.", "Conozco bien Quito, pero no conosco tu ciudad.", "Conozco bien a Quito, pero no conoco tu ciudad."]),
    ],
  },
  // L05
  "saber-vs-conocer": {
    goal: "choose saber for facts and skills and conocer for people, places and things you've tried.",
    warmUp: warmUp("Warm-up: conozco and sé", "A quick look back at the two odd yo forms you'll use all lesson.", [
      mc("Conocer, yo form?", ["conozco", "conosco", "conoco", "conoce"], "Vowel + -cer → -zco: conozco. (Lesson: conocer.)"),
      mc("Saber, yo form?", ["sé", "sabo", "se", "sabe"], "Yo sé, with an accent. (Lesson: dar, ver, saber.)"),
      mc("Which sentence needs a?", ["Conozco ___ Ana.", "Conozco ___ Lima.", "Sé ___ su número."], "A goes before a specific person: Conozco a Ana."),
    ]),
    items: [
      edit(trIs("Do you know how to drive?"), (e) => ({ ...e, answer: "¿Sabes manejar?", altAnswers: ["¿Sabes conducir?", "¿Tú sabes manejar?", "¿Tú sabes conducir?", "¿Sabe manejar?", "¿Sabe conducir?", "¿Sabe usted manejar?"] })),
      edit(trIs("I don't know your husband."), (e) => ({ ...e, answer: "No conozco a tu esposo." })),
      chooseSentence("I don't know your husband.", ["No sé a tu esposo.", "No conosco a tu esposo.", "No conozco tu esposo."]),
      choose("¿___ a mi hermano?", ["Sabes", "Conozces", "Conozco"]),
      chooseSentence("Conocemos bien Bogotá.", ["Sé bien Bogotá.", "Conosco bien Bogotá.", "Conoce bien Bogotá."]),
      chooseSentence("Sé que la tienda cierra a las ocho.", ["Sabimos que la tienda cierra a las ocho.", "Sabemos que la tienda cerra a las ocho.", "Conocemos que la tienda cierra a las ocho."]),
      chooseSentence("Do you (informal) know paella? (Have you tried it?)", ["¿Sabes la paella?", "¿Conozces la paella?", "¿Conozco la paella?"]),
      chooseSentence("Sé a tu hermana.", ["Sé a tu hermana.", "Conosco a tu hermana.", "Conozco tu hermana."]),
      chooseSentence("I know how to cook, but I don't know this dish.", ["Conozco cocinar, pero no sé este plato.", "Sé cocinar, pero no conosco este plato.", "Sé cocinar, pero no conoce este plato."]),
    ],
  },
  // L06
  "saber-vs-conocer-mastery-check": {
    goal: "choose saber or conocer without help, in typed, spoken and listening items.",
    items: [
      choose("Nosotros no ___ este restaurante.", ["sabemos", "conozcemos", "conocen"]),
      choose("Nosotros ___ hablar inglés.", ["sabimos", "conocemos", "saben"]),
      choose("Yo no ___ Argentina.", ["sé", "conosco", "conoce"]),
      chooseSentence("Do you know Mexico City?", ["¿Sabes la Ciudad de México?", "¿Conozces la Ciudad de México?", "¿Conozco la Ciudad de México?"]),
      chooseSentence("I want to meet your sister.", ["Quero conocer a tu hermana.", "Quiero saber a tu hermana.", "Quiero conocer tu hermana."]),
      chooseSentence("Do you (informal) know a good hotel in Lima?", ["¿Sabes un buen hotel en Lima?", "¿Conozces un buen hotel en Lima?", "¿Conozco un buen hotel en Lima?"]),
      chooseSentence("Conocemos a tu primo.", ["Sé a tu primo.", "Conosco a tu primo.", "Conoce a tu primo."]),
      chooseSentence("¿Sabes a mi profesor de inglés?", ["¿Sabes a mi profesor de inglés?", "¿Conozces a mi profesor de inglés?", "¿Conoces mi profesor de inglés?"]),
      chooseSentence("I know Marta, but I don't know her last name.", ["Sé a Marta, pero no conozco su apellido.", "Conosco a Marta, pero no sé su apellido.", "Conoce a Marta, pero no sé su apellido."]),
    ],
  },
  // L07
  "a1-modal-verbs-infinitive": {
    goal: "say what you can, want, need and have to do: conjugate the first verb and keep the second in the infinitive.",
    warmUp: warmUp("Warm-up: saber and conocer", "A quick look back. Saber + infinitive (sé nadar) is already a verb pair like today's.", [
      mc("\"¿___ nadar?\" (Do you know how to swim?)", ["Sabes", "Conoces", "Sabe a", "Conoces a"], "A skill is saber + infinitive: ¿Sabes nadar? (Lesson: saber vs. conocer.)"),
      mc("\"I know Ana.\"", ["Conozco a Ana.", "Sé a Ana.", "Conozco Ana.", "Sé Ana."], "A person is conocer, with a before her: Conozco a Ana."),
      mc("\"I have two kids.\"", ["Tengo dos hijos.", "Tieno dos hijos.", "Tiene dos hijos.", "Tenemos dos hijos."], "Tener → tengo. Today it pairs with que: tengo que trabajar."),
    ]),
    items: [
      drop(trIs("Intento recordar su nombre.")),
      choose("Mis hijos ___ ir a la playa.", ["queren", "quiere", "queremos"]),
      chooseSentence("Do you want to come with me?", ["¿Queres venir conmigo?", "¿Quieres vienes conmigo?", "¿Quieres a venir conmigo?"]),
      chooseSentence("Do you (informal) want to eat something?", ["¿Queres comer algo?", "¿Quieres comes algo?", "¿Quiere comer algo?"]),
      chooseSentence("We have to pay now.", ["Tienemos que pagar ahora.", "Tenimos que pagar ahora.", "Tenemos pagar ahora."]),
      chooseSentence("Tengo que trabajar los sábados.", ["Tenen que trabajar los sábados.", "Tienen trabajar los sábados.", "Tienen que trabajan los sábados."]),
      chooseSentence("Tengo estudiar esta noche.", ["Tengo estudiar esta noche.", "Tiengo que estudiar esta noche.", "Tengo que estudio esta noche."]),
    ],
  },
  // L08
  "a1-irregulars-mission-first-day": {
    goal: "get through a first day at work with every irregular verb from the unit.",
    text: [["el ordenador nuevo", "la computadora nueva"]],
    items: [
      edit(fbIs("El ordenador nuevo no ___."), (e) => ({ ...e, sentence: "La computadora nueva no ___." })),
      edit(spIs("Tengo que usar tu ordenador."), (e) => ({ ...e, text: "Tengo que usar tu computadora.", altAnswers: ["Tengo que usar tu ordenador.", "Tengo que usar tu computador."] })),
      edit(trIs("I have to use your computer."), (e) => ({ ...e, answer: "Tengo que usar tu computadora." })),
      chooseSentence("I have to use your computer.", ["Tiengo que usar tu computadora.", "Tengo que usas tu computadora.", "Tengo usar tu computadora."]),
      choose("Yo ___ a la oficina a las nueve.", ["viengo", "veno", "viene"]),
      choose("No ___ a nadie en la oficina.", ["conosco", "conoco", "sé"]),
      choose("Te ___ un café.", ["traego", "trao", "trae"]),
      alts(trIs("I tell Andrés that I'm from Chile."), ["Le digo a Andrés que soy chileno.", "Le digo a Andrés que soy chilena."]),
      chooseSentence("I bring coffee for the whole team.", ["Traego café para todo el equipo.", "Trao café para todo el equipo.", "Trae café para todo el equipo."]),
      chooseSentence("I don't hear anything, there's a lot of noise.", ["No oygo nada, hay mucho ruido.", "No oyo nada, hay mucho ruido.", "No oye nada, hay mucho ruido."]),
      chooseSentence("Sé a Andrés, pero no conozco al jefe.", ["Sé a Andrés, pero no conozco al jefe.", "Conosco a Andrés, pero no conozco al jefe.", "Conozco a Andrés, pero no sé al jefe."]),
      chooseSentence("I can't hear the boss (f.).", ["No oygo a la jefa.", "No oyo a la jefa.", "No oigo la jefa."]),
      chooseSentence("I have to do a lot today.", ["Tiengo que hacer mucho hoy.", "Tengo que hago mucho hoy.", "Tengo hacer mucho hoy."]),
      chooseSentence("Andrés trae el desayuno.", ["Traego el desayuno.", "Trao el desayuno.", "Trae el desayuno."]),
      chooseSentence("Mañana vengo a las nueve.", ["Mañana vienimos a las nueve.", "Mañana venemos a las nueve.", "Mañana vienen a las nueve."]),
    ],
  },
  // L09
  "a1-core-verbs-everyday-actions": {
    goal: "use seventeen everyday verbs, spotting from (ie), (ue) or (i) which ones are boot verbs.",
    text: [["¿Usas el coche para ir al trabajo?", "¿Usas el carro para ir al trabajo?"], ["¿Puedes mover tu coche, por favor?", "¿Puedes mover tu carro, por favor?"]],
    warmUp: warmUp("Warm-up: verb + infinitive", "A quick look back. Many of today's verbs come after puedo, quiero or tengo que.", [
      mc("\"I can't come today.\"", ["No puedo venir hoy.", "No puedo vengo hoy.", "No podo venir hoy.", "No puedo a venir hoy."], "Only the first verb is conjugated: puedo venir. (Lesson: verb + infinitive.)"),
      mc("\"We have to pay now.\"", ["Tenemos que pagar ahora.", "Tenemos pagar ahora.", "Tienemos que pagar ahora.", "Tenemos que pagamos ahora."], "Tener que + infinitive; nosotros keeps the e: tenemos."),
      mc("\"I've just eaten.\"", ["Acabo de comer.", "Acabo comer.", "Acabo de como.", "Acabo a comer."], "Acabar de + infinitive means \"to have just done\"."),
    ]),
    items: [
      edit(fbIs("Mi hijo siempre ___ el móvil."), (e) => ({ ...e, sentence: "Mi hijo siempre ___ el celular." })),
      choose("Mi hijo siempre ___ el celular.", ["perde", "perdemos", "pierden"]),
      choose("Yo no ___ tu nombre.", ["recordo", "recordamos", "recuerda"]),
      choose("La película ___ a las siete.", ["comenza", "comienzan", "comenzamos"]),
      chooseSentence("Siempre perdemos el partido.", ["Siempre perden el partido.", "Siempre pierdemos el partido.", "Siempre pierde el partido."]),
      {
        find: trIs("Can you show me the room?"),
        to: (e) => keepMeta(e, mc("\"We show the house to the new neighbors.\" (mostrar, o → ue)", ["Mostramos la casa a los vecinos nuevos.", "Muestramos la casa a los vecinos nuevos.", "Muestran la casa a los vecinos nuevos.", "Mostrimos la casa a los vecinos nuevos."], "Nosotros is outside the boot, so mostrar keeps its o: mostramos.")),
      },
      edit(spIs("Siempre pierdo mis gafas."), (e) => ({ ...e, prompt: "Say it in Spanish: \"I always lose my glasses\"", text: "Siempre pierdo mis lentes.", altAnswers: ["Siempre pierdo mis anteojos.", "Siempre pierdo mis gafas.", "Siempre pierdo los lentes."] })),
      edit(trIs("I always lose my glasses."), (e) => ({ ...e, answer: "Siempre pierdo mis lentes." })),
      chooseSentence("I always lose my glasses.", ["Siempre perdo mis lentes.", "Siempre pierdemos mis lentes.", "Siempre pierde mis lentes."]),
      edit((e) => e.type === "word-order" && e.words.includes("ordenador"), (e) => ({ ...e, words: e.words.map((w: string) => (w === "el" ? "la" : w === "ordenador" ? "computadora" : w)) })),
      edit(trIs("Uso el coche los sábados."), (e) => ({ ...e, source: "Uso el carro los sábados.", answer: "Usamos el carro los sábados.", altAnswers: ["Nosotros usamos el carro los sábados.", "Nosotras usamos el carro los sábados.", "Usamos el coche los sábados."] })),
      alts(trIs("The teacher (m.) explains the problem."), ["El maestro explica el problema."]),
      alts(trIs("I'll send you an email tonight."), ["Te envío un email esta noche.", "Te mando un correo esta noche.", "Esta noche te envío un correo."]),
    ],
  },
};

export function withUnit4Fixes(lessons: Lesson[]): Lesson[] {
  return applyLessonFixes(lessons, FIXES);
}

export function withUnit4SpokenFixes(lessons: Lesson[], keep: (from: Lesson, to: Lesson) => Lesson): Lesson[] {
  return applySpokenFixes(lessons, FIXES, keep);
}
