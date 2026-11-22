// Synced from cheneygross-afk/lengo:src/lib/lessons/es-redesign/b1-unit1.ts by scripts/sync-content.mjs -- edit it there, not here.
// New course, B1 Unit 1 (it, them words · to or for whom words · two pronouns
// together): content fixes from Claude's audit in Ricardo's format (Claude
// Feedback/Spanish (new course)/B1 Intermediate/Unit 01). Section and
// question numbers are the lessons' own as they are now. Only content
// changes here: what is taught, asked and accepted. The answer checker and
// the rubric are untouched.
//
// Latin American answers (carro, celular, boleto, mesero, papá, torta,
// chofer) are now accepted wherever the Spain word was the only key
// (b1-unit1-latam.ts), and the main answers and models use them. Lessons
// built on later grammar moved (es-redesign-units.json): the second part of
// double pronouns with infinitives, next to its first part in B1 Unit 2;
// the childhood and weather vocabulary review (mudarse, divertirse) to B1
// Unit 2; the advice column and the grandmother's advice (the subjunctive)
// to B2 Units 2 and 1. The spaced review of se lo now comes after the
// lessons that teach it. Elsewhere questions stop asking for os, reflexives
// and the subjunctive (os llevo, despiértame, nos casamos, cuando llegues),
// and goals say what each lesson really practices.
import type { Exercise } from "../types";
import type { LessonPatch } from "./patch";
import { order } from "./a2-unit5";
import { B1_UNIT1_LATAM } from "./b1-unit1-latam";

