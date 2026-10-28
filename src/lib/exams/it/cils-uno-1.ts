// Synced from cheneygross-afk/lengo:src/lib/exams/it/cils-uno-1.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exam } from "../types";
import { AUDIO_NOTE, DIALOGUE_NOTE, MONOLOGUE_NOTE, cilsExam, gap, listen, match, paras, q, read, rec, speak, vf, write } from "./text";

// CILS UNO (Intermediate) practice exam 1: work, time and community. The
// five sections of the real CILS UNO (B1), three "prove" each in
// listening, reading and structures: announcements and a voicemail, a
// radio interview on moving back to a mountain village, two friends
// volunteering at a food drive; the Italian lunch break, summer at the
// city museums, tips for a job interview; the subjunctive and
// conditional, prepositions and pronouns, connectors; an account of a
// first day and an e-mail of advice; a conversation and a talk on
// working from home.
const TIPS = [
  "A. Come vestirsi",
  "B. Informarsi sull'azienda",
  "C. Come chiedere un aumento",
  "D. La puntualità",
  "E. Preparare il curriculum",
  "F. Le domande da fare alla fine",
];

export const CILS_UNO_1: Exam = cilsExam(
  {
    slug: "cils-uno-1",
    level: "B1",
    title: "CILS UNO (Intermediate) practice exam 1",
    description:
      "A full CILS UNO practice exam: airport and office announcements, a radio interview with a woman who left Milan for a mountain village, a food drive; the changing Italian lunch break, summer at the city museums, a first job interview; the subjunctive, pronouns and connectors; your first day somewhere new and an e-mail of advice; work and working from home.",
  },
  {
    ascolto: [
      listen(
        1,
        "Ascolta i testi. Per ogni testo scegli la risposta giusta.",
        [
          rec("Testo 1", [
            "Si informano i passeggeri del volo 1734 per Catania che l'imbarco è stato spostato dal gate B12 al gate C4. Il volo partirà con circa quaranta minuti di ritardo a causa del maltempo.",
          ]),
          rec("Testo 2", [
            "F: Hai sentito? La riunione di domani è stata spostata a venerdì.",
            "M: Davvero? Meno male, perché domani devo portare la macchina dal meccanico. Ma è sempre alle dieci?",
            "F: No, venerdì comincia alle nove e mezza, perché il direttore deve partire a mezzogiorno.",
          ]),
          rec("Testo 3", [
            "Hai tra i diciotto e i trent'anni e vuoi fare un'esperienza all'estero? Con il programma Giovani in Europa puoi fare un tirocinio di sei mesi in un'azienda europea. Il viaggio e l'alloggio sono pagati. Le domande si presentano online entro il quindici marzo.",
          ], "m"),
          rec("Testo 4", [
            "Buongiorno, sono Chiara della libreria Il Segnalibro. La chiamo perché il libro che ha ordinato è arrivato. Può passare a ritirarlo da domani: lo teniamo da parte per una settimana. Siamo aperti dalle nove alle diciannove e trenta, tranne il lunedì mattina.",
          ]),
        ],
        [
          q(1, "Testo 1. Perché il volo è in ritardo?", ["Per uno sciopero", "Per il maltempo", "Per un problema tecnico", "Perché è cambiato il gate"], 2, "\"A causa del maltempo\": because of bad weather. The gate change is a separate piece of news."),
          q(2, "Testo 2. Quando è la riunione?", ["Domani alle dieci", "Venerdì alle dieci", "Venerdì alle nove e mezza", "Domani alle nove e mezza"], 3, "It was moved to Friday, and \"venerdì comincia alle nove e mezza\" because the director leaves at noon."),
          q(
            3,
            "Testo 3. Che cosa offre il programma?",
            ["Un corso di lingua gratuito", "Un lavoro fisso in Europa", "Una borsa di studio per l'università", "Un tirocinio all'estero con viaggio e alloggio pagati"],
            4,
            "\"Un tirocinio di sei mesi\" is a six-month internship, and \"il viaggio e l'alloggio sono pagati\".",
          ),
          q(
            4,
            "Testo 4. Che cosa deve fare il cliente?",
            ["Ritirare il libro in libreria entro una settimana", "Pagare il libro online", "Ordinare di nuovo il libro", "Telefonare lunedì mattina"],
            1,
            "\"Può passare a ritirarlo\", and the shop keeps it \"per una settimana\". On Monday morning the shop is closed.",
          ),
        ],
        `${AUDIO_NOTE} Four short recordings: choose the right answer for each.`,
      ),
      listen(
        2,
        "Ascolta l'intervista radiofonica. Scegli la risposta giusta.",
        [
          rec("Intervista: Vite in movimento", [
            "M: Oggi a Vite in movimento abbiamo con noi Elena Marchetti, trentadue anni, che due anni fa ha lasciato Milano per tornare a vivere a Castelnuovo, il paese dei suoi nonni, sull'Appennino. Elena, perché questa scelta?",
            "F: Lavoravo in un'agenzia di pubblicità, guadagnavo bene, ma non avevo mai tempo per niente. A un certo punto ho capito che il mio lavoro si poteva fare da qualsiasi posto: bastava una buona connessione. Così ho fatto una prova, sei mesi in paese. E non sono più tornata.",
            "M: Com'è stato l'inizio?",
            "F: Non facile. In paese vivono trecento persone, quasi tutte anziane. Il primo inverno è stato lunghissimo e internet era lentissimo. Poi il comune ha portato la fibra e le cose sono cambiate.",
            "M: E adesso di che cosa si occupa?",
            "F: Lavoro ancora per l'agenzia tre giorni alla settimana, da casa. Gli altri giorni gestisco con un'amica un piccolo spazio di coworking nella vecchia scuola elementare. Vengono persone da tutta la valle, e d'estate anche turisti che vogliono lavorare in montagna.",
            "M: Che cosa le manca di Milano?",
            "F: I concerti e il cinema, soprattutto. Ma ho guadagnato tempo: la mattina cammino nel bosco prima di lavorare, e conosco tutti i miei vicini.",
            "M: Un consiglio per chi vuole fare come lei?",
            "F: Non idealizzare il paese. Bisogna provarci per un periodo, anche in inverno, e partecipare alla vita della comunità, non usarla solo come una casa per le vacanze.",
          ], "m"),
        ],
        [
          q(
            5,
            "Perché Elena ha lasciato Milano?",
            ["Perché aveva perso il lavoro", "Perché non aveva tempo e poteva lavorare a distanza", "Perché i nonni avevano bisogno di lei", "Perché la vita in città costava troppo"],
            2,
            "\"Non avevo mai tempo per niente\", and her job \"si poteva fare da qualsiasi posto\".",
          ),
          q(
            6,
            "Com'è stato il primo inverno in paese?",
            ["Difficile, anche per la connessione lenta", "Divertente, con molte feste", "Tranquillo, perché c'erano molti giovani", "Breve, perché è tornata a Milano"],
            1,
            "\"Il primo inverno è stato lunghissimo e internet era lentissimo\", until the town brought in fibre.",
          ),
          q(7, "Dove si trova lo spazio di coworking?", ["Nel municipio", "A casa di Elena", "In un albergo", "Nella vecchia scuola elementare"], 4, "\"Nella vecchia scuola elementare\": in the old primary school."),
          q(8, "Che cosa le manca di Milano?", ["Il lavoro in agenzia", "Gli amici", "I concerti e il cinema", "I negozi"], 3, "\"I concerti e il cinema, soprattutto\"."),
          q(
            9,
            "Che cosa consiglia Elena?",
            ["Di trasferirsi subito in un paese", "Di provare la vita in paese per un periodo, anche d'inverno", "Di comprare una casa per le vacanze", "Di lavorare solo d'estate"],
            2,
            "\"Bisogna provarci per un periodo, anche in inverno\", and take part in village life.",
          ),
        ],
        `${AUDIO_NOTE} A radio interview: choose the right answer.`,
      ),
      listen(
        3,
        "Ascolta il dialogo tra Silvia e Marco. Le affermazioni sono vere o false?",
        [
          rec("Dialogo", [
            "F: Marco, sabato vieni con me al supermercato per la raccolta alimentare?",
            "M: Che cos'è, esattamente?",
            "F: È una giornata in cui i volontari stanno all'ingresso dei supermercati e chiedono ai clienti di comprare qualcosa in più: pasta, olio, scatolette, latte per i bambini. Poi tutto va alle famiglie in difficoltà della città.",
            "M: Ah, l'ho vista l'anno scorso. E quanto tempo bisogna stare lì?",
            "F: Facciamo turni di tre ore. Io ho scelto quello della mattina, dalle nove a mezzogiorno.",
            "M: La mattina non posso, mio figlio ha la partita di calcio. Il pomeriggio va bene?",
            "F: Certo, c'è un turno dalle tre alle sei. Ti iscrivo io online, così ti arriva una mail con tutte le informazioni.",
            "M: Perfetto. Devo portare qualcosa?",
            "F: No, la pettorina gialla te la danno loro. Porta solo un po' di pazienza: certe persone non si fermano neanche!",
          ]),
        ],
        [
          vf(10, "Durante la raccolta, i volontari chiedono soldi ai clienti.", false, "They ask shoppers \"di comprare qualcosa in più\", food, not money."),
          vf(11, "Il cibo raccolto va alle famiglie in difficoltà.", true, "\"Tutto va alle famiglie in difficoltà della città\"."),
          vf(12, "Silvia fa il turno del pomeriggio.", false, "Silvia chose \"quello della mattina, dalle nove a mezzogiorno\"; the afternoon shift is for Marco."),
          vf(13, "Sabato mattina Marco è impegnato.", true, "\"La mattina non posso, mio figlio ha la partita di calcio\"."),
          vf(14, "Marco deve iscriversi da solo sul sito.", false, "\"Ti iscrivo io online\": Silvia signs him up."),
        ],
        `${AUDIO_NOTE} Are the statements true (\"Vero\") or false (\"Falso\")?`,
      ),
    ],
    lettura: [
      read(
        1,
        "Leggi l'articolo e scegli la risposta giusta.",
        [
          {
            title: "Pranzo veloce, ma non troppo",
            body: paras(
              "Per generazioni il pranzo è stato il pasto più importante della giornata italiana: due ore di pausa, la pasta a casa con la famiglia, magari un breve riposo prima di tornare al lavoro. Oggi questo modello resiste soprattutto nei piccoli centri, mentre nelle grandi città la pausa si è ridotta a un'ora o anche meno.",
              "Secondo un'indagine recente, un lavoratore su tre pranza alla scrivania, davanti al computer, e quasi la metà porta il pranzo da casa nella «schiscetta», come la chiamano a Milano. Il motivo principale è il risparmio: un pranzo al bar costa in media tra i dieci e i quindici euro, e i buoni pasto spesso non bastano.",
              "Non tutti, però, hanno rinunciato al piacere della tavola. Molti ristoranti propongono un «menù del giorno» a prezzo fisso, con un primo, un contorno e il caffè, servito in venti minuti. E alcune aziende hanno creato spazi comuni con tavoli e forni a microonde, perché i dipendenti possano mangiare insieme invece che da soli.",
              "I nutrizionisti, infatti, sono d'accordo su un punto: più di che cosa si mangia, conta come si mangia. Pranzare in fretta davanti allo schermo porta a mangiare di più e peggio, e non permette alla mente di riposare. Anche quindici minuti lontano dalla scrivania, dicono, fanno la differenza per il resto del pomeriggio.",
            ),
          },
        ],
        [
          q(1, "Dove resiste il modello tradizionale del pranzo?", ["Nelle grandi città", "Soprattutto nei piccoli centri", "Nelle aziende moderne", "Nei ristoranti"], 2, "\"Questo modello resiste soprattutto nei piccoli centri\": in small towns."),
          q(2, "Perché molti portano il pranzo da casa?", ["Perché è più sano", "Perché non ci sono bar vicino all'ufficio", "Perché lo chiede l'azienda", "Per risparmiare"], 4, "\"Il motivo principale è il risparmio\": saving money."),
          q(3, "Che cos'è il «menù del giorno»?", ["Un pranzo a prezzo fisso, servito velocemente", "Un pranzo da portare a casa", "Un menù solo per vegetariani", "Un buono pasto"], 1, "\"A prezzo fisso\", with a first course, a side and coffee, \"servito in venti minuti\"."),
          q(
            4,
            "Perché alcune aziende hanno creato spazi comuni?",
            ["Per fare le riunioni durante il pranzo", "Per vendere il cibo ai dipendenti", "Perché i dipendenti possano mangiare insieme", "Per ridurre la pausa pranzo"],
            3,
            "\"Perché i dipendenti possano mangiare insieme invece che da soli\". \"Perché\" + subjunctive means so that.",
          ),
          q(
            5,
            "Secondo i nutrizionisti…",
            ["bisogna mangiare solo verdura a pranzo.", "mangiare davanti allo schermo fa mangiare di più e peggio.", "il pranzo deve durare due ore.", "è meglio non pranzare."],
            2,
            "\"Pranzare in fretta davanti allo schermo porta a mangiare di più e peggio\".",
          ),
        ],
        "Read the article about the Italian lunch break and choose the right answer.",
      ),
      read(
        2,
        "Leggi l'avviso. Le affermazioni sono vere o false?",
        [
          {
            title: "Musei civici: le novità dell'estate",
            body: paras(
              "Da giugno a settembre i musei civici della città cambiano orario: saranno aperti dal martedì alla domenica dalle 10:00 alle 19:00 e il giovedì anche la sera, fino alle 23:00. Il lunedì resteranno chiusi, come sempre.",
              "Il biglietto unico, valido per tutti e quattro i musei, costa 15 euro e dura tre giorni. I ragazzi sotto i diciotto anni entrano gratis, mentre gli studenti universitari e le persone sopra i sessantacinque anni pagano 8 euro.",
              "Novità di quest'anno: il giovedì sera, nel cortile di Palazzo Vecchi, si terranno concerti di musica jazz e classica, gratuiti per chi ha il biglietto del museo. I posti sono limitati: è consigliata la prenotazione sul sito.",
              "Per le famiglie, ogni sabato mattina ci sono laboratori per bambini dai 6 ai 12 anni. Il costo è di 5 euro a bambino; nel frattempo i genitori possono visitare il museo.",
            ),
          },
        ],
        [
          vf(6, "D'estate i musei sono chiusi il lunedì.", true, "\"Il lunedì resteranno chiusi, come sempre\"."),
          vf(7, "Il giovedì i musei chiudono alle 19:00.", false, "On Thursdays they stay open \"anche la sera, fino alle 23:00\"."),
          vf(8, "Con il biglietto unico si possono visitare tutti i musei per tre giorni.", true, "\"Valido per tutti e quattro i musei\" and \"dura tre giorni\"."),
          vf(9, "Un ragazzo di sedici anni paga 8 euro.", false, "\"I ragazzi sotto i diciotto anni entrano gratis\"."),
          vf(10, "I concerti sono gratuiti per tutti.", false, "They're free only \"per chi ha il biglietto del museo\"."),
          vf(11, "I laboratori del sabato sono per bambini dai 6 ai 12 anni.", true, "\"Laboratori per bambini dai 6 ai 12 anni\", for 5 euros each."),
        ],
        "Read the notice. Are the statements true (\"Vero\") or false (\"Falso\")?",
      ),
      read(
        3,
        "Leggi i paragrafi dell'articolo «Il primo colloquio di lavoro». Per ogni paragrafo scegli il titolo giusto. Attenzione: ci sono due titoli in più.",
        [
          {
            label: "12",
            body: "Prima del colloquio, visita il sito dell'azienda e leggi le ultime notizie che la riguardano. Cerca di capire che cosa produce, chi sono i suoi clienti e quali valori dichiara. Durante il colloquio potrai fare domande precise, e il selezionatore capirà che sei davvero interessato.",
          },
          {
            label: "13",
            body: "Arrivare tardi è il modo peggiore di cominciare. Controlla il percorso il giorno prima e calcola un margine per il traffico o per un ritardo dei mezzi. Se, nonostante tutto, capita un imprevisto, telefona subito per avvisare.",
          },
          {
            label: "14",
            body: "Non serve un abito elegante per ogni lavoro, ma bisogna essere in ordine e vestirsi in modo adatto all'ambiente: giacca e cravatta per una banca, uno stile più semplice per una piccola azienda di informatica. Nel dubbio, meglio essere un po' più formali.",
          },
          {
            label: "15",
            body: "Alla fine, quasi sempre, il selezionatore chiede: «Ha qualche domanda?». Non rispondere di no. Chiedi come è organizzato il lavoro o quali sono le prossime fasi della selezione: dimostrerai curiosità e iniziativa.",
          },
        ],
        [
          match(12, "Paragrafo 12", TIPS, "B", "The paragraph is about learning what the company does before the interview: \"informarsi sull'azienda\"."),
          match(13, "Paragrafo 13", TIPS, "D", "\"Arrivare tardi è il modo peggiore di cominciare\": it's about being on time, \"la puntualità\"."),
          match(14, "Paragrafo 14", TIPS, "A", "\"Vestirsi in modo adatto all'ambiente\": what to wear."),
          match(15, "Paragrafo 15", TIPS, "F", "\"Ha qualche domanda?\" comes at the end: the questions you ask then."),
        ],
        "Match each paragraph to its title. Two titles are not needed.",
        "select",
      ),
    ],
    strutture: [
      read(
        1,
        "Leggi l'email e scegli la forma giusta del verbo per ogni spazio.",
        [
          {
            title: "Una bella notizia",
            body: paras(
              "Caro Andrea,",
              "ti scrivo perché ho una bella notizia: la settimana scorsa (1) ______ il colloquio per il lavoro a Bologna e mi hanno presa! Comincio il primo del mese. Mi (2) ______ molto se tu potessi aiutarmi a cercare casa, visto che conosci bene la città. Penso che (3) ______ meglio un appartamento in centro, anche se è più caro, perché non ho la macchina.",
              "Quando (4) ______ trovato una sistemazione, organizzerò una cena per festeggiare: spero che tu e Giulia (5) ______ venire. Ieri, mentre (6) ______ le valigie, ho ritrovato le foto del nostro viaggio a Lisbona. Che ricordi!",
              "A presto,\nFederica",
            ),
          },
        ],
        [
          gap(1, ["facevo", "ho fatto", "farei", "avevo fatto"], 2, "A finished event at a stated past time (\"la settimana scorsa\"): passato prossimo, \"ho fatto il colloquio\"."),
          gap(2, ["fa piacere", "faceva piacere", "farebbe piacere", "farà piacere"], 3, "A polite wish with \"se tu potessi\" (imperfect subjunctive) takes the conditional: \"mi farebbe piacere\"."),
          gap(3, ["è", "sia", "fosse", "era"], 2, "\"Penso che\" expresses an opinion and takes the present subjunctive: \"penso che sia meglio\"."),
          gap(4, ["avrei", "avevo", "ho", "avrò"], 4, "An action completed before another future one: futuro anteriore, \"quando avrò trovato… organizzerò\"."),
          gap(5, ["potete", "possiate", "poteste", "potevate"], 2, "\"Spero che\" takes the subjunctive; with \"tu e Giulia\" (voi), the present subjunctive is \"possiate\"."),
          gap(6, ["facevo", "ho fatto", "faccio", "farò"], 1, "\"Mentre\" introduces an action in progress in the past: imperfect, \"mentre facevo le valigie\"."),
        ],
        "Read the e-mail and choose the right verb form for each gap.",
      ),
      read(
        2,
        "Leggi il testo e scegli la parola giusta per ogni spazio.",
        [
          {
            title: "Il sabato al mercato",
            body: "Ogni sabato vado (7) ______ mercato con mia nonna. Lei conosce tutti i venditori e (8) ______ saluta per nome. Compriamo la frutta da un signore che viene (9) ______ campagna e che (10) ______ regala sempre qualche ciliegia. A mia nonna piacciono molto i carciofi: (11) ______ compra un chilo ogni settimana. Dopo la spesa ci fermiamo (12) ______ bar della piazza a prendere un caffè.",
          },
        ],
        [
          gap(7, ["al", "a", "nel", "in"], 1, "\"Andare al mercato\": \"a\" + \"il\" = \"al\"."),
          gap(8, ["gli", "li", "le", "ne"], 2, "\"I venditori\" is a masculine plural direct object: \"li saluta\"."),
          gap(9, ["alla", "della", "dalla", "in"], 3, "Where someone comes from takes \"da\": \"viene dalla campagna\"."),
          gap(10, ["ci", "ce", "ne", "vi"], 1, "'Gives us' is \"ci regala\": \"ci\" is the indirect object 'to us'."),
          gap(11, ["li", "ne", "le", "gli"], 2, "With a quantity (\"un chilo\") the pronoun is \"ne\": \"ne compra un chilo\", she buys a kilo of them."),
          gap(12, ["dal", "sul", "nel", "al"], 4, "\"Fermarsi al bar\": to stop at the bar."),
        ],
        "Read the text and choose the right word for each gap.",
      ),
      read(
        3,
        "Scegli il connettivo giusto per completare la frase.",
        [],
        [
          q(13, "Sono uscito ______ piovesse.", ["perché", "quindi", "benché", "siccome"], 3, "\"Benché\" (although) takes the subjunctive: \"benché piovesse\"."),
          q(14, "______ non avevo l'ombrello, mi sono bagnato tutto.", ["Però", "Siccome", "Anche se", "Mentre"], 2, "\"Siccome\" (since, as) gives the cause first: as I had no umbrella, I got soaked."),
          q(15, "Studia molto, ______ i risultati non sono buoni.", ["però", "perché", "così", "dunque"], 1, "A contrast: \"però\", but. The other three would give a cause or a result."),
          q(16, "Ti presto la macchina ______ tu me la riporti stasera.", ["perché", "finché", "dopo che", "a patto che"], 4, "\"A patto che\" means on condition that, and it takes the subjunctive (\"riporti\")."),
          q(17, "Il film era noioso, ______ siamo usciti prima della fine.", ["invece", "quindi", "eppure", "mentre"], 2, "A consequence: \"quindi\", so."),
        ],
        "Choose the right connector to complete each sentence.",
      ),
    ],
    scritta: [
      write(
        1,
        "Scrivi un testo (da 100 a 120 parole).",
        {
          prompt:
            "Racconta il tuo primo giorno in un posto nuovo: un lavoro, una scuola o una città. Che cosa è successo, come ti sentivi e che cosa hai imparato da quell'esperienza?",
          words: [100, 120],
          rubric: [
            "\"Adeguatezza\": tells a real-sounding first day, with what happened, how you felt and what you learned",
            "\"Coerenza e coesione\": events in order, linked with \"quando\", \"mentre\", \"alla fine\", \"però\", and a closing thought",
            "\"Competenza grammaticale\": the passato prossimo for events and the imperfect for feelings and background, with the right auxiliaries",
            "\"Competenza lessicale\": words for feelings and situations (\"emozionato\", \"imbarazzo\", \"trasferirsi\", \"sentirsi a proprio agio\")",
          ],
          modelAnswer:
            "Tre anni fa mi sono trasferita a Bologna per un master. Il primo giorno è stato un piccolo disastro. Il treno è arrivato in ritardo e, quando ho trovato l'università, la lezione era già cominciata. Sono entrata in aula tutta rossa e mi sono seduta in fondo. Non capivo quasi niente, perché il professore parlava velocissimo, e mi sentivo molto sola. Alla fine della lezione, però, una ragazza mi ha chiesto se volevo pranzare con lei e con i suoi amici. Siamo andati in una trattoria vicina e abbiamo parlato per due ore. Quel giorno ho imparato che non bisogna avere paura di sbagliare: oggi quella ragazza è la mia migliore amica.",
        },
      ),
      write(
        2,
        "Scrivi un'email (da 50 a 80 parole).",
        {
          prompt:
            "Il tuo amico italiano Paolo vuole venire a studiare per sei mesi nella tua città. Scrivigli un'email: dagli due o tre consigli pratici e offrigli il tuo aiuto per le prime settimane.",
          words: [50, 80],
          rubric: [
            "\"Adeguatezza\": a friendly e-mail to Paolo with two or three practical tips and an offer of help",
            "\"Coerenza e coesione\": \"Caro Paolo\", a reaction to his news, the tips in order, the offer and a sign-off",
            "\"Competenza grammaticale\": the informal imperative (\"cerca\", \"porta\", \"iscriviti\"), the future (\"ti troverai\"), pronouns (\"ti do\")",
            "\"Competenza lessicale\": practical words (\"affitto\", \"alloggio\", \"impermeabile\", \"iscriversi\", \"conoscere gente\")",
          ],
          modelAnswer:
            "Caro Paolo, che bella notizia! Sono sicura che ti troverai benissimo a Dublino. Ti do qualche consiglio: cerca casa almeno due mesi prima, perché gli affitti sono alti e gli appartamenti finiscono subito. Porta un buon impermeabile, perché qui piove spesso! E iscriviti a un club dell'università, così conosci gente. Le prime settimane puoi stare da me. Un abbraccio, Siobhan",
        },
      ),
    ],
    orale: [
      speak(
        1,
        "Conversazione con l'esaminatore sul lavoro e sullo studio.",
        {
          prompt: "Parla della tua esperienza di lavoro o di studio e dei tuoi progetti.",
          points: ["Che cosa fai e da quanto tempo", "Una giornata tipica", "Che cosa ti piace e che cosa cambieresti", "I tuoi progetti per il futuro"],
          examinerQuestions: [
            "Che lavoro fai, o che cosa studi?",
            "Da quanto tempo fai questo lavoro?",
            "Com'è una tua giornata tipica?",
            "Se potessi cambiare qualcosa del tuo lavoro, che cosa cambieresti?",
            "Che progetti hai per i prossimi anni?",
          ],
          prepMinutes: 0,
          speakMinutes: 5,
          modelAnswer: paras(
            "– Che lavoro fai?",
            "– Sono infermiere in un ospedale pediatrico a Lione. Lavoro nel reparto di cardiologia da sei anni.",
            "– Com'è una tua giornata tipica?",
            "– Dipende dal turno. Quando lavoro di mattina, comincio alle sette: controllo le terapie, parlo con i genitori e aiuto i medici durante il giro. È un lavoro faticoso, ma i bambini mi danno tantissima energia.",
            "– Se potessi cambiare qualcosa del tuo lavoro, che cosa cambieresti?",
            "– Cambierei sicuramente i turni di notte: dopo una settimana di notti sono distrutto. E vorrei che ci fossero più infermieri, perché a volte siamo davvero pochi.",
            "– Che progetti hai per i prossimi anni?",
            "– Mi piacerebbe lavorare un anno in Italia, magari a Torino, che non è lontana da Lione. Per questo studio italiano: voglio parlarlo bene prima di partire.",
          ),
        },
        DIALOGUE_NOTE,
      ),
      speak(
        2,
        "Leggi il tema. Hai due minuti per prepararti, poi parla per circa cinque minuti.",
        {
          prompt: "Lavorare da casa: vantaggi e svantaggi. Esprimi la tua opinione con esempi.",
          material: [
            {
              label: "Tema",
              title: "Lavorare da casa",
              body: "Sempre più persone lavorano da casa uno o più giorni alla settimana. Secondo alcuni si vive meglio: meno traffico, più tempo libero. Secondo altri si lavora di più e ci si sente soli. E tu che cosa ne pensi?",
            },
          ],
          points: ["I vantaggi del lavoro da casa", "Gli svantaggi", "La tua esperienza o quella di persone che conosci", "La tua opinione"],
          examinerQuestions: ["Nel tuo paese è diffuso il lavoro da casa?", "Quali lavori, secondo te, non si possono fare da casa?", "Preferiresti lavorare sempre da casa? Perché?"],
          prepMinutes: 2,
          speakMinutes: 5,
          modelAnswer: paras(
            "Secondo me lavorare da casa ha molti vantaggi, ma solo se non diventa l'unica possibilità.",
            "Il primo vantaggio è il tempo: chi abita lontano dall'ufficio risparmia anche due ore al giorno di traffico, e può usarle per fare sport o stare con la famiglia. Poi a casa ci sono meno interruzioni, e per un lavoro che richiede concentrazione è perfetto.",
            "Però ci sono anche degli svantaggi. Mia sorella, per esempio, lavora sempre da casa e dice che non riesce mai a staccare: risponde alle email anche alle dieci di sera. Inoltre manca il contatto con i colleghi: le idee migliori a volte nascono davanti alla macchinetta del caffè.",
            "Nel mio paese, dopo la pandemia, molte aziende hanno scelto un modello misto, due o tre giorni a casa e gli altri in ufficio. Penso che sia la soluzione migliore, perché permette di avere i vantaggi di tutti e due i modi di lavorare.",
          ),
        },
        MONOLOGUE_NOTE,
      ),
    ],
  },
);
