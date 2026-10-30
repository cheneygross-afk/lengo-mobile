// Synced from cheneygross-afk/lengo:src/lib/lessons/survival-a2.ts by scripts/sync-content.mjs -- edit it there, not here.
import { anchored, authoring } from "./authoring";
import type { AnchoredLesson } from "./weave";

// Survival Situations, A2 half: dialogue-driven role plays for everyday
// errands (shops, pharmacy, doctor, hotel, transport, post office,
// hairdresser, plans, small talk, emergencies), with the chunks people
// actually say, cultural notes and Spain / Latin America differences.
// Taught in English, like the rest of A2. They form their own unit after
// At the Restaurant (see units.ts); the B1 half is in survival-b1.ts.

const { mc, ms, fe, toEs, toEn, wo, mt, sec } = authoring("en");
const L = (
  slug: string,
  title: string,
  summary: string,
  duration: string,
  sections: Parameters<typeof anchored>[6],
  exercises: Parameters<typeof anchored>[7]
) => anchored("A2", "at-the-restaurant-2", slug, title, summary, duration, sections, exercises);

export const A2_SURVIVAL: AnchoredLesson[] = [
  L(
    "a2s-shopping-sizes",
    "Survival: Clothes Shopping and Sizes",
    "Asking for a size, trying things on, saying it's too big or too small, and paying: ¿Tiene una talla más?, ¿Me lo puedo probar?, me queda pequeño.",
    "10 min",
    [
      sec(
        "Dialogue: in a clothes shop",
        [
          "The idea: in a Spanish shop the clothes do the fitting. Quedar works like gustar: the garment is the subject and me / te / le shows who wears it, so the verb and the adjective agree with the clothes (la chaqueta me queda grande, los zapatos me quedan pequeños). Lo / la / los / las stand in for the garment once it has been named: ¿Me la puedo probar? (la = la chaqueta).",
          "Read the dialogue. Clara wants a jacket she saw in the window.",
          "Notice the chunks: ¿Qué talla usas? (what size do you take?), ¿Me la puedo probar? (can I try it on?), los probadores (the fitting rooms), me queda grande (it's too big on me).",
        ],
        [
          ["— Hola, ¿te puedo ayudar en algo?", "Hi, can I help you with anything?"],
          ["— Sí, busco la chaqueta azul del escaparate.", "Yes, I'm looking for the blue jacket in the window."],
          ["— ¿Qué talla usas?", "What size are you?"],
          ["— La M, creo. ¿Me la puedo probar?", "Medium, I think. Can I try it on?"],
          ["— Claro, los probadores están al fondo.", "Of course, the fitting rooms are at the back."],
          ["— Me queda un poco grande. ¿Tiene una talla menos?", "It's a bit big on me. Do you have a size smaller?"],
          ["— Sí, aquí tienes la S.", "Yes, here's the small."],
        ],
        [
          mc(
            "You try on some trousers and they are too short. What do you say?",
            ["Los pantalones me quedan cortos.", "Los pantalones me queda cortos.", "Los pantalones me quedan cortas.", "Yo quedo cortos los pantalones."],
            0,
            "Quedar agrees with the clothes, like gustar: los pantalones is plural, so quedan, and the adjective is masculine plural, cortos. Me queda would be for one garment; yo quedo makes you the subject, which Spanish doesn't do here."
          ),
        ]
      ),
      sec(
        "How it fits: quedar",
        [
          "Quedar works like gustar: la chaqueta me queda bien, los pantalones me quedan cortos. The verb agrees with the clothes.",
          "Useful words: grande (big), pequeño (small), largo (long), corto (short), estrecho (tight), ancho (loose).",
          "To ask for another size: ¿Tiene una talla más / menos? ¿Lo tiene en otro color? For shoes, the size is el número: ¿Qué número calza? — El 39.",
          "Te queda muy bien = it really suits you. It's what friends and shop assistants say.",
        ],
        [
          ["Los pantalones me quedan largos.", "The trousers are too long on me."],
          ["¿Lo tiene en negro?", "Do you have it in black?"],
          ["¿Qué número calzas? — El 42.", "What shoe size are you? — 42."],
          ["¡Te queda genial!", "It looks great on you!"],
        ],
        [
          fe(
            "Estos zapatos me ___ pequeños.",
            "quedan",
            "These shoes [are] too small on me.",
            "Quedar agrees with the shoes (plural): me quedan. Like gustar, the thing is the subject."
          ),
        ]
      ),
      sec(
        "Paying, and Spain vs. Latin America",
        [
          "At the till (la caja): ¿Cómo va a pagar? — Con tarjeta / En efectivo. ¿Me da una bolsa? Some shops charge for bags.",
          "To return or exchange something, keep the ticket (el ticket, el recibo): ¿Puedo cambiarlo si no me queda bien?",
          "Words that change: a jacket is una chaqueta in Spain, una chamarra in Mexico and una campera in Argentina. A T-shirt is una camiseta in Spain, una playera in Mexico, una remera in Argentina.",
          "Sizes: Spain uses European sizes (38, 40, 42) for clothes and shoes, while Latin American countries vary (some use US-style or S/M/L sizing); Mexico uses its own shoe sizes (a 25 is about a European 39).",
          "In Spain shop assistants often use tú with young customers; in most of Latin America usted is more common in shops.",
        ],
        [
          ["¿Puedo pagar con tarjeta?", "Can I pay by card?"],
          ["¿Me da una bolsa, por favor?", "Can I have a bag, please?"],
          ["¿Puedo cambiarlo si no me queda bien?", "Can I exchange it if it doesn't fit?"],
          ["Me llevo esta.", "I'll take this one."],
        ],
        [
          mc(
            "You decide to buy the shirt. What do you say?",
            ["Me la llevo.", "Me la quedo grande.", "La pruebo.", "Me queda."],
            0,
            "Llevarse = to take (buy) something: me lo llevo / me la llevo. It's the standard phrase in any shop."
          ),
        ]
      ),
    ],
    [
      mt(
        "Match each phrase to its meaning.",
        [
          ["¿Me lo puedo probar?", "Can I try it on?"],
          ["¿Tiene una talla más?", "Do you have a size bigger?"],
          ["Me queda estrecho.", "It's tight on me."],
          ["Me lo llevo.", "I'll take it."],
          ["los probadores", "the fitting rooms"],
        ],
        "Five chunks you'll use in any clothes shop."
      ),
      fe(
        "¿Tiene esta camiseta en una ___ más pequeña?",
        "talla",
        "Do you have this T-shirt in a smaller [size]?",
        "For clothes, size is la talla. For shoes it's el número."
      ),
      fe(
        "La falda me ___ muy bien, me la llevo.",
        "queda",
        "The skirt [fits] me very well, I'll take it.",
        "Quedar bien = to fit well / suit. La falda is singular, so queda."
      ),
      fe(
        "¿Qué ___ calza? — El treinta y ocho.",
        "número",
        "What [size] shoe do you take? — Thirty-eight.",
        "Shoe size is el número, and the verb is calzar: ¿Qué número calza?"
      ),
      toEs(
        "Can I try it on?",
        "¿Me lo puedo probar?",
        "Probarse = to try on. The pronouns go before puedo or on the end of probar.",
        ["¿Puedo probármelo?", "¿Me la puedo probar?", "¿Puedo probármela?", "¿Me lo puedo probar, por favor?", "¿Lo puedo probar?", "¿Puedo probarlo?"]
      ),
      toEs(
        "La camisa me queda larga.",
        "Las camisas me quedan largas.",
        "Make the garment plural and everything that agrees with it follows: las camisas → quedan → largas. Me doesn't change, because the wearer is the same.",
        ["Me quedan largas las camisas."],
        "Make it plural."
      ),
      toEn(
        "¿Lo tiene en otro color?",
        "Do you have it in another colour?",
        "Tener algo en otro color / otra talla: the standard way to ask for alternatives.",
        ["Do you have it in another color?", "Do you have it in a different colour?", "Do you have it in a different color?", "Have you got it in another colour?"]
      ),
      mc(
        "In Buenos Aires, you want a T-shirt. What word will you probably see in the shop?",
        ["remera", "playera", "chamarra", "falda"],
        0,
        "Remera is the Argentine word. Playera is Mexican, chamarra is a Mexican jacket, and falda is a skirt."
      ),
      wo(
        "¿Dónde están los probadores, por favor?",
        "A question with dónde + estar for a location.",
        "Where are the fitting rooms, please?"
      ),
      mc(
        "The assistant asks \"¿Cómo va a pagar?\". Which answer fits?",
        ["Con tarjeta.", "En la caja.", "La talla M.", "Me queda bien."],
        0,
        "¿Cómo va a pagar? asks how you'll pay: con tarjeta (by card) or en efectivo (in cash)."
      ),
      ms(
        "Which sentences talk about how clothes fit?",
        ["Me queda pequeño.", "Te queda genial.", "Me lo llevo.", "Me quedan anchos."],
        [0, 1, 3],
        "Quedar + adjective or adverb describes the fit. Me lo llevo means you're buying it."
      ),
    ]
  ),
  L(
    "a2s-pharmacy",
    "Survival: At the Pharmacy",
    "Explaining a simple problem to the pharmacist: me duele la cabeza, tengo tos, soy alérgico a..., ¿necesito receta?",
    "10 min",
    [
      sec(
        "Dialogue: a headache and a cold",
        [
          "The idea: Spanish describes being unwell with three frames, and the word you have picks the frame. A body part takes doler, which works like gustar (the part that hurts is the subject: me duele la cabeza, me duelen los pies). A symptom noun takes tener (tengo tos, tengo fiebre). A state adjective takes estar and agrees with you (estoy mareado / mareada).",
          "In Spain and Latin America, pharmacists give a lot of everyday advice, so the pharmacy (la farmacia) is often the first stop for a cold or a headache.",
          "Read the dialogue. Tom has a cold and asks the pharmacist for something.",
        ],
        [
          ["— Buenas tardes. ¿Qué le pasa?", "Good afternoon. What's the matter?"],
          ["— Tengo un resfriado. Me duele la cabeza y tengo tos.", "I've got a cold. I have a headache and a cough."],
          ["— ¿Tiene fiebre?", "Do you have a temperature?"],
          ["— No, creo que no.", "No, I don't think so."],
          ["— ¿Es alérgico a algún medicamento?", "Are you allergic to any medicine?"],
          ["— Sí, soy alérgico a la penicilina.", "Yes, I'm allergic to penicillin."],
          ["— Vale. Le doy este jarabe para la tos. Si en tres días no está mejor, vaya al médico.", "OK. I'll give you this cough syrup. If you're not better in three days, go to the doctor."],
        ],
        [
          mc(
            "Your friend looks ill. How do you ask her (tú) what's wrong?",
            ["¿Qué te pasa?", "¿Qué le pasa?", "¿Qué pasas?", "¿Qué te pasas?"],
            0,
            "Pasar works like gustar here: the problem is the subject and the pronoun shows who has it. The pharmacist used le for usted; with a friend it's te. Pasas / te pasas make your friend the subject, which Spanish doesn't do."
          ),
        ]
      ),
      sec(
        "Saying what's wrong",
        [
          "Me duele + singular / me duelen + plural, like gustar: me duele la cabeza, me duele la garganta, me duelen los oídos. Spanish uses la, not mi: me duele la espalda.",
          "Tener + noun: tengo tos (a cough), tengo fiebre (a temperature), tengo un resfriado (a cold), tengo gripe (flu), tengo alergia.",
          "Estar + adjective: estoy resfriado, estoy mareado (dizzy), estoy cansado.",
          "Soy alérgico / alérgica a... is how you mention an allergy. It's worth learning for anything you're allergic to.",
        ],
        [
          ["Me duele la garganta.", "I have a sore throat."],
          ["Me duelen los ojos.", "My eyes hurt."],
          ["Tengo fiebre desde ayer.", "I've had a temperature since yesterday."],
          ["Estoy un poco mareada.", "I feel a bit dizzy."],
          ["Soy alérgica a los frutos secos.", "I'm allergic to nuts."],
        ],
        [
          fe(
            "Me ___ los pies de tanto caminar.",
            "duelen",
            "My feet [hurt] from so much walking.",
            "Doler works like gustar and agrees with the thing that hurts: los pies is plural, so duelen."
          ),
        ]
      ),
      sec(
        "Asking for things, and the green cross",
        [
          "Useful requests: ¿Tiene algo para el dolor de cabeza? ¿Tiene algo para la tos? ¿Necesito receta? (Do I need a prescription?)",
          "Some medicines need a prescription (una receta) from a doctor; the pharmacist will tell you: Para esto necesita receta.",
          "In Spain, look for the green cross. At night and on Sundays, one pharmacy in each area stays open: la farmacia de guardia. The address of the nearest one is posted on every pharmacy's door.",
          "In Mexico and much of Latin America, big pharmacy chains are open late or 24 hours, and some have a doctor next door for quick visits.",
          "Words that change: a plaster is una tirita in Spain and una curita in most of Latin America. Painkillers are analgésicos or, informally, algo para el dolor.",
        ],
        [
          ["¿Tiene algo para el dolor de cabeza?", "Do you have anything for a headache?"],
          ["¿Necesito receta para esto?", "Do I need a prescription for this?"],
          ["¿Dónde está la farmacia de guardia?", "Where is the duty pharmacy?"],
          ["Una caja de tiritas, por favor.", "A box of plasters, please. (Spain)"],
        ],
        [
          mc(
            "It's Sunday night in Spain and you need a pharmacy. What do you look for?",
            ["la farmacia de guardia", "la receta", "el médico de cabecera", "la tirita"],
            0,
            "La farmacia de guardia is the one that stays open at night and on holidays. Its address is posted on the doors of the other pharmacies."
          ),
        ]
      ),
    ],
    [
      mt(
        "Match each problem to its meaning.",
        [
          ["Tengo tos.", "I have a cough."],
          ["Tengo fiebre.", "I have a temperature."],
          ["Me duele la garganta.", "I have a sore throat."],
          ["Estoy mareado.", "I feel dizzy."],
          ["Soy alérgico a la aspirina.", "I'm allergic to aspirin."],
        ],
        "Tener + noun, doler like gustar, estar + adjective, ser alérgico a."
      ),
      fe(
        "¿Tiene algo ___ la tos?",
        "para",
        "Do you have anything [for] a cough?",
        "Algo para + problem: something for (the purpose of treating) it. Por wouldn't express purpose here."
      ),
      fe(
        "Me ___ mucho la cabeza.",
        "duele",
        "My head [hurts] a lot.",
        "La cabeza is singular, so duele. Spanish says la cabeza, not mi cabeza, because me already shows whose it is."
      ),
      fe(
        "Mi hija es ___ a los huevos.",
        "alérgica",
        "My daughter is [allergic] to eggs.",
        "Ser alérgico a + thing; the adjective agrees with the person who has the allergy, so alérgica for mi hija."
      ),
      fe(
        "Para este medicamento necesita ___ del médico.",
        "receta",
        "For this medicine you need a [prescription] from the doctor.",
        "Una receta is a prescription (and also a recipe)."
      ),
      toEs(
        "Me duele la cabeza.",
        "Me duelen los oídos.",
        "Doler agrees with what hurts: los oídos is plural, so duelen. The article stays (los oídos, not mis oídos) because me already says whose they are.",
        ["Me duelen las orejas."],
        "Change la cabeza to los oídos."
      ),
      toEs(
        "Do I need a prescription?",
        "¿Necesito receta?",
        "No article is needed: ¿Necesito receta? You'll also hear ¿Hace falta receta?",
        ["¿Necesito una receta?", "¿Hace falta receta?", "¿Hace falta una receta?", "¿Se necesita receta?"]
      ),
      mc(
        "The pharmacist tells you: «Si en tres días no está mejor, vaya al médico.» What should you do?",
        ["See a doctor if you're not better in three days.", "Come back to the pharmacy in three days.", "Take the medicine for three days only.", "Go to the doctor now."],
        0,
        "Si + present gives the condition (if you're not better in three days); vaya is the polite usted command of ir: go."
      ),
      mc(
        "In Mexico you cut your finger slightly. What do you ask for?",
        ["una curita", "una receta", "un jarabe", "una tirita de guardia"],
        0,
        "Curita is the usual word in most of Latin America; in Spain it's tirita."
      ),
      wo(
        "¿Tiene algo para el dolor de garganta?",
        "¿Tiene algo para + problem? is the most useful question at a pharmacy.",
        "Do you have anything for a sore throat?"
      ),
      ms(
        "Which are correct?",
        ["Me duele la espalda.", "Me duelen los oídos.", "Me duele mis ojos.", "Tengo fiebre."],
        [0, 1, 3],
        "Doler agrees with what hurts, and Spanish uses the article, not the possessive: me duelen los ojos, not \"me duele mis ojos\"."
      ),
    ]
  ),
  L(
    "a2s-doctor-appointment",
    "Survival: Making a Doctor's Appointment",
    "Booking an appointment, describing how you feel and how long it's been, and understanding simple advice: pedir cita, desde hace dos días, tiene que descansar.",
    "10 min",
    [
      sec(
        "Dialogue: booking an appointment",
        [
          "The idea: two patterns carry most of a doctor's visit. For a problem that started in the past and is still going on, Spanish uses the present + desde hace + a length of time (me duele desde hace dos días), because it still hurts now; English switches to \"has been hurting\". And the doctor's advice comes as tener que + infinitive (tiene que descansar) or a polite usted command (beba, tome, quédese). Your own requests are softened with quería: quería pedir cita.",
          "Read the dialogue. Ana phones her health centre (el centro de salud) to book an appointment.",
          "Key chunks: pedir cita (to make an appointment), ¿Para cuándo? (for when?), ¿Le viene bien...? (does ... suit you?).",
        ],
        [
          ["— Centro de salud, buenos días.", "Health centre, good morning."],
          ["— Hola, buenos días. Quería pedir cita con el médico.", "Hello, good morning. I'd like to make an appointment with the doctor."],
          ["— ¿Me dice su nombre, por favor?", "Can you tell me your name, please?"],
          ["— Ana Ruiz.", "Ana Ruiz."],
          ["— ¿Le viene bien mañana a las diez y media?", "Does tomorrow at half past ten suit you?"],
          ["— Perfecto, muchas gracias.", "Perfect, thank you very much."],
        ],
        [
          mc(
            "You phone the dentist's surgery. Which is the polite way to ask for an appointment?",
            ["Quería pedir cita con el dentista.", "Quise pedir cita con el dentista.", "Quería preguntar cita con el dentista.", "Quería pedir cita a el dentista."],
            0,
            "Quería (imperfect) softens a request: \"I'd like\". Quise is a finished past act, so it sounds like you tried once. You pedir (ask for) things and preguntar (ask) questions, and a + el contracts to al."
          ),
        ]
      ),
      sec(
        "Dialogue: in the consulting room",
        [
          "The doctor will ask what's wrong and how long it's been going on. Use desde hace or hace... que from the earlier lesson.",
          "The doctor gives advice with tener que + infinitive or a command: tiene que descansar, beba mucha agua, tome esto dos veces al día.",
        ],
        [
          ["— Siéntese. ¿Qué le pasa?", "Sit down. What's the matter?"],
          ["— Me duele el estómago desde hace dos días.", "My stomach has been hurting for two days."],
          ["— ¿Ha comido algo raro?", "Have you eaten anything unusual?"],
          ["— No, creo que no.", "No, I don't think so."],
          ["— No parece nada grave. Tiene que descansar y beber mucha agua.", "It doesn't look serious. You need to rest and drink plenty of water."],
          ["— ¿Puedo ir a trabajar?", "Can I go to work?"],
          ["— Mejor quédese en casa un par de días.", "Better stay at home for a couple of days."],
        ],
        [
          fe(
            "Tengo tos ___ una semana.",
            "desde hace",
            "I've had a cough [for] a week.",
            "Something still going on + a length of time: desde hace. Doctors ask ¿Desde cuándo...? all the time.",
            ["hace"]
          ),
        ]
      ),
      sec(
        "How it works in different countries",
        [
          "In Spain, you're registered at a health centre (el centro de salud) and have a family doctor (el médico de cabecera). You usually book by phone, app or website.",
          "In Latin America there are public clinics and many private ones; people often say el doctor / la doctora when talking to a doctor. In Spain, most people just say el médico / la médica.",
          "Urgencias is the emergency department. For a normal problem, go to your doctor or pharmacy; urgencias is for something that can't wait.",
          "Useful: ¿Tengo que volver? (Do I need to come back?), ¿Me puede dar un justificante? (Can you give me a note for work?)",
        ],
        [
          ["Tengo cita con el médico a las cinco.", "I have a doctor's appointment at five."],
          ["¿Tengo que volver?", "Do I need to come back?"],
          ["Tome una pastilla cada ocho horas.", "Take one tablet every eight hours."],
          ["Necesito un justificante para el trabajo.", "I need a note for work."],
        ],
        [
          mc(
            "In Spain, who is your \"médico de cabecera\"?",
            ["Your regular family doctor", "A head specialist", "The emergency doctor", "The pharmacist"],
            0,
            "Médico de cabecera is your GP, the doctor you normally see at your health centre. Cabecera comes from cabeza: it's the head of the bed, so a médico de cabecera was originally the doctor who came to your bedside."
          ),
        ]
      ),
    ],
    [
      mt(
        "Match each phrase to its meaning.",
        [
          ["pedir cita", "to make an appointment"],
          ["el centro de salud", "the health centre"],
          ["urgencias", "the emergency department"],
          ["la receta", "the prescription"],
          ["tiene que descansar", "you need to rest"],
        ],
        "Key vocabulary for seeing a doctor."
      ),
      fe(
        "Quería pedir ___ con la doctora para el lunes.",
        "cita",
        "I'd like to make an [appointment] with the doctor for Monday.",
        "Una cita is an appointment (and also a date). Pedir cita = book an appointment."
      ),
      fe(
        "¿Le viene ___ el jueves a las cuatro?",
        "bien",
        "Does Thursday at four work [well] for you?",
        "Venir bien = to suit, to be convenient. It works like gustar: ¿le viene bien...?"
      ),
      fe(
        "Tiene que ___ mucha agua y descansar.",
        "beber",
        "You need to [drink] plenty of water and rest.",
        "Tener que + infinitive for advice or obligation. In Latin America you'll also hear tomar agua.",
        ["tomar"]
      ),
      toEs(
        "I'd like to make an appointment with the dentist for Friday.",
        "Quería pedir cita con el dentista para el viernes.",
        "Quería (imperfect) is the polite way to make a request; pedir cita con + person, para + the day you want.",
        ["Quería pedir una cita con el dentista para el viernes.", "Quisiera pedir cita con el dentista para el viernes.", "Quisiera pedir una cita con el dentista para el viernes.", "Me gustaría pedir cita con el dentista para el viernes.", "Me gustaría pedir una cita con el dentista para el viernes.", "Quería pedir cita con la dentista para el viernes.", "Quisiera pedir cita con la dentista para el viernes."]
      ),
      toEs(
        "My back has been hurting for three days.",
        "Me duele la espalda desde hace tres días.",
        "Doler like gustar + desde hace for how long.",
        ["Hace tres días que me duele la espalda.", "Llevo tres días con dolor de espalda.", "Me duele la espalda hace tres días."]
      ),
      mc(
        "After examining you, the doctor says «No parece nada grave.» How do you feel?",
        ["Relieved: it doesn't look serious.", "Worried: it looks serious.", "Confused: she can't see anything.", "Annoyed: she says you're exaggerating."],
        0,
        "No ... nada is Spanish double negation: no parece nada grave = it doesn't seem (to be) anything serious."
      ),
      mc(
        "The doctor says \"Tome una pastilla cada ocho horas\". What do you do?",
        ["Take one tablet every eight hours.", "Take eight tablets once.", "Take one tablet at eight.", "Buy eight tablets."],
        0,
        "Tome is the usted command of tomar; cada ocho horas = every eight hours."
      ),
      wo(
        "A mi hijo le duelen los oídos desde hace una semana",
        "Doler agrees with los oídos (duelen), a mi hijo + le says who, and present + desde hace says it is still going on.",
        "My son's ears have been hurting for a week"
      ),
      mc(
        "You have a mild cold. Where is it best to go first?",
        ["To the pharmacy or your family doctor", "To urgencias", "To the post office", "To the town hall"],
        0,
        "For everyday problems, the pharmacy or the centro de salud. Urgencias is for things that can't wait."
      ),
    ]
  ),
  L(
    "a2s-hotel",
    "Survival: Hotel Check-in and Small Problems",
    "Checking in with a booking, asking about breakfast and wifi, and reporting a problem politely: tengo una reserva, no funciona el aire acondicionado.",
    "10 min",
    [
      sec(
        "Dialogue: checking in",
        [
          "The idea: at a hotel almost every problem fits one of two frames. Something broken: no funciona + the thing (no funciona la ducha; plural: no funcionan las luces). Something missing: no hay + the noun with no article (no hay toallas). Spanish puts the thing after the verb when it reports a problem, and a polite perdone / disculpe in front makes it a request, not a complaint.",
          "Read the dialogue at reception (la recepción).",
          "Key chunks: tengo una reserva a nombre de... (I have a booking under the name...), ¿Me deja su pasaporte? (may I have your passport?), ¿A qué hora es el desayuno?",
        ],
        [
          ["— Buenas noches. Tengo una reserva a nombre de Lucas Martin.", "Good evening. I have a booking under the name Lucas Martin."],
          ["— Sí, una habitación doble para tres noches. ¿Me deja su pasaporte, por favor?", "Yes, a double room for three nights. May I have your passport, please?"],
          ["— Aquí tiene. ¿El desayuno está incluido?", "Here you are. Is breakfast included?"],
          ["— Sí, es de siete a diez en el comedor. Su habitación es la 305, en la tercera planta.", "Yes, it's from seven to ten in the dining room. Your room is 305, on the third floor."],
          ["— ¿Y cuál es la contraseña del wifi?", "And what's the wifi password?"],
          ["— Está en la tarjeta, con la llave.", "It's on the card, with the key."],
        ],
        [
          mc(
            "You booked a table at a restaurant under the name Ana Gil. What do you say when you arrive?",
            ["Tengo una reserva a nombre de Ana Gil.", "Tengo una reserva en nombre Ana Gil.", "Tengo una reserva por nombre de Ana Gil.", "Me llamo una reserva Ana Gil."],
            0,
            "A nombre de + name works for any booking: hotels, restaurants, tickets. The preposition is a, and de links nombre to the name."
          ),
        ]
      ),
      sec(
        "Dialogue: something doesn't work",
        [
          "To report a problem, the key phrase is no funciona (it doesn't work) or no hay (there isn't any).",
          "Start politely: Perdone, / Disculpe, hay un problema con la habitación.",
        ],
        [
          ["— Perdone, hay un problema en la habitación 305.", "Excuse me, there's a problem in room 305."],
          ["— Dígame.", "Go ahead."],
          ["— No funciona el aire acondicionado y no hay toallas.", "The air conditioning doesn't work and there are no towels."],
          ["— Lo siento mucho. Ahora mismo subo con las toallas y llamo al técnico.", "I'm very sorry. I'll bring the towels up right now and call the technician."],
          ["— Muchas gracias.", "Thank you very much."],
        ],
        [
          fe(
            "Perdone, la ducha no ___.",
            "funciona",
            "Excuse me, the shower doesn't [work].",
            "Funcionar = to work (for machines). Trabajar is only for people working at a job."
          ),
        ]
      ),
      sec(
        "Useful words and regional differences",
        [
          "Rooms: una habitación individual / doble; con cama de matrimonio (a double bed) or con dos camas (twin beds).",
          "Floors: planta or piso. La planta baja is the ground floor, so la primera planta is one floor up.",
          "Check-out: ¿A qué hora hay que dejar la habitación? ¿Puedo dejar la maleta aquí? (Can I leave my suitcase here?)",
          "In Latin America you'll often hear el cuarto for the room, and la tarjeta for the key card. The air conditioning is el aire acondicionado everywhere, often just el aire.",
        ],
        [
          ["¿Hay una habitación doble libre para esta noche?", "Is there a double room free for tonight?"],
          ["¿A qué hora hay que dejar la habitación?", "What time do we have to check out?"],
          ["¿Puedo dejar la maleta en recepción?", "Can I leave my suitcase at reception?"],
          ["La habitación está en la planta baja.", "The room is on the ground floor."],
        ],
        [
          mc(
            "You want to leave your suitcase after check-out. What do you ask?",
            ["¿Puedo dejar la maleta aquí?", "¿Puedo llevar la maleta aquí?", "¿Funciona la maleta?", "¿Hay maleta incluida?"],
            0,
            "Dejar = to leave something somewhere. Llevar = to take or carry."
          ),
        ]
      ),
    ],
    [
      mt(
        "Match each phrase to its meaning.",
        [
          ["Tengo una reserva.", "I have a booking."],
          ["¿Está incluido el desayuno?", "Is breakfast included?"],
          ["No funciona la luz.", "The light doesn't work."],
          ["No hay toallas.", "There are no towels."],
          ["la planta baja", "the ground floor"],
        ],
        "The key chunks for checking in and reporting problems."
      ),
      fe(
        "Tengo una reserva a ___ de Sara López.",
        "nombre",
        "I have a booking under the [name] of Sara López.",
        "A nombre de + name: the booking is under that name."
      ),
      fe(
        "Perdone, la ___ del wifi no funciona.",
        "contraseña",
        "Excuse me, the wifi [password] doesn't work.",
        "La contraseña = password. No funciona reports something that doesn't work, and it agrees with la contraseña (singular)."
      ),
      fe(
        "Perdone, en mi habitación no ___ papel higiénico.",
        "hay",
        "Excuse me, [there's] no toilet paper in my room.",
        "No hay + noun = there isn't / there aren't any."
      ),
      toEs(
        "The air conditioning doesn't work.",
        "No funciona el aire acondicionado.",
        "Funcionar for machines; the subject usually goes after the verb in this kind of sentence.",
        ["El aire acondicionado no funciona.", "No funciona el aire.", "El aire no funciona."]
      ),
      toEs(
        "Is breakfast included?",
        "¿Está incluido el desayuno?",
        "Estar incluido = to be included.",
        ["¿El desayuno está incluido?", "¿Incluye el desayuno?", "¿Va incluido el desayuno?"]
      ),
      mc(
        "You report there are no towels. Reception answers «Ahora mismo subo con las toallas.» What happens next?",
        ["Someone brings towels to your room right away.", "You have to go down for the towels.", "There are no towels today.", "The towels are already in the room."],
        0,
        "Ahora mismo = right now, and Spanish often uses the present (subo) for something you're about to do: I'm coming up with the towels."
      ),
      mc(
        "You're told your room is \"en la primera planta\". Where is it?",
        ["One floor above the ground floor", "On the ground floor", "In the basement", "On the top floor"],
        0,
        "In Spain and much of Latin America, la planta baja is the ground floor and la primera planta is the next one up."
      ),
      wo(
        "Perdone, hay un problema con la ducha.",
        "Perdone (usted) + hay un problema con...: a polite start.",
        "Excuse me, there's a problem with the shower."
      ),
      mc(
        "Which is the best way to start a complaint at reception?",
        ["Disculpe, hay un problema con la habitación.", "¡La habitación está fatal!", "Quiero otra habitación ya.", "Dame otra habitación."],
        0,
        "A polite opening (disculpe / perdone) and a simple description gets the best results. The others sound rude to a stranger."
      ),
    ]
  ),
  L(
    "a2s-public-transport",
    "Survival: Buses, Trains and Tickets",
    "Buying a ticket, asking which bus goes where and where to get off: un billete de ida y vuelta, ¿Este autobús va al centro?, ¿Dónde me bajo?",
    "10 min",
    [
      sec(
        "Dialogue: at the train station",
        [
          "The idea: getting around in Spanish runs on a handful of motion verbs, and each one comes with its own preposition. Ir a + destination (¿va al centro?), salir de + place and a + time (sale del andén cuatro a las once), bajarse en + stop (me bajo en la próxima). Learn the verb and its preposition as one unit and you can ask about any bus, train or stop.",
          "Read the dialogue at the ticket office (la taquilla).",
          "Key chunks: de ida (one way), de ida y vuelta (return), ¿A qué hora sale? (what time does it leave?), ¿De qué andén sale? (which platform?).",
        ],
        [
          ["— Hola, un billete para Toledo, por favor.", "Hi, a ticket to Toledo, please."],
          ["— ¿De ida o de ida y vuelta?", "One way or return?"],
          ["— De ida y vuelta. Vuelvo el domingo por la tarde.", "Return. I'm coming back on Sunday afternoon."],
          ["— Muy bien. Son veinticuatro euros.", "Very good. That's twenty-four euros."],
          ["— ¿A qué hora sale el próximo tren?", "What time does the next train leave?"],
          ["— A las once y cuarto, del andén cuatro.", "At quarter past eleven, from platform four."],
        ],
        [
          mc(
            "Ask what time the next bus to the airport leaves.",
            ["¿A qué hora sale el próximo autobús al aeropuerto?", "¿A qué hora va el próximo autobús del aeropuerto?", "¿A qué hora sale el próximo autobús en el aeropuerto?", "¿Qué hora sale el próximo autobús al aeropuerto?"],
            0,
            "Salir is the verb for departing, and the destination takes a (a + el = al). Del aeropuerto would be from the airport, en el aeropuerto at it, and a time question needs ¿A qué hora...?"
          ),
        ]
      ),
      sec(
        "Dialogue: on the bus",
        [
          "On a city bus, ask the driver before you get on, and ask where to get off (bajarse).",
          "Subir = to get on, bajar(se) = to get off. The stop is la parada.",
        ],
        [
          ["— Perdone, ¿este autobús va al centro?", "Excuse me, does this bus go to the centre?"],
          ["— Sí, pero tarda un poco. Son cinco paradas.", "Yes, but it takes a while. It's five stops."],
          ["— ¿Me avisa cuando lleguemos a la plaza Mayor?", "Will you let me know when we get to the Plaza Mayor?"],
          ["— Claro. Se baja en la próxima.", "Sure. You get off at the next one."],
        ],
        [
          fe(
            "Perdone, ¿dónde me ___ para ir al museo?",
            "bajo",
            "Excuse me, where do I [get off] to go to the museum?",
            "Bajarse = to get off. Yo me bajo. Subir is the opposite: to get on.",
            ["tengo que bajar"]
          ),
        ]
      ),
      sec(
        "Tickets, cards and regional words",
        [
          "In many cities you use a rechargeable card: in Madrid la tarjeta transporte público, in Mexico City la tarjeta de movilidad integrada, in Buenos Aires la SUBE. You top it up: recargar la tarjeta.",
          "A ticket is un billete in Spain and un boleto in most of Latin America. The ticket office is la taquilla (Spain) or la boletería (much of Latin America).",
          "The bus is el autobús in Spain; el camión in Mexico, el colectivo or bondi in Argentina, la guagua in the Canaries and the Caribbean, and el micro in Chile.",
          "Coger el autobús is normal in Spain. In much of Latin America people say tomar el autobús instead, because coger can sound rude there.",
        ],
        [
          ["¿Dónde puedo recargar la tarjeta?", "Where can I top up the card?"],
          ["Un boleto para Guadalajara, por favor.", "A ticket to Guadalajara, please. (Mexico)"],
          ["Voy a tomar el colectivo.", "I'm going to take the bus. (Argentina)"],
          ["El metro cierra a la una y media.", "The metro closes at half past one."],
        ],
        [
          mc(
            "In Mexico City, which is the safest way to say \"I'm going to take the bus\"?",
            ["Voy a tomar el camión.", "Voy a coger la guagua.", "Voy a coger el colectivo.", "Voy a tomar el billete."],
            0,
            "In Mexico the city bus is often el camión, and tomar is the neutral verb. Coger is best avoided in most of Latin America."
          ),
        ]
      ),
    ],
    [
      mt(
        "Match each phrase to its meaning.",
        [
          ["de ida y vuelta", "return"],
          ["el andén", "the platform"],
          ["la parada", "the stop"],
          ["bajarse", "to get off"],
          ["recargar la tarjeta", "to top up the card"],
        ],
        "Key words for getting around on public transport."
      ),
      fe(
        "¿A qué hora ___ el último tren a Sevilla?",
        "sale",
        "What time does the last train to Seville [leave]?",
        "Salir = to leave (depart). Llegar would be to arrive."
      ),
      fe(
        "Un billete de ___, por favor. No vuelvo.",
        "ida",
        "A [one-way] ticket, please. I'm not coming back.",
        "De ida = one way. De ida y vuelta = return."
      ),
      fe(
        "¿Este autobús ___ al aeropuerto?",
        "va",
        "Does this bus [go] to the airport?",
        "Ir a + place: ¿va al aeropuerto? A + el = al."
      ),
      fe(
        "Tienes que ___ en la tercera parada.",
        "bajarte",
        "You have to [get off] at the third stop.",
        "Tener que + bajarse; the pronoun changes to match the person: bajarte (tú).",
        ["bajar"]
      ),
      toEs(
        "A return ticket to Madrid, please.",
        "Un billete de ida y vuelta a Madrid, por favor.",
        "Billete (Spain) or boleto (Latin America); a or para before the place.",
        ["Un billete de ida y vuelta para Madrid, por favor.", "Un boleto de ida y vuelta a Madrid, por favor.", "Un boleto de ida y vuelta para Madrid, por favor.", "Un billete de ida y vuelta a Madrid por favor."]
      ),
      toEs(
        "Where is the bus stop?",
        "¿Dónde está la parada del autobús?",
        "La parada = the stop. Estar for location.",
        ["¿Dónde está la parada de autobús?", "¿Dónde está la parada?", "¿Dónde queda la parada del autobús?", "¿Dónde está la parada del bus?", "¿Dónde está la parada de bus?"]
      ),
      mc(
        "You don't know where the hospital stop is. What do you ask the driver (usted)?",
        ["¿Me avisa cuando lleguemos al hospital?", "¿Le aviso cuando lleguemos al hospital?", "¿Me avisa cuando lleguemos en el hospital?", "¿Me avisas cuando llegamos el hospital?"],
        0,
        "¿Me avisa...? = will you (usted) let me know; me is you, the one who wants the warning. Llegar takes a (a + el = al), never en. Cuando lleguemos is a fixed chunk for a moment still to come."
      ),
      mc(
        "In Buenos Aires someone says \"Tomá el 60\". What should you take?",
        ["The number 60 bus", "Sixty tickets", "The train at 6:00", "Platform 60"],
        0,
        "In Argentina buses (colectivos) are known by their number: el 60. Tomá is the vos command of tomar."
      ),
      wo(
        "¿De qué andén sale el tren para Valencia?",
        "¿De qué andén...? asks which platform; salir de = to leave from.",
        "Which platform does the train to Valencia leave from?"
      ),
    ]
  ),
  L(
    "a2s-post-office",
    "Survival: The Post Office and Parcels",
    "Sending a letter or a parcel, buying stamps and picking up a delivery: quería enviar este paquete, ¿cuánto tarda?, vengo a recoger un paquete.",
    "10 min",
    [
      sec(
        "Dialogue: sending a parcel",
        [
          "The idea: post-office Spanish is built from three purpose frames, each followed by an infinitive. Quería + infinitive says politely what you want (quería enviar este paquete). Venir a + infinitive says why you've come (vengo a recoger un paquete). Tardar + time + en + infinitive asks or says how long something takes (¿cuánto tarda en llegar?). The clerk answers with usted commands: rellene, firme, póngalo.",
          "Read the dialogue at the post office (Correos in Spain; el correo in most of Latin America).",
          "Key chunks: quería enviar / mandar (I'd like to send), ¿cuánto tarda en llegar? (how long does it take to arrive?), certificado (registered).",
        ],
        [
          ["— Buenos días. Quería enviar este paquete a Londres.", "Good morning. I'd like to send this parcel to London."],
          ["— Póngalo en la báscula, por favor. Pesa dos kilos. ¿Normal o urgente?", "Put it on the scales, please. It weighs two kilos. Standard or express?"],
          ["— ¿Cuánto tarda en llegar?", "How long does it take to arrive?"],
          ["— Normal, una semana más o menos. Urgente, dos o tres días.", "Standard, about a week. Express, two or three days."],
          ["— Normal, está bien. ¿Y me da también tres sellos para postales?", "Standard is fine. And can I also have three stamps for postcards?"],
          ["— Claro. Rellene este formulario con la dirección, por favor.", "Of course. Fill in this form with the address, please."],
        ],
        [
          mc(
            "Ask how long a letter takes to get to Peru.",
            ["¿Cuánto tarda en llegar a Perú?", "¿Cuánto tarda llegar a Perú?", "¿Cuánto tiempo llega a Perú?", "¿Cuánto tarda en llegar en Perú?"],
            0,
            "Tardar needs en before the infinitive: tarda en llegar. Llegar takes a for the place, and ¿cuánto tiempo llega? is not how Spanish asks about time taken."
          ),
        ]
      ),
      sec(
        "Dialogue: picking up a parcel",
        [
          "If a delivery comes when you're out, you'll often get a note (un aviso) and have to collect it.",
          "Say vengo a recoger (I've come to pick up) and show the note and your ID.",
        ],
        [
          ["— Hola, vengo a recoger un paquete. Tengo este aviso.", "Hi, I've come to pick up a parcel. I have this note."],
          ["— ¿Me enseña su DNI o pasaporte?", "Can you show me your ID card or passport?"],
          ["— Aquí tiene.", "Here you are."],
          ["— Firme aquí, por favor. Aquí tiene su paquete.", "Sign here, please. Here's your parcel."],
        ],
        [
          fe(
            "Vengo a ___ una carta certificada.",
            "recoger",
            "I've come to [pick up] a registered letter.",
            "Recoger = to collect, to pick up. Venir a + infinitive = to come (in order) to do something."
          ),
        ]
      ),
      sec(
        "Addresses and regional words",
        [
          "Spanish addresses put the street first: Calle Mayor, 12, 3.º B, 28013 Madrid. That's number 12, third floor, flat B, then the postcode (el código postal).",
          "Words: el sello (Spain) / la estampilla or el timbre (much of Latin America) = stamp; el sobre = envelope; el buzón = post box; el remitente = sender; el destinatario = addressee.",
          "Many people now use parcel lockers or pick-up points (puntos de recogida) in shops. The vocabulary is the same: recoger, el código, el paquete.",
          "Mandar and enviar both mean to send. Mandar is more everyday, enviar a bit more formal.",
        ],
        [
          ["¿Dónde hay un buzón?", "Where's a post box?"],
          ["¿Cuál es el código postal?", "What's the postcode?"],
          ["Un sobre y un sello, por favor.", "An envelope and a stamp, please."],
          ["Te mando el paquete mañana.", "I'll send you the parcel tomorrow."],
        ],
        [
          mc(
            "In the address \"Avenida del Sol, 45, 2.º A\", what is \"2.º A\"?",
            ["Second floor, flat A", "Two letters for A", "Building 2, door A", "Postcode 2A"],
            0,
            "After the street number comes the floor (2.º = segundo) and the door or flat (A)."
          ),
        ]
      ),
    ],
    [
      mt(
        "Match each word to its meaning.",
        [
          ["el sello", "stamp"],
          ["el sobre", "envelope"],
          ["el buzón", "post box"],
          ["el paquete", "parcel"],
          ["el código postal", "postcode"],
        ],
        "Post office vocabulary. In much of Latin America a stamp is una estampilla or un timbre."
      ),
      fe(
        "Quería ___ esta carta a Colombia.",
        "enviar",
        "I'd like to [send] this letter to Colombia.",
        "Enviar or mandar = to send. After quería, use the infinitive.",
        ["mandar"]
      ),
      fe(
        "¿Cuánto ___ en llegar a México?",
        "tarda",
        "How long does it [take] to arrive in Mexico?",
        "Tardar en + infinitive = to take (time) to. The subject is the letter or parcel: tarda."
      ),
      fe(
        "___ aquí, por favor.",
        "Firme",
        "[Sign] here, please.",
        "Firmar = to sign. Firme is the polite usted command."
      ),
      toEs(
        "I've come to pick up a letter for my neighbour.",
        "Vengo a recoger una carta para mi vecino.",
        "Venir a + infinitive gives the purpose of your visit; para + person says who it's for.",
        ["Vengo a recoger una carta para mi vecina.", "Vengo a buscar una carta para mi vecino.", "Vengo a buscar una carta para mi vecina.", "Vengo a por una carta para mi vecino.", "Vengo a por una carta para mi vecina."]
      ),
      toEs(
        "Three stamps for Europe, please.",
        "Tres sellos para Europa, por favor.",
        "Sellos in Spain; estampillas or timbres in much of Latin America.",
        ["Tres estampillas para Europa, por favor.", "Tres timbres para Europa, por favor.", "¿Me da tres sellos para Europa?", "Tres sellos para Europa por favor."]
      ),
      mc(
        "The clerk says «Rellene este formulario con la dirección.» What do you do?",
        ["Write the address on the form.", "Read the address out loud.", "Give back the form.", "Put the parcel on the scales."],
        0,
        "Rellenar = to fill in; rellene is the polite usted command (-ar verbs swap their -a for -e)."
      ),
      mc(
        "You want the parcel to arrive fast. What do you choose?",
        ["urgente", "normal", "certificado", "remitente"],
        0,
        "Urgente is the express option. Certificado means registered (with proof of delivery), which isn't the same as fast."
      ),
      wo(
        "¿Me enseña su pasaporte, por favor?",
        "Enseñar = to show. A question in the present with usted is a polite request.",
        "Can you show me your passport, please?"
      ),
      ms(
        "Which phrases would you use to send something?",
        ["Quería mandar este paquete.", "¿Cuánto cuesta enviarlo?", "Vengo a recoger un paquete.", "¿Cuánto tarda en llegar?"],
        [0, 1, 3],
        "Vengo a recoger is for collecting, not sending."
      ),
    ]
  ),
  L(
    "a2s-hairdresser",
    "Survival: At the Hairdresser's",
    "Booking a cut and explaining what you want: cortarme el pelo, solo las puntas, un poco más corto por los lados, ¿cuánto le debo?",
    "8 min",
    [
      sec(
        "Dialogue: a haircut",
        [
          "The idea: Spanish talks about a service done to you with a reflexive verb, as if you did it yourself: me corto el pelo = I get my hair cut, though the hairdresser holds the scissors. The pronoun shows whose hair it is (me corto, te cortas, se corta), so the body part takes el, not mi. And an offer is a plain present question with yo: ¿Te lavo el pelo? = shall I wash your hair?",
          "Read the dialogue at the hairdresser's (la peluquería). The barber's is la barbería.",
          "Key chunks: cortarme el pelo (to get my hair cut), solo las puntas (just the ends), por los lados (at the sides), por detrás (at the back).",
        ],
        [
          ["— Hola, ¿tienes hueco para cortarme el pelo ahora?", "Hi, do you have a free slot to cut my hair now?"],
          ["— Sí, siéntate aquí. ¿Qué te hago?", "Yes, sit here. What would you like?"],
          ["— Quiero cortarme solo las puntas. Y un poco más corto por los lados.", "I just want the ends trimmed. And a bit shorter at the sides."],
          ["— ¿Te lavo el pelo primero?", "Shall I wash your hair first?"],
          ["— Sí, por favor.", "Yes, please."],
          ["— ¿Qué tal así?", "How's that?"],
          ["— Perfecto, me gusta mucho. ¿Cuánto te debo?", "Perfect, I really like it. How much do I owe you?"],
        ],
        [
          mc(
            "Your hair is too long at the front. What do you ask for?",
            ["Un poco más corto por delante, por favor.", "Un poco más corto por detrás, por favor.", "Un poco más corto por los lados, por favor.", "Solo las puntas, por favor."],
            0,
            "Por + a place on your head says where: por delante (front), por detrás (back), por los lados (sides). Solo las puntas means just a trim of the ends."
          ),
        ]
      ),
      sec(
        "Cortarse el pelo: someone else does it",
        [
          "Spanish says me corto el pelo or voy a cortarme el pelo even when the hairdresser does it. English says \"I'm getting my hair cut\".",
          "The same with other services: me hago las uñas (I get my nails done), me tiño el pelo (I dye / get my hair dyed).",
          "Words: el flequillo (fringe, Spain) / el cerquillo or el fleco (parts of Latin America), la raya (parting), rizado (curly), liso (straight).",
        ],
        [
          ["Mañana voy a cortarme el pelo.", "Tomorrow I'm getting my hair cut."],
          ["¿Dónde te cortas el pelo?", "Where do you get your hair cut?"],
          ["Córtame solo un poco el flequillo.", "Just cut my fringe a little."],
          ["Tiene el pelo rizado y largo.", "She has long curly hair."],
        ],
        [
          fe(
            "El sábado voy a ___ el pelo.",
            "cortarme",
            "On Saturday I'm going to [get my hair cut].",
            "Cortarse el pelo is reflexive in Spanish, even when a hairdresser does it: voy a cortarme el pelo."
          ),
        ]
      ),
      sec(
        "Booking and paying",
        [
          "To book: ¿Me das cita para el jueves? / Quería pedir hora para cortarme el pelo. In Spain pedir hora is also common.",
          "¿Cuánto te debo? / ¿Cuánto le debo? (How much do I owe you?) is how you ask the price at the end of any service.",
          "Tipping: in Spain small tips are optional; in Mexico and many Latin American countries a tip of about 10% for the hairdresser is usual.",
        ],
        [
          ["¿Me das cita para el jueves por la tarde?", "Can you give me an appointment for Thursday afternoon?"],
          ["¿Cuánto le debo?", "How much do I owe you?"],
          ["¿Aceptan tarjeta?", "Do you take cards?"],
        ],
        [
          mc(
            "The haircut is finished. What do you ask to pay?",
            ["¿Cuánto te debo?", "¿Cuánto tardas?", "¿Qué te hago?", "¿Tienes hueco?"],
            0,
            "¿Cuánto te / le debo? = How much do I owe you? The other questions are what the hairdresser might ask, or about time."
          ),
        ]
      ),
    ],
    [
      mt(
        "Match each phrase to its meaning.",
        [
          ["solo las puntas", "just a trim"],
          ["por los lados", "at the sides"],
          ["por detrás", "at the back"],
          ["el flequillo", "the fringe"],
          ["¿Cuánto te debo?", "How much do I owe you?"],
        ],
        "Useful chunks for the hairdresser's."
      ),
      fe(
        "Un poco más corto por ___, por favor.",
        "detrás",
        "A bit shorter at the [back], please.",
        "Por detrás = at the back; por los lados = at the sides; por delante = at the front."
      ),
      fe(
        "¿Tienes ___ esta tarde para un corte?",
        "hueco",
        "Do you have a [free slot] this afternoon for a cut?",
        "Tener hueco (Spain) = to have a free slot. In Latin America you'll hear ¿Tienes un espacio? or ¿Tienes turno? (Argentina).",
        ["espacio", "turno", "tiempo"]
      ),
      toEs(
        "I want to get my hair cut.",
        "Quiero cortarme el pelo.",
        "Reflexive cortarse el pelo, even though someone else cuts it.",
        ["Quería cortarme el pelo.", "Me quiero cortar el pelo.", "Quiero cortarme el cabello.", "Quisiera cortarme el pelo.", "Me quería cortar el pelo."]
      ),
      toEs(
        "How much do we owe you? (usted)",
        "¿Cuánto le debemos?",
        "Deber = to owe; debemos for nosotros, and le is the person you owe (usted). With tú it would be ¿Cuánto te debemos?",
        ["¿Cuánto le debemos a usted?"]
      ),
      toEs(
        "¿Te lavo el pelo primero?",
        "¿Le lavo el pelo primero?",
        "The offer stays a present question with yo (lavo); only the pronoun for the customer changes: te for tú, le for usted.",
        [],
        "Make it formal (usted)."
      ),
      mc(
        "Your friend says \"Me corté el pelo ayer\". What happened?",
        ["She got her hair cut yesterday.", "She cut herself yesterday.", "She cut someone's hair yesterday.", "She has a haircut tomorrow."],
        0,
        "Cortarse el pelo usually means going to the hairdresser, not cutting it yourself."
      ),
      wo(
        "Solo las puntas y un poco por los lados.",
        "Short instructions without a verb are normal at the hairdresser's.",
        "Just the ends and a little at the sides."
      ),
      ms(
        "Which could the hairdresser ask you?",
        ["¿Qué te hago?", "¿Te lavo el pelo?", "¿Qué tal así?", "¿Cuánto te debo?"],
        [0, 1, 2],
        "¿Cuánto te debo? is what the customer asks when paying."
      ),
    ]
  ),
  L(
    "a2s-plans-invitations",
    "Survival: Making Plans and Invitations",
    "Suggesting a plan, accepting, saying no nicely and fixing a time and place: ¿Te apetece...?, ¿Quedamos a las ocho?, me encantaría, pero no puedo.",
    "10 min",
    [
      sec(
        "Dialogue: making a plan",
        [
          "The idea: making plans runs on two families of verbs. Apetecer, gustaría and encantaría work like gustar: the plan is the subject and te / me shows who would enjoy it (¿te apetece ir?, me encantaría). Quedar is the planning verb: quedar = to arrange to meet, quedar con alguien = to meet someone, but quedarse, with se, = to stay. That little se flips the meaning, so watch for it.",
          "Read the dialogue. Two friends arrange to meet.",
          "Key chunks: ¿Te apetece...? / ¿Te gustaría...? (do you fancy / would you like...?), quedar (to meet up, to arrange to meet), ¿Dónde quedamos? (where shall we meet?).",
        ],
        [
          ["— ¿Te apetece ir al cine el viernes?", "Do you fancy going to the cinema on Friday?"],
          ["— ¡Vale! ¿Qué película quieres ver?", "OK! Which film do you want to see?"],
          ["— La nueva de Almodóvar. Empieza a las nueve.", "The new Almodóvar one. It starts at nine."],
          ["— Perfecto. ¿Dónde quedamos?", "Perfect. Where shall we meet?"],
          ["— En la puerta del cine a las ocho y media, ¿te parece?", "At the cinema entrance at half past eight, OK?"],
          ["— Genial. ¡Hasta el viernes!", "Great. See you on Friday!"],
        ],
        [
          mc(
            "You want to suggest meeting at the station at seven. What do you say?",
            ["¿Quedamos en la estación a las siete?", "¿Nos quedamos en la estación a las siete?", "¿Quedamos a la estación en las siete?", "¿Me quedo en la estación a las siete?"],
            0,
            "Quedar without se = to arrange to meet; quedar en + place + a + time. Nos quedamos / me quedo (with se) would mean staying at the station."
          ),
        ]
      ),
      sec(
        "Accepting and saying no nicely",
        [
          "Accept: ¡Vale! (Spain) / ¡Dale! (Argentina, Uruguay) / ¡Órale! or ¡Va! (Mexico) / ¡Claro! / ¡Me encantaría!",
          "Say no nicely: give a reason and suggest another day. Me encantaría, pero no puedo; tengo que trabajar. ¿Qué tal el sábado?",
          "Leave it open: No sé si puedo, te digo algo mañana. (I don't know if I can, I'll let you know tomorrow.)",
          "Culture: in Spain and Latin America a \"no\" is often softened, and plans are often made at the last minute. Arriving 10 to 15 minutes late to meet friends is common in many places, less so for work.",
        ],
        [
          ["¡Me encantaría!", "I'd love to!"],
          ["Lo siento, este fin de semana no puedo.", "Sorry, I can't this weekend."],
          ["¿Qué tal el domingo?", "How about Sunday?"],
          ["Te digo algo mañana, ¿vale?", "I'll let you know tomorrow, OK?"],
        ],
        [
          mc(
            "Your friend invites you to dinner, but you're busy. What's the nicest answer?",
            ["Me encantaría, pero ese día no puedo. ¿Qué tal el jueves?", "No.", "No quiero ir.", "No me apetece nada."],
            0,
            "A polite refusal gives a reason or regret and offers another option. A bare \"no\" or \"no quiero\" sounds rude."
          ),
        ]
      ),
      sec(
        "Quedar, quedar con, quedarse",
        [
          "Quedar = to arrange to meet: Quedamos a las ocho. Quedar con alguien = to meet up with someone: He quedado con Marta.",
          "Quedarse = to stay: Hoy me quedo en casa.",
          "In much of Latin America, people also say vernos: ¿Nos vemos a las ocho? (Shall we meet at eight?) or ¿A qué hora nos juntamos? (Chile, Argentina).",
          "¿Te parece? / ¿Te va bien? = Is that OK with you?",
        ],
        [
          ["He quedado con mis amigos para cenar.", "I've arranged to have dinner with my friends."],
          ["Hoy no salgo, me quedo en casa.", "I'm not going out today, I'm staying home."],
          ["¿Nos vemos a las siete en el parque?", "Shall we meet at seven in the park?"],
          ["¿Te va bien el martes?", "Does Tuesday work for you?"],
        ],
        [
          fe(
            "Esta noche he ___ con Luis para tomar algo.",
            "quedado",
            "Tonight I've [arranged to meet] Luis for a drink.",
            "Quedar con alguien = to arrange to meet someone. Present perfect: he quedado."
          ),
        ]
      ),
    ],
    [
      mt(
        "Match each phrase to its meaning.",
        [
          ["¿Te apetece...?", "Do you fancy...?"],
          ["¿Dónde quedamos?", "Where shall we meet?"],
          ["Me encantaría.", "I'd love to."],
          ["Me quedo en casa.", "I'm staying home."],
          ["¿Qué tal el sábado?", "How about Saturday?"],
        ],
        "Chunks for inviting, accepting and suggesting."
      ),
      fe(
        "¿Te ___ ir a la playa mañana?",
        "apetece",
        "Do you [fancy] going to the beach tomorrow?",
        "Apetecer works like gustar: ¿te apetece + infinitive? It's very common in Spain; in Latin America you'll hear ¿tienes ganas de...? or ¿se te antoja...? (Mexico).",
        ["gustaría"]
      ),
      fe(
        "¿A qué hora ___? — A las ocho en la plaza.",
        "quedamos",
        "What time [shall we meet]? — At eight in the square.",
        "Quedar = arrange to meet. The present (quedamos) is used to make suggestions.",
        ["nos vemos"]
      ),
      fe(
        "Me encantaría, ___ tengo que trabajar.",
        "pero",
        "I'd love to, [but] I have to work.",
        "Pero introduces the reason you can't. Sino would only follow a negative."
      ),
      toEs(
        "Would you like to have dinner on Saturday?",
        "¿Te gustaría cenar el sábado?",
        "¿Te gustaría + infinitive? is a polite, friendly invitation.",
        ["¿Te apetece cenar el sábado?", "¿Quieres cenar el sábado?", "¿Le gustaría cenar el sábado?", "¿Te gustaría cenar el sábado conmigo?", "¿Quieres cenar conmigo el sábado?", "¿Te apetece cenar el sábado conmigo?"]
      ),
      toEs(
        "I'm sorry, I can't on Friday.",
        "Lo siento, el viernes no puedo.",
        "El viernes = on Friday (no preposition). No puedo can go at the end.",
        ["Lo siento, no puedo el viernes.", "Perdona, el viernes no puedo.", "Lo siento, pero el viernes no puedo.", "Lo siento, el viernes no puedo ir."]
      ),
      mc(
        "Your friend answers your invitation with «No sé si puedo; te digo algo mañana.» What does that mean for your plan?",
        ["It's still open: she'll let you know tomorrow.", "She has said yes.", "She has said no.", "She wants to meet tomorrow instead."],
        0,
        "Te digo algo = I'll let you know, a soft way to leave a plan open. The present (digo) is often used for a promise about the near future."
      ),
      mc(
        "An Argentine friend says \"¿Vamos al cine?\" and you want to say OK. What fits best?",
        ["¡Dale!", "¡Órale!", "¡Quedamos!", "¡Me quedo!"],
        0,
        "Dale is the everyday \"OK / sure\" in Argentina and Uruguay. Órale is Mexican. Quedamos and me quedo don't work as \"OK\"."
      ),
      wo(
        "¿Quedamos en la puerta del museo a las cinco?",
        "Quedar en + place + a + time: the typical way to fix where and when.",
        "Shall we meet at the museum entrance at five?"
      ),
      ms(
        "Which sentences are about staying, not meeting?",
        ["Me quedo en casa.", "Nos quedamos en un hotel.", "Quedamos a las diez.", "He quedado con Ana."],
        [0, 1],
        "Quedarse = to stay. Quedar and quedar con = to arrange to meet."
      ),
    ]
  ),
  L(
    "a2s-small-talk",
    "Survival: Small Talk",
    "Chatting with neighbours, colleagues and people you've just met: the weather, the weekend, where you're from, and how to keep a conversation going.",
    "10 min",
    [
      sec(
        "Dialogue: in the lift",
        [
          "The idea: small talk is about keeping the ball in the air. Answer briefly, then hand the question back (¿Y tú? / ¿Y usted?) or react. Reactions follow one pattern, ¡Qué + noun or adjective!: ¡Qué calor!, ¡Qué suerte!, ¡Qué bien! And every question changes form with tú or usted, because the verb follows the person: ¿De dónde eres? / ¿De dónde es usted?",
          "Read the dialogue. Two neighbours meet in the lift (el ascensor).",
          "Small talk in Spanish uses a lot of short reactions: ¿Qué tal?, ¡Qué calor!, ¿Y tú?, ¡No me digas!, Ya.",
        ],
        [
          ["— ¡Buenos días! ¿Qué tal?", "Good morning! How are you?"],
          ["— Bien, ¿y usted? ¡Qué calor hace hoy!", "Fine, and you? It's so hot today!"],
          ["— Sí, horrible. Dicen que mañana va a llover.", "Yes, awful. They say it's going to rain tomorrow."],
          ["— Ojalá. ¿Qué tal el fin de semana?", "I hope so. How was your weekend?"],
          ["— Muy bien, fuimos al pueblo a ver a la familia. ¿Y usted?", "Very good, we went to the village to see the family. And you?"],
          ["— Tranquilo, en casa. Bueno, ¡que tenga buen día!", "Quiet, at home. Well, have a good day!"],
        ],
        [
          mc(
            "It's pouring with rain when you meet a neighbour at the door. Which exclamation opens the chat?",
            ["¡Qué lluvia!", "¡Qué llueve!", "¡Qué hace lluvia!", "¡Qué es la lluvia!"],
            0,
            "Small-talk exclamations are ¡Qué + noun or adjective!: ¡Qué lluvia!, ¡Qué calor!, ¡Qué bonito! Qué doesn't go straight before a verb like llueve."
          ),
        ]
      ),
      sec(
        "Dialogue: meeting someone new",
        [
          "At a party or at work, the classic questions are where you're from, what you do and how long you've been here.",
          "Keep it going: answer, then return the question (¿Y tú?) or react (¡Qué bien!, ¡Qué interesante!).",
        ],
        [
          ["— ¿De dónde eres?", "Where are you from?"],
          ["— Soy de Canadá, pero vivo aquí desde hace un año.", "I'm from Canada, but I've been living here for a year."],
          ["— ¡Qué bien! ¿Y a qué te dedicas?", "How nice! And what do you do?"],
          ["— Soy enfermera. ¿Y tú?", "I'm a nurse. And you?"],
          ["— Yo trabajo en una tienda de muebles. ¿Te gusta vivir aquí?", "I work in a furniture shop. Do you like living here?"],
          ["— Me encanta, aunque echo de menos a mi familia.", "I love it, although I miss my family."],
        ],
        [
          mc(
            "At a work dinner you meet an older guest you address as usted. How do you ask what he does for a living?",
            ["¿A qué se dedica?", "¿A qué te dedicas?", "¿A qué se dedicas?", "¿Qué dedica usted?"],
            0,
            "Dedicarse a is reflexive, and with usted both the verb and the pronoun take the él / ella form: se dedica. Te dedicas is for tú; se dedicas mixes the two."
          ),
        ]
      ),
      sec(
        "Reactions that keep the chat alive",
        [
          "Showing interest: ¿Ah, sí? / ¿De verdad? / ¡No me digas! (No way!) / ¡Qué suerte! (How lucky!) / ¡Qué pena! (What a shame!)",
          "Agreeing: Ya. / Claro. / Totalmente. / Pues sí.",
          "Ending politely: Bueno, te dejo, que tengo prisa. / Me alegro de verte. / ¡Que tengas buen día! (tú) / ¡Que tenga buen día! (usted).",
          "Safe topics: the weather, food, the neighbourhood, travel, football. Money, politics and religion are best left for people you know well.",
          "Regional flavour: ¿Qué onda? (Mexico), ¿Qué hubo? or ¿Quiubo? (Colombia), ¿Qué tal? (Spain and everywhere). In Spain two kisses on the cheek are a normal greeting between friends; in most of Latin America it's one.",
        ],
        [
          ["¡No me digas! ¿En serio?", "No way! Really?"],
          ["¡Qué suerte tienes!", "You're so lucky!"],
          ["Bueno, te dejo, que llego tarde.", "Well, I'll let you go, I'm running late."],
          ["¡Me alegro de verte!", "Good to see you!"],
        ],
        [
          mc(
            "Your colleague says she's won a trip to Mexico. What's a natural reaction?",
            ["¡Qué suerte!", "¡Qué pena!", "Te dejo.", "¿A qué te dedicas?"],
            0,
            "¡Qué suerte! = How lucky! ¡Qué pena! is for bad news."
          ),
        ]
      ),
    ],
    [
      mt(
        "Match each reaction to when you'd use it.",
        [
          ["¡Qué pena!", "Someone tells you bad news."],
          ["¡Qué suerte!", "Someone tells you about their good luck."],
          ["¡No me digas!", "You hear something surprising."],
          ["Te dejo.", "You want to end the conversation."],
        ],
        "Short reactions do a lot of the work in small talk."
      ),
      fe(
        "¡Qué ___ hace hoy! Necesito un abrigo.",
        "frío",
        "It's so [cold] today! I need a coat.",
        "¡Qué + noun! for exclamations: ¡Qué frío hace! Frío is a noun here, so hace frío."
      ),
      fe(
        "¿Y tú, a qué te ___?",
        "dedicas",
        "And you, what do you [do] for a living?",
        "Dedicarse a = to do for a living. ¿A qué te dedicas? (tú) / ¿A qué se dedica? (usted)."
      ),
      fe(
        "¿Qué tal las ___? ¿Fuiste a la playa?",
        "vacaciones",
        "How were your [holidays]? Did you go to the beach?",
        "¿Qué tal + noun? asks how something was or is, for any noun: ¿Qué tal el fin de semana?, ¿Qué tal las vacaciones? Las vacaciones is always plural in Spanish."
      ),
      toEs(
        "¿De dónde eres?",
        "¿De dónde es usted?",
        "Usted takes the él / ella form of the verb: eres → es. Adding usted makes the polite form clear.",
        ["¿De dónde es?", "¿Usted de dónde es?"],
        "Make it formal (usted)."
      ),
      toEs(
        "Have a good day!",
        "¡Que tengas un buen día!",
        "Que + subjunctive for a wish. With usted: ¡Que tenga buen día!",
        ["¡Que tengas buen día!", "¡Que tenga un buen día!", "¡Que tenga buen día!", "¡Buen día!", "¡Que pases un buen día!"]
      ),
      mc(
        "Your new friend says «Me encanta vivir aquí, aunque echo de menos a mi familia.» How does she feel?",
        ["Happy here, but she misses her family.", "Unhappy here, and she wants to go home.", "Happy, because her family lives here too.", "Bored, because she has nothing to do."],
        0,
        "Aunque = although: it adds the other side. Echar de menos = to miss someone (in Latin America also extrañar)."
      ),
      mc(
        "In Mexico, a young person greets you with \"¿Qué onda?\". What does it mean?",
        ["What's up?", "What's the wave?", "Where are you going?", "What time is it?"],
        0,
        "¿Qué onda? is an informal Mexican greeting, like \"What's up?\"."
      ),
      wo(
        "Bueno, te dejo, que tengo prisa.",
        "Te dejo + que + reason: a friendly way to end a chat.",
        "Well, I'll let you go, I'm in a hurry."
      ),
      ms(
        "Which are good small-talk topics with a new neighbour?",
        ["el tiempo", "el barrio", "su sueldo", "el fin de semana"],
        [0, 1, 3],
        "The weather, the neighbourhood and the weekend are safe. Asking about someone's salary is too personal."
      ),
    ]
  ),
  L(
    "a2s-emergencies",
    "Survival: Asking for Help and Lost Documents",
    "The phrases for when something goes wrong: calling for help, the emergency number, reporting a lost passport or wallet, and asking where the police station is.",
    "10 min",
    [
      sec(
        "Asking for help",
        [
          "The idea: when something goes wrong you need three moves. Get help from a stranger with usted: a command (¡Llame a una ambulancia!) or ¿Me puede ayudar? Say what has happened with the present perfect, because it has just happened and matters now (he perdido el pasaporte, se ha caído). And say where you are with estar en + place + a landmark (delante de, al lado de).",
          "The short phrases: ¡Ayuda! / ¡Socorro! (Help!), ¿Me puede ayudar? (Can you help me?), Llame a una ambulancia, por favor (Please call an ambulance).",
          "The emergency number is 112 in Spain and across the EU, 911 in Mexico, Argentina and many other countries in the Americas (Colombia uses 123; Chile uses 131 for an ambulance, 132 for the fire brigade and 133 for the police). Operators in tourist areas often speak English too.",
          "On the phone, say what happened, where you are and your name: Necesito una ambulancia. Estoy en la calle Mayor, número 5.",
        ],
        [
          ["¿Me puede ayudar, por favor?", "Can you help me, please?"],
          ["Llame al 112, por favor.", "Please call 112."],
          ["Mi amigo se ha caído y no se puede levantar.", "My friend has fallen and can't get up."],
          ["Estoy en la calle Mayor, delante de la farmacia.", "I'm on Calle Mayor, in front of the pharmacy."],
        ],
        [
          mc(
            "A woman has hurt her leg in the street. How do you ask a passer-by to call a doctor?",
            ["¡Llame a un médico, por favor!", "¡Llamar a un médico, por favor!", "¡Llame un médico, por favor!", "¡Llamo a un médico, por favor!"],
            0,
            "To a stranger, use the usted command: llamar → llame. Llamar a + person keeps the a. Llamar alone is just the infinitive, and llamo means I call."
          ),
          mc(
            "Which number do you call for an emergency in Spain?",
            ["112", "911", "010", "123"],
            0,
            "112 is the general emergency number in Spain and the rest of the EU. Mexico, Argentina and many other countries in the Americas use 911 (Colombia uses 123)."
          ),
        ]
      ),
      sec(
        "Dialogue: reporting a lost passport",
        [
          "If you lose your passport or wallet, go to the police station (la comisaría) to report it (poner una denuncia). You'll need the report for your embassy or consulate.",
          "Perder = to lose. He perdido / Perdí el pasaporte. Or with the accidental se (Intermediate level): Se me ha perdido el pasaporte.",
        ],
        [
          ["— Buenos días. Vengo a denunciar que he perdido el pasaporte.", "Good morning. I've come to report that I've lost my passport."],
          ["— ¿Dónde y cuándo lo perdió?", "Where and when did you lose it?"],
          ["— Creo que en el autobús, esta mañana.", "I think on the bus, this morning."],
          ["— ¿Tiene alguna fotocopia o algún otro documento?", "Do you have a photocopy or any other document?"],
          ["— Sí, tengo una foto en el móvil y el carné de conducir.", "Yes, I have a photo on my phone and my driving licence."],
          ["— Muy bien. Rellene este impreso y vaya después a su consulado.", "Very good. Fill in this form and then go to your consulate."],
        ],
        [
          fe(
            "He ___ la cartera en el metro.",
            "perdido",
            "I've [lost] my wallet on the metro.",
            "Perder → perdido. Present perfect because it happened today and matters now."
          ),
        ]
      ),
      sec(
        "Useful questions and regional words",
        [
          "¿Dónde está la comisaría más cercana? (Where's the nearest police station?) ¿Dónde está el consulado británico / estadounidense? ¿Hay alguien que hable inglés?",
          "The police: la policía everywhere. In Spain you'll see la Policía Nacional, la Guardia Civil and the local police (la Policía Local or Municipal). In Latin America, la policía, and in Mexico people say la patrulla for a police car.",
          "A wallet is la cartera in Spain and la billetera in much of Latin America. A mobile is el móvil in Spain and el celular in Latin America.",
          "A tip: keep a photo of your passport on your phone and a paper copy somewhere else. It makes everything faster.",
        ],
        [
          ["¿Dónde está la comisaría más cercana?", "Where's the nearest police station?"],
          ["¿Hay alguien que hable inglés?", "Is there anyone who speaks English?"],
          ["He perdido el celular.", "I've lost my phone. (Latin America)"],
          ["Necesito una copia de la denuncia.", "I need a copy of the report."],
        ],
        [
          mc(
            "You've lost your passport in Madrid. Where do you go first to report it?",
            ["la comisaría", "la farmacia", "Correos", "la peluquería"],
            0,
            "The police station takes the report (la denuncia), which your consulate will ask for."
          ),
        ]
      ),
    ],
    [
      mt(
        "Match each phrase to its meaning.",
        [
          ["¡Socorro!", "Help!"],
          ["la comisaría", "the police station"],
          ["poner una denuncia", "to file a report"],
          ["el consulado", "the consulate"],
          ["He perdido el pasaporte.", "I've lost my passport."],
        ],
        "Key phrases for when things go wrong."
      ),
      fe(
        "¿Me puede ___, por favor? Me he perdido.",
        "ayudar",
        "Can you [help] me, please? I'm lost.",
        "Poder + infinitive: ¿Me puede ayudar? Me he perdido = I'm lost (I've got lost)."
      ),
      fe(
        "¿Dónde está el hospital más ___?",
        "cercano",
        "Where's the [nearest] hospital?",
        "Más cercano = nearest, and it agrees with the place: el hospital → cercano, la comisaría → cercana."
      ),
      fe(
        "___ a una ambulancia, por favor.",
        "Llame",
        "Please [call] an ambulance.",
        "Llamar → llame (usted command) when talking to a stranger. With a friend: llama.",
        ["Llama"]
      ),
      toEs(
        "I've lost my passport.",
        "He perdido el pasaporte.",
        "Spanish usually says el pasaporte, not mi pasaporte. Perdí el pasaporte is common in Latin America.",
        ["Perdí el pasaporte.", "He perdido mi pasaporte.", "Perdí mi pasaporte.", "Se me ha perdido el pasaporte.", "Se me perdió el pasaporte."]
      ),
      toEs(
        "Is there anyone who speaks French?",
        "¿Hay alguien que hable francés?",
        "The chunk ¿Hay alguien que hable...? works for any language. It takes the subjunctive (hable) because you don't know if that person exists; just learn it as a chunk for now.",
        ["¿Alguien habla francés?", "¿Hay alguien aquí que hable francés?", "¿Habla alguien francés?"]
      ),
      mc(
        "At the police station you're told «Rellene este impreso y vaya a su consulado.» What are your next two steps?",
        ["Fill in a form, then go to your consulate.", "Show your passport, then wait here.", "Phone your consulate, then come back.", "Sign the report, then go to the hospital."],
        0,
        "Rellene (rellenar) and vaya (ir) are usted commands: fill in, go. Un impreso is a printed form."
      ),
      mc(
        "In Mexico, which number do you call in an emergency?",
        ["911", "112", "091", "010"],
        0,
        "911 is the emergency number in Mexico and many other countries in the Americas. In Spain it's 112."
      ),
      wo(
        "Estoy en la plaza, delante del ayuntamiento.",
        "Say where you are with estar en + place and a landmark with delante de.",
        "I'm in the square, in front of the town hall."
      ),
      ms(
        "What should you tell the emergency operator?",
        ["what has happened", "where you are", "your name", "your favourite food"],
        [0, 1, 2],
        "What happened, where you are and who you are are the three things they need first."
      ),
    ]
  ),
];
