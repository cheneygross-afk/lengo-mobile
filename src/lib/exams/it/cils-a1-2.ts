// Synced from cheneygross-afk/lengo:src/lib/exams/it/cils-a1-2.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exam } from "../types";
import { AUDIO_NOTE, DIALOGUE_NOTE, cilsExam, gap, listen, match, paras, q, read, rec, speak, vf, write } from "./text";

// CILS A1 (Beginner) practice exam 2: shops, weekends and daily routines.
// The five sections of the real CILS A1, with tasks at A1: a shop, the
// weather forecast, a doctor's appointment, a station announcement and a
// weekend plan; notices and a student's day; a postcard and short
// sentences; a message and a description of your day; a conversation
// about your town and ordering at the bar.
const NOTICES = ["A. Biblioteca comunale", "B. Palestra Forma", "C. Pizzeria Da Gino", "D. Farmacia Centrale", "E. Negozio di elettronica"];

export const CILS_A1_2: Exam = cilsExam(
  {
    slug: "cils-a1-2",
    level: "A1",
    title: "CILS A1 (Beginner) practice exam 2",
    description:
      "A second full CILS A1 practice exam: a clothes shop, the weather forecast, a doctor's appointment, a change of platform and a weekend at the lake; notices around town and a student's day in Bologna; a postcard from Venice; a message to a classmate and your daily routine; ordering at the bar.",
  },
  {
    ascolto: [
      listen(
        1,
        "Ascolta i dialoghi e gli annunci. Per ognuno scegli la risposta giusta.",
        [
          rec("Dialogo 1", [
            "F: Buongiorno, posso provare questa maglietta?",
            "M: Certo. Che taglia porta?",
            "F: La media, grazie. E quanto costa?",
            "M: Diciannove euro. I camerini sono lì, a destra.",
          ]),
          rec("Meteo", ["Ed ecco il meteo per domani. Al Nord pioggia e temperature basse. Al Centro e al Sud sole e caldo, con temperature fino a ventotto gradi."], "m"),
          rec("Dialogo 2", [
            "F: Studio medico Bianchi, buongiorno.",
            "M: Buongiorno, sono Paolo Conti. Vorrei un appuntamento con il dottore.",
            "F: Va bene giovedì alle quattro e mezza?",
            "M: Sì, perfetto. Grazie.",
          ]),
          rec("Annuncio in stazione", ["Attenzione: il treno regionale per Firenze delle ore nove e venti parte dal binario tre invece che dal binario sette."]),
        ],
        [
          q(1, "Dialogo 1. Quanto costa la maglietta?", ["9 euro", "90 euro", "19 euro"], 3, "\"Diciannove euro\" is nineteen euros. \"Nove\" is nine and \"novanta\" ninety."),
          q(2, "Meteo. Che tempo fa domani al Sud?", ["Piove.", "C'è il sole.", "Nevica."], 2, "\"Al Centro e al Sud sole e caldo\": sunny and hot. The rain (\"pioggia\") is in the North."),
          q(3, "Dialogo 2. Quando è l'appuntamento?", ["Giovedì alle 16:30", "Martedì alle 16:30", "Giovedì alle 14:30"], 1, "\"Giovedì alle quattro e mezza\": Thursday at half past four in the afternoon, 16:30."),
          q(4, "Annuncio. Da quale binario parte il treno per Firenze?", ["Dal binario 7", "Dal binario 9", "Dal binario 3"], 3, "\"Parte dal binario tre invece che dal binario sette\": from platform 3 instead of 7. Nine (\"nove\") is the hour."),
        ],
        `${AUDIO_NOTE} Listen to each short recording and choose the right answer.`,
      ),
      listen(
        2,
        "Ascolta il dialogo tra Sara e Matteo. Scegli la risposta giusta.",
        [
          rec("Dialogo", [
            "M: Sara, che cosa fai questo fine settimana?",
            "F: Sabato mattina lavoro, ma il pomeriggio sono libera. Perché?",
            "M: Io e Luca andiamo al lago in macchina. Vieni con noi?",
            "F: Che bello! Sì, vengo volentieri. A che ora partite?",
            "M: Alle due. Ti passiamo a prendere sotto casa.",
            "F: Perfetto. Porto qualcosa da mangiare?",
            "M: Sì, porta tu i panini. Io porto le bibite.",
            "F: E torniamo sabato sera?",
            "M: No, dormiamo da mia zia: ha una casa sul lago. Torniamo domenica sera.",
          ]),
        ],
        [
          q(5, "Sabato mattina Sara…", ["lavora", "è libera", "va al lago"], 1, "\"Sabato mattina lavoro, ma il pomeriggio sono libera\": she works in the morning."),
          q(6, "Come vanno al lago?", ["In treno", "In macchina", "In autobus"], 2, "\"Andiamo al lago in macchina\": by car."),
          q(7, "A che ora partono?", ["Alle tre", "All'una", "Alle due"], 3, "\"Alle due\": at two. \"Ti passiamo a prendere\" means 'we'll come and pick you up'."),
          q(8, "Che cosa porta Sara?", ["Le bibite", "I panini", "Il dolce"], 2, "\"Porta tu i panini. Io porto le bibite\": Sara brings the sandwiches, Matteo the drinks."),
          q(9, "Dove dormono sabato sera?", ["In albergo", "A casa di Sara", "Dalla zia di Matteo"], 3, "\"Dormiamo da mia zia\": \"da\" + a person means at that person's home."),
        ],
        `${AUDIO_NOTE} Matteo invites Sara for the weekend. Choose the right answer.`,
      ),
    ],
    lettura: [
      read(
        1,
        "Leggi gli avvisi. Per ogni persona scegli l'avviso giusto. Attenzione: c'è un avviso in più.",
        [
          { label: "A", title: "Biblioteca comunale", body: "Orario: dal lunedì al venerdì, 9:00-19:00. Il sabato solo la mattina. Prestito dei libri gratuito con la tessera." },
          { label: "B", title: "Palestra Forma", body: "Nuovi corsi di yoga e di nuoto per tutti. Il primo mese costa solo 30 euro!" },
          { label: "C", title: "Pizzeria Da Gino", body: "Pizza a domicilio tutte le sere dalle 19:00 alle 23:00. Chiuso il lunedì." },
          { label: "D", title: "Farmacia Centrale", body: "Questa settimana siamo aperti anche la domenica e di notte." },
          { label: "E", title: "Negozio di elettronica", body: "Saldi! Telefoni e computer con lo sconto del 20%." },
        ],
        [
          match(1, "Domenica sera Marta ha mal di testa e cerca una medicina.", NOTICES, "D", "The chemist's (\"farmacia\") is open \"anche la domenica e di notte\"."),
          match(2, "Giorgio vuole leggere un libro, ma non vuole comprarlo.", NOTICES, "A", "At the library you borrow books for free: \"prestito dei libri gratuito\"."),
          match(3, "Elena vuole fare sport.", NOTICES, "B", "A \"palestra\" is a gym, with yoga and swimming classes."),
          match(4, "Stasera Pietro è stanco e vuole mangiare a casa.", NOTICES, "C", "\"Pizza a domicilio\" is pizza delivered to your home."),
        ],
        "Read the notices and choose the right one for each person. One notice is not needed.",
        "select",
      ),
      read(
        2,
        "Leggi il testo. Le frasi sono vere o false?",
        [
          {
            title: "La giornata di Luca",
            body: paras(
              "Luca ha ventidue anni e studia ingegneria all'università di Bologna. Abita in un appartamento con altri tre studenti, vicino alla stazione.",
              "La mattina si alza alle sette e fa colazione al bar sotto casa: prende sempre un caffè e una brioche. Poi va all'università in bicicletta. Le lezioni cominciano alle nove e finiscono all'una. Luca pranza alla mensa con i compagni di corso, perché è economica. Il pomeriggio studia in biblioteca.",
              "La sera, due volte alla settimana, lavora in una pizzeria: così paga l'affitto. Il fine settimana torna a casa dai genitori, a Modena, in treno.",
            ),
          },
        ],
        [
          vf(5, "Luca abita da solo.", false, "He lives \"con altri tre studenti\": with three other students."),
          vf(6, "Luca fa colazione al bar.", true, "\"Fa colazione al bar sotto casa\": at the bar downstairs."),
          vf(7, "Luca va all'università in autobus.", false, "He goes \"in bicicletta\": by bike."),
          vf(8, "Luca mangia alla mensa perché costa poco.", true, "\"Perché è economica\": because it's cheap, which is what \"costa poco\" means."),
          vf(9, "Luca lavora tutte le sere.", false, "Only \"due volte alla settimana\": twice a week."),
          vf(10, "Il fine settimana Luca va a Modena.", true, "\"Il fine settimana torna a casa dai genitori, a Modena\"."),
        ],
        "Read the text. Are the sentences true (\"Vero\") or false (\"Falso\")?",
      ),
    ],
    strutture: [
      read(
        1,
        "Leggi la cartolina e scegli la parola giusta per ogni spazio.",
        [
          {
            title: "Una cartolina da Venezia",
            body: paras(
              "Cara Anna,",
              "(1) ______ a Venezia con mia madre. La città è (2) ______ bella! Il nostro albergo è vicino (3) ______ stazione. Oggi (4) ______ un giro in gondola: è caro, ma è un'esperienza unica. Domani visitiamo (5) ______ isole di Murano e Burano. Torniamo a casa sabato, (6) ______ treno.",
              "Baci,\nSilvia",
            ),
          },
        ],
        [
          gap(1, ["abbiamo", "siamo", "avete"], 2, "\"Siamo a Venezia\": \"essere\" says where you are. The plural matches \"io e mia madre\"."),
          gap(2, ["molti", "molta", "molto"], 3, "Before an adjective, \"molto\" means very and never changes: \"molto bella\"."),
          gap(3, ["a", "al", "alla"], 3, "\"Vicino a\" + \"la stazione\" becomes \"vicino alla stazione\"."),
          gap(4, ["fanno", "facciamo", "fate"], 2, "The subject is \"noi\" (Silvia and her mother): \"facciamo un giro\", we take a ride."),
          gap(5, ["le", "gli", "i"], 1, "\"Isole\" is feminine plural: \"le isole\"."),
          gap(6, ["con", "a", "in"], 3, "Transport takes \"in\": \"in treno\", \"in macchina\", \"in aereo\"."),
        ],
        "Read the postcard and choose the right word for each gap.",
      ),
      read(
        2,
        "Scegli la forma giusta per completare la frase.",
        [],
        [
          q(7, "Io ______ un fratello e una sorella.", ["ho", "sono", "ha"], 1, "To have brothers and sisters is \"avere\": \"io ho\"."),
          q(8, "Ragazzi, a che ora ______ a casa stasera?", ["tornano", "tornate", "torniamo"], 2, "\"Ragazzi\" means you're talking to several people: \"voi tornate\"."),
          q(9, "Questo gelato è ______ te.", ["di", "da", "per"], 3, "\"Per te\": for you."),
          q(10, "Mio padre ______ in ufficio dalle otto alle cinque.", ["lavora", "lavori", "lavorano"], 1, "\"Mio padre\" is \"lui\": \"lavora\"."),
          q(11, "Ci sono tre ______ nella mia classe.", ["studente", "studenti", "studentessa"], 2, "After \"tre\" you need a plural: \"studenti\"."),
          q(12, "Quanti anni ______ tuo nonno?", ["è", "fa", "ha"], 3, "Age uses \"avere\" in Italian: \"Quanti anni ha?\", how old is he? (literally, how many years does he have?)"),
          q(13, "Ti piace ______ cinema italiano?", ["la", "il", "lo"], 2, "\"Cinema\" is masculine, starting with a plain consonant: \"il cinema\"."),
          q(14, "Sono le otto: ______ colazione e poi esco.", ["fai", "faccio", "fa"], 2, "\"Esco\" shows the subject is \"io\": \"faccio colazione\"."),
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
            "Non stai bene e domani non puoi andare alla lezione di italiano. Scrivi un messaggio al tuo compagno di corso Paolo: di' come stai, che domani non vai a lezione e chiedi i compiti.",
          words: [20, 40],
          rubric: [
            "\"Adeguatezza\": a short message to a classmate that says you're ill, that you're missing tomorrow's class and asks for the homework",
            "\"Coerenza e coesione\": a greeting, the three points in order, thanks and a sign-off",
            "\"Competenza grammaticale\": the present tense (\"sto\", \"ho\", \"vengo\"), \"non\" before the verb, a polite question",
            "\"Competenza lessicale\": \"stare male\", \"la febbre\", \"il mal di gola\", \"i compiti\", \"per favore\", \"grazie mille\"",
          ],
          modelAnswer:
            "Ciao Paolo, sono Kate. Oggi non sto bene: ho la febbre e il mal di gola. Domani non vengo a lezione. Mi scrivi i compiti per lunedì, per favore? Grazie mille! A presto, Kate",
        },
        "Write a message of 20 to 40 words to your classmate Paolo: you're ill, you'll miss tomorrow's class, and you'd like the homework.",
      ),
      write(
        2,
        "Scrivi un testo (da 30 a 50 parole).",
        {
          prompt: "Descrivi la tua giornata tipica: a che ora ti alzi, che cosa fai la mattina, il pomeriggio e la sera.",
          words: [30, 50],
          rubric: [
            "\"Adeguatezza\": describes a normal day with the times and the morning, afternoon and evening",
            "\"Coerenza e coesione\": the day in order, linked with \"poi\", \"e\", \"ma\"",
            "\"Competenza grammaticale\": present-tense verbs, including \"mi alzo\" and other daily-routine verbs, times with \"alle\"",
            "\"Competenza lessicale\": daily routine words (\"fare colazione\", \"pranzare\", \"cenare\", \"andare a letto\")",
          ],
          modelAnswer:
            "Mi alzo alle sette e faccio colazione con un caffè e una fetta di pane. Alle otto vado in ufficio in autobus e lavoro fino alle cinque. Poi vado in palestra o faccio la spesa. La sera ceno con mio marito, guardiamo un film e andiamo a letto alle undici.",
        },
        "Write 30 to 50 words about your normal day: when you get up and what you do in the morning, afternoon and evening.",
      ),
    ],
    orale: [
      speak(
        1,
        "Dialogo con l'esaminatore. Parla della tua città e della tua casa.",
        {
          prompt: "Rispondi alle domande sulla tua città e sulla tua casa.",
          points: ["Dove abiti", "Com'è la tua città", "La tua casa: le stanze", "Che cosa c'è vicino a casa tua"],
          examinerQuestions: [
            "Dove abiti?",
            "Com'è la tua città? È grande o piccola?",
            "Abiti in una casa o in un appartamento?",
            "Quante stanze ci sono?",
            "Che cosa c'è vicino a casa tua?",
            "Ti piace la tua città? Perché?",
          ],
          prepMinutes: 0,
          speakMinutes: 5,
          modelAnswer: paras(
            "– Dove abiti?",
            "– Abito a Leeds, nel nord dell'Inghilterra.",
            "– Com'è la tua città? È grande o piccola?",
            "– È abbastanza grande. C'è un'università molto famosa e ci sono tanti studenti. Il centro è vivace, con molti negozi e locali.",
            "– Abiti in una casa o in un appartamento?",
            "– In un appartamento al secondo piano. Ci sono due camere, un soggiorno, la cucina e il bagno.",
            "– Che cosa c'è vicino a casa tua?",
            "– C'è un parco, un supermercato e la fermata dell'autobus. Anche la stazione non è lontana.",
            "– Ti piace la tua città? Perché?",
            "– Sì, mi piace molto, perché è viva e la gente è simpatica. Ma piove spesso!",
          ),
        },
        DIALOGUE_NOTE,
      ),
      speak(
        2,
        "Leggi la situazione. Tu sei il cliente, l'esaminatore è il barista.",
        {
          prompt: "Sei in un bar. Ordina qualcosa da bere e da mangiare, chiedi il prezzo e paga.",
          material: [
            {
              label: "Situazione",
              title: "Al bar",
              body: "Sono le dieci di mattina. Sei in un bar del centro con un amico. Volete due cose da bere e una cosa da mangiare. Il tuo amico non beve caffè.",
            },
          ],
          points: ["Saluta", "Ordina per te e per il tuo amico", "Chiedi quanto costa", "Paga e saluta"],
          examinerQuestions: ["Buongiorno, desidera?", "E per il suo amico?", "Qualcosa da mangiare?", "Altro?", "Sono sei euro e cinquanta."],
          prepMinutes: 2,
          speakMinutes: 3,
          modelAnswer: paras(
            "– Buongiorno, desidera?",
            "– Buongiorno! Per me un cappuccino, per favore.",
            "– E per il suo amico?",
            "– Lui non beve caffè. Ha una spremuta d'arancia?",
            "– Certo. Qualcosa da mangiare?",
            "– Sì, un cornetto alla crema, grazie.",
            "– Altro?",
            "– No, basta così. Possiamo sederci a quel tavolo? Quanto pago?",
            "– Sono sei euro e cinquanta.",
            "– Ecco a Lei. Grazie, arrivederci!",
          ),
        },
        `In this role play the examiner is the barman: tap the examiner's lines to hear them and answer out loud. Use the preparation time to plan what you'll say.`,
      ),
    ],
  },
);
