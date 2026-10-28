// Synced from cheneygross-afk/lengo:src/lib/exams/it/cils-a2-1.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exam } from "../types";
import { AUDIO_NOTE, DIALOGUE_NOTE, MONOLOGUE_NOTE, PHOTO_NOTE, cilsExam, gap, listen, paras, q, read, rec, speak, vf, write } from "./text";

// CILS A2 (Elementary) practice exam 1: holidays, a new job and getting
// around. The five sections of the real CILS A2, with tasks at A2: a
// voicemail, a shop, a town festival and a hotel, then a colleague's
// holiday in Sicily; a bike-sharing service and an e-mail about a new
// job; the passato prossimo, pronouns and prepositions; an e-mail about
// a holiday and a formal enquiry; a conversation about work and free
// time, and a photo to describe.
export const CILS_A2_1: Exam = cilsExam(
  {
    slug: "cils-a2-1",
    level: "A2",
    title: "CILS A2 (Elementary) practice exam 1",
    description:
      "A full CILS A2 practice exam: a voicemail, changing shoes, a town festival, checking into a hotel and a holiday in Sicily; electric bike sharing in Padua and an e-mail about a new job in Milan; the passato prossimo, pronouns and prepositions; an e-mail about your holiday and an enquiry about a cooking course; a conversation and a photo.",
  },
  {
    ascolto: [
      listen(
        1,
        "Ascolta i messaggi e i dialoghi. Per ognuno scegli la risposta giusta.",
        [
          rec("Messaggio in segreteria", [
            "Ciao Anna, sono Roberta. Ti chiamo per dirti che stasera non posso venire alla festa di Marco, perché mio figlio ha la febbre. Puoi dirlo tu a Marco? Ti richiamo domani. Ciao!",
          ]),
          rec("Dialogo 1", [
            "M: Buongiorno. Ho comprato queste scarpe sabato, ma sono troppo piccole. Posso cambiarle?",
            "F: Ha lo scontrino?",
            "M: Sì, eccolo.",
            "F: Allora nessun problema. Che numero vuole?",
            "M: Il quarantatré, grazie.",
          ]),
          rec("Annuncio alla radio", [
            "Domenica prossima, in piazza Garibaldi, torna la Festa d'autunno: castagne, vino nuovo, musica dal vivo e giochi per i bambini. Si comincia alle dieci di mattina. L'ingresso è gratuito, ma per il pranzo in piazza bisogna prenotare entro venerdì.",
          ], "m"),
          rec("Dialogo 2", [
            "F: Buonasera, ho prenotato una camera doppia per tre notti. Mi chiamo Ferrara.",
            "M: Sì, signora Ferrara. Camera duecentoquattordici, al secondo piano. La colazione è dalle sette alle dieci, nella sala al piano terra.",
            "F: C'è il wi-fi?",
            "M: Sì, la password è scritta sulla chiave.",
          ]),
        ],
        [
          q(1, "Messaggio. Perché Roberta non va alla festa?", ["Perché lavora.", "Perché suo figlio sta male.", "Perché è stanca."], 2, "\"Mio figlio ha la febbre\": her son has a temperature."),
          q(
            2,
            "Dialogo 1. Che cosa vuole fare il cliente?",
            ["Avere indietro i soldi.", "Comprare un altro paio di scarpe.", "Cambiare le scarpe con un numero più grande."],
            3,
            "The shoes are \"troppo piccole\", so he asks \"Posso cambiarle?\" and wants a bigger size, the 43.",
          ),
          q(3, "Annuncio. Che cosa bisogna fare per il pranzo in piazza?", ["Prenotare entro venerdì.", "Pagare l'ingresso.", "Arrivare alle dieci."], 1, "\"Per il pranzo in piazza bisogna prenotare entro venerdì\": book by Friday. The entrance is free (\"gratuito\")."),
          q(4, "Dialogo 2. Dove si fa la colazione?", ["Al secondo piano", "Al piano terra", "In camera"], 2, "\"Nella sala al piano terra\": on the ground floor. The room is on the second floor."),
        ],
        `${AUDIO_NOTE} Listen to each short recording and choose the right answer.`,
      ),
      listen(
        2,
        "Ascolta la conversazione tra due colleghi, Davide e Giovanna. Scegli la risposta giusta.",
        [
          rec("Conversazione", [
            "F: Ciao Davide! Sei tornato dalle vacanze? Dove sei andato?",
            "M: Sono stato in Sicilia per due settimane, con mia moglie e i bambini.",
            "F: Che bello! Siete andati in aereo?",
            "M: No, abbiamo preso il traghetto da Napoli con la macchina. I bambini si sono divertiti moltissimo sulla nave.",
            "F: E dove avete dormito?",
            "M: La prima settimana in un agriturismo vicino a Siracusa, la seconda in un appartamento al mare, a Cefalù.",
            "F: E il tempo?",
            "M: Quasi sempre bello: ha piovuto solo un giorno. E abbiamo mangiato benissimo! E tu, Giovanna? Sei andata da qualche parte?",
            "F: Quest'anno no, sono rimasta in città. Ho lavorato fino a Ferragosto. Ma a settembre vado a Lisbona con mia sorella.",
          ], "m"),
        ],
        [
          q(5, "Quanto tempo è stato in Sicilia Davide?", ["Un mese", "Una settimana", "Due settimane"], 3, "\"Sono stato in Sicilia per due settimane\"."),
          q(6, "Come sono andati in Sicilia?", ["In macchina e in traghetto", "In aereo", "In treno"], 1, "\"Abbiamo preso il traghetto da Napoli con la macchina\": they drove and took the ferry."),
          q(7, "Dove hanno dormito la seconda settimana?", ["In un agriturismo", "In un appartamento al mare", "In albergo"], 2, "\"La seconda in un appartamento al mare, a Cefalù\". The \"agriturismo\" was the first week."),
          q(8, "Che tempo ha fatto?", ["Ha piovuto spesso.", "Ha fatto freddo.", "È stato quasi sempre bello."], 3, "\"Quasi sempre bello: ha piovuto solo un giorno\"."),
          q(9, "Che cosa ha fatto Giovanna quest'estate?", ["È andata a Lisbona.", "È rimasta in città a lavorare.", "È andata in Sicilia."], 2, "\"Sono rimasta in città. Ho lavorato fino a Ferragosto\". Lisbon is her plan for September."),
        ],
        `${AUDIO_NOTE} Two colleagues talk about their summer. Choose the right answer.`,
      ),
    ],
    lettura: [
      read(
        1,
        "Leggi il testo e scegli la risposta giusta.",
        [
          {
            title: "Bike sharing: come funziona",
            body: paras(
              "Da questo mese anche a Padova c'è il bike sharing elettrico. In città ci sono cinquecento biciclette e ottanta stazioni, vicino alle fermate dell'autobus, all'università e all'ospedale.",
              "Per usare il servizio bisogna scaricare l'applicazione sul telefono e registrarsi con una carta di credito. Poi si cerca la bici più vicina sulla mappa e si sblocca con un codice. I primi quindici minuti sono gratuiti; dopo, ogni mezz'ora costa un euro. Gli studenti universitari pagano la metà.",
              "Alla fine bisogna lasciare la bicicletta in una stazione: chi la lascia per strada paga una multa di venti euro. Il servizio funziona tutti i giorni, dalle sei a mezzanotte.",
            ),
          },
        ],
        [
          q(
            1,
            "Dove sono le stazioni delle biciclette?",
            ["Solo in centro", "Vicino alle fermate dell'autobus, all'università e all'ospedale", "Davanti ai negozi"],
            2,
            "The first paragraph lists where the eighty stations are.",
          ),
          q(2, "Per usare il servizio bisogna…", ["scaricare un'applicazione.", "comprare un abbonamento in tabaccheria.", "avere più di diciotto anni."], 1, "\"Bisogna scaricare l'applicazione sul telefono e registrarsi\"."),
          q(3, "Quanto paga chi usa la bici per dieci minuti?", ["Un euro", "Cinquanta centesimi", "Niente"], 3, "\"I primi quindici minuti sono gratuiti\": ten minutes cost nothing."),
          q(4, "Che cosa succede a chi lascia la bici per strada?", ["Paga venti euro.", "Non può più usare il servizio.", "Paga un euro."], 1, "\"Chi la lascia per strada paga una multa di venti euro\": a fine (\"multa\") of twenty euros."),
          q(5, "Gli studenti universitari…", ["non pagano.", "pagano la metà.", "pagano di più."], 2, "\"Gli studenti universitari pagano la metà\": half price."),
        ],
        "Read the article about a bike-sharing service and choose the right answer.",
      ),
      read(
        2,
        "Leggi l'email di Marta. Le frasi sono vere o false?",
        [
          {
            title: "Novità da Milano",
            body: paras(
              "Ciao Giulia,",
              "scusa se non ti ho scritto prima, ma è stato un mese pieno di novità! Come sai, a settembre ho lasciato il lavoro in banca. Il primo ottobre ho cominciato a lavorare in una casa editrice a Milano: traduco libri dall'inglese. Il lavoro mi piace molto e i colleghi sono simpatici, anche se lo stipendio è un po' più basso.",
              "Per ora abito da mia cugina, ma la settimana scorsa ho visto un bilocale in zona Navigli: è piccolo, ma ha una bella cucina. Spero di trasferirmi a novembre.",
              "Quando vieni a Milano? Ti porto a mangiare nella trattoria vicino all'ufficio: fanno un risotto buonissimo!",
              "Un abbraccio,\nMarta",
            ),
          },
        ],
        [
          vf(6, "Marta lavora ancora in banca.", false, "\"A settembre ho lasciato il lavoro in banca\": she left the bank."),
          vf(7, "Nel nuovo lavoro Marta traduce libri.", true, "\"Traduco libri dall'inglese\" at a publishing house (\"casa editrice\")."),
          vf(8, "Marta guadagna più di prima.", false, "\"Lo stipendio è un po' più basso\": her salary is a little lower."),
          vf(9, "Adesso Marta abita con sua cugina.", true, "\"Per ora abito da mia cugina\": for now she's staying at her cousin's."),
          vf(10, "Marta ha già comprato un bilocale.", false, "She has only seen (\"ho visto\") a two-room flat and hopes to move in November."),
          vf(11, "Marta vuole portare Giulia in una trattoria.", true, "\"Ti porto a mangiare nella trattoria vicino all'ufficio\"."),
        ],
        "Read Marta's e-mail. Are the sentences true (\"Vero\") or false (\"Falso\")?",
      ),
    ],
    strutture: [
      read(
        1,
        "Leggi il testo e scegli la forma giusta per ogni spazio.",
        [
          {
            title: "Una gita a Torino",
            body: "Sabato scorso io e Paolo (1) ______ a Torino per vedere una mostra. (2) ______ partiti presto, alle sette. Il treno (3) ______ in ritardo di mezz'ora, ma (4) ______ arrivati comunque in tempo. Dopo la mostra (5) ______ pranzato in un piccolo ristorante (6) ______ centro. La sera eravamo stanchissimi, ma contenti.",
          },
        ],
        [
          gap(1, ["abbiamo andato", "siamo andati", "siamo andate"], 2, "\"Andare\" takes \"essere\", and the participle agrees: \"io e Paolo\" is a mixed group, so masculine plural \"andati\"."),
          gap(2, ["Siamo", "Abbiamo", "Sono"], 1, "\"Partire\" takes \"essere\": \"siamo partiti\". \"Sono partiti\" would mean they left."),
          gap(3, ["ha arrivato", "sono arrivato", "è arrivato"], 3, "\"Arrivare\" takes \"essere\", and \"il treno\" is singular: \"è arrivato\"."),
          gap(4, ["abbiamo", "siamo", "eravamo"], 2, "Again \"arrivare\" with \"essere\": \"siamo arrivati\"."),
          gap(5, ["avete", "siamo", "abbiamo"], 3, "\"Pranzare\" takes \"avere\": \"abbiamo pranzato\"."),
          gap(6, ["in", "del", "al"], 1, "\"In centro\" means in the town centre, with no article."),
        ],
        "Read the text and choose the right form for each gap.",
      ),
      read(
        2,
        "Scegli la forma giusta per completare la frase.",
        [],
        [
          q(7, "Hai già visto Marco? – No, ______ vedo domani.", ["lo", "gli", "la"], 1, "\"Marco\" is the direct object, masculine: \"lo vedo\"."),
          q(8, "Quando arriva tua sorella? – Arriva ______ due giorni.", ["da", "per", "fra"], 3, "\"Fra due giorni\" (or \"tra\") means in two days' time."),
          q(9, "Ho telefonato a Chiara e ______ ho detto di venire.", ["la", "le", "gli"], 2, "\"Dire a Chiara\": an indirect object, feminine, is \"le\"."),
          q(10, "Da bambino ______ sempre al parco con mio nonno.", ["sono andato", "andavo", "andrò"], 2, "A habit in the past (\"da bambino… sempre\") takes the imperfect: \"andavo\"."),
          q(11, "Abito a Roma ______ cinque anni.", ["da", "fa", "per"], 1, "Something that started in the past and still goes on: present tense + \"da\". \"Cinque anni fa\" would be five years ago."),
          q(12, "Questa borsa è ______ cara di quella.", ["molto", "tanto", "più"], 3, "A comparison with \"di\": \"più cara di quella\", more expensive than that one."),
          q(13, "L'anno prossimo ______ in Australia per sei mesi.", ["andavo", "andrò", "sono andato"], 2, "\"L'anno prossimo\" is the future: \"andrò\"."),
          q(14, "Ti piacciono gli spaghetti? – Sì, ______ piacciono molto.", ["mi", "me", "io"], 1, "With \"piacere\" the person who likes is an indirect object: \"mi piacciono\"."),
        ],
        "Choose the right form to complete each sentence.",
      ),
    ],
    scritta: [
      write(
        1,
        "Scrivi un'email (da 40 a 60 parole).",
        {
          prompt:
            "Sei appena tornato/a dalle vacanze. Scrivi un'email a un'amica italiana: racconta dove sei andato/a, con chi, dove hai dormito e che cosa hai fatto.",
          words: [40, 60],
          rubric: [
            "\"Adeguatezza\": a friendly e-mail that tells where you went, who with, where you stayed and what you did",
            "\"Coerenza e coesione\": \"Cara…\", the holiday told in order with \"prima\", \"poi\", \"ogni mattina\", \"la sera\", a question back and a sign-off",
            "\"Competenza grammaticale\": the passato prossimo with the right auxiliary and agreement (\"sono stata\", \"abbiamo dormito\", \"siamo andati\")",
            "\"Competenza lessicale\": holiday words (\"spiaggia\", \"albergo\", \"agriturismo\", \"visitare\", \"paesi\")",
          ],
          modelAnswer:
            "Cara Sofia, finalmente sono tornata dalle vacanze! Sono stata in Puglia per dieci giorni con mio fratello. Abbiamo dormito in una masseria vicino al mare. Ogni mattina siamo andati in spiaggia e la sera abbiamo visitato i paesi vicini, come Ostuni e Alberobello. Ho mangiato benissimo! E tu, dove sei andata? Un abbraccio, Hannah",
        },
        "Write an e-mail of 40 to 60 words to an Italian friend about your holiday: where, who with, where you stayed, what you did.",
      ),
      write(
        2,
        "Leggi l'annuncio e scrivi un'email alla scuola (da 35 a 50 parole).",
        {
          prompt:
            "Hai letto l'annuncio di un corso di cucina. Scrivi un'email formale alla scuola: di' che sei interessato/a, chiedi i giorni e gli orari delle lezioni, il prezzo e come puoi iscriverti.",
          input: {
            title: "Scuola di cucina Il Mattarello",
            body: "Nuovo corso di cucina italiana per principianti: pasta fresca, sughi e dolci della tradizione. Otto lezioni, a partire da marzo. Per informazioni: info@ilmattarello.it",
          },
          words: [35, 50],
          rubric: [
            "\"Adeguatezza\": a formal e-mail to the school that shows interest and asks about days and times, the price and how to sign up",
            "\"Coerenza e coesione\": \"Gentili signori\", why you're writing, the questions, thanks and \"Cordiali saluti\" with your name",
            "\"Competenza grammaticale\": \"vorrei sapere\" + a question word (\"quando\", \"quanto\", \"come\"), the formal register kept throughout",
            "\"Competenza lessicale\": \"annuncio\", \"iscriversi\", \"lezioni\", \"orario\", \"costare\"",
          ],
          modelAnswer:
            "Gentili signori, ho letto il vostro annuncio sul corso di cucina italiana e sono molto interessata. Vorrei sapere in quali giorni e a che ora sono le lezioni e quanto costa il corso. Come posso iscrivermi? Grazie per l'attenzione. Cordiali saluti, Hannah Becker",
        },
        "Read the ad and write a formal e-mail of 35 to 50 words to the school: say you're interested and ask about days, times, price and how to sign up.",
      ),
    ],
    orale: [
      speak(
        1,
        "Dialogo con l'esaminatore. Parla del tuo lavoro o dei tuoi studi e del tuo tempo libero.",
        {
          prompt: "Rispondi alle domande sul tuo lavoro o sui tuoi studi e sul tuo tempo libero.",
          points: ["Che cosa fai e dove", "Che cosa ti piace e che cosa non ti piace", "Il tuo tempo libero", "Che cosa hai fatto lo scorso fine settimana"],
          examinerQuestions: [
            "Che lavoro fai? O che cosa studi?",
            "Ti piace il tuo lavoro? Perché?",
            "Come vai al lavoro, o all'università?",
            "Che cosa fai nel tempo libero?",
            "Che cosa hai fatto lo scorso fine settimana?",
          ],
          prepMinutes: 0,
          speakMinutes: 5,
          modelAnswer: paras(
            "– Che lavoro fai?",
            "– Lavoro in un'agenzia di viaggi a Monaco di Baviera. Organizzo viaggi in Italia per gruppi di turisti tedeschi.",
            "– Ti piace il tuo lavoro? Perché?",
            "– Sì, molto, perché parlo con tante persone e a volte viaggio anch'io. Ma in primavera e in estate lavoro tantissimo.",
            "– Come vai al lavoro?",
            "– Di solito vado in metropolitana. Quando fa bel tempo, prendo la bicicletta.",
            "– Che cosa fai nel tempo libero?",
            "– Vado a correre e suono il pianoforte. Il sabato sera esco con gli amici.",
            "– Che cosa hai fatto lo scorso fine settimana?",
            "– Sabato sono andata in montagna con mia sorella: abbiamo camminato tutto il giorno. Domenica invece sono rimasta a casa e ho cucinato le lasagne per i miei genitori.",
          ),
        },
        DIALOGUE_NOTE,
      ),
      speak(
        2,
        "Guarda la foto e descrivila. Poi racconta un tuo viaggio.",
        {
          prompt: "Descrivi la foto e racconta un viaggio che hai fatto.",
          material: [
            {
              label: "Foto",
              title: "In partenza",
              body: "Immagine: una stazione ferroviaria piena di gente. Una famiglia con due bambini guarda il tabellone delle partenze. Il padre ha due valigie, la madre ha i biglietti in mano. Un bambino ha uno zaino rosso e mangia un panino.",
            },
          ],
          points: ["Dove sono e chi sono le persone", "Che cosa fanno e dove vanno, secondo te", "Un viaggio che hai fatto: dove, quando, con chi", "Che cosa ti è piaciuto"],
          examinerQuestions: ["Che cosa vedi nella foto?", "Secondo te, dove va questa famiglia?", "Tu come preferisci viaggiare?", "Raccontami un viaggio che hai fatto."],
          prepMinutes: 2,
          speakMinutes: 3,
          modelAnswer: paras(
            "Nella foto c'è una stazione con tanta gente. Una famiglia guarda il tabellone delle partenze: forse cercano il binario del loro treno. Il padre porta due valigie e la madre ha i biglietti in mano. Un bambino ha uno zaino rosso e mangia un panino. Secondo me vanno in vacanza al mare, perché è estate.",
            "Anche io preferisco viaggiare in treno: è comodo e puoi guardare il paesaggio. L'anno scorso sono andata da Milano a Napoli con il Frecciarossa con due amiche. Il viaggio è durato quattro ore e mezza. A Napoli abbiamo visitato il centro storico e abbiamo mangiato la pizza più buona della mia vita. Mi è piaciuto tutto!",
          ),
        },
        `${PHOTO_NOTE} ${MONOLOGUE_NOTE}`,
      ),
    ],
  },
);
