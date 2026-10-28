// Synced from cheneygross-afk/lengo:src/lib/exams/it/cils-uno-2.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exam } from "../types";
import { AUDIO_NOTE, DIALOGUE_NOTE, MONOLOGUE_NOTE, PHOTO_NOTE, cilsExam, gap, listen, match, paras, q, read, rec, speak, vf, write } from "./text";

// CILS UNO (Intermediate) practice exam 2: travel, language and
// technology. The five sections of the real CILS UNO (B1): traffic news,
// a restaurant booking, a museum and a school trip, a radio report from a
// repair café, a couple planning a summer journey; Italy's dialects, a
// walk along the Via Francigena, short messages and what they're for; a
// grandmother's first smartphone, relative pronouns and "ne", sentence
// transformations; an article about a place you love and a reply to a
// wedding invitation; a conversation about travel and a photo about
// phones and friendship.
const PURPOSES = [
  "A. Ringraziare",
  "B. Scusarsi",
  "C. Invitare",
  "D. Lamentarsi",
  "E. Chiedere un'informazione",
  "F. Dare una notizia",
];

export const CILS_UNO_2: Exam = cilsExam(
  {
    slug: "cils-uno-2",
    level: "B1",
    title: "CILS UNO (Intermediate) practice exam 2",
    description:
      "A second full CILS UNO practice exam: traffic news, a table for six, a school trip, a repair café in Turin and a summer journey to Puglia; Italy's dialects, twenty days on the Via Francigena, messages and their purpose; a grandmother's first smartphone, relative pronouns and sentence transformations; a place you love and a reply to a wedding invitation; travel and technology.",
  },
  {
    ascolto: [
      listen(
        1,
        "Ascolta i testi. Per ogni testo scegli la risposta giusta.",
        [
          rec("Testo 1", [
            "Notizie sul traffico: sull'autostrada A1, tra Firenze e Bologna, c'è una coda di otto chilometri a causa di un incidente. Si consiglia di uscire a Barberino e di proseguire sulla strada statale.",
          ], "m"),
          rec("Testo 2", [
            "M: Ristorante Il Glicine, buonasera.",
            "F: Buonasera, vorrei prenotare un tavolo per sabato sera, per sei persone.",
            "M: Sabato alle otto siamo al completo. Posso darle un tavolo alle nove e mezza, oppure in terrazza alle sette e mezza.",
            "F: In terrazza alle sette e mezza va benissimo. Avete anche un seggiolone per un bambino?",
            "M: Certo, nessun problema.",
          ]),
          rec("Testo 3", [
            "Gentili visitatori, vi ricordiamo che nelle sale della pinacoteca è vietato fotografare con il flash. Le fotografie senza flash sono consentite. Il museo chiuderà tra trenta minuti; la biglietteria è già chiusa.",
          ]),
          rec("Testo 4", [
            "Buongiorno signora Ricci, sono la maestra Bruni. Le telefono perché domani la classe va in gita al museo di scienze naturali. Il pullman parte alle otto e un quarto davanti alla scuola, quindi Tommaso deve arrivare dieci minuti prima. Si ricordi di dargli il pranzo al sacco.",
          ]),
        ],
        [
          q(
            1,
            "Testo 1. Che cosa consiglia la radio?",
            ["Di aspettare in coda", "Di uscire dall'autostrada e prendere la statale", "Di prendere il treno", "Di partire più tardi"],
            2,
            "\"Si consiglia di uscire a Barberino e di proseguire sulla strada statale\".",
          ),
          q(2, "Testo 2. A che ora cenano sabato?", ["Alle 20:00", "Alle 21:30", "Alle 19:30", "Alle 20:30"], 3, "Eight o'clock is full; she takes the terrace \"alle sette e mezza\", 19:30."),
          q(
            3,
            "Testo 3. Che cosa è vietato nel museo?",
            ["Fare foto con il flash", "Fare qualsiasi foto", "Entrare nella pinacoteca", "Comprare il biglietto online"],
            1,
            "\"È vietato fotografare con il flash\"; photos without flash \"sono consentite\".",
          ),
          q(4, "Testo 4. A che ora deve arrivare Tommaso a scuola?", ["Alle 8:15", "Alle 7:50", "Alle 8:25", "Alle 8:05"], 4, "The coach leaves at 8:15 (\"le otto e un quarto\") and he must be there \"dieci minuti prima\": 8:05."),
        ],
        `${AUDIO_NOTE} Four short recordings: choose the right answer for each.`,
      ),
      listen(
        2,
        "Ascolta il servizio radiofonico. Scegli la risposta giusta.",
        [
          rec("Servizio: Città sostenibile", [
            "F: Benvenuti a Città sostenibile. Oggi siamo in un posto un po' speciale: un laboratorio di riparazioni gratuito, aperto il secondo sabato di ogni mese in una biblioteca di quartiere a Torino. Con me c'è Giorgio, elettricista in pensione e volontario. Giorgio, come funziona?",
            "M: È semplice: le persone portano un oggetto rotto, un tostapane, una lampada, una bicicletta, un vestito strappato, e noi volontari lo ripariamo insieme a loro. Non lo facciamo al posto loro: chi porta l'oggetto deve restare e imparare.",
            "F: Perché è importante che imparino?",
            "M: Perché così la prossima volta lo sanno fare da soli. E poi perché si crea un rapporto: qui si chiacchiera, si beve un caffè, ci si scambiano consigli. Molti vengono anche solo per compagnia.",
            "F: Quanti oggetti riuscite a salvare?",
            "M: Più o meno sette su dieci. Il problema sono gli apparecchi moderni: molti sono fatti in modo che non si possano aprire, oppure i pezzi di ricambio costano più dell'oggetto nuovo.",
            "F: Chi sono i volontari?",
            "M: Ci sono pensionati come me, ma anche molti giovani: studenti di ingegneria, una sarta, un ragazzo che ripara telefoni. All'inizio eravamo in quattro, adesso siamo una ventina.",
            "F: E chi vuole partecipare che cosa deve fare?",
            "M: Niente prenotazione: basta presentarsi tra le dieci e l'una con l'oggetto. Chiediamo solo, se si vuole, un'offerta libera per comprare gli attrezzi.",
          ]),
        ],
        [
          q(5, "Quando è aperto il laboratorio?", ["Ogni sabato", "Il secondo sabato di ogni mese", "Tutti i giorni", "Il primo sabato del mese"], 2, "\"Aperto il secondo sabato di ogni mese\"."),
          q(
            6,
            "Che cosa devono fare le persone che portano un oggetto?",
            ["Pagare la riparazione", "Lasciarlo e tornare dopo una settimana", "Restare e imparare a ripararlo", "Comprare i pezzi di ricambio"],
            3,
            "\"Chi porta l'oggetto deve restare e imparare\": the volunteers repair it with them, not for them.",
          ),
          q(
            7,
            "Perché molti apparecchi moderni non si possono riparare?",
            ["Perché i volontari non hanno gli attrezzi", "Perché sono troppo pesanti", "Perché sono ancora in garanzia", "Perché spesso non si aprono o i pezzi costano troppo"],
            4,
            "They're made \"in modo che non si possano aprire\", or spare parts cost more than a new one.",
          ),
          q(8, "Chi sono i volontari oggi?", ["Circa venti persone, giovani e meno giovani", "Solo pensionati", "Quattro elettricisti", "Gli studenti di una scuola"], 1, "\"Adesso siamo una ventina\", retired people and many young ones. Four was at the start."),
          q(9, "Che cosa bisogna fare per partecipare?", ["Prenotare online", "Pagare dieci euro", "Presentarsi con l'oggetto tra le dieci e l'una", "Telefonare alla biblioteca"], 3, "\"Niente prenotazione: basta presentarsi tra le dieci e l'una\". The donation is optional."),
        ],
        `${AUDIO_NOTE} A radio report: choose the right answer.`,
      ),
      listen(
        3,
        "Ascolta il dialogo tra Paola e Stefano. Le affermazioni sono vere o false?",
        [
          rec("Dialogo", [
            "F: Allora, per agosto hai deciso? Andiamo in Puglia in macchina o in treno?",
            "M: Io pensavo alla macchina: là ci serve per girare tra i paesi.",
            "F: Sì, ma sono quasi novecento chilometri, con il traffico di agosto. Ti ricordi due anni fa? Dieci ore in autostrada.",
            "M: È vero. E in treno quanto ci vuole?",
            "F: Con il treno diretto, sette ore e mezza. E intanto possiamo leggere, dormire… Poi a Lecce noleggiamo una macchina per una settimana. Ho già controllato: costa duecentoventi euro.",
            "M: E il cane?",
            "F: Su quel treno i cani piccoli viaggiano gratis, se stanno nel trasportino. Biscotto ci sta, è piccolo.",
            "M: Va bene, mi hai convinto. Però i biglietti li prenotiamo stasera, prima che aumentino i prezzi.",
          ]),
        ],
        [
          vf(10, "All'inizio Stefano preferisce andare in macchina.", true, "\"Io pensavo alla macchina\", to get around the villages."),
          vf(11, "Due anni fa il viaggio in macchina è stato breve.", false, "\"Dieci ore in autostrada\": it was long."),
          vf(12, "In treno il viaggio dura meno di otto ore.", true, "\"Sette ore e mezza\" with the direct train."),
          vf(13, "A Lecce vogliono noleggiare una macchina per due settimane.", false, "\"Per una settimana\", for 220 euros."),
          vf(14, "Il cane deve pagare il biglietto.", false, "Small dogs \"viaggiano gratis, se stanno nel trasportino\"."),
          vf(15, "Vogliono prenotare i biglietti subito.", true, "\"I biglietti li prenotiamo stasera, prima che aumentino i prezzi\"."),
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
            title: "Il dialetto: una lingua da salvare?",
            body: paras(
              "In Italia si parlano decine di dialetti: dal veneto al napoletano, dal siciliano al piemontese. Non sono versioni «sbagliate» dell'italiano, ma lingue nate, come l'italiano, dal latino, ognuna con la sua grammatica e il suo vocabolario. Per secoli sono state la lingua di tutti i giorni, mentre l'italiano si usava soprattutto per scrivere.",
              "Le cose sono cambiate nel Novecento. La scuola obbligatoria, il servizio militare, le migrazioni interne e soprattutto la televisione hanno portato l'italiano in tutte le case. Per molte famiglie parlare italiano ai figli era un segno di progresso, e il dialetto è diventato la lingua dei nonni.",
              "Oggi la maggior parte degli italiani parla soprattutto italiano, ma molti usano anche il dialetto in famiglia o con gli amici, spesso mescolato all'italiano. E negli ultimi anni c'è un ritorno di interesse: alcuni cantanti scrivono canzoni in dialetto, i comuni organizzano corsi e i giovani usano espressioni dialettali sui social, quasi per gioco.",
              "Secondo i linguisti, però, molti dialetti sono in pericolo, perché i bambini non li imparano più come prima lingua. «Un dialetto non si salva con un corso una volta all'anno», spiega una ricercatrice, «ma solo se le persone continuano a usarlo nella vita quotidiana.»",
            ),
          },
        ],
        [
          q(1, "Secondo il testo, i dialetti sono…", ["versioni sbagliate dell'italiano.", "lingue nate dal latino.", "lingue usate solo per scrivere.", "nati dall'italiano."], 2, "\"Lingue nate, come l'italiano, dal latino\", with their own grammar: not \"sbagliate\" (wrong) Italian."),
          q(2, "Per secoli, l'italiano si usava soprattutto…", ["in famiglia.", "con gli amici.", "per scrivere.", "nelle campagne."], 3, "\"Mentre l'italiano si usava soprattutto per scrivere\"; daily speech was dialect."),
          q(
            3,
            "Che cosa ha diffuso l'italiano nel Novecento?",
            ["Soprattutto la televisione, insieme alla scuola e alle migrazioni", "Solo la scuola", "I cantanti", "I social"],
            1,
            "School, military service, internal migration \"e soprattutto la televisione\".",
          ),
          q(
            4,
            "Che cosa succede negli ultimi anni?",
            ["Nessuno parla più dialetto.", "Il dialetto si studia in tutte le scuole.", "I giovani non conoscono il dialetto.", "C'è un nuovo interesse per i dialetti."],
            4,
            "\"C'è un ritorno di interesse\": songs, local courses, dialect expressions online.",
          ),
          q(
            5,
            "Secondo la ricercatrice, per salvare un dialetto bisogna…",
            ["organizzare più corsi.", "usarlo nella vita di tutti i giorni.", "scriverlo correttamente.", "insegnarlo all'università."],
            2,
            "\"Solo se le persone continuano a usarlo nella vita quotidiana\": a course once a year isn't enough.",
          ),
        ],
        "Read the article about Italian dialects and choose the right answer.",
      ),
      read(
        2,
        "Leggi il post del blog. Le affermazioni sono vere o false?",
        [
          {
            title: "Venti giorni a piedi",
            body: paras(
              "L'estate scorsa ho percorso a piedi un tratto della Via Francigena, da Lucca a Roma: circa quattrocento chilometri in venti giorni. Non sono uno sportivo, e prima di partire mi ero allenato solo un mese, camminando la sera dopo il lavoro.",
              "Ogni mattina partivo verso le sei, per evitare il caldo, e arrivavo alla tappa successiva nel primo pomeriggio. Dormivo negli ostelli per pellegrini, che costano poco, e qualche volta nelle case delle parrocchie. Lo zaino pesava otto chili: dopo tre giorni ho spedito a casa metà dei vestiti.",
              "La parte più difficile non sono state le salite, ma le vesciche ai piedi, nella prima settimana. La più bella? Le colline della Toscana all'alba, e le persone incontrate lungo il cammino: un'insegnante olandese, due fratelli pugliesi, un signore di settant'anni alla sua quinta Francigena.",
              "Sono tornato a casa con tre chili in meno e un'idea chiara: il prossimo anno voglio partire dal Gran San Bernardo, al confine con la Svizzera.",
            ),
          },
        ],
        [
          vf(6, "L'autore si era allenato per molti mesi.", false, "\"Mi ero allenato solo un mese\"."),
          vf(7, "Partiva presto la mattina per evitare il caldo.", true, "\"Partivo verso le sei, per evitare il caldo\"."),
          vf(8, "Dormiva sempre in albergo.", false, "In pilgrims' hostels (\"ostelli per pellegrini\") and sometimes parish houses."),
          vf(9, "Dopo pochi giorni ha reso lo zaino più leggero.", true, "\"Dopo tre giorni ho spedito a casa metà dei vestiti\"."),
          vf(10, "Per lui la cosa più difficile sono state le salite.", false, "\"Non sono state le salite, ma le vesciche ai piedi\": blisters."),
          vf(11, "Lungo il cammino ha conosciuto persone di diverse nazionalità.", true, "A Dutch teacher and two brothers from Puglia, among others."),
        ],
        "Read the blog post. Are the statements true (\"Vero\") or false (\"Falso\")?",
      ),
      read(
        3,
        "Leggi i messaggi. Per ogni messaggio scegli lo scopo giusto. Attenzione: ci sono due scopi in più.",
        [
          {
            label: "12",
            body: "Ciao Federica, ti scrivo due righe per dirti che il pacco è arrivato: la sciarpa è bellissima, e i biscotti sono già finiti! Sei sempre gentilissima. Un bacio, Anna",
          },
          {
            label: "13",
            body: "Gentile signor Neri, mi dispiace molto per ieri: ho dimenticato completamente il nostro appuntamento. Possiamo fissarne un altro la settimana prossima? Cordiali saluti, Laura Fumagalli",
          },
          {
            label: "14",
            body: "Spettabile ditta, da tre settimane aspetto il tecnico per la caldaia, che non funziona. Ho telefonato quattro volte senza ricevere risposta. Se il problema non sarà risolto entro venerdì, mi rivolgerò a un'altra ditta.",
          },
          { label: "15", body: "Ragazzi, grande notizia: io e Sara aspettiamo un bambino! Nascerà a marzo. Siamo felicissimi!" },
        ],
        [
          match(12, "Messaggio 12", PURPOSES, "A", "Anna writes to thank Federica for the parcel: \"Sei sempre gentilissima\"."),
          match(13, "Messaggio 13", PURPOSES, "B", "\"Mi dispiace molto per ieri\": Laura apologises for a missed appointment."),
          match(14, "Messaggio 14", PURPOSES, "D", "Three weeks without a repair and no answer: a complaint, with a warning at the end."),
          match(15, "Messaggio 15", PURPOSES, "F", "\"Grande notizia\": they're expecting a baby."),
        ],
        "Match each message to its purpose. Two purposes are not needed.",
        "select",
      ),
    ],
    strutture: [
      read(
        1,
        "Leggi il testo e scegli la forma giusta del verbo per ogni spazio.",
        [
          {
            title: "La nonna e lo smartphone",
            body: "Fino a un anno fa mia nonna (1) ______ usare solo il telefono di casa. Poi, per il suo ottantesimo compleanno, noi nipoti le (2) ______ uno smartphone. All'inizio diceva che non (3) ______ mai a imparare, ma noi le abbiamo spiegato tutto con pazienza. Adesso manda messaggi vocali a tutta la famiglia e vuole che le (4) ______ le foto delle vacanze. Se l'avessi saputo prima, gliel'(5) ______ regalato anni fa! L'unico problema è che, da quando (6) ______ le videochiamate, ci telefona tre volte al giorno.",
          },
        ],
        [
          gap(1, ["ha saputo", "sapeva", "sa", "saprà"], 2, "A situation that lasted in the past (\"fino a un anno fa\"): imperfect, \"sapeva usare\"."),
          gap(2, ["regaliamo", "regalavamo", "abbiamo regalato", "regaleremmo"], 3, "One event on one occasion (her birthday): passato prossimo, \"abbiamo regalato\"."),
          gap(3, ["sarebbe riuscita", "riesca", "riuscirebbe", "riuscita"], 1, "The future seen from the past (\"diceva che…\") takes the past conditional: \"sarebbe riuscita\"."),
          gap(4, ["mandassimo", "manderemo", "mandiamo", "abbiamo mandato"], 3, "\"Vuole che\" takes the present subjunctive; for \"noi\" it's \"mandiamo\", the same as the indicative."),
          gap(5, ["avevo", "avessi", "ho", "avrei"], 4, "An unreal past condition: \"se l'avessi saputo\" + past conditional, \"gliel'avrei regalato\"."),
          gap(6, ["ha scoperto", "scopriva", "scopra", "avrebbe scoperto"], 1, "\"Da quando\" + a single past event: \"da quando ha scoperto\", ever since she discovered."),
        ],
        "Read the text and choose the right verb form for each gap.",
      ),
      read(
        2,
        "Leggi il testo e scegli la parola giusta per ogni spazio.",
        [
          {
            title: "La mia città",
            body: "La città (7) ______ sono nato è piccola, ma ha un centro storico bellissimo. Ci torno (8) ______ volta al mese, per trovare i miei genitori. Mio padre ha un negozio di biciclette (9) ______ quarant'anni: ormai tutti (10) ______ conoscono. Quando sono lì, gli do una mano in negozio e (11) ______ approfitto per andare in giro in bici con gli amici (12) ______ cui sono cresciuto.",
          },
        ],
        [
          gap(7, ["che", "in cui", "di cui", "a cui"], 2, "Being born \"in\" a city: \"la città in cui sono nato\" (or \"dove\")."),
          gap(8, ["una", "ogni", "alla", "per"], 1, "\"Una volta al mese\": once a month."),
          gap(9, ["per", "fa", "da", "dal"], 3, "Something that started in the past and still goes on: present + \"da\", \"ha un negozio da quarant'anni\"."),
          gap(10, ["lo", "gli", "la", "li"], 1, "\"Conoscere\" takes a direct object; \"mio padre\" is masculine singular: \"lo conoscono\"."),
          gap(11, ["ci", "ne", "lo", "gli"], 2, "\"Approfittare di qualcosa\": \"di\" + it becomes \"ne\", \"ne approfitto\"."),
          gap(12, ["da", "per", "a", "con"], 4, "Growing up with someone: \"crescere con\", so \"gli amici con cui sono cresciuto\"."),
        ],
        "Read the text and choose the right word for each gap.",
      ),
      read(
        3,
        "Per ogni frase scegli la trasformazione giusta.",
        [],
        [
          q(
            13,
            "«Il museo è stato chiuso per lavori.» Ha lo stesso significato:",
            ["Il museo chiude per lavori.", "Il museo chiuderà per lavori.", "Hanno chiuso il museo per lavori.", "Il museo chiudeva per lavori."],
            3,
            "The passive \"è stato chiuso\" is a finished past action; \"hanno chiuso\" says the same with an impersonal 'they'.",
          ),
          q(
            14,
            "Marco mi ha detto: «Domani vengo da te.» Nel discorso indiretto: Marco mi ha detto che…",
            ["il giorno dopo sarebbe venuto da me.", "domani viene da te.", "il giorno dopo veniva da lui.", "domani sarebbe venuta da te."],
            1,
            "Reported after a past verb, a future plan takes the past conditional (\"sarebbe venuto\"); \"domani\" becomes \"il giorno dopo\" and \"te\" becomes \"me\".",
          ),
          q(
            15,
            "«Se ho tempo, ti aiuto.» Come ipotesi meno probabile:",
            ["Se avevo tempo, ti aiutavo.", "Se avessi tempo, ti aiuterei.", "Se avrei tempo, ti aiuterei.", "Se avessi tempo, ti aiuto."],
            2,
            "An unlikely condition: \"se\" + imperfect subjunctive, then the conditional. Never the conditional after \"se\" (\"se avrei\" is a classic mistake).",
          ),
          q(16, "«Bisogna che tu parta subito.» Ha lo stesso significato:", ["Puoi partire subito.", "Vuoi partire subito?", "Sei partito subito.", "Devi partire subito."], 4, "\"Bisogna che\" + subjunctive expresses necessity, like \"devi\"."),
          q(
            17,
            "«Nonostante fosse stanco, è uscito.» Ha lo stesso significato:",
            ["Era stanco, quindi è uscito.", "Era stanco, eppure è uscito.", "Era stanco perché è uscito.", "Se fosse stanco, uscirebbe."],
            2,
            "\"Nonostante\" (despite) is a contrast, like \"eppure\" (and yet).",
          ),
        ],
        "Choose the right transformation of each sentence.",
      ),
    ],
    scritta: [
      write(
        1,
        "Scrivi un articolo (da 100 a 120 parole).",
        {
          prompt:
            "Il giornalino della tua scuola di italiano cerca articoli sul tema «Un luogo del cuore». Descrivi un luogo della tua città che ami e spiega perché, secondo te, vale la pena visitarlo.",
          words: [100, 120],
          rubric: [
            "\"Adeguatezza\": an article for other students that describes a place in your town and says why it's worth a visit",
            "\"Coerenza e coesione\": a title, an opening that catches the reader, the description, your reasons and a closing invitation",
            "\"Competenza grammaticale\": the present for description, past tenses for memories, comparatives and \"che\" / \"dove\" relative clauses",
            "\"Competenza lessicale\": words for places and atmosphere (\"vista\", \"tramonto\", \"panchina\", \"affollato\", \"tranquillo\")",
          ],
          modelAnswer: paras(
            "Il mio angolo di Edimburgo",
            "Tutti i turisti che vengono a Edimburgo visitano il castello, ma il mio luogo del cuore è un altro: Calton Hill, una piccola collina a dieci minuti dal centro. Ci vado da quando ero studentessa, soprattutto la sera.",
            "Dalla cima si vede tutta la città: i tetti antichi, il castello, il porto e, nelle giornate limpide, perfino le colline lontane. Al tramonto la luce è magica e c'è sempre qualcuno che suona la chitarra.",
            "Secondo me vale la pena salire perché è gratis, non è mai troppo affollata e in pochi minuti si lascia il rumore delle strade. Se venite a Edimburgo, portate una giacca: lassù il vento non manca mai!",
          ),
        },
      ),
      write(
        2,
        "Leggi l'email di Francesca e rispondi (da 50 a 80 parole).",
        {
          prompt:
            "La tua amica Francesca ti invita al suo matrimonio, ma quel giorno non puoi andare. Rispondile: ringraziala, falle gli auguri, spiega perché non puoi esserci e proponi di vedervi in un altro momento.",
          input: {
            title: "Email di Francesca",
            body: "Ciao! Ho una notizia bellissima: io e Luca ci sposiamo! La cerimonia sarà il 14 giugno in una piccola chiesa vicino a Siena, e dopo faremo una festa in campagna. Ci terrei tantissimo che ci fossi anche tu. Fammi sapere entro aprile!\nUn abbraccio,\nFrancesca",
          },
          words: [50, 80],
          rubric: [
            "\"Adeguatezza\": a warm reply that thanks Francesca, congratulates her, explains why you can't come and suggests meeting another time",
            "\"Coerenza e coesione\": \"Cara Francesca\", the congratulations first, then the regret and the reason, a proposal and a sign-off",
            "\"Competenza grammaticale\": the conditional for wishes and regret (\"mi sarebbe piaciuto\", \"verrei\"), \"purtroppo\", the future for plans",
            "\"Competenza lessicale\": \"congratulazioni\", \"auguri\", \"matrimonio\", \"sposarsi\", \"mi dispiace tanto\"",
          ],
          modelAnswer:
            "Cara Francesca, che notizia meravigliosa! Congratulazioni a te e a Luca, sono felicissima per voi. Purtroppo il 14 giugno non potrò esserci: proprio quel giorno mio fratello si laurea a Vancouver e ho già comprato il biglietto aereo. Mi sarebbe piaciuto tanto festeggiare con voi in Toscana! Ad agosto però vengo in Italia: possiamo vederci e mi racconti tutto? Tanti auguri, Megan",
        },
      ),
    ],
    orale: [
      speak(
        1,
        "Conversazione con l'esaminatore su viaggi e vacanze.",
        {
          prompt: "Parla dei tuoi viaggi e del tuo modo di fare vacanza.",
          points: ["Come preferisci viaggiare", "Un viaggio che ricordi bene", "Vacanze attive o di riposo", "Un posto che vorresti visitare"],
          examinerQuestions: [
            "Ti piace viaggiare? Come preferisci viaggiare?",
            "Raccontami un viaggio che ricordi in modo particolare.",
            "In vacanza preferisci riposarti o fare tante cose?",
            "C'è un posto che vorresti visitare? Perché?",
          ],
          prepMinutes: 0,
          speakMinutes: 5,
          modelAnswer: paras(
            "– Ti piace viaggiare? Come preferisci viaggiare?",
            "– Moltissimo. Quando posso, viaggio in treno, perché è più comodo e inquina meno dell'aereo. E mi piace guardare il paesaggio che cambia.",
            "– Raccontami un viaggio che ricordi in modo particolare.",
            "– Due anni fa sono andato in Sicilia con un amico. Abbiamo noleggiato una macchina e abbiamo fatto il giro dell'isola in dieci giorni. Il momento più bello è stato salire sull'Etna al tramonto: faceva freddissimo, ma la vista era incredibile.",
            "– In vacanza preferisci riposarti o fare tante cose?",
            "– Tutte e due! Nei primi giorni visito musei e città, poi ho bisogno di qualche giorno al mare senza fare niente.",
            "– C'è un posto che vorresti visitare?",
            "– Vorrei tanto vedere le Dolomiti in autunno, perché mi hanno detto che i colori dei boschi sono spettacolari.",
          ),
        },
        DIALOGUE_NOTE,
      ),
      speak(
        2,
        "Guarda la foto e leggi la domanda. Hai due minuti per prepararti, poi parla per circa cinque minuti.",
        {
          prompt: "Descrivi la foto e di' che cosa pensi del rapporto tra tecnologia e amicizia.",
          material: [
            {
              label: "Foto",
              title: "Insieme, ma lontani?",
              body: "Immagine: quattro ragazzi seduti intorno al tavolino di un bar all'aperto, in una piazza. Davanti a ognuno c'è un bicchiere, ma tutti guardano il proprio telefono e nessuno parla. Domanda: la tecnologia ci avvicina o ci allontana dagli altri?",
            },
          ],
          points: ["Che cosa mostra la foto", "Come usi tu il telefono con gli amici", "Vantaggi della tecnologia nelle relazioni", "Rischi e la tua opinione"],
          examinerQuestions: ["Ti capita di vivere scene come questa?", "Quante ore al giorno usi il telefono, più o meno?", "Secondo te, i giovani usano la tecnologia in modo diverso dagli adulti?"],
          prepMinutes: 2,
          speakMinutes: 5,
          modelAnswer: paras(
            "Nella foto ci sono quattro ragazzi seduti al tavolino di un bar, in una bella piazza. Dovrebbero passare del tempo insieme, ma ognuno guarda il suo telefono e nessuno parla. È una scena che si vede spesso, purtroppo anche tra i miei amici.",
            "Secondo me la tecnologia di per sé non è né buona né cattiva: dipende da come la usiamo. Per esempio, grazie alle videochiamate posso parlare ogni settimana con la mia migliore amica, che vive in Australia. Senza la tecnologia, forse avremmo perso il contatto.",
            "Il rischio è usarla anche quando le persone sono vicine. A volte guardiamo il telefono quasi senza accorgercene, per abitudine. Io e i miei amici abbiamo fatto un patto: quando ceniamo insieme, mettiamo i telefoni al centro del tavolo e il primo che lo prende paga il caffè a tutti! Funziona benissimo.",
            "Quindi penso che la tecnologia ci avvicini a chi è lontano, ma ci allontani da chi è vicino, se non stiamo attenti.",
          ),
        },
        `${PHOTO_NOTE} ${MONOLOGUE_NOTE}`,
      ),
    ],
  },
);