const speak = (prompt: string, text: string, altAnswers: string[], explanation: string): Exercise => ({
  type: "speak",
  prompt,
  text,
  ...(altAnswers.length ? { altAnswers } : {}),
  explanation,
});
const tr = (prompt: string, source: string, answer: string, altAnswers: string[], explanation: string, direction: "en-es" | "es-en" = "en-es"): Exercise => ({
  type: "translate",
  prompt,
  direction,
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
const SAY = "Say it in Spanish:";
const BOLD = "How do you say the bold words in Spanish?";
const CORRECT = "Correct the sentence.";
const TR = "Translate to Spanish.";

const CAR_LEND = speak(`${SAY} "Will you lend me your car? — Yes, I'll lend it to you"`, "¿Me prestas tu carro? —Sí, te lo presto.", ["¿Me prestas tu auto? —Sí, te lo presto.", "¿Me prestas tu coche? —Sí, te lo presto.", "¿Me prestas tu carro? Sí, te lo presto.", "¿Me prestas tu auto? Sí, te lo presto."], "Te (to you) + lo (el carro): person first, both before the verb.");
const CAR_LEND_EX = { es: "¿Me prestas tu carro? —Sí, te lo presto.", en: "Will you lend me your car? — Yes, I'll lend it to you." };
const TICKETS = (prompt: string) => speak(prompt, "¿Los boletos? Mi hermana nos los compra.", ["¿Los billetes? Mi hermana nos los compra.", "¿Los boletos? Nos los compra mi hermana."], "nos + los (los boletos). In Latin America a ticket is el boleto.");
const PHONE = "el celular";

const manual: Record<string, LessonPatch> = {
  "a2d-pattern-lo-la-los-las": { goal: "replace a noun with lo, la, los or las in one sentence frame until matching it is automatic." },
  "a2d-se-lo-pattern": { goal: "turn le or les into se before lo, la, los, las: se lo di, se las mandé." },
  "direct-object-pronouns-1": {
    alts: {
      4: ["¿El diario? Lo leo todos los días."],
      11: ["Voy a llamarla hoy en la noche.", "La voy a llamar hoy en la noche.", "Voy a llamarla hoy por la noche.", "La voy a llamar hoy por la noche."],
    },
    exercises: {
      replace: {
        8: fill(BOLD, "Necesito mis lentes. ¿___ tienes tú?", "Los", "I need my glasses. Do you have [them]?", "Los lentes is masculine plural → los. (In Spain glasses are las gafas → las.)"),
        12: tr(CORRECT, "¿El carro? Mi padre está lavándola.", "¿El carro? Mi padre está lavándolo.", ["¿El carro? Mi padre lo está lavando.", "¿El carro? Mi papá está lavándolo.", "¿El carro? Mi papá lo está lavando."], "El carro is masculine, so the pronoun must be lo, not la."),
      },
    },
  },
  "a2d-me-te-nos-direct": {
    goal: "use me, te and nos as objects, and flip them in answers: ¿Me ves? → Sí, te veo.",
    sections: {
      0: {
        examples: [
          { es: "—¿Me oyes bien? —Sí, te oigo perfectamente.", en: "Can you hear me well? — Yes, I can hear you perfectly. (me → te)" },
          { es: "—¿Nos invitas? —Claro, los invito a todos.", en: "Will you invite us? — Of course, I'll invite you all. (nos → los; in Spain os)" },
          { es: "—¿Te ayudo con la maleta? —Sí, gracias, me ayudas mucho.", en: "Shall I help you with the suitcase? — Yes, thanks, you're a big help to me. (te → me)" },
        ],
      },
    },
    alts: {
      0: ["Sí, puedes llamarme a las nueve.", "Sí, me puedes llamar a las nueve.", "Sí, llámame a las nueve."],
    },
    exercises: {
      replace: {
        1: fill(BOLD, "—¿Nos esperan? —Sí, ___ esperamos en la puerta.", "los", "\"Will you wait for us?\" \"Yes, we'll wait for [you] at the door.\" (you all = ustedes)", "los: direct object pronoun (ustedes). The question is about us (nos); answering a group, the pronoun is los (las for a group of women).", ["las"]),
        10: speak("Answer out loud in Spanish: ¿Nos llevas al centro? (Say: \"Yes, I'll take you all\")", "Sí, los llevo.", ["Sí, las llevo.", "Sí, los llevo al centro.", "Sí, las llevo al centro."], "Nos in the question → los (or las) in the answer: you all, ustedes."),
        24: {
          type: "write",
          prompt: "Write an email to an old friend you haven't seen for years. Say who you are, that you're visiting their city and want to see them, and ask them to pick you up.",
          minWords: 25,
          maxWords: 60,
          rubric: ["Me, te, nos as direct objects (¿me recuerdas?, te llamo…)", "A pronoun with an infinitive (verte, recogerme)", "Plans in the present or with ir a", "A friendly greeting and closing"],
          modelAnswer: "Querida Lucía: ¿Me recuerdas? Soy Marta, tu compañera de cuarto en la universidad. Voy a Bogotá en mayo y quiero verte. ¿Puedes recogerme en la estación? Mis papás vienen conmigo y te quieren conocer. Te llamo el domingo para hablar. ¡Te espero con muchas ganas! Un abrazo, Marta",
          explanation: "Me, te and nos go before a conjugated verb (te llamo, te quieren conocer) or are attached to an infinitive (verte, recogerme).",
        },
      },
    },
  },
  "direct-object-pronouns-2": {
    exercises: {
      replace: {
        10: tr(TR, "This bag is from a famous brand, but I bought it secondhand.", "Esta bolsa es de una marca famosa, pero la compré de segunda mano.", ["Esta bolsa es de una marca famosa, pero la compré usada.", "Esta cartera es de una marca famosa, pero la compré de segunda mano.", "Esta cartera es de una marca famosa, pero la compré usada.", "Este bolso es de una marca famosa, pero lo compré de segunda mano.", "Este bolso es de una marca famosa, pero lo compré usado."], "La bolsa → la; de segunda mano (or usada) = secondhand. In Spain it's el bolso, so lo compré."),
      },
    },
  },
  "a2r-transform-replace-object": {
    goal: "take the noun out of a sentence, put the pronoun in, and put it before the verb.",
    exercises: {
      replace: {
        4: mc("Transform: \"No encuentro mis lentes.\"", ["No los encuentro.", "No encuentro los.", "Los no encuentro.", "No las encuentro."], 0, "Lentes is masculine plural, so los, and the order is no + pronoun + verb: No los encuentro. \"Encuentro los\" puts it after the verb, \"Los no\" puts no in the wrong place, and \"las\" is feminine."),
        15: tr(CORRECT, "¿El carro? La necesitamos hoy.", "¿El carro? Lo necesitamos hoy.", ["¿El auto? Lo necesitamos hoy.", "¿El coche? Lo necesitamos hoy.", "¿El carro? Hoy lo necesitamos."], "El carro is masculine, so lo, not la."),
      },
    },
  },
  "a2d-shopping-replace": {
    goal: "talk through a shopping trip without repeating words, using lo, la, los and las for the clothes.",
    alts: {
      5: ["¿La chamarra? Voy a probarla.", "¿La chamarra? La voy a probar.", "¿La chaqueta? Me la voy a probar.", "¿La chaqueta? Voy a probármela."],
    },
    exercises: {
      replace: {
        8: fill(BOLD, "—¿Y los lentes de sol? —___ compro también.", "Los", "—And the sunglasses? —I'm buying [them] too.", "Los lentes → los."),
        13: fill(BOLD, "—¿Viste los jeans? —Sí, pero no ___ compré.", "los", "—Did you see the jeans? —Yes, but I didn't buy [them].", "Los jeans → los, after no and before the verb."),
        15: tr(TR, "Do you (tú) like the sweater? — Yes, but I don't need it.", "¿Te gusta el suéter? —Sí, pero no lo necesito.", ["¿Te gusta el suéter? Sí, pero no lo necesito.", "¿Te gusta el jersey? —Sí, pero no lo necesito.", "¿Te gusta el jersey? Sí, pero no lo necesito."], "El suéter → lo (el jersey in Spain)."),
        20: tr(TR, "The gloves? I bought them yesterday on sale.", "¿Los guantes? Los compré ayer en oferta.", ["¿Los guantes? Ayer los compré en oferta.", "¿Los guantes? Los compré ayer en rebajas.", "¿Los guantes? Ayer los compré en rebajas.", "¿Los guantes? Los compré ayer en descuento."], "Los guantes → los. En oferta = on sale (en rebajas in Spain)."),
      },
    },
  },
  "a2d-pattern-le-les": {
    exercises: {
      replace: {
        11: speak(`${SAY} "The waiter brought the gentlemen the bill"`, "El mesero les trajo la cuenta a los señores.", ["El camarero les trajo la cuenta a los señores.", "El mesero les trajo la cuenta a los señores", "El mesonero les trajo la cuenta a los señores."], "Plural receivers → les, doubled by a los señores. In Latin America a waiter is el mesero."),
      },
    },
  },
  "a2d-minimal-pairs-lo-le": {
    goal: "choose lo / la or le for a person: does the verb act on them, or does something pass to them?",
  },
  "a2r-contrast-lo-le": {
    goal: "choose between lo / la and le / les, including esperar, buscar, preguntar and contestar.",
    exercises: {
      replace: {
        13: tr(TR, "I asked the waiter for the bill.", "Le pedí la cuenta al mesero.", ["Al mesero le pedí la cuenta.", "Le pedí la cuenta al camarero.", "Al camarero le pedí la cuenta.", "Le pedí la cuenta a la mesera."], "The bill is what you ask for; the waiter receives the request: le, doubled with al mesero."),
      },
    },
  },
  "a2d-fix-paragraph-iop": {
    goal: "fix le / les and gustar slips: les for several people, gusta or gustan for the thing liked.",
  },
  "a2d-personal-a-fix": {
    sections: {
      0: {
        check: [
          { type: "multi-select", question: "Which sentences are correct? Choose all that apply.", options: ["Busco a mi perro Toby.", "Busco un taxi.", "Hay a muchos niños en el parque.", "Tengo a dos hermanas."], correctIndexes: [0, 1], explanation: "A named pet counts as an individual, so a mi perro Toby; a taxi is a thing, so no a. Hay never takes the personal a, and tener for family (Tengo dos hermanas) does not either." },
          mc("Your sink is leaking and any plumber will do. Which is right?", ["Busco un plomero.", "Busco a un plomero.", "Busco al plomero.", "Busco a plomero."], 0, "Any plumber is not a specific person, so there is no personal a: Busco un plomero. Al plomero would mean a particular one you both know, and a plomero without the article isn't Spanish."),
        ],
      },
    },
    exercises: {
      replace: {
        15: mc("«Ayudé mi abuela con las compras.» What's wrong?", ["Missing a: ayudé a mi abuela", "Extra a", "Should be al", "Nothing"], 0, "Mi abuela is a specific person receiving the help → personal a. Al would need el."),
      },
    },
  },
  "a2d-qa-favors": {
    goal: "ask for and answer favors and messages with me, te, le and les: ¿Me prestas…? ¿Le dijiste…?",
    alts: {
      5: ["¿Me prestas tu pluma?", "¿Me prestas tu lapicero?", "¿Me prestas tu lapicera?", "¿Me puedes prestar tu pluma?", "¿Puedes prestarme tu pluma?"],
    },
    exercises: {
      replace: {
        18: fill(BOLD, "—¿Te prestó Juan el carro? —Sí, ___ prestó el carro.", "me", "\"Did Juan lend you the car?\" \"Yes, he lent [me] the car.\"", "Te in the question becomes me in the answer."),
      },
    },
  },
  "b1d-rep-combinados-se-lo-regalos": {
    goal: "answer questions about presents with two pronouns: se lo, me la, nos los.",
    sections: {
      0: {
        examples: [
          { es: "—¿Qué le regalaste a tu mamá? —Le regalé un pañuelo.", en: "What did you give your mom? — I gave her a scarf. (un solo pronombre: le)" },
          { es: "Se lo compré en el mercado.", en: "I bought it for her at the market. (le + lo → se lo)" },
          { es: "—¿Quién les dio las entradas? —Nos las dio Ana.", en: "Who gave you (all) the tickets? — Ana gave them to us. (nos no cambia)" },
        ],
      },
    },
    reword: [
      ["¿Quién os regaló esa lámpara?", "¿Quién les regaló esa lámpara?"],
      ["Who gave you (vosotros) that lamp?", "Who gave you (all) that lamp?"],
      ["¿Quién os dio las entradas?", "¿Quién les dio las entradas?"],
    ],
    exercises: {
      replace: {
        13: order(["Mis", "abuelos", "nos", "lo", "regalaron", "el", "año", "pasado"], "My grandparents gave it to us last year (it = el sofá)", "«Nos lo» delante del verbo conjugado."),
      },
    },
  },
  "a2-double-pronouns-me-lo": {
    goal: "put two pronouns together, the person first: me lo, te la, nos los.",
    sections: {
      0: {
        examples: [
          CAR_LEND_EX,
          { es: "Mi madre nos hace la cena. → Mi madre nos la hace.", en: "My mother makes us dinner. → My mother makes it for us." },
          { es: "¿Las fotos? Te las mando esta noche.", en: "The photos? I'll send them to you tonight." },
        ],
      },
    },
    exercises: { replace: { 14: CAR_LEND } },
  },
  "a2-double-pronouns-me-lo-part-2": {
    goal: "put two pronouns together, the person first: me lo, te la, nos los.",
    sections: {
      0: { examples: [CAR_LEND_EX, { es: "Le doy el regalo a Ana. → Se lo doy.", en: "I give the present to Ana. → I give it to her." }] },
    },
    alts: {
      4: ["¿El lapicero? Te lo presto.", "¿La lapicera? Te la presto."],
    },
    exercises: {
      replace: {
        0: fill(BOLD, "¿Los boletos? Mi hermana ___ compra.", "nos los", "The tickets? My sister buys [them for us].", "nos + los (los boletos)."),
        7: tr(TR, "The menu? The waiter is bringing it to us.", "¿El menú? El mesero nos lo trae.", ["¿El menú? El mesero nos lo está trayendo.", "¿El menú? Nos lo trae el mesero.", "¿La carta? El mesero nos la trae.", "¿La carta? El mesero nos la está trayendo.", "¿La carta? Nos la trae el mesero.", "¿El menú? El camarero nos lo trae.", "¿La carta? El camarero nos la trae.", "¿La carta? Nos la trae el camarero.", "¿El menú? Nos lo trae el camarero."], "Nos lo: person first, then lo for el menú (la for la carta)."),
        8: order(["¿El", "carro?", "Se", "lo", "vendí", "a", "mi", "vecino"], "The car? I sold it to my neighbor", "Se (to my neighbor) + lo (the car), both before the verb; a mi vecino makes se clear."),
        14: CAR_LEND,
        16: TICKETS(`${SAY} "The tickets? My sister buys them for us"`),
      },
    },
  },
  "a2d-se-lo-pattern-part-2": {
    goal: "turn le or les into se before lo, la, los, las: se lo di, se las mandé.",
    exercises: {
      replace: {
        7: tr(TR, "The cakes? We bought them for the children.", "¿Los pasteles? Se los compramos a los niños.", ["¿Las tortas? Se las compramos a los niños.", "¿Las tartas? Se las compramos a los niños.", "¿Los pasteles? A los niños se los compramos."], "Les becomes se; los for los pasteles (las for las tortas)."),
      },
    },
  },
  "a2d-story-cloze-lost-phone": {
    sections: {
      1: {
        body: ["Read the story with the verbs in the infinitive, then put them in the preterite in the exercises: «El martes Laura (salir) de casa a las ocho. (Tomar) el autobús y (llegar) a la universidad. Cuando (buscar) el celular, no lo (encontrar). (Volver) al autobús, (hablar) con el chofer y él le (contar) una buena noticia: alguien lo (encontrar) y lo (poner) en la oficina de objetos perdidos.»"],
      },
    },
    alts: {
      16: ["Lo encontró en el autobús y se lo dio al chofer.", "Lo encontró en el bus y se lo dio al chofer.", "Lo encontró en el camión y se lo dio al chofer.", "Lo encontró en el camión y se lo dio al conductor."],
    },
    exercises: {
      replace: {
        3: fill(BOLD, "___ el celular en la mochila, pero no estaba.", "Busqué", "I [looked for] my phone in my backpack, but it wasn't there.", "buscar → busqué: preterite, yo (c→qu). -car → -qué."),
        7: tr("Translate to English.", "Por fin tuvo su celular otra vez.", "Finally she had her phone again.", ["She finally got her phone back.", "At last she had her phone again.", "Finally she had her cell phone again.", "She finally had her phone again."], "Tener has the preterite stem tuv-: tuvo, no accent. El celular = the (cell) phone.", "es-en"),
        13: fill(BOLD, "El mesero me ___ que alguien dejó un celular.", "dijo", "The waiter [told] me that someone left a phone.", "Decir, él: dijo."),
        14: tr(TR, "She called her phone from a friend's phone.", "Llamó a su celular desde el celular de una amiga.", ["Llamó a su celular desde el teléfono de una amiga.", "Llamó a su teléfono desde el teléfono de una amiga.", "Llamó a su móvil desde el móvil de una amiga.", "Llamó a su móvil desde el teléfono de una amiga."], "Llamar, ella: llamó."),
        22: tr("Change it so Laura tells it (yo), in the preterite.", "Laura busca el celular.", "Busqué el celular.", ["Yo busqué el celular."], "Laura now tells it herself (yo): buscar → busqué, with c → qu before é."),
        25: tr(CORRECT, "Laura buscó el celular, pero no lo encuentró.", "Laura buscó el celular, pero no lo encontró.", ["Laura buscó el celular pero no lo encontró."], "The ue stem change belongs to the present (encuentra); the preterite keeps the o: encontró."),
        26: tr(TR, "I put the phone in my bag and I didn't lose it again.", "Puse el celular en la bolsa y no lo perdí más.", ["Puse el celular en mi bolsa y no lo perdí más.", "Puse el celular en la mochila y no lo perdí más.", "Puse el celular en la bolsa y no lo volví a perder.", "Puse el celular en mi bolsa y no lo volví a perder.", "Puse el celular en la bolsa y no lo perdí otra vez.", "Puse el teléfono en la bolsa y no lo perdí más.", "Puse el móvil en el bolso y no lo perdí más.", "Puse el móvil en mi bolso y no lo perdí más.", "Puse el móvil en el bolso y no lo volví a perder."], `Poner, yo: puse; perder: perdí. In Latin America the phone is ${PHONE}.`),
      },
    },
  },
  "a2-common-words-linking": {
    goal: "link your ideas with aunque, sin embargo, además, incluso, ambos and salvo.",
    sections: {
      1: {
        examples: [
          { es: "El departamento es grande y, además, es barato.", en: "The apartment is big and, what's more, it's cheap." },
          { es: "Además de inglés, habla francés.", en: "As well as English, she speaks French." },
          { es: "Todos vinieron, incluso mi abuela.", en: "Everyone came, even my grandmother." },
          { es: "Ni siquiera me dijo hola.", en: "He didn't even say hello to me." },
          { es: "Jamás como carne.", en: "I never eat meat." },
          { es: "Salió y no volvió jamás.", en: "He left and never came back." },
        ],
      },
      2: {
        examples: [
          { es: "Puedes venir cualquier día.", en: "You can come any day." },
          { es: "Cualquier persona puede aprender.", en: "Anyone can learn." },
          { es: "Ambos hermanos viven en Lima.", en: "Both brothers live in Lima." },
          { es: "Yo no voy; los demás van a la playa.", en: "I'm not going; the others are going to the beach." },
          { es: "La mayoría de los estudiantes vive cerca.", en: "Most of the students live nearby." },
          { es: "Unos quieren pizza; otros prefieren pasta.", en: "Some want pizza; others prefer pasta." },
          { es: "Estas camisas no me gustan. ¿Tiene otras?", en: "I don't like these shirts. Do you have any others?" },
        ],
      },
    },
    exercises: {
      replace: {
        9: tr(TR, "I found the apartment through a friend.", "Encontré el departamento a través de un amigo.", ["Encontré el apartamento a través de un amigo.", "Encontré el piso a través de un amigo.", "Encontré el departamento a través de una amiga.", "Encontré el apartamento a través de una amiga."], "A través de means through (by means of): a través de un amigo."),
        20: speak(`${SAY} "The apartment is big and, what's more, it's cheap"`, "El departamento es grande y, además, es barato.", ["El apartamento es grande y, además, es barato.", "El departamento es grande y además es barato.", "El piso es grande y, además, es barato."], "Además (what's more) adds a second point; it takes commas around it."),
      },
    },
  },
  "a2-common-words-place": {
    goal: "say where things are with arriba, abajo, frente a, contra and acerca de.",
    sections: {
      0: {
        examples: [
          { es: "Mi habitación está arriba.", en: "My room is upstairs." },
          { es: "Los niños juegan abajo, en el jardín.", en: "The kids are playing downstairs, in the garden." },
          { es: "Sube la escalera: el baño está arriba, a la derecha.", en: "Go up the stairs: the bathroom is upstairs, on the right." },
          { es: "Mi asiento está atrás, al fondo del autobús.", en: "My seat is at the back of the bus." },
          { es: "Ven acá, por favor.", en: "Come here, please." },
        ],
        check: [
          mc("Which word is the opposite of arriba?", ["abajo", "atrás", "acá", "frente"], 0, "Arriba (up, upstairs) is the opposite of abajo (down, downstairs). \"Atrás\" means behind, \"acá\" means here, and \"frente\" means front."),
          mc("Debajo de means under. \"The cat is under the car.\"", ["El gato está debajo del carro.", "El gato está debajo el carro.", "El gato está debajo de el carro.", "El gato está debajo al carro."], 0, "Debajo is a preposition word, so it needs de, and de + el contracts to del. \"Debajo el\" drops de, \"de el\" must contract, and al belongs to frente a."),
        ],
      },
    },
    exercises: {
      replace: {
        5: fill(BOLD, "Hay poco ___ en el carro para las maletas.", "espacio", "There's little [room] in the car for the suitcases.", "espacio = room, space. Espacio means room or space: poco espacio = little room.", ["sitio", "lugar"]),
        8: mc("\"I have a lot of homework.\"", ["Tengo un montón de tarea.", "Tengo un montón tarea.", "Tengo montón de tarea.", "Tengo un montón la tarea."], 0, "The chunk is un montón de + noun (a lot of): un montón de tarea. \"Un montón tarea\" drops de, \"montón de\" drops un, and \"un montón la\" replaces de with an article."),
      },
    },
  },
  "a2r-mission-packing": {
    goal: "go through a packing list with a friend, answering with lo, la, los, las for each item.",
    reword: [
      ["¿Quién os recoge en el aeropuerto?", "¿Quién los recoge en el aeropuerto?"],
      ["Os in the question → nos in the answer", "Los (you all) in the question → nos in the answer"],
      ["Mi padre os lleva.", "Mi padre los lleva."],
      ["Os would leave you out (you all)", "Los would leave you out (you all)"],
    ],
    sections: {
      1: {
        body: ["Pronouns also replace people: me, te, lo/la, nos, los/las. When the speaker changes, the pronoun flips: a question with me gets an answer with te, and nos gets los or las (you all; os in Spain)."],
        examples: [
          { es: "—¿Quién te lleva al aeropuerto? —Mi hermano me lleva.", en: "Who's taking you to the airport? — My brother is taking me." },
          { es: "—¿Nos esperas en la puerta? —Sí, los espero allí.", en: "Will you wait for us at the gate? — Yes, I'll wait for you there. (in Spain: os espero)" },
        ],
        check: [
          mc("\"¿Me llamas mañana?\" — \"Sí, ___ llamo.\"", ["te", "me", "lo", "la"], 0, "You're asked \"will you call me?\" → \"yes, I'll call you\" = te llamo. \"Me llamo\" would mean my name is / I call myself, and lo / la would be him / her."),
        ],
      },
    },
    exercises: {
      replace: {
        0: fill(BOLD, "—¿Compraste los boletos? —Sí, ___ compré ayer.", "los", "\"Did you buy the tickets?\" \"Yes, I bought [them] yesterday.\"", "los: direct object pronoun (los boletos). Los boletos → los, before compré."),
        1: fill(BOLD, "—¿Dónde pusiste la maleta? —___ puse en el carro.", "La", "\"Where did you put the suitcase?\" \"I put [it] in the car.\"", "la: direct object pronoun (la maleta). La maleta is feminine singular, so la, before the verb: la puse."),
        3: { type: "multi-select", question: "Which answers to \"¿Tienes los lentes de sol?\" are correct?", options: ["Sí, los tengo.", "Sí, las tengo.", "No, no los encuentro.", "Sí, tengo los."], correctIndexes: [0, 2], explanation: "Lentes is masculine plural, so los, placed before the verb: los tengo, no los encuentro. \"Las\" is feminine, and \"tengo los\" puts the pronoun after the verb." },
        11: fill(BOLD, "—¿Dónde están los boletos? —___ tengo en el celular.", "Los", "—Where are the tickets? —I have [them] on my phone.", "Los boletos → los."),
        14: tr("Correct the packing note.", "¿La cámara? Lo dejé en el carro.", "¿La cámara? La dejé en el carro.", ["¿La cámara? La dejé en el auto.", "¿La cámara? La dejé en el coche."], "La cámara is feminine, so la, not lo."),
      },
    },
  },
  "a2r-dialogue-gifts-favors": {
    goal: "plan a birthday with a friend: who gives what to whom, with le, les and se lo.",
    sections: {
      1: {
        check: [
          mc("\"¿Me traes un café?\" means…", ["Will you bring me a coffee?", "Will I bring you a coffee?", "Did you bring me a coffee?", "Do I bring him a coffee?"], 0, "Me means to/for me, and traes is tú (you bring): will you bring me a coffee? It's not I bring you, it's present rather than past, and it isn't about him."),
          mc("Your neighbors ask: «¿Nos prestas tu escalera?» You agree. You say:", ["Claro, les presto la escalera.", "Claro, nos presto la escalera.", "Claro, me prestan la escalera.", "Claro, le presto la escalera."], 0, "They ask about us (nos), so you answer about them, you all: les presto (os presto in Spain). \"Nos presto\" keeps their pronoun, \"me prestan\" reverses who gives, and le is only one person."),
        ],
      },
    },
    exercises: {
      replace: {
        19: mc("'I lent them my car.'", ["Les presté mi carro.", "Los presté mi carro.", "Me prestaron su carro.", "Le presté mi carro."], 0, "They receive the car, so les (plural indirect). Los would mean you lent the people."),
        21: { type: "speak", text: "—¿Me prestas tu carro? —Claro, te presto el carro.", altAnswers: ["¿Me prestas tu carro? Claro, te presto el carro.", "—¿Me prestas tu auto? —Claro, te presto el auto.", "—¿Me prestas tu coche? —Claro, te presto el coche."], tip: "Prestas, presto: tap the r after p, and keep the s a hiss.", explanation: "\"Will you lend me your car? -- Sure, I'll lend you the car.\"" } as Exercise,
      },
    },
  },
};

/** The manual fixes with the generated Latin American answers folded in. */
function withLatam(p: Record<string, LessonPatch>): Record<string, LessonPatch> {
  const out: Record<string, LessonPatch> = { ...p };
  for (const [slug, g] of Object.entries(B1_UNIT1_LATAM)) {
    const m = out[slug] ?? {};
    const alts: Record<number, string[]> = { ...(g.alts ?? {}) };
    for (const [i, a] of Object.entries(m.alts ?? {})) alts[+i] = [...(alts[+i] ?? []), ...a];
    const sections = { ...(m.sections ?? {}) };
    for (const [si, ca] of Object.entries(g.checkAlts ?? {})) sections[+si] = { ...sections[+si], checkAlts: { ...ca, ...(sections[+si]?.checkAlts ?? {}) } };
    out[slug] = { ...m, alts, ...(Object.keys(sections).length ? { sections } : {}) };
  }
  return out;
}

export const B1_UNIT1_PATCHES: Record<string, LessonPatch> = withLatam(manual);
