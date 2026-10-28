// Synced from cheneygross-afk/lengo:src/lib/exams/it/cils-tre-1.ts by scripts/sync-content.mjs -- edit it there, not here.
import type { Exam } from "../types";
import { AUDIO_NOTE, DIALOGUE_NOTE, MONOLOGUE_NOTE, cilsExam, gap, listen, match, paras, q, read, rec, speak, vf, write } from "./text";

// CILS TRE (Advanced) practice exam 1: ideas, history and work. The five
// sections of the real CILS TRE (C1): a research finding, office rumours,
// a theatre notice and a publisher's voicemail, a food historian on
// "invented" traditions, a promotion negotiated; in praise of boredom,
// consumer rights online, the birth of standard Italian; a family story
// in the passato remoto, the collocations of political news, sentence
// transformations; an essay on artificial intelligence at school and a
// report on a training course; a conversation on work and a talk on the
// right to disconnect.
const LINGUA = [
  "A. Tutti gli altri si esprimevano nei dialetti della propria regione.",
  "B. Già dal Cinquecento, infatti, i letterati avevano scelto il toscano come modello comune.",
  "C. Per unire gli italiani, si diceva, serviva anche una lingua comune.",
  "D. Ma la vera diffusione dell'italiano parlato avvenne soltanto nel Novecento.",
  "E. Oggi l'italiano è la lingua madre della grande maggioranza degli abitanti, che spesso lo affiancano al dialetto.",
  "F. Il latino, invece, era scomparso del tutto già nel Medioevo.",
  "G. Per questo motivo il dialetto fu vietato per legge in tutte le famiglie.",
];

