// Synced from cheneygross-afk/lengo:src/lib/exams/it/cils-a1-1.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exam } from "../types";
import { AUDIO_NOTE, DIALOGUE_NOTE, MONOLOGUE_NOTE, PHOTO_NOTE, cilsExam, gap, listen, match, paras, q, read, rec, speak, vf, write } from "./text";

// CILS A1 (Beginner) practice exam 1: a new life in a new city. The five
// sections of the real CILS A1, with tasks at A1: short everyday
// recordings, notices and a personal e-mail, articles and present-tense
// verbs, a message and an e-mail, a conversation about yourself and a
// photo to describe.
const ADS = ["A. Lezioni di chitarra", "B. Affittasi monolocale", "C. Vendo bicicletta", "D. Corso di italiano", "E. Cercasi baby-sitter"];

export const CILS_A1_1: Exam = cilsExam(
  {
    slug: "cils-a1-1",
    level: "A1",
    title: "CILS A1 (Beginner) practice exam 1",
    description:
      "A full CILS A1 practice exam on starting out in a new city: short conversations at the bar, the station and on the phone, a new neighbour, small ads and an e-mail from Turin, articles and present-tense verbs, a message and an e-mail to write, and a conversation about yourself.",
  },
  {
    ascolto: [
      listen(
        1,
        "Ascolta i dialoghi. Per ogni dialogo scegli la risposta giusta.",
        [
          rec("Dialogo 1", ["F: Buongiorno, un cappuccino e un cornetto, per favore.", "M: Ecco a Lei. Sono tre euro e venti.", "F: Ecco, grazie."]),
          rec("Dialogo 2", ["M: Scusi, a che ora parte il treno per Bologna?", "F: Alle dieci e un quarto, dal binario cinque.", "M: Grazie mille."]),
          rec("Dialogo 3", [
            "F: Pronto, Marco? Sono Giulia. Stasera vieni al cinema con me?",
            "M: Stasera no, mi dispiace, devo studiare. Domani sera va bene?",
            "F: Sì, perfetto. A domani!",
          ]),
          rec("Annuncio", ["Gentili clienti, il supermercato chiude tra quindici minuti. Grazie e arrivederci."]),
        ],
        [
          q(1, "Dialogo 1. Quanto paga la signora?", ["2,20 euro", "3,20 euro", "3,50 euro"], 2, "The barman says \"tre euro e venti\": three euros twenty."),
          q(2, "Dialogo 2. A che ora parte il treno?", ["Alle 10:15", "Alle 10:45", "Alle 5:15"], 1, "\"Alle dieci e un quarto\" is a quarter past ten. \"Binario cinque\" is the platform, not the time."),
          q(3, "Dialogo 3. Quando vanno al cinema Marco e Giulia?", ["Domani sera", "Stasera", "Domani mattina"], 1, "Marco can't go \"stasera\" (tonight) because he has to study, and suggests \"domani sera\" (tomorrow evening)."),
          q(
            4,
            "Annuncio. Che cosa dice l'annuncio?",
            ["Il supermercato apre tra quindici minuti.", "Il supermercato è chiuso domani.", "Il supermercato chiude tra quindici minuti."],
            3,
            "\"Chiude tra quindici minuti\": it closes in fifteen minutes. \"Apre\" would mean it opens.",
          ),
        ],
        `${AUDIO_NOTE} Listen to each short recording and choose the right answer.`,
      ),
      listen(
        2,
        "Ascolta il dialogo tra Chiara e il nuovo vicino. Scegli la risposta giusta.",
        [
          rec("Dialogo", [
            "F: Ciao! Sei il nuovo vicino del terzo piano?",
            "M: Sì, ciao! Mi chiamo Daniel. Sono inglese, di Manchester.",
            "F: Piacere, io sono Chiara. Abiti qui da solo?",
            "M: No, con mia sorella. Lei studia all'università. Io lavoro in un ristorante in centro.",
            "F: Ah, che bello! Sei cuoco?",
            "M: No, sono cameriere. Lavoro la sera, dalle sette a mezzanotte.",
            "F: Io invece lavoro in farmacia, qui vicino, in via Garibaldi. Se hai bisogno, chiedi pure!",
            "M: Grazie, sei molto gentile.",
          ]),
        ],
        [
          q(5, "Daniel è…", ["italiano", "americano", "inglese"], 3, "\"Sono inglese, di Manchester\": he is English."),
          q(6, "Daniel abita con…", ["sua sorella", "un amico", "sua madre"], 1, "\"No, con mia sorella\": he lives with his sister, who is a university student."),
          q(7, "Che lavoro fa Daniel?", ["Il cameriere", "Il cuoco", "Il farmacista"], 1, "Chiara asks \"Sei cuoco?\" and he answers \"No, sono cameriere\": he's a waiter."),
          q(8, "Quando lavora Daniel?", ["La mattina", "Il pomeriggio", "La sera"], 3, "\"Lavoro la sera, dalle sette a mezzanotte\": in the evening, from seven to midnight."),
          q(9, "Dove lavora Chiara?", ["In un ristorante", "In una farmacia", "All'università"], 2, "\"Io invece lavoro in farmacia\": Chiara works at a chemist's near home."),
        ],
        `${AUDIO_NOTE} Chiara meets her new neighbour. Choose the right answer.`,
      ),
    ],
    lettura: [
      read(
        1,
        "Leggi gli annunci. Per ogni persona scegli l'annuncio giusto. Attenzione: c'è un annuncio in più.",
        [
          { label: "A", title: "Lezioni di chitarra", body: "Insegnante con esperienza dà lezioni di chitarra a bambini e adulti. Il martedì e il giovedì pomeriggio. Telefonare al 333 4521876." },
          { label: "B", title: "Affittasi monolocale", body: "Piccolo appartamento in centro, vicino alla stazione. 450 euro al mese. Ideale per studenti." },
          { label: "C", title: "Vendo bicicletta", body: "Bicicletta da donna, rossa, quasi nuova. 80 euro. Telefonare dopo le 18:00 al 347 1190523." },
          { label: "D", title: "Corso di italiano per stranieri", body: "Corso gratuito il sabato mattina, dalle 9:00 alle 12:00, alla biblioteca comunale. Iscrizioni in biblioteca." },
          { label: "E", title: "Cercasi baby-sitter", body: "Famiglia con due bambini cerca ragazza o ragazzo per il pomeriggio, dal lunedì al venerdì, dalle 14:00 alle 18:00." },
        ],
        [
          match(1, "Sarah è americana. Lavora dal lunedì al venerdì e vuole imparare l'italiano.", ADS, "D", "The Italian course is on \"sabato mattina\", when Sarah doesn't work, and it's \"gratuito\" (free)."),
          match(2, "Luca è uno studente e cerca una casa vicino alla stazione.", ADS, "B", "A \"monolocale\" is a one-room flat; this one is \"vicino alla stazione\" and \"ideale per studenti\"."),
          match(3, "Paola vuole andare al lavoro in bici.", ADS, "C", "\"Bici\" is short for \"bicicletta\": ad C sells one."),
          match(4, "Andrea ha diciannove anni e cerca un lavoro il pomeriggio.", ADS, "E", "The family needs a baby-sitter \"per il pomeriggio\". Ad A is for guitar lessons, not a job."),
        ],
        "Read the ads and choose the right one for each person. One ad is not needed.",
        "select",
      ),
      read(
        2,
        "Leggi l'email di Francesca. Le frasi sono vere o false?",
        [
          {
            title: "Ciao da Torino!",
            body: paras(
              "Cara Emma,",
              "come stai? Io sto bene. Da un mese abito a Torino, perché lavoro in una scuola: sono insegnante di inglese. La città è bella e non è troppo grande. Il mio appartamento è piccolo ma luminoso e ha un balcone con tante piante.",
              "La mattina vado a scuola in tram. Il viaggio dura venti minuti. Il pomeriggio sono libera e faccio lunghe passeggiate lungo il Po. Il fine settimana visito i musei: il mio preferito è il Museo Egizio.",
              "Quando vieni a trovarmi? A maggio ho una settimana di vacanza.",
              "Un abbraccio,\nFrancesca",
            ),
          },
        ],
        [
          vf(5, "Francesca abita a Torino da un anno.", false, "\"Da un mese abito a Torino\": for a month, not a year."),
          vf(6, "Francesca fa l'insegnante.", true, "\"Sono insegnante di inglese\": she teaches English."),
          vf(7, "L'appartamento di Francesca è grande.", false, "\"Il mio appartamento è piccolo ma luminoso\": small but bright."),
          vf(8, "Francesca va a scuola in tram.", true, "\"La mattina vado a scuola in tram\"."),
          vf(9, "Il pomeriggio Francesca lavora.", false, "\"Il pomeriggio sono libera\": in the afternoon she's free and goes for walks."),
          vf(10, "Francesca ha una settimana di vacanza a maggio.", true, "\"A maggio ho una settimana di vacanza\"."),
        ],
        "Read Francesca's e-mail. Are the sentences true (\"Vero\") or false (\"Falso\")?",
      ),
    ],
    strutture: [
      read(
        1,
        "Leggi il testo e scegli la parola giusta per ogni spazio.",
        [
          {
            title: "La mia famiglia",
            body: "Mi chiamo Marco e (1) ______ di Napoli. Ho trent'anni e lavoro in (2) ______ banca. Ho (3) ______ sorella, Lucia, e due fratelli. Lucia (4) ______ medico e abita a Roma. I miei fratelli sono (5) ______: vanno ancora a scuola. Il sabato (6) ______ a calcio con loro.",
          },
        ],
        [
          gap(1, ["sono", "ho", "è"], 1, "\"Sono di Napoli\": \"essere di\" says where you're from, and \"io\" takes \"sono\"."),
          gap(2, ["un", "una", "uno"], 2, "\"Banca\" is feminine, so it takes \"una\"."),
          gap(3, ["una", "un", "uno"], 1, "\"Sorella\" is feminine: \"una sorella\"."),
          gap(4, ["fa", "è", "ha"], 2, "\"Lucia è medico\": with a job and no article, use \"essere\". With \"fare\" you need the article: \"fa il medico\"."),
          gap(5, ["piccoli", "piccole", "piccolo"], 1, "\"Fratelli\" is masculine plural, so the adjective is \"piccoli\"."),
          gap(6, ["gioco", "giochi", "gioca"], 1, "The subject is \"io\" (I play with them): \"gioco\". \"Giocare a calcio\" is to play football."),
        ],
        "Read the text and choose the right word for each gap.",
      ),
      read(
        2,
        "Scegli la forma giusta per completare la frase.",
        [],
        [
          q(7, "Domani ______ al mare con i miei amici.", ["vado", "vai", "va"], 1, "\"Io vado\": the irregular verb \"andare\" with \"i miei amici\" telling you the speaker is \"io\"."),
          q(8, "Scusi, ______ è il bagno?", ["come", "dove", "quando"], 2, "\"Dove\" asks where: \"Dov'è il bagno?\" is also common."),
          q(9, "Il museo è aperto ______ lunedì al venerdì.", ["del", "nel", "dal"], 3, "\"Dal… al…\" means from… to…: \"dal lunedì al venerdì\"."),
          q(10, "Questi libri sono ______.", ["mio", "mie", "miei"], 3, "\"Libri\" is masculine plural: \"miei\"."),
          q(11, "A che ora ______ la lezione?", ["comincia", "comincio", "cominciamo"], 1, "The subject is \"la lezione\" (it): \"comincia\"."),
          q(12, "Noi ______ in un bar vicino all'università.", ["mangiate", "mangiamo", "mangiano"], 2, "\"Noi\" takes the \"-iamo\" ending: \"mangiamo\"."),
          q(13, "Mia madre ______ molto bene l'inglese.", ["parlo", "parli", "parla"], 3, "\"Mia madre\" is \"lei\": \"parla\"."),
          q(14, "Vorrei ______ acqua minerale, per favore.", ["uno", "un'", "un"], 2, "\"Acqua\" is feminine and starts with a vowel, so \"una\" becomes \"un'\": \"un'acqua\"."),
        ],
        "Choose the right form to complete each sentence.",
      ),
    ],
    scritta: [
      write(
        1,
        "Scrivi un messaggio (da 20 a 40 parole).",
        {
          prompt:
            "Sei in Italia per un corso di lingua. Scrivi un messaggio a un amico italiano: racconta dove sei, com'è la città e che cosa fai la sera.",
          words: [20, 40],
          rubric: [
            "\"Adeguatezza\": a short, friendly message to a friend that says where you are, what the town is like and what you do in the evening",
            "\"Coerenza e coesione\": a greeting, the three points in order linked with \"e\" and \"ma\", a closing (\"A presto!\")",
            "\"Competenza grammaticale\": present-tense verbs (\"sono\", \"è\", \"mangio\"), adjectives that agree (\"la città è piccola\")",
            "\"Competenza lessicale\": simple words for places and evening activities (\"piazza\", \"centro\", \"cena\", \"passeggiare\")",
          ],
          modelAnswer:
            "Ciao Luca! Sono a Siena per un corso di italiano. La città è piccola ma bellissima, con tante chiese e piazze. La sera mangio la pizza con i miei compagni di corso e passeggio in centro. A presto! Emma",
        },
        "Write a message of 20 to 40 words to an Italian friend: where you are, what the town is like, what you do in the evening.",
      ),
      write(
        2,
        "Leggi l'email di Giulia e rispondi (da 30 a 50 parole).",
        {
          prompt:
            "La tua amica Giulia ti invita a cena. Rispondi alla sua email: ringrazia, di' se puoi andare e chiedi il suo indirizzo.",
          input: {
            title: "Email di Giulia",
            body: "Ciao! Sabato sera faccio una cena a casa mia con alcuni amici. Vieni anche tu? Ceniamo alle otto.\nUn bacio,\nGiulia",
          },
          words: [30, 50],
          rubric: [
            "\"Adeguatezza\": a reply to Giulia that thanks her, says whether you can come on Saturday and asks for her address",
            "\"Coerenza e coesione\": \"Cara Giulia\", the three points in a sensible order, a friendly sign-off (\"Un abbraccio\", \"A sabato!\")",
            "\"Competenza grammaticale\": the present tense (\"vengo\", \"posso\"), a question with \"qual è\" or \"dove\", \"tu\" kept throughout",
            "\"Competenza lessicale\": \"grazie per l'invito\", \"volentieri\", \"indirizzo\", \"portare\"",
          ],
          modelAnswer:
            "Cara Giulia, grazie per l'invito! Sabato sera sono libera e vengo volentieri alla cena. Porto io il dolce, va bene? Ma qual è il tuo indirizzo? Non ricordo il numero della via. A sabato! Un abbraccio, Emma",
        },
        "Giulia invites you to dinner. Reply in 30 to 50 words: thank her, say if you can come, and ask for her address.",
      ),
    ],
    orale: [
      speak(
        1,
        "Dialogo con l'esaminatore. Presentati e rispondi alle domande.",
        {
          prompt: "Parla di te: come ti chiami, di dove sei, dove abiti, che cosa fai.",
          points: ["Nome, nazionalità e città", "Lavoro o studio", "Famiglia", "Tempo libero"],
          examinerQuestions: [
            "Come ti chiami?",
            "Di dove sei?",
            "Dove abiti adesso?",
            "Che lavoro fai?",
            "Hai fratelli o sorelle?",
            "Che cosa fai nel tempo libero?",
          ],
          prepMinutes: 0,
          speakMinutes: 5,
          modelAnswer: paras(
            "– Come ti chiami?",
            "– Mi chiamo Emma. Sono irlandese, di Dublino.",
            "– Dove abiti adesso?",
            "– Adesso abito a Siena, in un piccolo appartamento in centro, con una ragazza spagnola.",
            "– Che lavoro fai?",
            "– Sono infermiera, ma adesso studio italiano. Il corso è ogni mattina, dalle nove all'una.",
            "– Hai fratelli o sorelle?",
            "– Sì, ho un fratello. Si chiama Liam e ha venticinque anni. Lavora in un negozio a Dublino.",
            "– Che cosa fai nel tempo libero?",
            "– Mi piace molto camminare e cucinare. Il fine settimana visito le città vicine, per esempio Firenze.",
          ),
        },
        DIALOGUE_NOTE,
      ),
      speak(
        2,
        "Guarda la foto e descrivila. Poi rispondi alle domande dell'esaminatore.",
        {
          prompt: "Descrivi la foto: chi sono le persone, dove sono, che cosa fanno.",
          material: [
            {
              label: "Foto",
              title: "Al mercato",
              body: "Immagine: un mercato all'aperto in una piazza. Una donna anziana compra pomodori e frutta. Un uomo con il grembiule è dietro il banco. Accanto c'è un ragazzo con una bicicletta. È mattina e c'è il sole.",
            },
          ],
          points: ["Dove sono le persone", "Chi sono e che cosa fanno", "Il tempo", "Tu vai al mercato?"],
          examinerQuestions: ["Dove sono queste persone?", "Che cosa compra la signora?", "Che tempo fa?", "Tu dove fai la spesa?"],
          prepMinutes: 2,
          speakMinutes: 3,
          modelAnswer: paras(
            "Nella foto c'è un mercato all'aperto, in una piazza. È mattina e c'è il sole.",
            "C'è una signora anziana: compra pomodori e frutta. Dietro il banco c'è un uomo con il grembiule: è il venditore. Accanto c'è un ragazzo con una bicicletta. Forse aspetta la nonna.",
            "Io faccio la spesa al supermercato, perché è vicino a casa mia. Ma il sabato mattina vado al mercato: la frutta è buona e non è cara.",
          ),
        },
        `${PHOTO_NOTE} ${MONOLOGUE_NOTE}`,
      ),
    ],
  },
);
