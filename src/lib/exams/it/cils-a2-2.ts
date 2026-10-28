// Synced from cheneygross-afk/lengo:src/lib/exams/it/cils-a2-2.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exam } from "../types";
import { AUDIO_NOTE, DIALOGUE_NOTE, MONOLOGUE_NOTE, cilsExam, gap, listen, paras, q, read, rec, speak, vf, write } from "./text";

// CILS A2 (Elementary) practice exam 2: home, health and city life. The
// five sections of the real CILS A2, with tasks at A2: a chemist's, a
// notice to residents, an online order and a car-free Sunday, then a call
// to an estate agent; Naples' "caffè sospeso" and the rules of a public
// pool; the imperfect and passato prossimo, pronouns "ne" and "ci"; a
// message about a new flat and a complaint; a conversation about habits
// and a talk on a festival from your country.
export const CILS_A2_2: Exam = cilsExam(
  {
    slug: "cils-a2-2",
    level: "A2",
    title: "CILS A2 (Elementary) practice exam 2",
    description:
      "A second full CILS A2 practice exam: advice at the chemist's, a water cut, a late delivery, a car-free Sunday and a flat to rent; the Neapolitan \"caffè sospeso\" and the rules of a swimming pool; a childhood story with the imperfect, \"ne\" and \"ci\"; a message about your new home and an e-mail about a wrong size; your habits and a festival from your country.",
  },
  {
    ascolto: [
      listen(
        1,
        "Ascolta i dialoghi e gli annunci. Per ognuno scegli la risposta giusta.",
        [
          rec("Dialogo 1", [
            "F: Buongiorno, ho un forte raffreddore e un po' di tosse. Che cosa mi consiglia?",
            "M: Prenda questo sciroppo tre volte al giorno, dopo i pasti. E beva molta acqua.",
            "F: Devo andare dal medico?",
            "M: Se tra tre giorni ha ancora la tosse, sì.",
          ]),
          rec("Avviso ai condomini", [
            "Gentili condomini, vi informiamo che giovedì, dalle otto alle tredici, manca l'acqua in tutto il palazzo per lavori. Ci scusiamo per il disagio.",
          ], "m"),
          rec("Dialogo 2", [
            "F: Servizio clienti, buongiorno, sono Elisa. Come posso aiutarla?",
            "M: Buongiorno. Ho ordinato un aspirapolvere dieci giorni fa, ma non è ancora arrivato.",
            "F: Mi dà il numero dell'ordine, per favore?",
            "M: Sì: quattro, sette, due, nove.",
            "F: Ecco… Purtroppo c'è stato un ritardo nel magazzino. Lo riceve lunedì.",
          ]),
          rec("Notizia alla radio", [
            "Domenica il centro storico è chiuso alle auto dalle nove alle diciotto per la giornata senza macchine. Autobus e tram sono gratuiti per tutto il giorno.",
          ]),
        ],
        [
          q(1, "Dialogo 1. Quando deve prendere lo sciroppo la signora?", ["Prima dei pasti", "Tre volte al giorno, dopo i pasti", "Solo la sera"], 2, "\"Prenda questo sciroppo tre volte al giorno, dopo i pasti\". \"Prenda\" and \"beva\" are the formal (Lei) imperative."),
          q(2, "Avviso. Che cosa succede giovedì mattina?", ["Non c'è l'acqua.", "Non c'è la luce.", "L'ascensore non funziona."], 1, "\"Manca l'acqua in tutto il palazzo\": there's no water from eight to one."),
          q(3, "Dialogo 2. Quando arriva l'aspirapolvere?", ["Oggi", "Fra dieci giorni", "Lunedì"], 3, "\"Lo riceve lunedì\". He ordered it ten days ago (\"dieci giorni fa\")."),
          q(4, "Notizia. Che cosa è gratuito domenica?", ["Il parcheggio", "Gli autobus e i tram", "I musei"], 2, "\"Autobus e tram sono gratuiti per tutto il giorno\"."),
        ],
        `${AUDIO_NOTE} Listen to each short recording and choose the right answer.`,
      ),
      listen(
        2,
        "Ascolta la telefonata tra Laura e un'agenzia immobiliare. Scegli la risposta giusta.",
        [
          rec("Telefonata", [
            "M: Agenzia Casa Facile, buongiorno.",
            "F: Buongiorno, chiamo per l'annuncio dell'appartamento in via Mazzini. È ancora libero?",
            "M: Sì. È un trilocale al quarto piano, con ascensore. Ci sono due camere da letto, un soggiorno con cucina e un bagno.",
            "F: Ha il balcone?",
            "M: Sì, un balcone piccolo che dà sul cortile. Per questo è molto silenzioso.",
            "F: E quanto costa l'affitto?",
            "M: Settecento euro al mese, più cinquanta euro di spese condominiali.",
            "F: È possibile vederlo questa settimana? Io lavoro fino alle sei.",
            "M: Va bene mercoledì alle sei e mezza?",
            "F: Perfetto, grazie. A mercoledì.",
          ]),
        ],
        [
          q(5, "A che piano è l'appartamento?", ["Al sesto piano", "Al primo piano", "Al quarto piano"], 3, "\"Un trilocale al quarto piano, con ascensore\"."),
          q(6, "Quante camere da letto ha?", ["Una", "Due", "Tre"], 2, "\"Due camere da letto\". A \"trilocale\" has three rooms in all: two bedrooms and the living room."),
          q(7, "Perché l'appartamento è silenzioso?", ["Perché il balcone dà sul cortile.", "Perché è all'ultimo piano.", "Perché la strada è chiusa al traffico."], 1, "The balcony \"dà sul cortile\" (looks onto the courtyard), \"per questo è molto silenzioso\"."),
          q(8, "Quanto paga Laura in tutto ogni mese?", ["700 euro", "750 euro", "650 euro"], 2, "Seven hundred for the rent \"più cinquanta euro di spese condominiali\" (building charges): 750."),
          q(9, "Quando va a vedere l'appartamento Laura?", ["Mercoledì alle 18:30", "Mercoledì alle 18:00", "Martedì alle 18:30"], 1, "\"Mercoledì alle sei e mezza\": she works until six, so half past six suits her."),
        ],
        `${AUDIO_NOTE} Laura calls an estate agent about a flat. Choose the right answer.`,
      ),
    ],
    lettura: [
      read(
        1,
        "Leggi il testo e scegli la risposta giusta.",
        [
          {
            title: "Il caffè sospeso",
            body: paras(
              "A Napoli esiste una tradizione molto antica: il caffè sospeso. Una persona entra in un bar, beve un caffè ma ne paga due. Il secondo caffè resta «sospeso»: è per una persona che non ha soldi, che più tardi entra nel bar e chiede se c'è un sospeso. Il barista allora le offre un caffè gratis.",
              "Questa tradizione è nata in tempi difficili, quando molte famiglie erano povere. Per i napoletani il caffè non è solo una bevanda: è un momento di pausa e di amicizia, e nessuno deve rinunciarci.",
              "Negli ultimi anni l'idea è arrivata anche in altre città italiane e all'estero. Oggi alcuni bar hanno una lavagna dove scrivono quanti caffè sospesi ci sono. E c'è chi lascia sospese anche altre cose: un panino, un libro, un biglietto per il cinema.",
            ),
          },
        ],
        [
          q(1, "Che cos'è un caffè sospeso?", ["Un caffè pagato per una persona che non ha soldi.", "Un caffè che si beve in piedi.", "Un caffè molto forte."], 1, "You drink one coffee and pay for two: the second waits for someone \"che non ha soldi\"."),
          q(2, "Chi beve il caffè sospeso?", ["Il barista", "Una persona che entra più tardi e lo chiede", "La persona che lo paga"], 2, "Someone \"più tardi entra nel bar e chiede se c'è un sospeso\"."),
          q(3, "Quando è nata questa tradizione?", ["Negli ultimi anni", "Quando è nato il primo bar di Napoli", "In un periodo in cui molte famiglie erano povere"], 3, "\"È nata in tempi difficili, quando molte famiglie erano povere\". Only its spread to other cities is recent."),
          q(4, "Per i napoletani il caffè è…", ["solo una bevanda.", "un momento di pausa e di amicizia.", "una cosa troppo cara."], 2, "\"Non è solo una bevanda: è un momento di pausa e di amicizia\"."),
          q(5, "Oggi alcuni bar…", ["non accettano più i sospesi.", "offrono il caffè a tutti.", "scrivono su una lavagna quanti caffè sospesi ci sono."], 3, "\"Alcuni bar hanno una lavagna dove scrivono quanti caffè sospesi ci sono\"."),
        ],
        "Read the text about a Neapolitan tradition and choose the right answer.",
      ),
      read(
        2,
        "Leggi il regolamento della piscina. Le frasi sono vere o false?",
        [
          {
            title: "Piscina comunale: regolamento",
            body: [
              "- La piscina è aperta dal lunedì al sabato, dalle 7:00 alle 21:00. La domenica è aperta solo la mattina.",
              "- Prima di entrare in acqua è obbligatorio fare la doccia e mettere la cuffia.",
              "- Negli spogliatoi e a bordo vasca bisogna portare le ciabatte.",
              "- I bambini sotto i dodici anni possono entrare solo con un adulto.",
              "- È vietato mangiare a bordo vasca. Al bar della piscina si può mangiare.",
              "- Gli armadietti si chiudono con una moneta da un euro, che poi viene restituita.",
              "- Chi perde il braccialetto d'ingresso deve pagare cinque euro.",
            ].join("\n"),
          },
        ],
        [
          vf(6, "La domenica pomeriggio la piscina è chiusa.", true, "\"La domenica è aperta solo la mattina\"."),
          vf(7, "La cuffia non è obbligatoria.", false, "\"È obbligatorio fare la doccia e mettere la cuffia\": a swimming cap is compulsory."),
          vf(8, "Un bambino di dieci anni può andare in piscina da solo.", false, "Children \"sotto i dodici anni\" need an adult."),
          vf(9, "Si può mangiare al bar della piscina.", true, "Eating is forbidden by the pool (\"a bordo vasca\") but allowed at the bar."),
          vf(10, "Per l'armadietto si paga un euro, che non viene restituito.", false, "The euro coin \"poi viene restituita\": you get it back."),
          vf(11, "Chi perde il braccialetto paga cinque euro.", true, "\"Chi perde il braccialetto d'ingresso deve pagare cinque euro\"."),
        ],
        "Read the swimming pool rules. Are the sentences true (\"Vero\") or false (\"Falso\")?",
      ),
    ],
    strutture: [
      read(
        1,
        "Leggi il testo e scegli la forma giusta per ogni spazio.",
        [
          {
            title: "Fiocco",
            body: "Quando (1) ______ piccola, abitavo in un paese di montagna con i miei nonni. Ogni mattina mio nonno mi (2) ______ a scuola a piedi. D'inverno (3) ______ molta neve e a volte la scuola restava chiusa. Un giorno, mentre giocavo in giardino, (4) ______ un piccolo cane. L'ho portato a casa e la nonna (5) ______ ha chiamato Fiocco. Fiocco (6) ______ rimasto con noi per quindici anni.",
          },
        ],
        [
          gap(1, ["sono stata", "ero", "ho"], 2, "A description of the past (how things were) takes the imperfect: \"quando ero piccola\"."),
          gap(2, ["accompagna", "ha accompagnato", "accompagnava"], 3, "\"Ogni mattina\" is a habit in the past: imperfect, \"accompagnava\"."),
          gap(3, ["c'era", "c'è stata", "era"], 1, "Background description, imperfect: \"c'era molta neve\", there was a lot of snow."),
          gap(4, ["trovavo", "ho trovato", "trovo"], 2, "\"Mentre giocavo\" is the background; the single event that happened is passato prossimo: \"ho trovato\"."),
          gap(5, ["gli", "lo", "la"], 2, "\"Il cane\" is a masculine direct object: \"lo ha chiamato\" (often shortened to \"l'ha chiamato\")."),
          gap(6, ["è", "ha", "era"], 1, "\"Rimanere\" takes \"essere\" in the passato prossimo: \"è rimasto\"."),
        ],
        "Read the story and choose the right form for each gap.",
      ),
      read(
        2,
        "Scegli la forma giusta per completare la frase.",
        [],
        [
          q(7, "Se domani piove, ______ a casa.", ["resto", "restavo", "sono restato"], 1, "A real possibility in the future: \"se\" + present, then present (or future): \"resto a casa\"."),
          q(8, "Ieri ______ visto un film bellissimo.", ["sono", "ho", "avevo"], 2, "\"Vedere\" takes \"avere\": \"ho visto\"."),
          q(9, "Non ho fame: ______ già mangiato.", ["sono", "avevo", "ho"], 3, "\"Mangiare\" takes \"avere\", and \"già\" with the present situation calls for the passato prossimo: \"ho già mangiato\"."),
          q(10, "Quanti caffè bevi al giorno? – ______ bevo tre.", ["Ne", "Li", "Ci"], 1, "With a number, \"ne\" stands for 'of them': \"ne bevo tre\"."),
          q(11, "Vai spesso a Roma? – Sì, ______ vado ogni mese.", ["ne", "ci", "lo"], 2, "\"Ci\" replaces a place: \"ci vado\", I go there."),
          q(12, "È il ristorante ______ caro della città.", ["molto", "più", "troppo"], 2, "The superlative: \"il più caro della città\", the most expensive in town."),
          q(13, "Signora, ______ accomodi, prego!", ["ti", "vi", "si"], 3, "The formal imperative with \"Lei\": \"si accomodi\", please take a seat."),
          q(14, "Quando ero giovane ______ molto sport.", ["farò", "facevo", "ho fatto"], 2, "A habit in the past (\"quando ero giovane\"): imperfect, \"facevo\"."),
        ],
        "Choose the right form to complete each sentence.",
      ),
    ],
    scritta: [
      write(
        1,
        "Scrivi un messaggio (da 40 a 60 parole).",
        {
          prompt: "Hai cambiato casa. Scrivi un messaggio a un'amica italiana: descrivi la tua nuova casa e invitala a una festa.",
          words: [40, 60],
          rubric: [
            "\"Adeguatezza\": a friendly message that describes the new home (where it is, the rooms, what you like) and invites your friend to a party with a day and time",
            "\"Coerenza e coesione\": a greeting, the news, the description, then the invitation and a sign-off",
            "\"Competenza grammaticale\": \"ho cambiato casa\" and other passato prossimo forms, \"c'è / ci sono\", adjectives that agree",
            "\"Competenza lessicale\": home words (\"trilocale\", \"piano\", \"balcone\", \"soggiorno\", \"luminoso\")",
          ],
          modelAnswer:
            "Ciao Elena! Finalmente ho cambiato casa: adesso abito in un trilocale in via Roma, vicino al parco. È al terzo piano e ha un balcone grande, dove ho messo tante piante. La cucina è nuova e il soggiorno è molto luminoso. Sabato prossimo faccio una piccola festa alle otto: vieni? Porta anche Marco! Un bacio, Lisa",
        },
        "Write a message of 40 to 60 words to an Italian friend: describe your new home and invite her to a party.",
      ),
      write(
        2,
        "Scrivi un'email al servizio clienti (da 35 a 50 parole).",
        {
          prompt:
            "Hai comprato online una giacca, ma è arrivata della taglia sbagliata. Scrivi un'email al servizio clienti del negozio: spiega il problema e chiedi di cambiarla.",
          words: [35, 50],
          rubric: [
            "\"Adeguatezza\": a formal e-mail that says what you ordered and when, what's wrong and asks to exchange it",
            "\"Coerenza e coesione\": a formal greeting, the facts, the request, \"Cordiali saluti\" and your name",
            "\"Competenza grammaticale\": the passato prossimo for what happened (\"ho ordinato\", \"è arrivata\"), \"vorrei\" + infinitive, an object pronoun (\"cambiarla\")",
            "\"Competenza lessicale\": \"ordine\", \"taglia\", \"pacco\", \"restituire\", \"cambiare\"",
          ],
          modelAnswer:
            "Gentile servizio clienti, il 3 marzo ho ordinato sul vostro sito una giacca blu, taglia M. Ieri è arrivato il pacco, ma dentro c'è una giacca taglia L. Vorrei cambiarla con la taglia giusta. Come devo fare per restituirla? Grazie. Cordiali saluti, Tom Walker",
        },
        "Write a formal e-mail of 35 to 50 words to an online shop: your jacket came in the wrong size and you'd like to exchange it.",
      ),
    ],
    orale: [
      speak(
        1,
        "Dialogo con l'esaminatore. Parla delle tue abitudini.",
        {
          prompt: "Rispondi alle domande sulle tue abitudini: il cibo, lo sport, la salute.",
          points: ["Che cosa mangi di solito", "Lo sport che fai", "Che cosa fai quando stai male", "Un'abitudine che vuoi cambiare"],
          examinerQuestions: [
            "Che cosa mangi di solito a colazione?",
            "Cucini spesso? Qual è il tuo piatto preferito?",
            "Fai sport? Quale?",
            "Che cosa fai quando hai il raffreddore?",
            "C'è un'abitudine che vuoi cambiare?",
          ],
          prepMinutes: 0,
          speakMinutes: 5,
          modelAnswer: paras(
            "– Che cosa mangi di solito a colazione?",
            "– Di solito bevo un tè e mangio uno yogurt con la frutta. Il fine settimana invece faccio colazione al bar con un cappuccino e un cornetto.",
            "– Cucini spesso? Qual è il tuo piatto preferito?",
            "– Sì, cucino quasi tutte le sere. Il mio piatto preferito è la pasta al pesto: la faccio con il basilico del mio balcone.",
            "– Fai sport?",
            "– Vado in piscina due volte alla settimana e la domenica vado in bicicletta con mio marito.",
            "– Che cosa fai quando hai il raffreddore?",
            "– Resto a casa, bevo tante tisane e dormo molto. Vado dal medico solo se ho la febbre alta.",
            "– C'è un'abitudine che vuoi cambiare?",
            "– Sì: guardo troppo il telefono la sera. Voglio leggere di più prima di dormire.",
          ),
        },
        DIALOGUE_NOTE,
      ),
      speak(
        2,
        "Leggi il tema e prepara un breve monologo. Poi rispondi alle domande dell'esaminatore.",
        {
          prompt: "Racconta una festa importante del tuo paese.",
          material: [
            {
              label: "Tema",
              title: "Una festa del mio paese",
              body: "Parla di una festa importante nel tuo paese: quando si festeggia, che cosa fanno le persone, che cosa si mangia e come l'hai festeggiata l'ultima volta.",
            },
          ],
          points: ["Il nome della festa e quando si festeggia", "Che cosa fanno le persone", "Che cosa si mangia", "L'ultima volta che l'hai festeggiata"],
          examinerQuestions: ["Ti piace questa festa? Perché?", "Conosci una festa italiana?", "Con chi hai festeggiato l'ultima volta?"],
          prepMinutes: 2,
          speakMinutes: 3,
          modelAnswer: paras(
            "Voglio parlare del Giorno del Ringraziamento, una festa molto importante negli Stati Uniti. Si festeggia il quarto giovedì di novembre.",
            "Di solito tutta la famiglia si riunisce a casa dei nonni o dei genitori. Molte persone viaggiano per tornare a casa, e gli aeroporti sono pieni. Si mangia un grande tacchino al forno con le patate, le verdure e una salsa di mirtilli rossi. Alla fine c'è la torta di zucca.",
            "L'anno scorso ho festeggiato a casa di mia sorella, a Chicago. Eravamo in quindici! Abbiamo cucinato tutto il giorno, poi abbiamo mangiato e guardato una partita di football alla televisione. È la mia festa preferita, perché è un momento per stare insieme e dire grazie.",
          ),
        },
        MONOLOGUE_NOTE,
      ),
    ],
  },
);