export const CILS_TRE_1: Exam = cilsExam(
  {
    slug: "cils-tre-1",
    level: "C1",
    title: "CILS TRE (Advanced) practice exam 1",
    description:
      "A full CILS TRE practice exam: a study on bilingualism, rumours of a merger, an understudy on stage, notes on a translation, a food historian on how recent \"traditional\" dishes are, a promotion negotiated; in praise of boredom, the right to return online purchases, how Italian became a spoken language; an emigrant's story in the passato remoto, political collocations and transformations; an essay on AI at school and a report; work and the right to disconnect.",
  },
  {
    ascolto: [
      listen(
        1,
        "Ascolta i testi. Per ogni testo scegli la risposta giusta.",
        [
          rec("Testo 1", [
            "Uno studio internazionale condotto su oltre tremila volontari suggerisce che il bilinguismo precoce non ritarda lo sviluppo del linguaggio, come a lungo si è temuto, ma tende anzi a favorire la flessibilità cognitiva. Gli autori, tuttavia, invitano alla cautela: i benefici osservati sono modesti e variano molto da individuo a individuo.",
          ], "m"),
          rec("Testo 2", [
            "M: Hai sentito le voci sulla fusione?",
            "F: Le ho sentite, ma finché non esce un comunicato ufficiale preferisco non fasciarmi la testa prima di essermela rotta.",
            "M: Sì, ma se davvero ci accorpano alla sede di Bologna, qualcuno resterà a casa.",
            "F: Può darsi. Intanto io aggiorno il curriculum, non si sa mai.",
          ], "m"),
          rec("Testo 3", [
            "Si avvisa il gentile pubblico che, per un'indisposizione dell'attrice protagonista, il ruolo principale sarà interpretato questa sera dalla sua sostituta. Chi lo desidera potrà ottenere il rimborso del biglietto in biglietteria entro la fine della settimana, oppure cambiarlo con una delle repliche di dicembre.",
          ]),
          rec("Testo 4", [
            "Buongiorno, sono Valeria della casa editrice. Ho letto le prime cinquanta pagine della traduzione: il lavoro è ottimo, solo una cosa. In alcuni dialoghi il registro mi sembra un po' troppo sostenuto per dei ragazzi di sedici anni: si potrebbe renderlo più colloquiale? Per la consegna non c'è fretta, possiamo spostarla di due settimane. Mi richiami quando può.",
          ]),
        ],
        [
          q(
            1,
            "Testo 1. Che cosa dicono gli autori dello studio?",
            ["Che il bilinguismo ritarda il linguaggio", "Che i benefici sono notevoli per tutti", "Che ci sono benefici, ma modesti e variabili", "Che lo studio va ripetuto sui bambini"],
            3,
            "\"I benefici osservati sono modesti e variano molto da individuo a individuo\": hence their call for caution.",
          ),
          q(
            2,
            "Testo 2. Qual è l'atteggiamento della donna?",
            ["È molto preoccupata e vuole dimettersi.", "Non si preoccupa troppo, ma si prepara.", "È contenta della fusione.", "Non crede alle voci."],
            2,
            "\"Fasciarsi la testa prima di essersela rotta\" is worrying before anything has happened, which she won't do; still, she updates her CV, \"non si sa mai\".",
          ),
          q(
            3,
            "Testo 3. Che cosa possono fare gli spettatori insoddisfatti?",
            ["Vedere lo spettacolo con la protagonista domani", "Incontrare la protagonista", "Avere uno sconto per lo spettacolo successivo", "Avere il rimborso o cambiare il biglietto con un'altra data"],
            4,
            "A refund at the box office by the end of the week, or an exchange for a December performance (\"replica\").",
          ),
          q(
            4,
            "Testo 4. Che cosa chiede Valeria al traduttore?",
            ["Di rendere più colloquiali alcuni dialoghi", "Di consegnare prima", "Di tradurre altre cinquanta pagine", "Di cambiare il titolo"],
            1,
            "The register of some dialogues is \"troppo sostenuto\" (too formal) for sixteen-year-olds. The deadline can actually move later.",
          ),
        ],
        `${AUDIO_NOTE} Four short recordings: choose the right answer for each.`,
      ),
      listen(
        2,
        "Ascolta l'intervista. Scegli la risposta giusta.",
        [
          rec("Intervista: la cucina e la tradizione", [
            "F: Siamo abituati a pensare che la cucina italiana sia un patrimonio immutabile, tramandato da secoli. Il nostro ospite, lo storico dell'alimentazione Marco Valli, sostiene il contrario. Professore, la tradizione è un'invenzione?",
            "M: Non direi un'invenzione, ma una costruzione, sì. Molti piatti che consideriamo antichissimi sono in realtà piuttosto recenti. La carbonara, per esempio, compare nei ricettari solo dopo la Seconda guerra mondiale. Il tiramisù è degli anni Sessanta o Settanta. E il pomodoro, senza il quale non immaginiamo la cucina del Sud, arriva dalle Americhe e si diffonde sulle tavole solo tra Settecento e Ottocento.",
            "F: Quindi le nonne non hanno sempre cucinato così?",
            "M: Le nonne hanno cucinato quello che avevano, ed è questo il punto. La cucina popolare italiana nasce dalla scarsità: si usava tutto, si recuperavano gli avanzi, si cambiava ricetta a seconda della stagione e di quello che offriva il mercato. Paradossalmente, la vera tradizione è la flessibilità, non la ricetta fissa.",
            "F: Eppure oggi c'è chi si indigna se si mette la panna nella carbonara.",
            "M: Lo capisco, perché la cucina è diventata un elemento di identità, soprattutto all'estero, dove serve a distinguersi. Ma bisogna distinguere tra il rispetto per una ricetta, che è legittimo, e l'idea che ne esista una versione autentica e immutabile. Le ricette sono vive proprio perché cambiano.",
            "F: Che cosa resta, allora, di autenticamente tradizionale?",
            "M: Più che i piatti, un modo di stare a tavola: il tempo dedicato al pasto, la stagionalità, il legame tra prodotto e territorio. Questo sì, ha radici profonde.",
          ]),
        ],
        [
          q(5, "Secondo lo storico, la tradizione culinaria è…", ["un'invenzione recente senza valore.", "una costruzione nel tempo.", "immutabile da secoli.", "un'idea nata all'estero."], 2, "\"Non direi un'invenzione, ma una costruzione, sì\"."),
          q(
            6,
            "Che cosa dice della carbonara?",
            ["Compare nei ricettari solo nel dopoguerra.", "È un piatto dell'antica Roma.", "È nata negli anni Settanta.", "In origine si faceva con la panna."],
            1,
            "\"Compare nei ricettari solo dopo la Seconda guerra mondiale\". The 1960s-70s date is the tiramisù's.",
          ),
          q(
            7,
            "Secondo lo storico, la vera tradizione della cucina popolare è…",
            ["la ricetta fissa.", "l'uso di prodotti costosi.", "la flessibilità nata dalla scarsità.", "la cucina dei ristoranti."],
            3,
            "\"La vera tradizione è la flessibilità, non la ricetta fissa\", born of scarcity.",
          ),
          q(
            8,
            "Perché, secondo lui, molti si indignano per le varianti delle ricette?",
            ["Perché le varianti fanno male alla salute", "Perché i ristoranti lo impongono", "Perché le ricette sono protette per legge", "Perché la cucina è diventata un elemento di identità"],
            4,
            "\"La cucina è diventata un elemento di identità, soprattutto all'estero\".",
          ),
          q(
            9,
            "Che cosa ha, per lui, radici davvero profonde?",
            ["Le singole ricette", "Il modo di stare a tavola e il legame con il territorio", "I ristoranti storici", "L'uso del pomodoro"],
            2,
            "\"Più che i piatti, un modo di stare a tavola\": time for meals, seasonality, product and place.",
          ),
        ],
        `${AUDIO_NOTE} An interview with a food historian: choose the right answer.`,
      ),
      listen(
        3,
        "Ascolta il colloquio tra Giulia e il suo direttore. Le affermazioni sono vere o false?",
        [
          rec("Colloquio", [
            "M: Allora, Giulia, ha avuto modo di riflettere sulla proposta?",
            "F: Sì, e La ringrazio. Il ruolo di coordinatrice mi interessa molto, ma prima di accettare vorrei chiarire un paio di punti.",
            "M: Prego.",
            "F: Il primo riguarda la squadra. Passerei da due a otto persone, e tre di loro lavorano a Bari. Penso che sia indispensabile poterle incontrare almeno una volta al mese.",
            "M: Le trasferte sono previste, su questo non c'è problema.",
            "F: Il secondo riguarda la retribuzione. L'aumento proposto è del cinque per cento, ma le responsabilità crescono molto di più. Mi aspettavo qualcosa di più vicino al dieci.",
            "M: Capisco. Non posso prometterLe il dieci adesso; potremmo però arrivare all'otto, con una revisione dopo sei mesi, in base ai risultati.",
            "F: Mi sembra un compromesso ragionevole. Mi lascia il fine settimana per pensarci?",
            "M: Certo. Mi dia una risposta lunedì.",
          ], "m"),
        ],
        [
          vf(10, "Giulia ha già accettato il nuovo ruolo.", false, "\"Prima di accettare vorrei chiarire un paio di punti\"."),
          vf(11, "Nella nuova squadra ci sarebbero otto persone.", true, "\"Passerei da due a otto persone\"."),
          vf(12, "Il direttore non vuole pagare le trasferte a Bari.", false, "\"Le trasferte sono previste, su questo non c'è problema\"."),
          vf(13, "Giulia considera insufficiente l'aumento del cinque per cento.", true, "Her responsibilities grow much more: she expected something close to ten."),
          vf(14, "Il direttore le promette subito un aumento del dieci per cento.", false, "He offers eight per cent, with a review after six months."),
          vf(15, "Giulia darà una risposta lunedì.", true, "She asks for the weekend; \"Mi dia una risposta lunedì\"."),
        ],
        `${AUDIO_NOTE} Are the statements true (\"Vero\") or false (\"Falso\")?`,
      ),
    ],
    lettura: [
      read(
        1,
        "Leggi il testo e scegli la risposta giusta.",
        [
          {
            title: "Elogio della noia",
            body: paras(
              "C'è stato un tempo, non troppo lontano, in cui la noia era una presenza familiare: i lunghi pomeriggi d'estate, le attese dal medico, i viaggi in treno con lo sguardo perso fuori dal finestrino. Oggi quei vuoti sono quasi scomparsi. Basta un attimo di inattività perché la mano corra al telefono, alla ricerca di un messaggio, di una notizia, di un video qualsiasi.",
              "Eppure, secondo un numero crescente di psicologi, la noia non è soltanto un fastidio da eliminare. È, al contrario, un segnale prezioso: ci avverte che quello che stiamo facendo non ci soddisfa e ci spinge a cercare altro. In questo senso è una sorta di motore della creatività. Diversi esperimenti hanno mostrato che le persone a cui viene chiesto di svolgere un compito noioso, come copiare numeri da un elenco, ottengono poi risultati migliori in prove che richiedono immaginazione.",
              "Il meccanismo è intuitivo. Quando la mente non è occupata da stimoli esterni, comincia a vagare: ripesca ricordi, accosta idee lontane, immagina scenari. È il cosiddetto «pensiero divergente», da cui nascono molte soluzioni originali. Riempire ogni pausa con contenuti già pronti significa togliere spazio a questo lavoro silenzioso.",
              "Non si tratta, naturalmente, di idealizzare la noia. Quella cronica, legata a un lavoro alienante o all'isolamento, può essere fonte di sofferenza e va presa sul serio. Ma la noia passeggera, quella dei dieci minuti in coda alla posta, meriterebbe forse un po' più di indulgenza. Alcuni educatori suggeriscono di non riempire tutto il tempo libero dei bambini con attività organizzate: è proprio nei momenti «vuoti» che imparano a inventarsi un gioco.",
              "Forse, allora, la prossima volta che ci annoieremo, varrà la pena di resistere alla tentazione dello schermo e di aspettare. Non è detto che arrivi un'idea geniale, ma è probabile che arrivi almeno un pensiero nostro.",
            ),
          },
        ],
        [
          q(
            1,
            "Che cosa è cambiato rispetto al passato, secondo l'autore?",
            ["Ci annoiamo di più.", "I momenti di vuoto sono quasi scomparsi.", "Si viaggia meno in treno.", "Le attese sono più lunghe."],
            2,
            "\"Oggi quei vuoti sono quasi scomparsi\": any idle moment is filled by the phone.",
          ),
          q(
            2,
            "Secondo molti psicologi, la noia…",
            ["è un fastidio da eliminare.", "è sempre un sintomo di malattia.", "è un segnale utile che spinge a cercare altro.", "riguarda solo i bambini."],
            3,
            "\"Un segnale prezioso: ci avverte che quello che stiamo facendo non ci soddisfa e ci spinge a cercare altro\".",
          ),
          q(
            3,
            "Che cosa mostrano gli esperimenti citati?",
            ["Che chi si è annoiato diventa poi più creativo", "Che copiare numeri migliora la memoria", "Che la noia peggiora i risultati", "Che la creatività non si può misurare"],
            1,
            "After a boring task people \"ottengono poi risultati migliori in prove che richiedono immaginazione\".",
          ),
          q(
            4,
            "Che cos'è il «pensiero divergente»?",
            ["Un pensiero negativo", "Il pensiero logico e lineare", "Un disturbo dell'attenzione", "Il pensiero che vaga e accosta idee lontane"],
            4,
            "The mind \"comincia a vagare: ripesca ricordi, accosta idee lontane\"; that is \"il cosiddetto pensiero divergente\".",
          ),
          q(
            5,
            "Che cosa pensa l'autore della noia cronica?",
            ["Che sia utile come quella passeggera", "Che non esista", "Che possa causare sofferenza e vada presa sul serio", "Che si curi con il telefono"],
            3,
            "\"Può essere fonte di sofferenza e va presa sul serio\": the praise is only for passing boredom.",
          ),
        ],
        "Read the essay and choose the right answer.",
      ),
      read(
        2,
        "Leggi il testo. Le affermazioni sono vere o false?",
        [
          {
            title: "Acquisti online: il diritto di ripensamento",
            body: paras(
              "Chi acquista un bene online da un venditore professionale ha diritto di recedere dal contratto entro quattordici giorni, senza dover fornire alcuna motivazione. Il termine decorre dal giorno in cui il consumatore riceve la merce, non da quello dell'ordine.",
              "Per esercitare il diritto è sufficiente una comunicazione esplicita al venditore, anche tramite il modulo che quest'ultimo è tenuto a mettere a disposizione. Il venditore deve rimborsare tutti i pagamenti ricevuti, comprese le spese di consegna standard, entro quattordici giorni dalla comunicazione; può tuttavia trattenere il rimborso finché non ha ricevuto indietro i beni.",
              "Le spese di restituzione sono, di norma, a carico del consumatore, a meno che il venditore non abbia accettato di sostenerle o non abbia omesso di informarne l'acquirente.",
              "Il diritto di recesso non si applica in alcuni casi: per esempio, ai beni confezionati su misura, ai prodotti deperibili e ai prodotti sigillati che, per motivi igienici, non si prestano a essere restituiti una volta aperti. Non vale, inoltre, per gli acquisti tra privati.",
            ),
          },
        ],
        [
          vf(6, "Per recedere dal contratto bisogna spiegarne il motivo.", false, "\"Senza dover fornire alcuna motivazione\"."),
          vf(7, "I quattordici giorni si contano dal giorno in cui si riceve la merce.", true, "\"Il termine decorre dal giorno in cui il consumatore riceve la merce\"."),
          vf(8, "Il venditore può aspettare di ricevere i beni prima di rimborsare.", true, "\"Può tuttavia trattenere il rimborso finché non ha ricevuto indietro i beni\"."),
          vf(9, "Le spese di restituzione sono sempre a carico del venditore.", false, "As a rule (\"di norma\") the consumer pays them, with two exceptions."),
          vf(10, "Un abito fatto su misura si può restituire.", false, "\"Beni confezionati su misura\" are excluded."),
          vf(11, "Le spese di consegna standard vengono rimborsate.", true, "The refund covers all payments, \"comprese le spese di consegna standard\"."),
        ],
        "Read the text. Are the statements true (\"Vero\") or false (\"Falso\")?",
      ),
      read(
        3,
        "Leggi il testo. Per ogni spazio scegli la frase giusta. Attenzione: ci sono due frasi in più.",
        [
          {
            title: "Una lingua per un Paese",
            body: paras(
              "Quando nel 1861 nacque il Regno d'Italia, secondo le stime più diffuse, solo una piccola minoranza della popolazione parlava italiano. (12) ______ L'italiano era soprattutto una lingua scritta, letteraria, che affondava le sue radici nel fiorentino del Trecento.",
              "(13) ______ A questa scelta contribuì in modo decisivo il prestigio di Dante, Petrarca e Boccaccio, presi a modello per secoli dagli scrittori di tutta la penisola.",
              "Nell'Ottocento il dibattito sulla lingua divenne una questione politica. (14) ______ Manzoni, per esempio, rivide il suo romanzo per avvicinarne la lingua al fiorentino parlato dalle persone colte.",
              "(15) ______ La scuola, il servizio militare, le migrazioni interne e, più tardi, la radio e la televisione fecero il resto. (16) ______",
            ),
          },
        ],
        [
          match(12, "", LINGUA, "A", "After \"solo una piccola minoranza… parlava italiano\", the next sentence says what everyone else spoke."),
          match(13, "", LINGUA, "B", "\"A questa scelta\" needs a choice just mentioned: the writers' choice of Tuscan as the model."),
          match(14, "", LINGUA, "C", "Language became political: a united Italy needed a common language, which explains Manzoni's revision."),
          match(15, "", LINGUA, "D", "\"Fecero il resto\" follows the claim that spoken Italian spread only in the twentieth century."),
          match(16, "", LINGUA, "E", "The conclusion: today Italian is most people's mother tongue. F and G are not supported by the text."),
        ],
        "Choose the sentence that fits each gap. Two sentences are not needed.",
        "select",
      ),
    ],
    strutture: [
      read(
        1,
        "Leggi il testo e scegli la forma giusta per ogni spazio.",
        [
          {
            title: "Il viaggio del nonno",
            body: "Mio nonno (1) ______ a Genova nel 1931, in una famiglia di pescatori. A quindici anni (2) ______ l'Italia per l'Argentina, dove lo aspettava uno zio che (3) ______ partito vent'anni prima. Non appena (4) ______ in Argentina, dopo un mese di mal di mare, giurò che non avrebbe mai più messo piede su una nave. Mantenne la promessa per quasi mezzo secolo, finché, (5) ______ vedovo, non sentì il bisogno di rivedere la sua città. Raccontava sempre che, se non (6) ______ quel viaggio, non avrebbe mai capito quanto fossero profonde le sue radici.",
          },
        ],
        [
          gap(1, ["è nato", "nasceva", "nacque", "fu nato"], 3, "A written narrative of the distant past, told in the passato remoto (\"giurò\", \"mantenne\"): \"nacque\"."),
          gap(2, ["lasciò", "lasciava", "ebbe lasciato", "lasci"], 1, "A single completed event in the narrative: passato remoto, \"lasciò\"."),
          gap(3, ["fu", "sarebbe", "era", "fosse"], 3, "An action before another past one: trapassato prossimo, \"era partito\"."),
          gap(4, ["sbarcava", "fu sbarcato", "sia sbarcato", "sbarcherebbe"], 2, "After \"non appena\", with a passato remoto main verb, the earlier action takes the trapassato remoto: \"fu sbarcato\"."),
          gap(5, ["rimanendo", "rimanere", "rimanesse", "rimasto"], 4, "The past participle alone stands for a completed event: \"rimasto vedovo\", having been widowed."),
          gap(6, ["avesse fatto", "avrebbe fatto", "faceva", "fece"], 1, "An unreal past condition: \"se non avesse fatto… non avrebbe mai capito\"."),
        ],
        "Read the text and choose the right form for each gap.",
      ),
      read(
        2,
        "Leggi l'articolo e scegli la parola o l'espressione giusta per ogni spazio.",
        [
          {
            title: "Giustizia più veloce?",
            body: "Il governo ha (7) ______ un piano per ridurre i tempi della giustizia civile, tra i più lunghi d'Europa. Le misure, (8) ______ dagli esperti, prevedono l'assunzione di nuovi magistrati e la digitalizzazione dei fascicoli. Le opposizioni, tuttavia, (9) ______ il dito contro la mancanza di coperture finanziarie. Il ministro ha (10) ______ le critiche, sostenendo che i fondi europei saranno sufficienti. Resta da vedere se le promesse verranno (11) ______: in passato, riforme simili sono rimaste (12) ______ morta.",
          },
        ],
        [
          gap(7, ["provato", "approvato", "appropriato", "approvvigionato"], 2, "\"Approvare un piano\": to approve a plan. The others only look alike."),
          gap(8, ["accolte con favore", "accolte a favore", "prese con favore", "ricevute in favore"], 1, "\"Accogliere con favore\" is the set phrase for welcoming a proposal."),
          gap(9, ["mettono", "alzano", "puntano", "indicano"], 3, "\"Puntare il dito contro\": to point the finger at, to blame."),
          gap(10, ["rimandato", "restituito", "risposto", "respinto"], 4, "\"Respingere le critiche\": to reject criticism. \"Rispondere\" would need \"alle critiche\"."),
          gap(11, ["mantenute", "tenute", "trattenute", "sostenute"], 1, "Promises are kept: \"mantenere una promessa\"."),
          gap(12, ["carta", "pagina", "lettera", "parola"], 3, "\"Rimanere lettera morta\": to remain a dead letter, never applied."),
        ],
        "Read the article and choose the right word or expression for each gap.",
      ),
      read(
        3,
        "Per ogni frase scegli la trasformazione giusta.",
        [],
        [
          q(
            13,
            "«Benché avesse studiato molto, non superò l'esame.» Ha lo stesso significato:",
            ["Avendo studiato molto, superò l'esame.", "Pur avendo studiato molto, non superò l'esame.", "Siccome aveva studiato molto, non superò l'esame.", "Studiando molto, avrebbe superato l'esame."],
            2,
            "\"Pur\" + gerund is a concession, like \"benché\" + subjunctive.",
          ),
          q(
            14,
            "«Il direttore ha deciso di chiudere la filiale.» In forma nominale:",
            ["La decisione del direttore di chiudere la filiale", "Il direttore decidente la chiusura", "La chiusa decisa dal direttore", "Decidendo il direttore la filiale"],
            1,
            "Nominalisation turns the verb into a noun: \"decidere\" becomes \"la decisione\", as in headlines and formal writing.",
          ),
          q(
            15,
            "«Se avessi saputo dell'incidente, ti avrei chiamato.» Che cosa è successo?",
            ["Sapevo dell'incidente e ti ho chiamato.", "Non so dell'incidente, ma ti chiamerò.", "Non sapevo dell'incidente, perciò non ti ho chiamato.", "Sapevo dell'incidente, ma non ti ho chiamato."],
            3,
            "An unreal past condition describes the opposite of what happened: I didn't know, so I didn't call.",
          ),
          q(
            16,
            "«Gli dissero che sarebbe partito il giorno dopo.» In discorso diretto:",
            ["Gli dissero: «Partiva ieri.»", "Gli dissero: «Partirebbe domani.»", "Gli dissero: «Sei partito oggi.»", "Gli dissero: «Partirai domani.»"],
            4,
            "In reported speech the future becomes the past conditional and \"domani\" becomes \"il giorno dopo\"; back in direct speech, \"Partirai domani\".",
          ),
          q(
            17,
            "«Si dice che il sindaco si dimetterà presto.» Nello stile giornalistico:",
            ["Il sindaco si sarebbe dimesso.", "Il sindaco starebbe per dimettersi.", "Il sindaco si dimette di sicuro.", "Il sindaco si era dimesso."],
            2,
            "Newspapers use the conditional for unconfirmed reports; for something about to happen, \"starebbe per\". \"Si sarebbe dimesso\" would report a resignation already made.",
          ),
        ],
        "Choose the right transformation of each sentence.",
      ),
    ],
    scritta: [
      write(
        1,
        "Scrivi un testo argomentativo (da 200 a 250 parole).",
        {
          prompt:
            "Una rivista dedicata alla scuola raccoglie opinioni sul tema: «L'intelligenza artificiale in classe: un'opportunità o un rischio per l'apprendimento?». Scrivi un testo argomentativo in cui esponi i pro e i contro e sostieni la tua tesi con esempi.",
          words: [200, 250],
          rubric: [
            "\"Adeguatezza\": an argued text for a school magazine with a clear thesis, the arguments on both sides and examples",
            "\"Coerenza e coesione\": an introduction that frames the question, paragraphs that develop and answer objections, a conclusion, with varied connectors (\"innanzitutto\", \"d'altra parte\", \"ne consegue che\", \"in definitiva\")",
            "\"Competenza grammaticale\": a full range of moods and tenses, including the subjunctive in concessive and final clauses and hypothetical periods",
            "\"Competenza lessicale\": precise, varied, formal vocabulary (\"spirito critico\", \"strumento\", \"scorciatoia\", \"competenze\", \"valutazione\")",
          ],
          modelAnswer: paras(
            "Ogni nuova tecnologia, dalla calcolatrice a internet, ha suscitato a scuola entusiasmi e timori. L'intelligenza artificiale non fa eccezione, ma la sua capacità di produrre testi e soluzioni in pochi secondi rende la questione più urgente.",
            "Innanzitutto, è innegabile che questi strumenti offrano opportunità notevoli. Uno studente in difficoltà può farsi spiegare un concetto in modi diversi, finché non lo comprende; un insegnante può preparare esercizi personalizzati per ogni classe. Usata così, l'intelligenza artificiale è un tutor paziente e sempre disponibile.",
            "D'altra parte, il rischio più evidente è che diventi una scorciatoia. Se un ragazzo affida a un programma il riassunto di un romanzo, non solo non legge il libro, ma rinuncia all'esercizio che il riassunto dovrebbe allenare: selezionare, gerarchizzare, riformulare. Ne consegue che le competenze di base potrebbero indebolirsi proprio quando servirebbero di più.",
            "A mio avviso, vietare questi strumenti sarebbe inutile, oltre che impossibile. Occorre invece cambiare il modo di insegnare e di valutare: più lavoro in classe, più discussione orale, compiti che chiedano di confrontare e criticare le risposte della macchina anziché copiarle.",
            "In definitiva, l'intelligenza artificiale sarà davvero un'opportunità per i nostri studenti solo se la scuola saprà trasformarla in un'occasione per sviluppare lo spirito critico, anziché sostituirlo.",
          ),
        },
      ),
      write(
        2,
        "Scrivi una relazione (da 120 a 150 parole).",
        {
          prompt:
            "La tua azienda ti ha mandato a un corso di formazione di due giorni sulla comunicazione efficace. Scrivi una breve relazione per la tua responsabile: descrivi i contenuti del corso, indica punti di forza e di debolezza e di' se lo consiglieresti ai colleghi.",
          words: [120, 150],
          rubric: [
            "\"Adeguatezza\": a report to a manager with the course content, strengths, weaknesses and a recommendation, in an objective, professional tone",
            "\"Coerenza e coesione\": a subject line or heading, short paragraphs in a logical order, a final recommendation",
            "\"Competenza grammaticale\": impersonal and passive forms (\"sono stati affrontati\", \"si è lavorato\"), the conditional for recommendations",
            "\"Competenza lessicale\": workplace vocabulary (\"formazione\", \"modulo\", \"esercitazione\", \"docente\", \"ricaduta\")",
          ],
          modelAnswer: paras(
            "Oggetto: relazione sul corso «Comunicare in modo efficace» (14-15 marzo)",
            "Il corso, tenuto da due formatrici esperte, si è articolato in quattro moduli: la gestione delle riunioni, la scrittura di email chiare, la presentazione in pubblico e la gestione dei conflitti.",
            "Il punto di forza principale è stato l'approccio pratico: ogni modulo prevedeva esercitazioni in piccoli gruppi e simulazioni filmate, che ci hanno permesso di osservare il nostro modo di parlare. Molto utili anche le schede riassuntive fornite alla fine.",
            "Tra i punti deboli segnalerei i tempi troppo stretti, soprattutto per la gestione dei conflitti, affrontata in meno di un'ora, e un gruppo eterogeneo, con partecipanti di livelli molto diversi.",
            "Nel complesso, consiglierei il corso ai colleghi che lavorano a contatto con i clienti, proponendo però una seconda giornata dedicata ai conflitti.",
          ),
        },
      ),
    ],
    orale: [
      speak(
        1,
        "Conversazione con l'esaminatore sul lavoro e sulla società.",
        {
          prompt: "Parla della tua esperienza professionale e di come sta cambiando il mondo del lavoro.",
          points: ["Il tuo percorso di studi e di lavoro", "Che cosa conta per te in un lavoro", "Come sta cambiando il lavoro nel tuo paese", "Le competenze più importanti per il futuro"],
          examinerQuestions: [
            "Mi racconti il suo percorso di studi e di lavoro?",
            "Che cosa conta di più per Lei in un lavoro: lo stipendio, la stabilità, la soddisfazione personale?",
            "Come sta cambiando il mondo del lavoro nel suo paese?",
            "Quali competenze saranno più importanti nei prossimi anni, secondo Lei?",
          ],
          prepMinutes: 0,
          speakMinutes: 6,
          modelAnswer: paras(
            "– Mi racconti il suo percorso di studi e di lavoro?",
            "– Mi sono laureata in architettura a Lisbona e per qualche anno ho lavorato in uno studio che progettava scuole. Poi mi sono specializzata in restauro e da cinque anni mi occupo del recupero di edifici storici, spesso in collaborazione con studi italiani: è così che ho cominciato a studiare la lingua.",
            "– Che cosa conta di più per Lei in un lavoro?",
            "– Direi la soddisfazione, ma non in senso romantico. Ho bisogno di vedere il risultato concreto di quello che faccio. Lo stipendio conta, naturalmente, però ho rinunciato a un posto meglio pagato perché mi avrebbe costretta a occuparmi solo di burocrazia.",
            "– Come sta cambiando il mondo del lavoro nel suo paese?",
            "– Si lavora sempre più per progetti, con contratti brevi. Per chi ha esperienza questo significa libertà; per i giovani, spesso, precarietà. E molti miei coetanei sono emigrati: il Portogallo forma ottimi professionisti, ma non sempre riesce a trattenerli.",
            "– Quali competenze saranno più importanti?",
            "– Oltre a quelle tecniche, che invecchiano in fretta, la capacità di imparare continuamente e di lavorare con persone di culture diverse. Le lingue, insomma, non sono mai state così utili.",
          ),
        },
        DIALOGUE_NOTE,
      ),
      speak(
        2,
        "Leggi il testo. Hai tre minuti per prepararti, poi esponi la tua opinione per circa sei minuti.",
        {
          prompt: "Presenta la questione del testo, discuti gli argomenti e sostieni la tua posizione.",
          material: [
            {
              label: "Testo",
              title: "Il diritto alla disconnessione",
              body: "In alcuni paesi europei la legge riconosce ai lavoratori il «diritto alla disconnessione»: fuori dall'orario di lavoro, nessuno è obbligato a rispondere a email, telefonate o messaggi. Per i sostenitori è una tutela indispensabile contro lo stress e l'invasione della vita privata. Per i critici, è una regola rigida, che ignora la flessibilità richiesta da molti lavori moderni e la libertà di chi preferisce organizzarsi diversamente.",
            },
          ],
          points: ["Riassumi la questione", "Gli argomenti dei sostenitori", "Le obiezioni dei critici", "La tua posizione, con esempi"],
          examinerQuestions: [
            "Le capita di rispondere a messaggi di lavoro la sera o nel fine settimana?",
            "Una legge è lo strumento giusto, o basterebbero accordi aziendali?",
            "Che cosa cambierebbe per i lavoratori autonomi?",
          ],
          prepMinutes: 3,
          speakMinutes: 6,
          modelAnswer: paras(
            "Il testo affronta una questione nata con la diffusione degli smartphone: il confine sempre più sottile tra tempo di lavoro e tempo libero. Alcuni paesi hanno scelto di intervenire per legge, riconoscendo il diritto di non rispondere fuori dall'orario di lavoro.",
            "Gli argomenti a favore mi sembrano solidi. Essere sempre raggiungibili genera una forma di stress continuo, anche quando i messaggi non arrivano: si resta in attesa. E nei rapporti di lavoro chi è più debole, per esempio un giovane con un contratto a termine, difficilmente ha il coraggio di non rispondere al proprio capo. Una legge, in questo caso, protegge proprio chi non potrebbe proteggersi da solo.",
            "Capisco però le obiezioni. In un'azienda che lavora con clienti in altri fusi orari, una regola rigida può creare problemi, e alcune persone preferiscono davvero lavorare la sera per avere libero il pomeriggio.",
            "Per questo credo che la soluzione migliore sia una legge che fissi il principio, lasciando ai contratti aziendali il compito di adattarlo alle diverse situazioni. Nella mia esperienza, comunque, il cambiamento più importante è culturale: finché rispondere a mezzanotte sarà considerato un segno di impegno, nessuna legge basterà.",
          ),
        },
        MONOLOGUE_NOTE,
      ),
    ],
  },
);
