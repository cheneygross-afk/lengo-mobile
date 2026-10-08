// Synced from cheneygross-afk/lengo:src/lib/lessons/survival-b1.ts by scripts/sync-content.mjs -- edit it there, not here.
import { anchored, authoring } from "./authoring";
import type { AnchoredLesson } from "./weave";

// Survival Situations, B1 half: dialogue-driven role plays for the
// admin and trickier moments of living abroad (polite requests, phone
// calls, banks, renting, paperwork, complaints, returns, repairs, job
// interviews, hiring a car), with useful chunks, cultural notes and
// Spain / Latin America differences. Taught in Spanish, like the rest
// of B1. They form their own unit after the vosotros commands (see
// units.ts); the A2 half is in survival-a2.ts.

const { mc, ms, fe, toEs, toEn, wo, mt, sec } = authoring("es");
const L = (
  slug: string,
  title: string,
  summary: string,
  duration: string,
  sections: Parameters<typeof anchored>[6],
  exercises: Parameters<typeof anchored>[7]
) => anchored("B1", "vosotros-commands-2", slug, title, summary, duration, sections, exercises);

export const B1_SURVIVAL: AnchoredLesson[] = [
  L(
    "b1s-polite-requests",
    "Supervivencia: pedir con cortesía (quería, podría, ¿le importaría?)",
    "Cómo suavizar peticiones y disculparse: quería, me gustaría, ¿podría...?, ¿le importaría...?, perdone que le moleste. Las fórmulas que abren puertas en tiendas, oficinas y con desconocidos.",
    "10 min",
    [
      sec(
        "Diálogo: en una oficina",
        [
          "Lee el diálogo. Emma necesita un documento y habla con un funcionario.",
          "Fíjate en cómo suaviza cada petición: perdone que le moleste, quería..., ¿podría...?, ¿le importaría...?",
        ],
        [
          ["— Perdone que le moleste. Quería preguntarle una cosa.", "Sorry to bother you. I wanted to ask you something."],
          ["— Sí, dígame.", "Yes, go ahead."],
          ["— Necesitaría un certificado. ¿Podría decirme qué tengo que hacer?", "I'd need a certificate. Could you tell me what I have to do?"],
          ["— Tiene que rellenar este formulario y traer una fotocopia del pasaporte.", "You need to fill in this form and bring a photocopy of your passport."],
          ["— ¿Le importaría explicarme esta parte? No la entiendo bien.", "Would you mind explaining this part to me? I don't quite understand it."],
          ["— Claro, no se preocupe.", "Of course, don't worry."],
        ],
        [
          mc(
            "¿Por qué Emma dice «quería preguntarle» y no «quiero preguntarle»?",
            ["Porque el imperfecto suaviza la petición y suena más educado.", "Porque ya no quiere preguntar.", "Porque habla de ayer.", "Porque es un error."],
            0,
            "El imperfecto de cortesía (quería, venía a...) no habla del pasado: hace la petición más suave. «Quiero» es correcto pero suena más directo."
          ),
        ]
      ),
      sec(
        "Tres niveles de cortesía",
        [
          "Directo (entre amigos, o con por favor en una tienda): ¿Me das un café? / ¿Me pones un café? (España). No es de mala educación en español; con desconocidos, añade por favor.",
          "Suave: imperfecto o condicional. Quería / Quisiera un café. ¿Podría / Podrías ayudarme? Me gustaría hablar con el encargado. Necesitaría una factura.",
          "Muy suave: ¿Le importaría + infinitivo? ¿Sería tan amable de + infinitivo? ¿Le importa que + subjuntivo? (¿Le importa que abra la ventana?).",
          "En América Latina el usted y las fórmulas suaves se usan más con desconocidos que en España, donde el tú está muy extendido.",
        ],
        [
          ["¿Me pones una caña?", "Can I have a small beer? (Spain, informal)"],
          ["Quisiera hablar con el encargado.", "I'd like to speak to the manager."],
          ["¿Podrías bajar un poco la música?", "Could you turn the music down a bit?"],
          ["¿Le importaría cerrar la ventana?", "Would you mind closing the window?"],
          ["¿Le importa que me siente aquí?", "Do you mind if I sit here?"],
        ],
        [
          fe(
            "¿Le ___ repetir su nombre, por favor?",
            "importaría",
            "[Would] you [mind] repeating your name, please?",
            "¿Le importaría + infinitivo? es una de las fórmulas más educadas. Importar funciona como gustar: le importaría (a usted).",
            ["importa"]
          ),
        ]
      ),
      sec(
        "Disculparse y agradecer",
        [
          "Disculparse: Perdón / Perdone / Disculpe (para llamar la atención o por algo pequeño). Lo siento (mucho) (para algo más serio). Siento llegar tarde. Siento que hayas esperado.",
          "Perdone que le moleste / Siento molestarle: para interrumpir a alguien.",
          "Agradecer: Muchas gracias. Gracias por todo. Es usted muy amable. Te lo agradezco mucho. Respuesta: De nada / No hay de qué / A ti (a usted).",
          "Un buen truco: pedir + dar una razón. Perdone, ¿podría hablar un poco más despacio? Es que todavía estoy aprendiendo. Es que... es la forma más natural de justificar.",
        ],
        [
          ["Siento llegar tarde; había mucho tráfico.", "Sorry I'm late; there was a lot of traffic."],
          ["Perdone, ¿podría hablar más despacio? Es que no soy de aquí.", "Sorry, could you speak more slowly? I'm not from here."],
          ["Muchas gracias, es usted muy amable.", "Thank you very much, that's very kind of you."],
          ["Te lo agradezco mucho.", "I really appreciate it."],
        ],
        [
          mc(
            "Llegas diez minutos tarde a una reunión. ¿Qué dices?",
            ["Siento llegar tarde.", "Perdone que le moleste.", "No hay de qué.", "¿Le importaría llegar tarde?"],
            0,
            "Sentir + infinitivo = to be sorry for doing something. «Perdone que le moleste» es para interrumpir; «no hay de qué» responde a un gracias."
          ),
        ]
      ),
    ],
    [
      mt(
        "Relaciona cada fórmula con su uso.",
        [
          ["Quería...", "hacer una petición suave"],
          ["¿Le importaría...?", "pedir algo con mucha cortesía"],
          ["Perdone que le moleste.", "interrumpir a alguien"],
          ["Siento llegar tarde.", "disculparse por algo"],
          ["No hay de qué.", "responder a un gracias"],
        ],
        "Fórmulas de cortesía para tiendas, oficinas y desconocidos."
      ),
      fe(
        "___ reservar una mesa para cuatro, por favor.",
        "Quería",
        "[I'd like] to book a table for four, please.",
        "El imperfecto de cortesía suaviza la petición. También valen quisiera y me gustaría.",
        ["Quisiera", "Querría"]
      ),
      fe(
        "¿___ decirme dónde está la salida?",
        "Podría",
        "[Could you] tell me where the exit is?",
        "Condicional de poder para una petición educada a usted. Con tú: ¿podrías?",
        ["Podrías", "Puede", "Puedes"]
      ),
      fe(
        "¿Le importa que ___ la ventana? Hace mucho calor.",
        "abra",
        "Do you mind if I [open] the window? It's very hot.",
        "¿Le importa que + subjuntivo? para pedir permiso. Abrir → (yo) abra."
      ),
      fe(
        "___ molestarle, pero su coche está bloqueando mi garaje.",
        "Siento",
        "[I'm sorry to] bother you, but your car is blocking my garage.",
        "Siento + infinitivo = I'm sorry to... También: perdone que le moleste.",
        ["Perdone por", "Disculpe por"]
      ),
      toEs(
        "Could you help me, please?",
        "¿Podría ayudarme, por favor?",
        "Condicional de poder; el pronombre va unido al infinitivo o delante: ¿Me podría ayudar?",
        ["¿Me podría ayudar, por favor?", "¿Podrías ayudarme, por favor?", "¿Me podrías ayudar, por favor?", "¿Podría ayudarme?", "¿Me podría ayudar?"]
      ),
      toEs(
        "I'd like to speak to the manager.",
        "Me gustaría hablar con el encargado.",
        "Me gustaría / quisiera / quería + infinitivo. El encargado (España) o el gerente (América Latina).",
        ["Quisiera hablar con el encargado.", "Quería hablar con el encargado.", "Me gustaría hablar con el gerente.", "Quisiera hablar con el gerente.", "Quería hablar con el gerente.", "Me gustaría hablar con la encargada.", "Me gustaría hablar con el responsable."]
      ),
      toEn(
        "¿Sería tan amable de firmar aquí?",
        "Would you be so kind as to sign here?",
        "¿Sería tan amable de + infinitivo? es muy formal: cartas, oficinas, atención al cliente.",
        ["Would you be kind enough to sign here?", "Would you be so kind as to sign here, please?", "Could you please sign here?"]
      ),
      mc(
        "¿Qué petición suena más educada a un desconocido?",
        ["¿Le importaría hacernos una foto?", "Haznos una foto.", "Quiero una foto.", "Tienes que hacernos una foto."],
        0,
        "¿Le importaría...? con usted es la opción más suave. Las otras son directas u obligan."
      ),
      wo(
        "Perdone, ¿podría hablar un poco más despacio?",
        "Perdone + condicional de poder: petición educada a un desconocido.",
        "Excuse me, could you speak a little more slowly?"
      ),
      ms(
        "¿Qué frases suavizan una petición?",
        ["Quería una información.", "¿Podría ayudarme?", "Dame eso.", "Me gustaría cambiar la cita."],
        [0, 1, 3],
        "El imperfecto y el condicional suavizan. «Dame eso» es un imperativo directo, normal entre amigos pero brusco con desconocidos."
      ),
    ]
  ),
  L(
    "b1s-phone-calls",
    "Supervivencia: llamadas de teléfono",
    "Contestar, preguntar por alguien, dejar un mensaje y entender los menús automáticos: ¿De parte de quién?, no se retire, le paso, se ha cortado.",
    "10 min",
    [
      sec(
        "Diálogo: llamar a una empresa",
        [
          "Lee el diálogo. Marco llama a una empresa para hablar con la señora Gómez.",
          "Fórmulas clave: ¿Diga? / ¿Dígame? / ¿Sí? (España), ¿Aló? (gran parte de América), ¿Bueno? (México), ¿De parte de quién?, Ahora le paso, No se retire.",
        ],
        [
          ["— Seguros Atlántico, buenos días, le atiende Laura.", "Atlántico Insurance, good morning, Laura speaking."],
          ["— Buenos días. ¿Podría hablar con la señora Gómez, por favor?", "Good morning. Could I speak to Mrs Gómez, please?"],
          ["— ¿De parte de quién?", "Who's calling?"],
          ["— De Marco Rossi.", "Marco Rossi."],
          ["— Un momento, no se retire, ahora le paso.", "One moment, please hold, I'll put you through."],
          ["— Lo siento, está comunicando. ¿Quiere dejarle un mensaje?", "I'm sorry, the line's busy. Would you like to leave her a message?"],
          ["— Sí, dígale que me llame cuando pueda, por favor. Mi número es el 612 345 678.", "Yes, tell her to call me when she can, please. My number is 612 345 678."],
        ],
        [
          mc(
            "¿Qué significa «¿De parte de quién?»?",
            ["Who's calling?", "Which department?", "Who do you want to speak to?", "Where are you calling from?"],
            0,
            "¿De parte de quién? pregunta quién llama. Se responde con De + nombre: De Marco Rossi."
          ),
        ]
      ),
      sec(
        "Mensajes y problemas en la línea",
        [
          "Dejar un recado / un mensaje: ¿Quiere dejarle un recado? Dígale que he llamado. Dígale que me llame (dígale que + subjuntivo).",
          "Problemas: No se oye bien. Se ha cortado (the call dropped). Te llamo luego, que me quedo sin batería. ¿Me oyes ahora?",
          "Números: en España se suelen decir de tres en tres o de dos en dos: seis, uno, dos / tres, cuatro, cinco... En muchos países de América se dicen de dos en dos: cincuenta y cinco, veinte, treinta...",
        ],
        [
          ["¿Puede decirle que he llamado?", "Can you tell her I called?"],
          ["Dígale que me llame esta tarde.", "Tell him to call me this afternoon."],
          ["Perdona, no te oigo bien. Se ha cortado.", "Sorry, I can't hear you well. It got cut off."],
          ["Te llamo en cinco minutos, que estoy en el metro.", "I'll call you in five minutes, I'm on the metro."],
        ],
        [
          fe(
            "¿Puede decirle que me ___ cuando vuelva?",
            "llame",
            "Can you tell her to [call] me when she's back?",
            "Decir que + subjuntivo cuando es una petición (dile que me llame). Decir que + indicativo es solo informar (dile que he llamado)."
          ),
        ]
      ),
      sec(
        "Menús automáticos y atención al cliente",
        [
          "Muchas empresas tienen un menú automático: Para hablar con un agente, pulse uno (Spain) / marque uno (Latin America). Si desea... pulse dos.",
          "Frases típicas: Todos nuestros agentes están ocupados. Su llamada es muy importante para nosotros. Esta llamada puede ser grabada.",
          "Cuando te atienden, di el motivo claramente: Llamo por una factura / Le llamo porque tengo un problema con mi pedido.",
          "Al terminar: Muchas gracias por su ayuda. Que tenga un buen día. En América es muy frecuente: Con mucho gusto / A la orden.",
        ],
        [
          ["Para hablar con un agente, pulse uno.", "To speak to an agent, press one."],
          ["Llamo porque tengo un problema con la factura.", "I'm calling because I have a problem with the bill."],
          ["¿Me puede dar un número de incidencia?", "Can you give me a reference number?"],
          ["Muchas gracias por su ayuda.", "Thank you very much for your help."],
        ],
        [
          mc(
            "Un menú automático dice «Para hablar con un agente, marque cero». ¿Qué haces?",
            ["Pulso la tecla 0.", "Cuelgo.", "Espero sin hacer nada.", "Digo «cero» y cuelgo."],
            0,
            "Marcar (América) y pulsar (España) = press a key. Colgar = to hang up."
          ),
        ]
      ),
    ],
    [
      mt(
        "Relaciona cada frase con su significado.",
        [
          ["¿De parte de quién?", "Who's calling?"],
          ["No se retire.", "Please hold."],
          ["Está comunicando.", "The line's busy."],
          ["Se ha cortado.", "The call dropped."],
          ["Ahora le paso.", "I'll put you through."],
        ],
        "Fórmulas telefónicas que oirás en cualquier llamada."
      ),
      fe(
        "¿Podría hablar ___ el señor Ortiz, por favor?",
        "con",
        "Could I speak [to] Mr Ortiz, please?",
        "Hablar con alguien = to speak to someone. No se dice «hablar a» en este caso."
      ),
      fe(
        "___ porque tengo un problema con mi pedido.",
        "Llamo",
        "[I'm calling] because I have a problem with my order.",
        "Presente de llamar para explicar el motivo de la llamada.",
        ["Le llamo", "Te llamo", "Lo llamo"]
      ),
      fe(
        "Lo siento, no está. ¿Quiere dejarle un ___?",
        "mensaje",
        "I'm sorry, she's not in. Would you like to leave her a [message]?",
        "Dejar un mensaje o dejar un recado (más típico de España).",
        ["recado"]
      ),
      fe(
        "Dile que me ___ mañana, por favor.",
        "escriba",
        "Tell him to [write to] me tomorrow, please.",
        "Decir que + subjuntivo para transmitir una petición: dile que me escriba."
      ),
      toEs(
        "Tell her I called, please.",
        "Dígale que he llamado, por favor.",
        "Decir que + indicativo cuando solo informas (no pides nada). En América: dígale que llamé.",
        ["Dile que he llamado, por favor.", "Dígale que llamé, por favor.", "Dile que llamé, por favor.", "Por favor, dígale que he llamado.", "Por favor, dile que llamé."]
      ),
      toEs(
        "Sorry, I can't hear you well.",
        "Perdona, no te oigo bien.",
        "Oír = to hear. Yo oigo (irregular). Con usted: Perdone, no le oigo bien.",
        ["Perdone, no le oigo bien.", "Lo siento, no te oigo bien.", "Perdón, no te escucho bien.", "Perdona, no te escucho bien.", "Disculpa, no te oigo bien.", "Perdone, no lo oigo bien."]
      ),
      toEn(
        "Todos nuestros agentes están ocupados en este momento.",
        "All our agents are busy at the moment.",
        "La frase típica de la espera telefónica.",
        ["All of our agents are busy at the moment.", "All our agents are busy right now.", "All our agents are currently busy.", "All of our agents are currently busy."]
      ),
      mc(
        "En México contestas el teléfono. ¿Qué es lo más típico decir?",
        ["¿Bueno?", "¿Diga?", "¿Aló?", "¿Qué onda?"],
        0,
        "En México se contesta con ¿Bueno? En España, ¿Diga? o ¿Sí?; en muchos países de Sudamérica, ¿Aló?"
      ),
      wo(
        "Un momento, no se retire, ahora le paso.",
        "Retirarse = to hang up and leave the line; pasar a alguien = to put someone through.",
        "One moment, please hold, I'll put you through."
      ),
      ms(
        "¿Qué frases puedes usar para contestar el teléfono?",
        ["¿Diga?", "¿Aló?", "¿Bueno?", "¿De parte de quién?"],
        [0, 1, 2],
        "¿De parte de quién? no es para contestar: es para preguntar quién llama."
      ),
    ]
  ),
  L(
    "b1s-bank-money",
    "Supervivencia: el banco y el dinero",
    "Abrir una cuenta, preguntar por comisiones, hacer una transferencia y resolver un problema con la tarjeta: abrir una cuenta, sacar dinero, el cajero, me han cobrado dos veces.",
    "10 min",
    [
      sec(
        "Diálogo: abrir una cuenta",
        [
          "Lee el diálogo. Sophie acaba de mudarse y quiere abrir una cuenta en un banco.",
          "Fórmulas clave: abrir una cuenta, ¿qué documentos necesito?, ¿tiene comisiones?, la tarjeta de débito / crédito.",
        ],
        [
          ["— Buenos días. Quería abrir una cuenta corriente.", "Good morning. I'd like to open a current account."],
          ["— Muy bien. ¿Es usted residente?", "Very good. Are you a resident?"],
          ["— Sí, tengo el NIE y un contrato de trabajo. ¿Qué más necesito?", "Yes, I have my NIE and an employment contract. What else do I need?"],
          ["— Con el pasaporte, el NIE y un justificante de domicilio es suficiente.", "Your passport, NIE and proof of address are enough."],
          ["— ¿La cuenta tiene comisiones?", "Does the account have fees?"],
          ["— No, si domicilia la nómina no paga comisiones de mantenimiento.", "No, if you have your salary paid into it you don't pay maintenance fees."],
          ["— Perfecto. ¿Y cuándo me llega la tarjeta?", "Perfect. And when will the card arrive?"],
        ],
        [
          mc(
            "¿Qué significa «domiciliar la nómina»?",
            ["Tener el sueldo ingresado en esa cuenta", "Pagar el alquiler", "Cambiar de domicilio", "Pedir un préstamo"],
            0,
            "La nómina es el sueldo (y el documento que lo detalla). Domiciliar = hacer que un pago o ingreso vaya siempre a esa cuenta."
          ),
        ]
      ),
      sec(
        "Operaciones del día a día",
        [
          "Sacar dinero (del cajero) = to withdraw cash; ingresar dinero = to pay in; hacer una transferencia = to make a transfer; el saldo = the balance.",
          "Pagar con tarjeta, en efectivo, con el móvil. En España es muy común Bizum para enviar dinero entre amigos; en México, las transferencias SPEI; en Argentina, Mercado Pago.",
          "En el cajero automático: Introduzca su tarjeta, Teclee su PIN, Seleccione la cantidad, Retire su tarjeta.",
          "Palabras que cambian: el cajero automático (España y muchos países), el cajero o el ATM; la cuenta corriente (España), la cuenta de cheques (México), la cuenta corriente o cuenta a la vista (Cono Sur).",
        ],
        [
          ["Tengo que sacar dinero del cajero.", "I need to take some money out of the cash machine."],
          ["¿Me haces una transferencia y te lo devuelvo?", "Can you send me a transfer and I'll pay you back?"],
          ["¿Cuál es mi saldo?", "What's my balance?"],
          ["Retire su tarjeta.", "Remove your card."],
        ],
        [
          fe(
            "Voy al cajero a ___ cincuenta euros.",
            "sacar",
            "I'm going to the cash machine to [take out] fifty euros.",
            "Sacar dinero = to withdraw cash. Retirar también existe, sobre todo en el lenguaje formal y en América.",
            ["retirar"]
          ),
        ]
      ),
      sec(
        "Diálogo: un problema con la tarjeta",
        [
          "Para reclamar en el banco, explica qué ha pasado y cuándo, y pide una solución concreta.",
          "Me han cobrado dos veces (I've been charged twice), el cajero se ha tragado la tarjeta (the machine has swallowed my card), bloquear la tarjeta (to block the card).",
        ],
        [
          ["— Buenos días. Ayer el cajero se tragó mi tarjeta.", "Good morning. Yesterday the machine swallowed my card."],
          ["— ¿En qué cajero fue?", "Which machine was it?"],
          ["— En el de la calle Alcalá. Además, me han cobrado dos veces la misma compra.", "The one on Calle Alcalá. Also, I've been charged twice for the same purchase."],
          ["— Vamos a bloquear la tarjeta y le pedimos una nueva. Para el cargo doble, rellene esta reclamación.", "We'll block the card and order you a new one. For the double charge, fill in this complaint form."],
        ],
        [
          mc(
            "¿Qué significa «me han cobrado dos veces»?",
            ["I've been charged twice.", "I've been paid twice.", "I've paid in twice.", "I've been called twice."],
            0,
            "Cobrar = to charge (desde el punto de vista del que recibe el dinero) o to get paid. Aquí el banco o la tienda te ha cobrado de más."
          ),
        ]
      ),
    ],
    [
      mt(
        "Relaciona cada expresión con su significado.",
        [
          ["abrir una cuenta", "to open an account"],
          ["sacar dinero", "to withdraw cash"],
          ["ingresar dinero", "to pay money in"],
          ["el saldo", "the balance"],
          ["las comisiones", "the fees"],
        ],
        "Vocabulario básico del banco."
      ),
      fe(
        "Quería ___ una cuenta. ¿Qué documentos necesito?",
        "abrir",
        "I'd like to [open] an account. What documents do I need?",
        "Abrir una cuenta. Quería + infinitivo es la petición educada."
      ),
      fe(
        "Te hago una ___ ahora mismo y te devuelvo el dinero.",
        "transferencia",
        "I'll make you a [transfer] right now and pay you back.",
        "Hacer una transferencia = to transfer money."
      ),
      fe(
        "Mi tarjeta ha desaparecido. Quiero ___ para que nadie la use.",
        "bloquearla",
        "My card has disappeared. I want to [block it] so nobody uses it.",
        "Bloquear la tarjeta; con pronombre unido al infinitivo: bloquearla. Para que + subjuntivo (use).",
        ["cancelarla", "anularla"]
      ),
      toEs(
        "Does the account have any fees?",
        "¿La cuenta tiene comisiones?",
        "Comisiones = bank fees. También: ¿Hay que pagar comisiones?",
        ["¿Tiene comisiones la cuenta?", "¿La cuenta tiene alguna comisión?", "¿Hay comisiones?", "¿Esta cuenta tiene comisiones?"]
      ),
      toEs(
        "I've been charged twice.",
        "Me han cobrado dos veces.",
        "Cobrar en tercera persona plural impersonal: me han cobrado. En América: me cobraron dos veces.",
        ["Me cobraron dos veces.", "Me han cobrado dos veces lo mismo.", "Me cobraron dos veces lo mismo."]
      ),
      toEn(
        "El cajero se ha tragado mi tarjeta.",
        "The cash machine has swallowed my card.",
        "Tragarse = to swallow. Es la expresión normal para cuando el cajero no devuelve la tarjeta.",
        ["The ATM has swallowed my card.", "The ATM swallowed my card.", "The cash machine swallowed my card.", "The ATM ate my card.", "The cash machine kept my card.", "The ATM kept my card."]
      ),
      mc(
        "En México abres una cuenta para pagos diarios. ¿Cómo se suele llamar?",
        ["cuenta de cheques", "cuenta de cajero", "cuenta de saldo", "cuenta de tarjeta"],
        0,
        "En México la cuenta del día a día se llama cuenta de cheques; en España, cuenta corriente."
      ),
      wo(
        "¿Cuánto cobran por sacar dinero en otro cajero?",
        "Cobrar (cobran, impersonal) = to charge.",
        "How much do they charge to withdraw money from another bank's machine?"
      ),
      ms(
        "¿Qué necesitas normalmente para abrir una cuenta en España como extranjero?",
        ["el pasaporte", "el NIE", "un justificante de domicilio", "una carta de tu abuela"],
        [0, 1, 2],
        "Pasaporte, NIE y a veces justificante de domicilio o de ingresos (contrato, nómina)."
      ),
    ]
  ),
  L(
    "b1s-renting-flat",
    "Supervivencia: alquilar un piso",
    "Llamar por un anuncio, visitar el piso y entender el contrato: ¿sigue disponible?, ¿los gastos están incluidos?, la fianza, amueblado, el casero.",
    "10 min",
    [
      sec(
        "Diálogo: llamar por un anuncio",
        [
          "Lee el anuncio y el diálogo. «Se alquila piso de dos dormitorios, amueblado, 850 €/mes + gastos. Zona centro. Un mes de fianza.»",
          "Fórmulas clave: ¿Sigue disponible? (Is it still available?), ¿Cuándo se puede ver?, ¿Los gastos están incluidos?",
        ],
        [
          ["— Hola, llamo por el anuncio del piso de la calle Luna. ¿Sigue disponible?", "Hi, I'm calling about the ad for the flat on Calle Luna. Is it still available?"],
          ["— Sí, todavía está libre.", "Yes, it's still free."],
          ["— ¿Los gastos de comunidad están incluidos en el precio?", "Are the community charges included in the price?"],
          ["— La comunidad sí, pero la luz, el agua y el gas los paga el inquilino.", "The community charges are, but the tenant pays electricity, water and gas."],
          ["— ¿Y cuándo podría verlo?", "And when could I see it?"],
          ["— ¿Le viene bien mañana a las seis?", "Does tomorrow at six suit you?"],
        ],
        [
          mc(
            "Según el anuncio, ¿qué tiene que pagar el inquilino además del alquiler?",
            ["Los gastos (luz, agua, gas) y una fianza de un mes", "Nada más", "Solo la comunidad", "Los muebles"],
            0,
            "«+ gastos» significa que las facturas no están incluidas, y la fianza es un depósito que te devuelven al final si todo está bien."
          ),
        ]
      ),
      sec(
        "Diálogo: la visita",
        [
          "En la visita, pregunta por el estado del piso y las condiciones del contrato.",
          "Palabras útiles: amueblado / sin amueblar, exterior (con ventanas a la calle) / interior (a un patio), luminoso, la calefacción, el ascensor, la duración del contrato.",
        ],
        [
          ["— Es muy luminoso. ¿Tiene calefacción?", "It's very bright. Does it have heating?"],
          ["— Sí, calefacción de gas. Y aire acondicionado en el salón.", "Yes, gas heating. And air conditioning in the living room."],
          ["— ¿Se admiten mascotas? Tengo un gato.", "Are pets allowed? I have a cat."],
          ["— En principio sí, pero tengo que consultarlo con el propietario.", "In principle yes, but I have to check with the owner."],
          ["— ¿Cuánto dura el contrato?", "How long is the contract?"],
          ["— Un año, prorrogable. Hay que pagar un mes de fianza.", "A year, renewable. You have to pay one month's deposit."],
        ],
        [
          fe(
            "¿El piso está ___ o sin amueblar?",
            "amueblado",
            "Is the flat [furnished] or unfurnished?",
            "Amueblado = furnished, con muebles. Sin amueblar = unfurnished."
          ),
        ]
      ),
      sec(
        "España y América Latina",
        [
          "Palabras: el piso (España) / el departamento (México, Argentina, Chile) / el apartamento (Colombia, Venezuela y también España). El casero o la casera = landlord; el propietario / el dueño; el inquilino = tenant.",
          "La fianza (España) es el depósito; en muchos países de América se llama el depósito o la garantía. En Argentina a menudo se pide un garante: una persona o un seguro que responde si no pagas.",
          "El recibo o la factura de la luz: la luz = electricity bill. Los gastos de comunidad (España) o las expensas (Argentina) o el mantenimiento (México) = shared building costs.",
          "Antes de firmar, lee el contrato y haz fotos del piso: Quería leer el contrato con calma antes de firmar.",
        ],
        [
          ["Busco un departamento de dos recámaras.", "I'm looking for a two-bedroom flat. (Mexico)"],
          ["¿Hay que pagar expensas?", "Do you have to pay building fees? (Argentina)"],
          ["Me devolvieron la fianza entera.", "They gave me back the whole deposit."],
          ["Quería leer el contrato con calma antes de firmar.", "I'd like to read the contract carefully before signing."],
        ],
        [
          mc(
            "En México te ofrecen un «departamento de tres recámaras». ¿Qué es?",
            ["Un piso de tres dormitorios", "Una oficina con tres salas", "Tres pisos", "Un piso con tres baños"],
            0,
            "En México, departamento = piso y recámara = dormitorio."
          ),
        ]
      ),
    ],
    [
      mt(
        "Relaciona cada palabra con su significado.",
        [
          ["la fianza", "the deposit"],
          ["el inquilino", "the tenant"],
          ["el casero", "the landlord"],
          ["amueblado", "furnished"],
          ["los gastos", "the bills"],
        ],
        "Vocabulario básico del alquiler."
      ),
      fe(
        "Llamo por el anuncio. ¿___ disponible el piso?",
        "Sigue",
        "I'm calling about the ad. Is the flat [still] available?",
        "Seguir + adjetivo = to still be. ¿Sigue disponible? es la pregunta típica.",
        ["Está todavía", "Está aún"]
      ),
      fe(
        "¿Los gastos están ___ en el precio?",
        "incluidos",
        "Are the bills [included] in the price?",
        "Estar incluido; concuerda con los gastos (masculino plural)."
      ),
      fe(
        "¿Se ___ mascotas?",
        "admiten",
        "Are pets [allowed]?",
        "Se pasivo en plural porque mascotas es plural: se admiten. También: ¿Se permiten mascotas?",
        ["permiten", "aceptan"]
      ),
      fe(
        "Al final del contrato me ___ la fianza.",
        "devolvieron",
        "At the end of the contract they [gave] me [back] the deposit.",
        "Devolver = to give back. Indefinido de ellos (impersonal): devolvieron."
      ),
      toEs(
        "When could I see the flat?",
        "¿Cuándo podría ver el piso?",
        "Condicional de poder para sonar educado. Piso en España; departamento o apartamento en América.",
        ["¿Cuándo puedo ver el piso?", "¿Cuándo podría ver el departamento?", "¿Cuándo podría ver el apartamento?", "¿Cuándo puedo ver el departamento?", "¿Cuándo puedo ver el apartamento?", "¿Cuándo se puede ver el piso?"]
      ),
      toEs(
        "How long is the contract?",
        "¿Cuánto dura el contrato?",
        "Durar = to last. ¿Cuánto dura...? pregunta por la duración.",
        ["¿Cuál es la duración del contrato?", "¿De cuánto tiempo es el contrato?", "¿Cuánto tiempo dura el contrato?"]
      ),
      toEn(
        "La luz y el agua las paga el inquilino.",
        "The tenant pays for electricity and water.",
        "El objeto va delante (la luz y el agua) y se repite con el pronombre las. La luz = the electricity (bill).",
        ["The tenant pays the electricity and water.", "Electricity and water are paid by the tenant.", "The tenant pays the electricity and water bills.", "The tenant pays for the electricity and water."]
      ),
      mc(
        "En Argentina te piden «un garante». ¿Qué es?",
        ["Alguien (o un seguro) que responde si no pagas", "Un mueble", "Una factura de la luz", "El portero del edificio"],
        0,
        "El garante garantiza el pago del alquiler. En España a veces piden un aval bancario con una función parecida."
      ),
      wo(
        "Quería leer el contrato con calma antes de firmar.",
        "Quería de cortesía + antes de + infinitivo.",
        "I'd like to read the contract calmly before signing."
      ),
    ]
  ),
  L(
    "b1s-paperwork",
    "Supervivencia: trámites y oficinas (NIE, empadronamiento)",
    "Pedir cita previa, entender qué documentos hay que llevar y hablar con un funcionario: el NIE y el empadronamiento en España, y sus equivalentes en América Latina.",
    "12 min",
    [
      sec(
        "Los trámites básicos en España",
        [
          "El NIE (Número de Identidad de Extranjero) es tu número de identificación como extranjero en España: lo necesitas para trabajar, abrir una cuenta, firmar un contrato de alquiler o comprar un coche.",
          "Empadronarse es registrarse en el padrón municipal del ayuntamiento, en la ciudad donde vives. El certificado de empadronamiento (el padrón) se pide para la sanidad pública, escolarizar a los niños y muchos otros trámites.",
          "Casi todo necesita cita previa: se pide por internet o por teléfono. Conseguir cita puede tardar, así que es mejor pedirla pronto.",
          "Las palabras de siempre: el trámite (the procedure), el impreso o el formulario (the form), la tasa (the fee), el justificante (proof, receipt), el funcionario (civil servant), la ventanilla (the counter).",
        ],
        [
          ["Necesito pedir cita previa para el NIE.", "I need to book an appointment for my NIE."],
          ["¿Dónde me puedo empadronar?", "Where can I register as a resident?"],
          ["Hay que pagar la tasa en el banco antes de la cita.", "You have to pay the fee at the bank before the appointment."],
          ["Traiga el justificante de pago.", "Bring the proof of payment."],
        ],
        [
          mc(
            "¿Dónde te empadronas en España?",
            ["En el ayuntamiento de la ciudad donde vives", "En la comisaría", "En el banco", "En Correos"],
            0,
            "El padrón es municipal: te registras en el ayuntamiento (o en una oficina municipal) de tu ciudad."
          ),
        ]
      ),
      sec(
        "Diálogo: en la oficina",
        [
          "Lee el diálogo. Tom tiene cita para empadronarse.",
          "Fórmulas clave: vengo a..., tengo cita a las..., ¿qué documentos tengo que traer?, me falta..., ¿tengo que volver?",
        ],
        [
          ["— Buenos días. Tengo cita a las diez para empadronarme.", "Good morning. I have an appointment at ten to register."],
          ["— ¿Me deja el pasaporte y el contrato de alquiler?", "Can I have your passport and your rental contract?"],
          ["— Aquí tiene.", "Here you are."],
          ["— El contrato está a nombre de otra persona. Necesito una autorización firmada por ella.", "The contract is in someone else's name. I need an authorisation signed by her."],
          ["— Vaya. ¿Y si la traigo mañana, tengo que pedir otra cita?", "Oh dear. And if I bring it tomorrow, do I have to book another appointment?"],
          ["— Sí, lo siento. Pero puede pedirla por internet para la semana que viene.", "Yes, I'm sorry. But you can book it online for next week."],
        ],
        [
          fe(
            "Me ___ un documento, así que tengo que volver.",
            "falta",
            "I'm [missing] a document, so I have to come back.",
            "Faltar funciona como gustar: me falta un documento, me faltan dos documentos."
          ),
        ]
      ),
      sec(
        "Equivalentes en América Latina",
        [
          "Cada país tiene su sistema, pero la lógica es parecida: un número de identificación y una tarjeta de residente.",
          "México: el INM (Instituto Nacional de Migración) da la tarjeta de residente temporal o permanente; para temas fiscales se usa el RFC y para muchos trámites, la CURP.",
          "Argentina: el DNI para extranjeros lo da el RENAPER después de la residencia de Migraciones; para trabajar se necesita el CUIL o CUIT. Chile: el RUT (o RUN) aparece en todo. Colombia: la cédula de extranjería.",
          "En casi todos los países verás las mismas palabras: turno o cita (appointment), trámite, requisitos (requirements), fotocopia, apostillar (to get an apostille for a foreign document).",
        ],
        [
          ["¿Cuáles son los requisitos para la residencia?", "What are the requirements for residency?"],
          ["Saqué turno para el DNI.", "I got an appointment for my ID. (Argentina)"],
          ["Tienes que apostillar el título.", "You have to get an apostille on your degree."],
          ["Sin el RUT no puedes hacer nada.", "Without your RUT you can't do anything. (Chile)"],
        ],
        [
          mc(
            "En Argentina alguien dice «Saqué turno para Migraciones». ¿Qué ha hecho?",
            ["Ha pedido una cita en la oficina de migraciones.", "Ha salido de Argentina.", "Ha perdido su pasaporte.", "Ha cambiado de trabajo."],
            0,
            "En Argentina, sacar turno = pedir cita. En España se diría pedir cita."
          ),
        ]
      ),
    ],
    [
      mt(
        "Relaciona cada palabra con su significado.",
        [
          ["la cita previa", "the appointment"],
          ["el impreso", "the form"],
          ["la tasa", "the fee"],
          ["el justificante", "the proof / receipt"],
          ["los requisitos", "the requirements"],
        ],
        "Palabras que aparecen en cualquier trámite."
      ),
      fe(
        "Para el NIE hay que pedir ___ previa por internet.",
        "cita",
        "For the NIE you have to book an [appointment] online.",
        "Cita previa = appointment booked in advance. En Argentina se dice turno.",
        ["turno"]
      ),
      fe(
        "¿Qué documentos tengo que ___ a la cita?",
        "traer",
        "What documents do I have to [bring] to the appointment?",
        "Traer = to bring (hacia donde está quien habla). Si hablas desde casa: ¿Qué tengo que llevar?",
        ["llevar"]
      ),
      fe(
        "Primero tienes que ___ en el ayuntamiento.",
        "empadronarte",
        "First you have to [register] at the town hall.",
        "Empadronarse (reflexivo): tienes que empadronarte.",
        ["registrarte"]
      ),
      fe(
        "Tengo cita ___ las once para renovar la tarjeta.",
        "a",
        "I have an appointment [at] eleven to renew the card.",
        "A + hora: a las once."
      ),
      toEs(
        "What documents do I need?",
        "¿Qué documentos necesito?",
        "La pregunta más útil en cualquier oficina.",
        ["¿Qué documentos hacen falta?", "¿Qué documentos tengo que traer?", "¿Qué papeles necesito?", "¿Qué documentación necesito?", "¿Qué documentos tengo que llevar?"]
      ),
      toEs(
        "Do I have to come back?",
        "¿Tengo que volver?",
        "Tener que + infinitivo. Otra opción: ¿Hace falta que vuelva?",
        ["¿Tengo que regresar?", "¿Hace falta que vuelva?", "¿Tengo que venir otra vez?", "¿Tengo que volver otro día?"]
      ),
      toEn(
        "El contrato está a nombre de otra persona.",
        "The contract is in someone else's name.",
        "A nombre de = in the name of.",
        ["The contract is in another person's name.", "The contract is under someone else's name.", "The contract is in the name of another person."]
      ),
      mc(
        "¿Qué documento se pide en España para demostrar dónde vives?",
        ["el certificado de empadronamiento", "el NIE", "el pasaporte", "la tarjeta sanitaria"],
        0,
        "El padrón demuestra tu domicilio. El NIE es tu número de identificación como extranjero."
      ),
      wo(
        "Vengo a renovar la tarjeta de residencia.",
        "Venir a + infinitivo para explicar a qué vienes.",
        "I've come to renew my residence card."
      ),
      ms(
        "¿Qué frases significan que necesitas una cita?",
        ["Tengo que pedir cita previa.", "Tengo que sacar turno.", "Tengo que pagar la tasa.", "Necesito una cita."],
        [0, 1, 3],
        "Pedir cita (España) y sacar turno (Argentina) significan lo mismo. Pagar la tasa es pagar el precio del trámite."
      ),
    ]
  ),
  L(
    "b1s-complaints",
    "Supervivencia: quejarse con educación",
    "Cómo presentar una queja sin sonar agresivo: describir el problema, decir lo que esperas y pedir una solución. Con la hoja de reclamaciones en España y el libro de quejas en América.",
    "10 min",
    [
      sec(
        "Diálogo: un pedido que no llega",
        [
          "Lee el diálogo. Sara llama a una tienda en línea porque su pedido no ha llegado.",
          "Estructura de una buena queja: saludo + problema + datos + lo que quieres. Fíjate en me gustaría, entiendo que... pero, ¿qué solución me pueden dar?",
        ],
        [
          ["— Buenas tardes. Llamo porque hice un pedido hace dos semanas y todavía no me ha llegado.", "Good afternoon. I'm calling because I placed an order two weeks ago and it still hasn't arrived."],
          ["— ¿Me da el número de pedido?", "Can you give me the order number?"],
          ["— Sí, es el 48213. En la web decía que tardaba tres días.", "Yes, it's 48213. The website said it would take three days."],
          ["— Lo siento mucho. Parece que ha habido un retraso con la empresa de transporte.", "I'm very sorry. It looks like there's been a delay with the delivery company."],
          ["— Entiendo que no es culpa suya, pero lo necesito para el viernes. ¿Qué solución me pueden dar?", "I understand it's not your fault, but I need it by Friday. What solution can you offer me?"],
          ["— Se lo enviamos hoy por urgente, sin coste. Y le devolvemos los gastos de envío.", "We'll send it express today, at no cost. And we'll refund the shipping."],
        ],
        [
          mc(
            "¿Qué frase usa Sara para no culpar a la persona que la atiende?",
            ["Entiendo que no es culpa suya, pero...", "¿Me da el número de pedido?", "Llamo porque hice un pedido.", "Lo necesito para el viernes."],
            0,
            "Entiendo que + indicativo + pero... reconoce la situación de la otra persona y a la vez mantiene la queja."
          ),
        ]
      ),
      sec(
        "Frases para quejarse con educación",
        [
          "Para empezar: Quería comentarle un problema. Lamento tener que decirle que... Disculpe, pero creo que hay un error.",
          "Para describir: Me han cobrado de más. El producto llegó roto / defectuoso. No es lo que pedí. Llevo una hora esperando.",
          "Para pedir: Me gustaría que me devolvieran el dinero. ¿Sería posible cambiarlo? ¿Podría hablar con el responsable? (Me gustaría que + imperfecto de subjuntivo: lo verás en B2; aquí apréndelo como bloque.)",
          "El tono cuenta más que las palabras: habla con calma, da datos concretos (fechas, números) y termina con una petición clara.",
        ],
        [
          ["Disculpe, pero creo que hay un error en la cuenta.", "Excuse me, but I think there's a mistake in the bill."],
          ["Llevo media hora esperando y nadie me ha atendido.", "I've been waiting for half an hour and nobody has served me."],
          ["El producto llegó roto.", "The product arrived broken."],
          ["¿Sería posible cambiarlo por otro?", "Would it be possible to exchange it for another one?"],
        ],
        [
          fe(
            "Disculpe, pero creo que hay un ___ en la factura.",
            "error",
            "Excuse me, but I think there's a [mistake] on the invoice.",
            "Un error = a mistake. Una equivocación también es posible.",
            ["fallo"]
          ),
        ]
      ),
      sec(
        "Hojas de reclamaciones y libros de quejas",
        [
          "En España todos los comercios y bares deben tener hojas de reclamaciones. Si pides una, te la tienen que dar: ¿Me da una hoja de reclamaciones, por favor? Una copia es para ti y otra va a la oficina de consumo.",
          "En Argentina existe el libro de quejas; en México puedes acudir a la PROFECO (Procuraduría Federal del Consumidor); en Colombia, a la Superintendencia de Industria y Comercio. En Perú es obligatorio el libro de reclamaciones.",
          "Muchas veces basta con mencionar la hoja de reclamaciones para que el problema se resuelva.",
        ],
        [
          ["¿Me da una hoja de reclamaciones, por favor?", "Can I have a complaint form, please? (Spain)"],
          ["Voy a poner una queja en la PROFECO.", "I'm going to file a complaint with PROFECO. (Mexico)"],
          ["Quiero que quede constancia de la queja.", "I want the complaint to be on record."],
        ],
        [
          mc(
            "En un bar de Sevilla no te quieren devolver el cambio correcto. ¿Qué puedes pedir?",
            ["una hoja de reclamaciones", "una receta", "cita previa", "un justificante de domicilio"],
            0,
            "En España todos los establecimientos deben tener hojas de reclamaciones a disposición del cliente."
          ),
        ]
      ),
    ],
    [
      mt(
        "Relaciona cada frase con su función en la queja.",
        [
          ["Quería comentarle un problema.", "empezar"],
          ["Me han cobrado de más.", "describir el problema"],
          ["¿Sería posible cambiarlo?", "pedir una solución"],
          ["Entiendo que no es culpa suya.", "suavizar"],
        ],
        "Una buena queja tiene inicio, datos, petición y un tono tranquilo."
      ),
      fe(
        "___ una hora esperando la comida.",
        "Llevo",
        "[I've been] waiting an hour for the food.",
        "Llevar + tiempo + gerundio: cuánto tiempo dura algo que continúa.",
      ),
      fe(
        "El teléfono llegó ___ y no funciona.",
        "roto",
        "The phone arrived [broken] and doesn't work.",
        "Llegar + participio como adjetivo: llegó roto. Romper → roto (irregular).",
        ["defectuoso", "estropeado"]
      ),
      fe(
        "¿Sería ___ hablar con el responsable?",
        "posible",
        "Would it be [possible] to speak to the person in charge?",
        "¿Sería posible + infinitivo? es una petición muy educada."
      ),
      toEs(
        "I think there's a mistake in the bill.",
        "Creo que hay un error en la cuenta.",
        "Creer que + indicativo en afirmativo. La cuenta (restaurante) o la factura (empresa).",
        ["Creo que hay un error en la factura.", "Me parece que hay un error en la cuenta.", "Creo que la cuenta tiene un error.", "Creo que hay un fallo en la cuenta."]
      ),
      toEs(
        "I've been charged too much.",
        "Me han cobrado de más.",
        "Cobrar de más = to overcharge. En América: me cobraron de más.",
        ["Me cobraron de más.", "Me han cobrado demasiado.", "Me cobraron demasiado."]
      ),
      toEn(
        "Entiendo que no es culpa suya, pero necesito una solución.",
        "I understand it's not your fault, but I need a solution.",
        "Una fórmula para quejarse sin atacar a la persona que te atiende.",
        ["I understand that it's not your fault, but I need a solution.", "I understand it isn't your fault, but I need a solution.", "I know it's not your fault, but I need a solution."]
      ),
      mc(
        "¿Qué queja es más eficaz?",
        ["El pedido 48213 no ha llegado y lo necesito el viernes. ¿Qué solución me pueden dar?", "¡Siempre hacen lo mismo! ¡Es un desastre!", "Quiero mi dinero ya.", "No me gusta su tienda."],
        0,
        "Datos concretos + necesidad + pregunta por una solución. Las otras expresan enfado pero no ayudan a resolver nada."
      ),
      wo(
        "Disculpe, pero esto no es lo que pedí.",
        "Disculpe + pero + el problema: una forma suave de empezar.",
        "Excuse me, but this isn't what I ordered."
      ),
      ms(
        "¿Qué frases suenan educadas?",
        ["¿Sería posible cambiarlo?", "Quería comentarle un problema.", "¡Esto es un robo!", "¿Podría hablar con el responsable?"],
        [0, 1, 3],
        "«¡Esto es un robo!» es una acusación agresiva; empeora la conversación."
      ),
    ]
  ),
  L(
    "b1s-returns-exchanges",
    "Supervivencia: devolver y cambiar un producto",
    "Devolver algo que no te sirve, cambiarlo por otro o pedir un vale: quería devolver esto, ¿me devuelven el dinero?, el ticket, el plazo, la garantía.",
    "10 min",
    [
      sec(
        "Diálogo: en la tienda",
        [
          "Lee el diálogo. Nico compró unos auriculares que no funcionan bien.",
          "Fórmulas clave: quería devolver / cambiar..., ¿tiene el ticket?, ¿prefiere el dinero o un vale?, está en garantía.",
        ],
        [
          ["— Hola. Compré estos auriculares la semana pasada y el lado izquierdo no se oye.", "Hi. I bought these headphones last week and the left side doesn't work."],
          ["— ¿Tiene el ticket de compra?", "Do you have the receipt?"],
          ["— Sí, aquí está.", "Yes, here it is."],
          ["— ¿Quiere cambiarlos por otros iguales o prefiere que le devolvamos el dinero?", "Do you want to exchange them for an identical pair or would you prefer a refund?"],
          ["— Prefiero que me devuelvan el dinero, por favor.", "I'd rather have my money back, please."],
          ["— Muy bien. Se lo devolvemos en la misma tarjeta con la que pagó.", "Very good. We'll refund it to the same card you paid with."],
        ],
        [
          mc(
            "¿Qué significa «Prefiero que me devuelvan el dinero»?",
            ["I'd rather have my money back.", "I prefer to return the money.", "I prefer to pay in cash.", "I'd rather exchange them."],
            0,
            "Devolver el dinero (a alguien) = to refund. Preferir que + subjuntivo cuando otra persona hace la acción."
          ),
        ]
      ),
      sec(
        "Devolver, cambiar, el plazo y la garantía",
        [
          "Devolver un producto = to return it. Cambiar algo por otra cosa = to exchange it. Un vale (España) / una nota de crédito (América) = store credit.",
          "El plazo de devolución = the return period: Tiene treinta días para devolverlo. Muchas tiendas no aceptan devoluciones en ropa interior o productos en oferta.",
          "La garantía = the guarantee / warranty. En España, los productos nuevos tienen tres años de garantía (en el resto de la UE, al menos dos); en muchos países de América Latina la garantía legal suele ser más corta, así que pregunta: ¿Cuánto tiempo de garantía tiene?",
          "Si no tienes ticket, pregunta: ¿Se puede cambiar sin ticket? A veces te dan un vale en lugar del dinero.",
        ],
        [
          ["Quería devolver esta camisa; no me queda bien.", "I'd like to return this shirt; it doesn't fit."],
          ["¿Puedo cambiarla por una talla más?", "Can I exchange it for a size bigger?"],
          ["¿Cuál es el plazo de devolución?", "What's the return period?"],
          ["El portátil todavía está en garantía.", "The laptop is still under warranty."],
        ],
        [
          fe(
            "¿Puedo ___ estos zapatos por otros de otro color?",
            "cambiar",
            "Can I [exchange] these shoes for another colour?",
            "Cambiar algo por otra cosa = to exchange. Devolver sería recuperar el dinero."
          ),
        ]
      ),
      sec(
        "Comprar en línea y devolver",
        [
          "En las tiendas en línea: hacer un pedido (to place an order), el seguimiento (tracking), la devolución gratuita (free return), la etiqueta de devolución (return label).",
          "Frases típicas: El paquete llegó dañado. Me enviaron una talla equivocada. ¿Cómo tramito la devolución?",
          "El reembolso = the refund: El reembolso tarda entre cinco y diez días hábiles (working days).",
        ],
        [
          ["Me enviaron una talla equivocada.", "They sent me the wrong size."],
          ["¿Cómo tramito la devolución?", "How do I arrange the return?"],
          ["Imprima la etiqueta y péguela en la caja.", "Print the label and stick it on the box."],
          ["El reembolso tarda cinco días hábiles.", "The refund takes five working days."],
        ],
        [
          mc(
            "¿Qué es «el reembolso»?",
            ["El dinero que te devuelven", "El paquete", "La etiqueta", "El vale de descuento"],
            0,
            "Reembolso = refund. Reembolsar = devolver el dinero."
          ),
        ]
      ),
    ],
    [
      mt(
        "Relaciona cada palabra con su significado.",
        [
          ["el ticket", "the receipt"],
          ["el vale", "store credit"],
          ["la garantía", "the warranty"],
          ["el plazo", "the time limit"],
          ["el reembolso", "the refund"],
        ],
        "Vocabulario de devoluciones."
      ),
      fe(
        "Quería ___ este libro; ya lo tengo.",
        "devolver",
        "I'd like to [return] this book; I already have it.",
        "Devolver = to return (a product). Quería + infinitivo es la forma cortés."
      ),
      fe(
        "¿Tiene el ___ de compra?",
        "ticket",
        "Do you have the [receipt]?",
        "El ticket (España) o el recibo / la boleta / la factura en muchos países de América.",
        ["recibo", "tique", "comprobante", "boleta"]
      ),
      fe(
        "Prefiero que me ___ el dinero.",
        "devuelvan",
        "I'd rather they [refund] my money.",
        "Preferir que + subjuntivo, porque el sujeto cambia: yo prefiero / ellos devuelvan."
      ),
      fe(
        "El paquete llegó ___ y la taza estaba rota.",
        "dañado",
        "The parcel arrived [damaged] and the mug was broken.",
        "Dañado = damaged. Concuerda con el paquete (masculino).",
        ["roto", "estropeado"]
      ),
      toEs(
        "Can I exchange it for another size?",
        "¿Puedo cambiarlo por otra talla?",
        "Cambiar algo por otra cosa. El pronombre (lo / la) según el producto.",
        ["¿Puedo cambiarla por otra talla?", "¿Lo puedo cambiar por otra talla?", "¿La puedo cambiar por otra talla?", "¿Se puede cambiar por otra talla?"]
      ),
      toEs(
        "They sent me the wrong size.",
        "Me enviaron una talla equivocada.",
        "Equivocado = wrong. También: Me mandaron la talla que no era.",
        ["Me mandaron una talla equivocada.", "Me han enviado una talla equivocada.", "Me han mandado una talla equivocada.", "Me enviaron la talla equivocada.", "Me mandaron la talla equivocada."]
      ),
      toEn(
        "El portátil todavía está en garantía.",
        "The laptop is still under warranty.",
        "Estar en garantía = to be under warranty.",
        ["The laptop is still under guarantee.", "The laptop's still under warranty.", "The laptop is still covered by the warranty."]
      ),
      mc(
        "No tienes el ticket. ¿Qué preguntas?",
        ["¿Se puede cambiar sin ticket?", "¿Dónde está la etiqueta?", "¿Cuánto cuesta el ticket?", "¿Me da un reembolso de ticket?"],
        0,
        "¿Se puede + infinitivo? pregunta si algo está permitido."
      ),
      wo(
        "Compré esta chaqueta ayer y quería devolverla.",
        "Quería de cortesía + infinitivo con pronombre (devolverla).",
        "I bought this jacket yesterday and I'd like to return it."
      ),
      ms(
        "¿Qué frases piden el dinero de vuelta?",
        ["Quería que me devolvieran el dinero.", "¿Me pueden hacer el reembolso?", "Quería cambiarlo por otro.", "¿Me devuelven el dinero?"],
        [0, 1, 3],
        "Cambiarlo por otro es un cambio, no una devolución del dinero."
      ),
    ]
  ),
  L(
    "b1s-home-repairs",
    "Supervivencia: averías en casa",
    "Avisar al casero o llamar a un técnico cuando algo se rompe: se ha estropeado la lavadora, hay una fuga, no sale agua caliente, ¿cuándo pueden venir?",
    "10 min",
    [
      sec(
        "Diálogo: un mensaje al casero",
        [
          "Lee el mensaje de Julia a su casero. Fíjate en el se accidental (se ha estropeado, se ha roto) y en el tono educado.",
          "Palabras clave: una avería (a breakdown), estropearse (to break down), una fuga de agua (a leak), el fontanero (plumber), el electricista, el técnico.",
        ],
        [
          ["Hola, Andrés. Perdona que te escriba un domingo.", "Hi Andrés. Sorry to write to you on a Sunday."],
          ["Se ha estropeado la lavadora: hace un ruido muy raro y no centrifuga.", "The washing machine has broken down: it's making a very strange noise and it won't spin."],
          ["Además, hay una pequeña fuga debajo del fregadero.", "Also, there's a small leak under the kitchen sink."],
          ["¿Podrías avisar a un fontanero? Estoy en casa todas las tardes.", "Could you get a plumber? I'm at home every afternoon."],
          ["Te mando unas fotos. ¡Gracias!", "I'm sending you some photos. Thanks!"],
        ],
        [
          mc(
            "¿Por qué Julia escribe «se ha estropeado la lavadora» y no «he estropeado la lavadora»?",
            ["Porque el se accidental presenta la avería como algo que ocurrió, no como algo que ella hizo.", "Porque la lavadora es del casero.", "Porque es pasado.", "Porque es más corto."],
            0,
            "Estropearse (con se) describe una avería sin culpable. «He estropeado» diría que ella la rompió."
          ),
        ]
      ),
      sec(
        "Describir el problema",
        [
          "No funciona / No va (coloquial, España): La calefacción no va. El horno no funciona.",
          "No sale agua caliente. No hay luz en la cocina. Salta el automático / los plomos (the fuse trips). Gotea el grifo (the tap is dripping).",
          "Está atascado = it's blocked (un desagüe, el váter). Hay humedad en la pared = there's damp on the wall.",
          "Tras la visita: ¿Cuánto le debo? ¿Me puede hacer una factura? ¿La reparación la paga el casero o yo?",
        ],
        [
          ["No sale agua caliente en la ducha.", "There's no hot water in the shower."],
          ["Gotea el grifo de la cocina.", "The kitchen tap is dripping."],
          ["El lavabo está atascado.", "The washbasin is blocked."],
          ["Cada vez que enciendo el horno, salta el automático.", "Every time I turn on the oven, the fuse trips."],
        ],
        [
          fe(
            "La calefacción no ___ y hace mucho frío.",
            "funciona",
            "The heating isn't [working] and it's very cold.",
            "Funcionar = to work (aparatos). En España también se oye no va.",
            ["va", "anda"]
          ),
        ]
      ),
      sec(
        "Diálogo: llamar al técnico, y palabras de cada país",
        [
          "Al llamar, di qué pasa, desde cuándo y cuándo estás disponible. Pregunta el precio aproximado: ¿Cuánto cobran por la visita?",
          "Palabras que cambian: el fontanero (España) / el plomero (gran parte de América); el grifo (España) / la llave (gran parte de América) o la canilla (Argentina, Uruguay); la nevera o el frigorífico (España) / el refrigerador o la heladera (Argentina).",
          "En los edificios de España muchas cosas las gestiona la comunidad de vecinos (the owners' association) y, en América, la administración del edificio.",
        ],
        [
          ["— Buenos días, llamo porque tengo una fuga en el baño.", "Good morning, I'm calling because I have a leak in the bathroom."],
          ["— ¿Desde cuándo?", "Since when?"],
          ["— Desde esta mañana. ¿Podrían venir hoy?", "Since this morning. Could you come today?"],
          ["— Hoy es imposible, pero mañana a primera hora sí.", "Today is impossible, but first thing tomorrow, yes."],
          ["— Vale. ¿Cuánto cobran por la visita?", "OK. How much do you charge for the call-out?"],
        ],
        [
          mc(
            "En México se te rompe una tubería. ¿A quién llamas?",
            ["al plomero", "al peluquero", "al cartero", "al camarero"],
            0,
            "En gran parte de América Latina, el plomero; en España, el fontanero."
          ),
        ]
      ),
    ],
    [
      mt(
        "Relaciona cada problema con su significado.",
        [
          ["Gotea el grifo.", "The tap is dripping."],
          ["Hay una fuga.", "There's a leak."],
          ["Está atascado.", "It's blocked."],
          ["Salta el automático.", "The fuse trips."],
          ["No sale agua caliente.", "There's no hot water."],
        ],
        "Frases para describir averías en casa."
      ),
      fe(
        "Se ha ___ la nevera y la comida se está calentando.",
        "estropeado",
        "The fridge has [broken down] and the food is getting warm.",
        "Estropearse = dejar de funcionar. Con el se accidental: se ha estropeado.",
        ["roto"]
      ),
      fe(
        "¿Podrían ___ mañana por la mañana?",
        "venir",
        "Could you [come] tomorrow morning?",
        "Condicional de poder (ustedes) + infinitivo para una petición educada."
      ),
      fe(
        "Hay que llamar al ___ porque no hay luz en toda la casa.",
        "electricista",
        "We have to call the [electrician] because there's no power in the whole house.",
        "El / la electricista: la forma no cambia con el género."
      ),
      toEs(
        "The washing machine has broken down.",
        "Se ha estropeado la lavadora.",
        "Se accidental con estropearse. En América: se descompuso / se dañó la lavadora.",
        ["La lavadora se ha estropeado.", "Se estropeó la lavadora.", "La lavadora se estropeó.", "Se ha roto la lavadora.", "Se rompió la lavadora.", "Se descompuso la lavadora.", "La lavadora se descompuso.", "Se dañó la lavadora."]
      ),
      toEs(
        "How much do you charge for the visit?",
        "¿Cuánto cobran por la visita?",
        "Cobrar por algo = to charge for something.",
        ["¿Cuánto cobra por la visita?", "¿Cuánto cuesta la visita?", "¿Cuánto me cobran por la visita?", "¿Cuánto cobráis por la visita?"]
      ),
      toEn(
        "Perdona que te escriba un domingo.",
        "Sorry to write to you on a Sunday.",
        "Perdona que + subjuntivo para disculparse por molestar.",
        ["Sorry for writing to you on a Sunday.", "Sorry to message you on a Sunday.", "Sorry for messaging you on a Sunday.", "I'm sorry to write to you on a Sunday."]
      ),
      mc(
        "En Buenos Aires el grifo de la cocina gotea. ¿Cómo lo dirías?",
        ["Gotea la canilla de la cocina.", "Gotea la nevera de la cocina.", "Gotea el plomero de la cocina.", "Gotea la cocina del grifo."],
        0,
        "En Argentina y Uruguay el grifo se llama canilla."
      ),
      wo(
        "¿Podrías avisar a un fontanero, por favor?",
        "Condicional de cortesía + avisar a alguien (to call someone out, to let someone know).",
        "Could you get a plumber, please?"
      ),
      ms(
        "¿Qué datos conviene dar al llamar a un técnico?",
        ["qué pasa", "desde cuándo pasa", "cuándo estás en casa", "tu color favorito"],
        [0, 1, 2],
        "El problema, cuándo empezó y cuándo pueden venir: así la visita es más rápida."
      ),
    ]
  ),
  L(
    "b1s-job-interview",
    "Supervivencia: la entrevista de trabajo",
    "Presentarte, hablar de tu experiencia y tus puntos fuertes, y hacer preguntas al final: llevo tres años trabajando en..., se me da bien..., ¿cómo sería un día normal?",
    "12 min",
    [
      sec(
        "Diálogo: la presentación",
        [
          "Lee el comienzo de la entrevista. Nora se presenta a un puesto de recepcionista en un hotel.",
          "Fíjate en: llevo + tiempo + gerundio, he trabajado en..., estoy acostumbrada a..., se me da bien...",
        ],
        [
          ["— Háblenos un poco de usted.", "Tell us a bit about yourself."],
          ["— Soy de Irlanda y llevo dos años viviendo en Málaga. Estudié Turismo.", "I'm from Ireland and I've been living in Málaga for two years. I studied Tourism."],
          ["— ¿Qué experiencia tiene?", "What experience do you have?"],
          ["— He trabajado tres años en la recepción de un hotel en Dublín, y ahora trabajo a media jornada en una agencia de viajes.", "I worked for three years at a hotel reception in Dublin, and now I work part-time at a travel agency."],
          ["— ¿Qué idiomas habla?", "What languages do you speak?"],
          ["— Inglés, que es mi lengua materna, español con nivel B2 y un poco de francés.", "English, which is my mother tongue, Spanish at B2 level and a bit of French."],
        ],
        [
          mc(
            "«Llevo dos años viviendo en Málaga» significa:",
            ["Vive en Málaga desde hace dos años y sigue allí.", "Vivió en Málaga dos años y se fue.", "Va a vivir en Málaga dos años.", "Viaja a Málaga cada dos años."],
            0,
            "Llevar + tiempo + gerundio = algo que empezó en el pasado y continúa ahora."
          ),
        ]
      ),
      sec(
        "Puntos fuertes, puntos débiles y ejemplos",
        [
          "Puntos fuertes: Se me da bien trabajar en equipo / tratar con clientes. Soy una persona organizada y resolutiva. Estoy acostumbrada a trabajar bajo presión.",
          "Punto débil (con un lado positivo): A veces soy demasiado perfeccionista, pero estoy aprendiendo a delegar.",
          "Da un ejemplo concreto con pasado: Una vez, un grupo llegó sin reserva y conseguí alojarlos en otro hotel.",
          "Registro: en una entrevista, usa usted salvo que te tuteen primero. En España muchas empresas jóvenes tutean desde el principio; en gran parte de América Latina se mantiene más el usted.",
        ],
        [
          ["Se me da bien resolver problemas.", "I'm good at solving problems."],
          ["Estoy acostumbrado a trabajar bajo presión.", "I'm used to working under pressure."],
          ["Soy una persona puntual y responsable.", "I'm a punctual and responsible person."],
          ["Una vez tuve que atender a un cliente muy enfadado.", "Once I had to deal with a very angry customer."],
        ],
        [
          fe(
            "Se me ___ bien hablar en público.",
            "da",
            "I'm [good] at public speaking.",
            "Dársele bien algo a alguien = to be good at something. Funciona como gustar: se me da bien, se te dan bien los idiomas."
          ),
        ]
      ),
      sec(
        "Preguntas al final y despedida",
        [
          "Al final suelen preguntar: ¿Tiene alguna pregunta? Tener preguntas preparadas da buena impresión.",
          "Preguntas útiles: ¿Cómo sería un día normal en este puesto? ¿Cuál es el horario? ¿Qué tipo de contrato ofrecen? ¿Cuándo sabré algo del proceso?",
          "Palabras: el puesto (the position), la jornada completa / media jornada (full-time / part-time), el sueldo o el salario, el currículum o la hoja de vida (Colombia y otros países), la carta de presentación.",
          "Despedida: Muchas gracias por su tiempo. Quedo a su disposición. Espero tener noticias suyas.",
        ],
        [
          ["¿Cómo sería un día normal en este puesto?", "What would a typical day in this job be like?"],
          ["¿Qué tipo de contrato ofrecen?", "What kind of contract do you offer?"],
          ["Muchas gracias por su tiempo.", "Thank you very much for your time."],
          ["Quedo a su disposición para cualquier cosa.", "I'm at your disposal for anything you need."],
        ],
        [
          mc(
            "Al final de la entrevista te preguntan «¿Tiene alguna pregunta?». ¿Qué respuesta da mejor impresión?",
            ["Sí, ¿cómo sería un día normal en este puesto?", "No, ninguna.", "¿Cuántas vacaciones tengo el primer mes?", "¿Ya he terminado?"],
            0,
            "Una pregunta sobre el trabajo muestra interés. Preguntar primero por vacaciones puede dar mala impresión."
          ),
        ]
      ),
    ],
    [
      mt(
        "Relaciona cada palabra con su significado.",
        [
          ["el puesto", "the position"],
          ["media jornada", "part-time"],
          ["el sueldo", "the salary"],
          ["la hoja de vida", "the CV"],
          ["los puntos fuertes", "the strengths"],
        ],
        "Vocabulario de entrevistas de trabajo."
      ),
      fe(
        "___ cuatro años trabajando como enfermera.",
        "Llevo",
        "[I've been] working as a nurse for four years.",
        "Llevar + tiempo + gerundio para la experiencia que continúa."
      ),
      fe(
        "Estoy ___ a trabajar con clientes internacionales.",
        "acostumbrada",
        "I'm [used] to working with international clients.",
        "Estar acostumbrado / acostumbrada a + infinitivo = to be used to doing.",
        ["acostumbrado"]
      ),
      fe(
        "¿Qué tipo de ___ ofrecen? ¿Indefinido o temporal?",
        "contrato",
        "What kind of [contract] do you offer? Permanent or temporary?",
        "Un contrato indefinido (permanent) o temporal (temporary)."
      ),
      toEs(
        "I'm good at working in a team.",
        "Se me da bien trabajar en equipo.",
        "Dársele bien algo a alguien. Con infinitivo, el verbo va en singular: se me da bien.",
        ["Se me da bien el trabajo en equipo.", "Soy bueno trabajando en equipo.", "Soy buena trabajando en equipo.", "Trabajo bien en equipo."]
      ),
      toEs(
        "Thank you very much for your time.",
        "Muchas gracias por su tiempo.",
        "Su (usted) en una entrevista formal.",
        ["Muchas gracias por tu tiempo.", "Gracias por su tiempo.", "Muchísimas gracias por su tiempo."]
      ),
      toEn(
        "He trabajado tres años en la recepción de un hotel.",
        "I worked at a hotel reception for three years.",
        "El pretérito perfecto aquí resume la experiencia; en inglés es más natural el pasado simple o «have worked».",
        ["I've worked at a hotel reception for three years.", "I have worked at a hotel reception for three years.", "I worked for three years at a hotel reception.", "I worked on the reception of a hotel for three years.", "I've worked for three years at a hotel reception."]
      ),
      mc(
        "¿Qué frase es un punto débil bien presentado?",
        ["A veces me cuesta decir que no, pero estoy aprendiendo a organizar mejor mis prioridades.", "No tengo ningún punto débil.", "Llego tarde a menudo.", "No me gusta trabajar."],
        0,
        "Un punto débil real con un plan de mejora suena honesto y maduro."
      ),
      wo(
        "Estoy acostumbrado a trabajar bajo presión.",
        "Estar acostumbrado a + infinitivo.",
        "I'm used to working under pressure."
      ),
      ms(
        "¿Qué preguntas son buenas al final de una entrevista?",
        ["¿Cómo sería un día normal en este puesto?", "¿Cuándo sabré algo del proceso?", "¿Puedo irme ya?", "¿Qué tipo de formación ofrecen?"],
        [0, 1, 3],
        "Preguntas sobre el trabajo, el proceso y la formación muestran interés."
      ),
    ]
  ),
  L(
    "b1s-car-hire-petrol",
    "Supervivencia: alquilar un coche y la gasolinera",
    "Recoger un coche de alquiler, entender el seguro y el depósito, repostar y pedir ayuda en la carretera: lleno por lleno, el seguro a todo riesgo, se me ha pinchado una rueda.",
    "10 min",
    [
      sec(
        "Diálogo: en la oficina de alquiler",
        [
          "Lee el diálogo. Ben recoge un coche que reservó por internet.",
          "Palabras clave: el carné / permiso de conducir (España), la licencia de manejo (México y otros), el seguro a todo riesgo (comprehensive insurance), la franquicia (the excess), lleno por lleno (full to full).",
        ],
        [
          ["— Hola, tengo una reserva a nombre de Ben Clark.", "Hi, I have a booking under the name Ben Clark."],
          ["— Sí. ¿Me deja el carné de conducir y la tarjeta de crédito?", "Yes. Can I have your driving licence and credit card?"],
          ["— Aquí tiene. ¿El seguro está incluido?", "Here you are. Is insurance included?"],
          ["— El básico sí, con una franquicia de mil euros. Si quiere, puede contratar el seguro a todo riesgo sin franquicia.", "The basic one is, with a thousand-euro excess. If you like, you can take out comprehensive insurance with no excess."],
          ["— ¿Y la política de combustible?", "And the fuel policy?"],
          ["— Lleno por lleno: se lo damos con el depósito lleno y tiene que devolverlo lleno.", "Full to full: we give it to you with a full tank and you have to return it full."],
        ],
        [
          mc(
            "¿Qué significa «lleno por lleno»?",
            ["Recibes el coche con el depósito lleno y lo devuelves lleno.", "Pagas dos depósitos.", "El coche está lleno de maletas.", "Tienes que llenar el coche de pasajeros."],
            0,
            "El depósito aquí es el tanque de gasolina. Lleno por lleno = full to full."
          ),
        ]
      ),
      sec(
        "En la gasolinera",
        [
          "Repostar / echar gasolina (España), cargar nafta (Argentina), cargar gasolina o echar gasolina (México). La gasolinera (España, México) / la estación de servicio / la bomba (Colombia, Venezuela).",
          "Gasolina o diésel (gasóleo en España). En muchos países de América te atiende un empleado: Lleno, por favor / Llénelo, por favor. En España la mayoría son de autoservicio.",
          "Otras frases: ¿Dónde está el surtidor número tres? ¿Me revisa la presión de las ruedas / las llantas?",
        ],
        [
          ["Tengo que echar gasolina antes de devolver el coche.", "I have to put petrol in before returning the car."],
          ["Lleno, por favor.", "Fill it up, please."],
          ["¿Este coche es de gasolina o diésel?", "Does this car take petrol or diesel?"],
          ["¿Me revisa la presión de las llantas?", "Can you check the tyre pressure? (Latin America)"],
        ],
        [
          fe(
            "Antes de devolver el coche tengo que ___ el depósito.",
            "llenar",
            "Before returning the car I have to [fill] the tank.",
            "Llenar el depósito = fill the tank. Lleno es el adjetivo (full).",
            ["rellenar"]
          ),
        ]
      ),
      sec(
        "Problemas en la carretera",
        [
          "Para averías comunes, usa el se accidental: Se me ha pinchado una rueda (I've got a flat tyre). Se ha encendido una luz en el salpicadero. Se me ha descargado la batería.",
          "Llama al número de asistencia de la empresa de alquiler: Estoy en la autopista A-7, cerca de la salida 20. El coche no arranca.",
          "Palabras que cambian: el coche (España) / el carro (México, Colombia y el Caribe) / el auto (Cono Sur). La rueda / la llanta (América). El maletero (España) / la cajuela (México) / el baúl (Argentina, Colombia).",
        ],
        [
          ["Se me ha pinchado una rueda.", "I've got a flat tyre."],
          ["El coche no arranca.", "The car won't start."],
          ["Estoy en la autopista, cerca de la salida veinte.", "I'm on the motorway, near exit twenty."],
          ["Se me ponchó una llanta.", "I've got a flat tyre. (Mexico)"],
        ],
        [
          mc(
            "En México, ¿dónde pones las maletas del coche?",
            ["en la cajuela", "en el depósito", "en la llanta", "en la franquicia"],
            0,
            "En México el maletero se llama la cajuela."
          ),
        ]
      ),
    ],
    [
      mt(
        "Relaciona cada palabra con su significado.",
        [
          ["el carné de conducir", "the driving licence"],
          ["la franquicia", "the insurance excess"],
          ["el depósito", "the fuel tank"],
          ["la gasolinera", "the petrol station"],
          ["el maletero", "the boot"],
        ],
        "Vocabulario para alquilar un coche (España)."
      ),
      fe(
        "¿El ___ a todo riesgo está incluido en el precio?",
        "seguro",
        "Is comprehensive [insurance] included in the price?",
        "El seguro a todo riesgo = comprehensive insurance."
      ),
      fe(
        "Se me ha ___ una rueda y no tengo repuesto.",
        "pinchado",
        "I've got a [flat] tyre and I don't have a spare.",
        "Pincharse (España); en México se dice poncharse: se me ponchó una llanta.",
        ["ponchado"]
      ),
      fe(
        "El coche no ___. Creo que es la batería.",
        "arranca",
        "The car won't [start]. I think it's the battery.",
        "Arrancar = (for an engine) to start.",
        ["prende", "enciende"]
      ),
      toEs(
        "Is insurance included?",
        "¿El seguro está incluido?",
        "Estar incluido; también ¿Está incluido el seguro?",
        ["¿Está incluido el seguro?", "¿Incluye el seguro?", "¿Va incluido el seguro?"]
      ),
      toEs(
        "Fill it up, please.",
        "Lleno, por favor.",
        "En la gasolinera basta con «lleno». También: Llénelo, por favor.",
        ["Llénelo, por favor.", "Llene el tanque, por favor.", "Lleno por favor.", "Llénalo, por favor.", "Llene el depósito, por favor."]
      ),
      toEn(
        "Tiene que devolver el coche con el depósito lleno.",
        "You have to return the car with a full tank.",
        "Depósito = tanque de combustible en este contexto.",
        ["You have to return the car with the tank full.", "You need to return the car with a full tank.", "You must return the car with a full tank.", "You have to bring the car back with a full tank."]
      ),
      mc(
        "En Buenos Aires quieres echar gasolina. ¿Qué dirías?",
        ["Voy a cargar nafta.", "Voy a pinchar la rueda.", "Voy a la cajuela.", "Voy a echar diésel al maletero."],
        0,
        "En Argentina la gasolina se llama nafta y se dice cargar nafta."
      ),
      wo(
        "Estoy en la autopista y el coche no arranca.",
        "Estar en + lugar y no arrancar para una avería.",
        "I'm on the motorway and the car won't start."
      ),
      ms(
        "¿Qué palabras significan «car»?",
        ["el coche", "el carro", "el auto", "la cajuela"],
        [0, 1, 2],
        "Coche (España), carro (México, Colombia, Caribe), auto (Cono Sur). La cajuela es el maletero."
      ),
    ]
  ),
];
